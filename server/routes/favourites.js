const router = require('express').Router()
const favouriteController = require('../controllers/FavouriteController')

router.get('/', favouriteController.fetch)
router.post('/:id', favouriteController.add)
router.delete('/:id', favouriteController.delete)

module.exports = router