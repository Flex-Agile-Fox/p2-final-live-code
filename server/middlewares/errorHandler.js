const errorHandler = (err, req, res, next) => {
    console.log('name ====>', err.name)
    console.log('message ====>', err.message)
    
    let errStatus
    let errMsg = []

    switch(err.name){
        case 'SequelizeValidationError':
            errStatus = 400
            // errMsg = err.errors ? err.errors.
            break;
        case 'MISSING_ACCESS_TOKEN':
            errStatus = 400
            errMsg.push('access_token tidak ada')
        break;
        case 'INVALID_ACCESS_TOKEN':
            errStatus = 400
            errMsg.push('access_token tidak sesuai')
        break;
        case 'MISSING_USER':
            errStatus = 400
            errMsg.push('User tidak ada')
        break;
        case 'LOGIN_FAIL':
            errStatus = 400
            errMsg.push('Username atau password salah')
        break;
        case 'DATA_NOT_FOUND':
            errStatus = 400
            errMsg.push('data tidak di temukan')
        break;
        default:
            errStatus = 500
            errMsg = 'internal server error'
    }

    res.status(errStatus).json({errMsg})
}

module.exports = errorHandler