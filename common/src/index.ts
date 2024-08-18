import z from 'zod';

export const signupInput = z.object({
  username : z.string().email(),
  password : z.string().min(8),
  name : z.string().optional(),
})

export const loginInput = z.object({
  username : z.string().email(),
  password : z.string().min(8),
})

export const createblogInput = z.object({
  title : z.string(),
  content : z.string(),
})

export const updateBlogInput = z.object({
  title : z.string(),
  content : z.string(),
  id : z.number()
})

//type infer
export type SignupInput = z.infer<typeof signupInput>;
export type LoginInput = z.infer<typeof loginInput>;
export type CreateBlogInput = z.infer<typeof createblogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;



