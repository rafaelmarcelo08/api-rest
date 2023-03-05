import multer from "multer";

import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotoController {

  async store(req, res) {
    try {
      return upload(req, res, async (err) => {
        if (err) {
          return res.status(400).json({
            error: [err.code]
          })
        }

        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;

        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      });
    } catch (e) {
      return res.status(400).json(
        {
          error: e.errors.map(err => err.message),
        }
      );
    }
  }
}

export default new FotoController();
