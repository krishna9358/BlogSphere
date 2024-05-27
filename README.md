





# Project Overview

This project is a comprehensive backend system designed to manage blog content. It is built to be scalable and secure, leveraging cloud technologies and modern development practices.

## Tech Stack

- **Prisma**: ORM for database operations, configured for connection pooling and optimized with an acceleration layer.
- **Hono**: A minimal and fast framework for building web applications.
- **Cloudflare Workers**: Used for deploying the backend, ensuring high availability and low latency.
- **JWT**: For secure authentication.
- **Zod**: For validation of request data to ensure data integrity and security.
- **npm**: For package management and distribution.

## Setup Guide

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up environment variables for `DATABASE_URL` and `JWT_SECRET` in your environment or a `.env` file.
-> prisma --> db url 
-> wrangler --> accelerate url 
4. Run local development server using `npm run dev`.

## Deployment

### Backend on Cloudflare Worker

1. Log in to your Cloudflare account using `npx wrangler login`.
2. Verify your identity with `npx wrangler whoami`.
3. Deploy your application using `npm run deploy`.

### Publishing Packages on npm

1. Update the `package.json` with your username and desired package name.
2. Log in to npm using `npm login`.
3. Publish your package with `npm publish --access public` or `npm publish --access private` for private packages.

## File Structure

- **src/**
  - **routes/**: Contains the router files like `blogRouter.ts` which handle blog-related routes.
  - **prisma/**: Prisma schema and configuration files.
  - **middlewares/**: Middleware functions for authentication and other purposes.
  - **validation/**: Zod schemas for input validation.
- **common/**: Common utilities and types, published as an npm package for reuse.

## Current Features

- JWT-based authorization.
- CRUD operations for blog posts.
- Input validation using Zod.
- Accelerated database operations with Prisma and Cloudflare Workers.

## Future Enhancements

- Integration of frontend components.
- Expansion of the API to include more features such as comments and user profiles.
- Enhanced error handling and logging mechanisms.

## Steps of creation of project
// db initialization neon.tech
// connectoin pooling using accelerated prisma
//initialization of prisma
// prisma schema 
// routes hono 
// added jwt authorization 
// added middlewares
// zod validation || common folder and zod validation 
// zod types
// publish common folder to npm  and used



