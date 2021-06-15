const { JWT_SECRET } = process.env;
const { User } = require('../models');
const jwt = require('jsonwebtoken');

authentication = (req, res, next) => {
  const { access_token } = req.headers;
  try {
    if (!access_token) throw { name: 'missing_access_token' };
    const decoded = jwt.verify(access_token, JWT_SECRET);
    req.userId = decoded.id;
  } catch {
    throw { name: 'invalid_access_token' };
  }

  User.findOne({ where: { id: req.userId } })
    .then((user) => {
      if (!user) throw { name: 'user_not_found' };
      next();
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = authentication;
