import Usuario from '../models/Usuario';

class UsuarioController {

  async store(req, res) {
    try {
      const usuario = await Usuario.create(req.body);

      res.json({
        usuario: usuario
      })
    } catch (e) {
      res.status(400).json({ error: e.errors.map(err => err.message) })
    }
  }
}

export default new UsuarioController();
