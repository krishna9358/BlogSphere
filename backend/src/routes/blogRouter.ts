import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { Hono } from "hono";
import { CreateBlogInput, createblogInput, updateBlogInput } from "@krishna7060/common";

export const blogRouter = new Hono<
{
    Bindings :{
DATABASE_URL: string;
JWT_SECRET: string;
    }
    Variables : {
        userId: string;
    }
}
>();

// Middleware to verify JWT and set user context
blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header('Authorization') || "";
  if (!authHeader) {
    c.status(401);
    return c.json({ message: "No token provided" });
  }
  try {
    const user = await verify(authHeader, c.env.JWT_SECRET);
    c.set("userId", user.id as string);
    await next();
  } catch (error) {
    c.status(401);
    return c.json({ message: "Unauthorized or invalid token" });
  }
});

blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const {success} = createblogInput.safeParse(body);
    if (!success){
      c.status(411);
      return c.json({
        message: "Inputs are not correct"
      })
    }
    const userId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId : Number(userId),
      }
    })
    return c.json({id: blog.id}) 
  })
  
  blogRouter.put('/', async (c) => {
    const body = await c.req.json();
    const {success} = updateBlogInput.safeParse(body);
    if (!success){
      c.status(411);
      return c.json({
        message: "Inputs are not correct"
      })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.update({
      where: {
        id: body.id
      },
      data: {
        title: body.title,
        content: body.content,
      }
    })
    return c.json({id: blog.id, message: "Blog updated successfully"})
  })
  
  //pagination add 
  blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.blog.findMany({
      select:{
        content : true,
        title: true,
        id : true,
        author : {
          select :{
            name: true
          }
        }
      }
    });

    return c.json({blogs})
  })

  blogRouter.get('/:id', async (c) => {
    const id  =  c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
      const blog = await prisma.blog.findFirst({
        where: {
          id: Number(id)
        }
      })
      return c.json({blog})
    }catch(e){
      c.status(411);
      return c.json({error: e , message: "Blog not found"});
    }
  })


  
export default blogRouter;

