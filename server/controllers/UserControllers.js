const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = process.env;

class UserControllers {
  static register(req, res, next) {
    const { email, password } = req.body;

    User.create({ email, password })
      .then((user) => {
        res.status(201).json({ id: user.id, email: user.email });
      })
      .catch((err) => console.log(err));
  }
  static login(req, res, next) {
    const { email, password } = req.body;

    User.findOne({ where: { email } })
      .then((user) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const access_token = jwt.sign({ id: user.id }, JWT_SECRET);
          return res
            .status(200)
            .json({ id: user.id, email: user.email, token: access_token });
        }
        throw { name: 'login_fail' };
      })
      .catch((err) => console.log(err));
  }
}

module.exports = UserControllers;
