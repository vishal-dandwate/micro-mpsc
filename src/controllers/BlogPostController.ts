// src/controllers/BlogPostController.ts

import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';

const prisma = new PrismaClient();

export const BlogPostController = {
  create: async (req: Request, res: Response) => {
    try {
      const { title, content, authorId } = req.body;
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };
      const image = files?.image?.[0];
      const pdf = files?.pdf?.[0];
        console.log(files)
        console.log(req.body)
      const blogPost = await prisma.blogPost.create({
        data: {
          title,
          content,
          authorId: parseInt(authorId),
          image: image ? `/uploads/images/${image.originalname}` : null,
          pdf: pdf ? `/uploads/pdfs/${pdf.originalname}` : null,
        },
      });

      // Move uploaded files to the server
      if (image) {
        await fs.writeFile(`uploads/images/${image.originalname}`, image.buffer);
      }
      if (pdf) {
        await fs.writeFile(`uploads/pdfs/${pdf.originalname}`, pdf.buffer);
      }

      res.status(201).json(blogPost);
    } catch (error) {
      console.error('Error creating blog post:', error);
      res.status(500).json({ error: 'Error creating blog post' });
    }
  },
  // Implement other CRUD operations for blog posts here
};
