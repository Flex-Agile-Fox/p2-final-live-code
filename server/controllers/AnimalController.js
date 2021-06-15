const { Animal } = require('../models')

class AnimalController {
    static list (req,res,next) {
        Animal.findAll()
        .then((animal) => {
            res.status(200).json({animals:animal})
        }).catch((err) => {
            console.log(err)
            next(err)
        });
    }
}

module.exports = AnimalController