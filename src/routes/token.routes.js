import { Router } from 'express';
const router = new Router();

import tokenController from '../controllers/TokenController';

router.post('/', tokenController.store);

export default router;
