const router = require('express').Router();
const UserControllers = require('../controllers/UserControllers');
const AnimalsControllers = require('../controllers/AnimalsControllers');

router.post('/register', UserControllers.register);
router.post('/login', UserControllers.login);
router.get('/animals', AnimalsControllers.getAnimals);

module.exports = router;
