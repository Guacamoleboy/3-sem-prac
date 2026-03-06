import express from 'express';
import { searchController } from '../controllers/productController.js';

const router = express.Router();

router.get('/search', searchController);

export default router;