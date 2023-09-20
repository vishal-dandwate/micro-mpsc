// src/routes/blogPosts.ts

import express from 'express';
import multer from 'multer';
import { BlogPostController } from '../controllers/BlogPostController';

const router = express.Router();



const storage = multer.memoryStorage();
const upload = multer({ storage });
router.post('/', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]), BlogPostController.create);
/* router.get('/', BlogPostController.getAll);
router.get('/:id', BlogPostController.getById);
router.put('/:id', BlogPostController.update);
router.delete('/:id', BlogPostController.delete); */

export default router;
