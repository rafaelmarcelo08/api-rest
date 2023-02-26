class FotoController {

  async store(req, res) {
    try {
      return res.json(req.file);
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
