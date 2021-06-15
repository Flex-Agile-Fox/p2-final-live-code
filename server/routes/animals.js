const router = require('express').Router()
const animalController = require('../controllers/AnimalController')

router.get('/animals', animalController.fetch)

module.exports = router