const router = require('express').Router();
const UserControllers = require('../controllers/UserControllers');
const AnimalsControllers = require('../controllers/AnimalsControllers');
const FavoriteControllers = require('../controllers/FavoriteControllers');
const authentication = require('../middlewares/auth');

router.post('/register', UserControllers.register);
router.post('/login', UserControllers.login);
router.use(authentication);
router.get('/animals', AnimalsControllers.getAnimals);
router.post('/favorites/:animalId', FavoriteControllers.addFavorite);
router.get('/favourites', FavoriteControllers.getFavorites);
router.delete('/favourites/:id', FavoriteControllers.deleteFavorite);

module.exports = router;
