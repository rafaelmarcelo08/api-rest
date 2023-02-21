import dotenv from 'dotenv';
dotenv.config();
import './src/database';
import express from "express";

import usuarioRoutes from './src/routes/usuario.routes';
import tokensRoutes from './src/routes/token.routes';

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
    this.app.use('/tokens', tokensRoutes);
  }
}

export default new App().app;
