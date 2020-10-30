
  function ensureToken (req, res, next){
    // Функция получения токена из хедера
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined' ) {
      req.token = bearerHeader;
      next();
    }
    else {
      res.sendStatus(403);
    }
  }
  module.exports = ensureToken;