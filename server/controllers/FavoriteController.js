const { Favorite, Animal } = require('../models')

class FavoriteController {
    static addFavorite (req,res,next) {
        const {animalId} = req.params
        const {userId} = req.body
        // Favorite.create({userId, animalId})
        // .then((favorit) => {
        //     console.log(favorit)
        // }).catch((err) => {
        //     console.log(err)
        //     next(err)
        // });
    }

    static getFavorite (req,res,next) {
        Favorite.findAll()
        .then((favorite) => {
            res.status(200).json({favorites: favorite})
        }).catch((err) => {
            console.log(err)
            next(err)
        });
    }

    static deleteFavorite (req, res, next) {
        const {id} = req.params
        Favorite.destroy({where:{id}})
        .then((data) => {
            res.status(200).json({message: 'Successfully delete favorite animal'})
        }).catch((err) => {
            console.log(err)    
        });
    }
}

module.exports = FavoriteController