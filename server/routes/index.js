const router = require('express').Router()
const userRoute = require('./users')
const animalRoute = require('./animals')
const favouriteRoute = require('./favourites')
const {authentication} = require('../middlewares/auth')

router.use('/', userRoute)
router.use(authentication)
router.use('/', animalRoute)
router.use('/favourites', favouriteRoute)

module.exports = router
