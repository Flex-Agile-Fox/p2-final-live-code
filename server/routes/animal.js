const router = require('express').Router()
const AnimalController = require('../controllers/AnimalController')

router.get('/', AnimalController.list)

module.exports = router