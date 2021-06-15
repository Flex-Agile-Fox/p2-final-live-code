const { Animal, Favorite } = require('../models');

class FavoriteControllers {
  static addFavorite(req, res, next) {
    const { animalId } = req.params;
    const { userId } = req;

    Animal.findOne({ where: { id: animalId } })
      .then((animal) => {
        if (!animal) throw { name: 'animal_not_found' };
        return Favorite.create({ animalId, userId });
      })
      .then((favorite) => {
        res.status(201).json({ favorite: favorite });
      })
      .catch((err) => console.log(err));
  }
  static getFavorites(req, res, next) {}
  static deleteFavorite(req, res, next) {}
}

module.exports = FavoriteControllers;
