import { Router } from 'express';

import { createTable } from '../controllers/seed';

const router = Router();

router.post('/createTable', createTable);

export default router;
