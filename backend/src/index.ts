import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

// const prisma = new PrismaClient({            this should be initilize in each and evry route for
//     datasourceUrl: env.DATABASE_URL,
// }).$extends(withAccelerate()) 

// <{
//   Bindings: {                      defining the type  
//   DATABASE_URL: string
//   }
// }>

const app = new Hono<{
  Bindings: {
  DATABASE_URL: string
  }
}>()

app.get('/',  (c) => {

  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signup',async  (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

//zod, hash password
try{
  await prisma.user.create({
    data: {
      name: body.name,
      username: body.username,
      password: body.password,
    },
})

return c.text('Signed Up!');
} catch (e) {
   c.status(411); c.text("Invalid input");
}
})   

app.post('/api/v1/user/signin', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('Hello Hono!')
})

export default app
