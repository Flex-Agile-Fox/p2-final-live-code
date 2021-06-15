const {User, Animal} = require('../models')
const jwt = require('jsonwebtoken')

const authentication = (req, res, next) => {
    if (!req.headers.access_token){
        console.log('access_token gak ada')
        // next({name:'MISSING_ACCESS_TOKEN'})
    }else{
        try{
            const decode = jwt.verify(req.headers.access_token, process.env.JWT_SECREAT)
            req.UserId = decode.id
        }catch(err){
            console.log('access_token salah')
            // next({name:'MISSING_ACCESS_TOKEN'})
        }

        User.findByPk(req.UserId)
        .then((user) => {
            if(!user){
                throw{name:'MISSING_USER'}
            }else{
                next()
            }
        }).catch((err) => {
            console.log(err)
            next(err)
        });
    }
}

const animalAuthor = (req,res,next) => {
    const {id} = req.params

    Animal.findOne({where:{id}})
    .then((animal) => {
        if(!animal){
            // throw{name: 'DATA_NOT_FOUND'}
            console.log('data gaak ada')
        }else{
            req.animal = animal
            next()
        }
    }).catch((err) => {
        next(err)
    });
}

module.exports = {authentication, animalAuthor}