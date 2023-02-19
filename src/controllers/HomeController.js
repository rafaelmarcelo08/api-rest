import Aluno from '../models/Aluno';
class HomeController {

  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Rafael',
      sobrenome: 'Marcelo',
      email: 'rafael.2018.ads@gmail.com',
      idade: 23,
      peso: 58.6,
      altura: 1.73,
    });
    res.json({
      aluno: novoAluno
    })
  }
}

export default new HomeController();
