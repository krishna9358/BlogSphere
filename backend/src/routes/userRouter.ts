import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode, sign, verify} from 'hono/jwt'
import { signupInput, LoginInput } from "@krishna7060/common";


const userRouter = new Hono<{
    Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
    }
  }>();

userRouter.post('/signup',async  (c) => {
    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);
    if (!success) {
      c.status(411);
      return c.text("Invalid input");
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  //zod, hash password
  try{
    const user = await prisma.user.create({
      data: {
        name: body.name,
        username: body.username,
        password: body.password,
      },
  })

  const jwt = await sign({
    id : user.id
  }, c.env.JWT_SECRET)
  
  return c.text(jwt);
  } catch (e) {
     c.status(411); c.text("Invalid input");
  }
  })   
  
  userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
  const {success} = signupInput.safeParse(body);
  if(!success) {
    c.status(411)
    return c.json({
      message: "inputs not valid"
    })
  }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  //zod, hash password
  try{
    const user = await prisma.user.findFirst({
      where: {
        username: body.username,
        password: body.password,
      },
  })
  if (!user) {
    c.status(403);
    return c.text("Invalid credentials");
  }
  const jwt = await sign({
    id: user.id,
  }, c.env.JWT_SECRET)
  
  return c.text(jwt);
  } catch (e) {
     c.status(411); c.text("Invalid input");
  }
  })

export default userRouter;

