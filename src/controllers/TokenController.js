import jwt from 'jsonwebtoken';

import Usuario from '../models/Usuario';

class TokenController {

  async store(req, res) {
    const {
      email = '',
      password = ''
    } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        errors: ['Credenciais inválidos.']
      });
    }

    const usuario = await Usuario.findOne({
      where: {
        email
      }
    });

    if (!usuario) {
      return res.status(400).json({
        errors: ['Usuário não existe.']
      });
    }

    if (!(await usuario.passwordIsValid(password))) {
      return res.status(400).json({
        errors: ['Senha inválida.']
      });
    }

    const { id } = usuario;
    const token = jwt.sign(
      { id, email },
      process.env.TOKEN_SECRECT,
      { expiresIn: process.env.TOKEN_EXPIRATION }
    );

    return res.json({ token, usuario: { nome: usuario.nome, id, email } });

  }
}

export default new TokenController();
