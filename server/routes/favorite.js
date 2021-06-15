const router = require('express').Router()
const FavoriteController = require('../controllers/FavoriteController')

router.use('/register', FavoriteController.getFavorite)
router.use('/:animalId', FavoriteController.addFavorite)

module.exports = router