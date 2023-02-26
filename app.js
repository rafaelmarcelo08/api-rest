import dotenv from 'dotenv';
dotenv.config();
import express from "express";

import './src/database';
import usuarioRoutes from './src/routes/usuario.routes';
import tokenRoutes from './src/routes/token.routes';
import alunoRoutes from './src/routes/aluno.routes';
import fotoRoutes from './src/routes/foto.routes';

class App {

  constructor() {
    this.app = express();
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/usuarios', usuarioRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/alunos', alunoRoutes);
    this.app.use('/fotos', fotoRoutes);
  }
}

export default new App().app;
