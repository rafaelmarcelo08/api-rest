import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json(
        {
          error: e.errors.map(err => err.message),
        }
      );
    }
  }

  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes: [
          'id',
          'nome',
          'sobrenome',
          'email',
          'idade',
          'peso',
          'altura',],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['filename', 'url']
        },
      });
      return res.json(alunos);
    } catch (e) {
      return res.status(400).json(
        {
          error: e.errors.map(err => err.message),
        }
      );
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json(
          {
            error: ['Faltando id.'],
          }
        );
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: [
          'id',
          'nome',
          'sobrenome',
          'email',
          'idade',
          'peso',
          'altura',],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['filename', 'url']
        },
      });

      if (!aluno) {
        return res.status(400).json(
          {
            error: ['Aluno não existe.'],
          }
        );
      }

      return res.json(aluno)
    } catch (e) {
      return res.status(400).json(
        {
          error: e.errors.map(err => err.message),
        }
      );
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json(
          {
            error: ['Faltando id.'],
          }
        );
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json(
          {
            error: ['Aluno não existe.'],
          }
        );
      }

      const novoAluno = await aluno.update(req.body);

      return res.json(novoAluno)
    } catch (e) {
      return res.status(400).json(
        {
          error: e.errors.map(err => err.message),
        }
      );
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json(
          {
            error: ['Faltando id.'],
          }
        );
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json(
          {
            error: ['Aluno não existe.'],
          }
        );
      }

      await aluno.destroy();
      return res.json({ apagado: true });
    } catch (e) {
      return res.status(400).json(
        {
          error: e.errors.map(err => err.message),
        }
      );
    }
  }
}

export default new AlunoController();
