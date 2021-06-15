const { Animal, Favorite, User } = require('../models');

class FavoriteControllers {
  static addFavorite(req, res, next) {
    const { animalId } = req.params;
    const { userId } = req;

    Animal.findOne({ where: { id: animalId } })
      .then((animal) => {
        if (!animal) throw { name: 'animal_not_found' };
        return Favorite.create({ animalId, userId });
      })
      .then((animal) => {
        res.status(201).json({ favorite: animal });
      })
      .catch((err) => console.log(err));
  }
  static getFavorites(req, res, next) {
    const { userId } = req;

    Favorite.findAll({ where: { userId }, include: [Animal] })
      .then((favorites) => {
        res.status(200).json({ favorites: favorites });
      })
      .catch((err) => console.log(err));
  }
  static deleteFavorite(req, res, next) {
    const { id } = req.params;

    Favorite.findOne({ where: { id } })
      .then((favorite) => {
        if (!favorite) throw { name: 'favorite_not_found' };
        return favorite.destroy();
      })
      .then(() => {
        res
          .status(200)
          .json({ message: 'Successfully delete favorite animal' });
      })
      .catch((err) => console.log(err));
  }
}

module.exports = FavoriteControllers;
