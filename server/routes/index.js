const router = require('express').Router();
const UserControllers = require('../controllers/UserControllers');
const AnimalsControllers = require('../controllers/AnimalsControllers');
const FavoriteControllers = require('../controllers/FavoriteControllers');

router.post('/register', UserControllers.register);
router.post('/login', UserControllers.login);
router.get('/animals', AnimalsControllers.getAnimals);
router.post('/favorites/:animalId', FavoriteControllers.addFavorite);
router.get('/favourites', FavoriteControllers.getFavorites);
router.delete('/favourites/:id', FavoriteControllers.deleteFavorite);

module.exports = router;
