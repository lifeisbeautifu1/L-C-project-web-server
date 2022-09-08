import { Router } from 'express';

import {
  getOrder,
  getMyOrders,
  createOrder,
  updateDelivery,
  updatePayment,
  deleteOrder,
} from '../controllers/orders';

const router = Router();

router.get('/', getMyOrders);

router.get('/:id', getOrder);

router.post('/', createOrder);

router.patch('/payment/:id', updatePayment);

router.patch('/delivery/:id', updateDelivery);

router.delete('/:id', deleteOrder);

export default router;
