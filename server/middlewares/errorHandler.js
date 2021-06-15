const errorHandler = (err, req, res, next) => {
    console.log('name ====>', err.name)
    console.log('message ====>', err.message)

    res.status(500).json({message:'internal server error'})
}

module.exports = errorHandler