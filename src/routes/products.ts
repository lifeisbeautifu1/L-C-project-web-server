import { Router } from 'express';

import {
  getProduct,
  getProducts,
  searchProducts,
  getCategories,
} from '../controllers/products';

const router = Router();

router.get('/', getProducts);

router.get('/search', searchProducts);

router.get('/categories', getCategories);

router.get('/:id', getProduct);

export default router;
