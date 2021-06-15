const {Favourite, Animal} = require('../models')

class FavouriteController {

  static fetch (req, res) {
    Favourite.findAll({include: [Animal]})
      .then(favourite => {
        res.status(200).json({favourites: favourite})
      })
      .catch((err) => {
        res.status(200).json({message: err.message})
      })
  }

  static add (req, res) {
    const fav = {
      userId: req.userId,
      animalId: req.params.animalId
    }
    console.log(fav)
    Favourite.create(fav)
      .then((favourite) => {
        res.status(201).json({favourite: favourite})
      })
      .catch((err) => {
        res.status(200).json({message: err.message})
      })
  }

  static delete (req, res) {
    const { favourite } = req

    favourite.destroy()
      .then(() => {
        res.status(200).json({message: 'Successfully delete favorite animal'})
      })
      .catch((err) => {
        res.status(200).json({message: err.message})
      })
  }

}

module.exports = FavouriteController