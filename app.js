import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { resolve } from 'path';
import cors from 'cors';
import helmet from 'helmet';

import './src/database';
import usuarioRoutes from './src/routes/usuario.routes';
import tokenRoutes from './src/routes/token.routes';
import alunoRoutes from './src/routes/aluno.routes';
import fotoRoutes from './src/routes/foto.routes';

const whiteList = [
  'http://localhost:3000',
  'https://www.google.com.br'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by cors'));
    }
  }
};

class App {

  constructor() {
    this.app = express();
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/usuarios', usuarioRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/alunos', alunoRoutes);
    this.app.use('/fotos', fotoRoutes);
  }
}

export default new App().app;
