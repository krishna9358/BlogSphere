import { Hono } from "hono";

export const blogRouter = new Hono<
{
    Bindings :{

    }
}
>();



blogRouter.post('/api/v1/blog', (c) => {
    return c.text('Hello Hono!')
  })
  
  blogRouter.put('/api/v1/blog', (c) => {
    return c.text('Hello Hono!')
  })
  
  blogRouter.get('/api/v1/blog/:id', (c) => {
    return c.text('Hello Hono!')
  })
  
  blogRouter.get('/api/v1/blog/bulk', (c) => {
    return c.text('Hello Hono!')
  })

  
export default blogRouter;

