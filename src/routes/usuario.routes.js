import { Router } from 'express';
const router = new Router();

import usuarioController from '../controllers/UsuarioController';
import loguinRequerido from '../middlewares/loginRequerido';

// router.get('/', usuarioController.index);
// router.get('/:id', usuarioController.show);

router.post('/', usuarioController.store);
router.put('/', loguinRequerido, usuarioController.update);
router.delete('/', loguinRequerido, usuarioController.delete);

export default router;
