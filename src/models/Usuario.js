import Sequelize, { Model } from "sequelize";
import bcrypt from 'bcryptjs';

export default class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo nome deve ter 3  e 255 caractres.'
            }
          }
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Email já existe.'
          },
          validate: {
            isEmail: {
              msg: 'Campo email é inválido.'
            }
          }
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: ''
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [6, 50],
              msg: 'A senha deve ter de 6 a 50 caracteres.'
            }
          }
        },
      }, {
      sequelize,
      tableName: 'usuario'
    });

    this.addHook('beforeSave', async usuario => {
      if (usuario.password) {
        usuario.password_hash = await bcrypt.hash(usuario.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}
