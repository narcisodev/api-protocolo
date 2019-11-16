const jwt = require('jsonwebtoken')
const auth_config = require('../config/auth')

module.exports = (req, res, next) => {
    const auth_header = req.headers.authorization

    //verifica se o token foi passado
    if (!auth_header)
        return res.status(401).send({ error: 'No token provided' })

    const parts = auth_header.split(' ')

    if (!parts.length === 2)
        return res.status(401).send({ error: 'Token error' })

    const [scheme, token] = parts

    if (!(/^Bearer$/i).test(scheme))
        return res.status(401).send({ error: 'Token malformated' })

    jwt.verify(token, auth_config.key_secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Token invalid' })

        //passar o userId para o req onde qualquer controller que receber o req vai conseguir saber qual o usuario que logou pelo req.userId
        req.userId = decoded.params.id

        //prossegue o processo pois tudo está ok
        return next()

    })

}
