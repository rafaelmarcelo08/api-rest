import { Router } from 'express';
const router = new Router();

import alunoController from '../controllers/AlunoController';

router.get('/', alunoController.index);

export default router;
