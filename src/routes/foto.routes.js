import { Router } from 'express';
const router = new Router();

import fotoController from '../controllers/FotoController';
import loginRequerido from '../middlewares/loginRequerido';

router.post('/', loginRequerido, fotoController.store);

export default router;
