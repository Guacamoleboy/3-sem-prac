import express from 'express';
import cors from 'cors';
import env from './config/env.js';
import path from 'path';
import healthRoutes from './routes/health.routes.js';
import usersRoutes from './routes/users.routes.js';
import productRoutes from './routes/productRoutes.js';

// _______________________________________________________________

const app = express();

// _______________________________________________________________

app.use(cors());
app.use(express.json());
app.use('/api/health', healthRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/products', productRoutes);
app.use('/images', express.static(path.join(process.cwd(), 'public/products')));

// _______________________________________________________________

export default app;