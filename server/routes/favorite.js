const router = require('express').Router()
const FavoriteController = require('../controllers/FavoriteController')

router.get('/', FavoriteController.getFavorite)
router.post('/:animalId', FavoriteController.addFavorite)
router.delete('/:id', FavoriteController.deleteFavorite)

module.exports = router