const jwt = require('jsonwebtoken')
const { Favourite } = require('../models')


const authentication = (req, res, next) => {
  if (!req.headers.access_token) return res.status(401).json({message: 'missing token'})

  try {
    const decoded = jwt.verify(req.headers.access_token, process.env.JWT_SECRET)
    req.userId = decoded.id
    next()
  } catch (err) {
    res.status(401).json({message: err.message})    
  }
}

const authorization = (req, res, next) => {
  const { id } = req.params

  Favourite.findOne({where: {id}})
    .then((favourite) => {
      req.favourite = favourite
      next()      
    })
    .catch(err => {      
      res.status(401).json({message: err.message})
    })

}



module.exports = { authentication, authorization }