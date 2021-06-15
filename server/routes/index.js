const router = require('express').Router()
const routesUser = require('./user')
const routesAnimal = require('./animal')
const routesFavorite = require('./favorite')
const { authentication } = require('../middlewares/auth')

router.use('/', routesUser)
router.use(authentication)
router.use('/animals', routesAnimal)
router.use('/favourites', routesFavorite)

module.exports = router