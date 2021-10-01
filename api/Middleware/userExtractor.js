const jwt = require('jsonwebtoken')


module.exports = async (req, res, next) => {
    const authorization = await req.get('authorization')
    let token = ''
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
        const decodedToken = jwt.verify(token, process.env.SECRET)
        if (decodedToken.idUser) {
            req.user = decodedToken
        }
    }
    next()
}