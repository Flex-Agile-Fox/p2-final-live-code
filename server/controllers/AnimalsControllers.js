const { Animal } = require('../models');

class AnimalsControllers {
  static getAnimals(req, res, next) {
    console.log(req.headers);
    Animal.findAll()
      .then((animals) => {
        res.status(200).json({ Animals: animals });
      })
      .catch((err) => console.log(err));
  }
}

module.exports = AnimalsControllers;
