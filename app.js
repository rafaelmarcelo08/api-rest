import dotenv from 'dotenv';
dotenv.config();
import './src/database';
import express from "express";

import usuarioRoutes from './src/routes/usuario.routes';
import tokenRoutes from './src/routes/token.routes';
import alunoRoutes from './src/routes/aluno.routes';

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
  }
}

export default new App().app;
