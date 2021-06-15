const { Animal, Favorite } = require('../models');

class FavoriteControllers {
  static addFavorite(req, res, next) {
    const animalId = req.params.id;

    Animal.findOne({ where: { id: animalId } })
      .then((animal) => {
        if (!animal) throw { name: 'animal_not_found' };

        // return Favorite.create({animalId: animal.id, userId: })
      })
      .then((favorite) => {
        res.status(201).json({ favorite: favorite });
      });
  }
  static getFavorites(req, res, next) {}
  static deleteFavorite(req, res, next) {}
}

module.exports = FavoriteControllers;
