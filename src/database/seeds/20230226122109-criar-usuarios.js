const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {

    await queryInterface.bulkInsert(
      'usuario',
      [
        {
          nome: 'Rafael Marcelo Borges Nunes',
          email: 'rafael.marcelo11@hotmail.vcom',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Rafael Marcelo Borges Nunes',
          email: 'rafael.marcelo12@hotmail.vcom',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Rafael Marcelo Borges Nunes',
          email: 'rafael.marcelo13@hotmail.vcom',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});
  },

  async down() {

  }
};
