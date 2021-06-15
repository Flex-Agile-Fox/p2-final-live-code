const { Animal } = require('../models')

class AnimalController {

  static fetch (req, res) {
    Animal.findAll()
      .then(animal => {
        console.log(animal, '<<')
        res.status(200).json({animals: animal})
      })
      .catch((err) => {
        res.status(200).json({message: err.message})
      })
  }
}

module.exports = AnimalController