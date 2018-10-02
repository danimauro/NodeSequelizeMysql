const jwt = require('jsonwebtoken');

// =================
// Verificar token
// =================

let verificaToken = (req, res, next) => {
    //leer headers de peticion
    let token = req.get('token');

    //se verifica el token
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            })
        }

        req.usuario = decoded.usuario;
        next();

    });

};


module.exports = {
    verificaToken
}