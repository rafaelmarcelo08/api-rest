import Usuario from '../models/Usuario';

class UsuarioController {

  async store(req, res) {
    try {

      const usuario = await Usuario.create(req.body);

      return res.json(usuario);
    } catch (e) {
      return res.status(400).json(
        {
          error: e.errors.map(err => err.message)
        }
      );
    }
  }

  async index(req, res) {
    try {

      const usuarios = await Usuario.findAll();

      return res.json(usuarios)
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const usuario = await Usuario.findByPk(id);

      return res.json({
        usuario
      })
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {

      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.']
        })
      }

      const usuario = await Usuario.findByPk(Number(req.params.id));

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        })
      }

      const novoUsuario = await usuario.update(req.body);
      return res.json(novoUsuario)
    } catch (e) {
      return res.status(400).json(
        {
          error: e.errors.map(err => err.message)
        }
      );
    }
  }

  async delete(req, res) {
    try {

      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.']
        })
      }

      const usuario = await Usuario.findByPk(Number(req.params.id));

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        })
      }

      await usuario.destroy();
      return res.json(usuario)
    } catch (e) {
      return res.status(400).json(
        {
          error: e.errors.map(err => err.message)
        }
      );
    }
  }
}

export default new UsuarioController();
