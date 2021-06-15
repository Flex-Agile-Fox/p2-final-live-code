const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.use('/register', UserController.register)
router.use('/login', UserController.login)

module.exports = router