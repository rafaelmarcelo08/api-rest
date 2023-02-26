import { Router } from 'express';
const router = new Router();

import alunoController from '../controllers/AlunoController';
import loginRequerido from '../middlewares/loginRequerido';

router.get('/', alunoController.index);
router.get('/:id', alunoController.show);

router.post('/', loginRequerido, alunoController.store);
router.put('/:id', loginRequerido, alunoController.update);
router.delete('/:id', loginRequerido, alunoController.delete);

export default router;
