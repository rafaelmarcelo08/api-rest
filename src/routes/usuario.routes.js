import { Router } from 'express';
const router = new Router();

import usuarioController from '../controllers/UsuarioController';

router.post('/', usuarioController.store);
router.get('/', usuarioController.index);
router.get('/:id', usuarioController.show);
router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.delete);

export default router;
