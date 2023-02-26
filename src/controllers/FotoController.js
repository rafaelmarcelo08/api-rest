import multer from "multer";

import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('foto');

class FotoController {

  async store(req, res) {
    try {
      return upload(req, res, (err) => {
        if (err) {
          return res.status(400).json({
            error: [err.code]
          })
        }

        return res.json(req.file);
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
