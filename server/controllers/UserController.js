const { User } = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


class UserController {

  static register (req, res) {
    const { email, password } = req.body
    User.create({
      email,
      password : bcrypt.hashSync(password, 8)
    })
      .then((user) => {
        res.status(201).json({id: user.id, email: user.email})
      })
      .catch((err) => {
        res.status(500).json({message: err.message})
      })

  }

  static login (req, res) {
    const { email, password } = req.body

    User.findOne({ where: {email} })
      .then((user) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const access_token = jwt.sign({id: user.id}, process.env.JWT_SECRET)
          res.status(200).json({id: user.id, email: user.email, token: access_token})
        } else return res.status(500).json({message: 'login failed'})
      })
      .catch((err) => {
        res.status(500).json({message: err.message})
      })
  }

}

module.exports = UserController