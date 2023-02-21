import { Router } from 'express';
const router = new Router();

import usuarioController from '../controllers/UsuarioController';
import loguinRequerido from '../middlewares/loginRequerido';


router.post('/', usuarioController.store);
router.get('/', loguinRequerido, usuarioController.index);
router.get('/:id', usuarioController.show);
router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.delete);

export default router;
