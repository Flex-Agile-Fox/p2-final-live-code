const router = require('express').Router()
const favouriteController = require('../controllers/FavouriteController')
const {authorization} = require('../middlewares/auth')

router.get('/', favouriteController.fetch)
router.post('/:animalId', favouriteController.add)
router.delete('/:id', authorization, favouriteController.delete)

module.exports = router