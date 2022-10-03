const jwt = require('jsonwebtoken');

const secretKey = "claveSecretaJWT"

const verifyToken = (rea, res, next) => {
    const token = 
        req.body.token || req.query.token || req.header["x-access-token"]
    if(!token){
        return res.status(403).json({status:0, mensaje: "Se necesita el token para Proceder"});
    }
    try{
        const decoded = jwt.verify(token, secretKey);
    }catch (err){
        return res.status(401).json({status:0, mensaje: 'Token invalido'});
    }
    return next()
}

module.exports = verifyToken