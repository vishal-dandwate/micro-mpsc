import express from 'express';
import { createUser, loginUser } from '../controllers/users';

export const userRoutes = express.Router();

userRoutes.post('/register', createUser);
userRoutes.post('/login', loginUser);
