import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario';

export default async (req, res, next) => {

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['loguin requerido.']
    });
  }

  const [, token] = authorization.split(" ");

  try {

    const dados = jwt.verify(token, process.env.TOKEN_SECRECT);

    const { id, email } = dados;

    const usuario = await Usuario.findOne({
      where: {
        id,
        email
      }
    });

    if (!usuario) {
      return res.status(401).json({
        errors: ['Usuário inválido.']
      });
    }

    req.usuarioId = id;
    req.usuarioEmail = email;

    return next();

  } catch (error) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido.']
    });
  }
}
