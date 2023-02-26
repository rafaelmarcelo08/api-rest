import { Router } from 'express';
const router = new Router();
import multer from "multer";

import fotoController from '../controllers/FotoController';
import loginRequerido from '../middlewares/loginRequerido';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

router.post('/', loginRequerido, upload.single('foto'), fotoController.store);

export default router;
