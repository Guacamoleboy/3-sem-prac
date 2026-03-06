import { asyncHandler, successResponse } from '../utils/handler.js';
import { searchProductsService } from '../services/productService.js';

export const searchController = asyncHandler(async (req, res) => {
  const q = String(req.query.q || '');
  const results = searchProductsService(q, 10);
  successResponse(res, results);
});