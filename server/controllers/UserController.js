const { User } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {
    static register (req,res,next) {
        const {email,password} = req.body
        User.create({email,password})
        .then((user) => {
            res.status(201).json({id:user.id, email:user.email })
        }).catch((err) => {
            console.log(err)
            next(err)
        });
    }

    static login (req,res,next) {
        const {email,password} = req.body
        User.findOne({where:{email}})
        .then((user) => {
            if (user && bcrypt.compareSync(password, user.password)){
                const access_token = jwt.sign({id:user.id}, process.env.JWT_SECREAT)
                res.status(200).json({id:user.id, email:user.email, token:access_token})
            }else{
                console.log('data ga ada')
            }
            // res.status(201).json({id:user.id, email:user.email })
        }).catch((err) => {
            console.log(err)
            next(err)
        });
        // res.send('login')
    }
}

module.exports = UserController