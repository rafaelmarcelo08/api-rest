import { Router } from 'express';
const router = new Router();

import usuarioController from '../controllers/UsuarioController';

router.post('/', usuarioController.store);

export default router;
