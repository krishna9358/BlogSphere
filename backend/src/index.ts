import { Hono } from 'hono'
import userRouter from './routes/userRouter';
import { blogRouter } from './routes/blogRouter';


// const prisma = new PrismaClient({            this should be initilize in each and evry route for
//     datasourceUrl: env.DATABASE_URL,
// }).$extends(withAccelerate()) 

// <{
//   Bindings: {                      defining the type  
//   DATABASE_URL: string
//   }
// }>

const app = new Hono()

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

app.get('/',  (c) => {

  return c.text('Hello Hono!')
})

export default app