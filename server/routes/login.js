const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const Usuario = require('../models').Usuarios;


app.post('/login', (req, res) => {

    let body = req.body;

    //se busca por medio del modelo Usuario 
    Usuario.findOne({
        attributes: ['id', 'nombre', 'apellido', 'nomusuario', 'email', 'password'],
        where: { nomusuario: body.nomusuario },
    }).then(usuarioDB => {
        //se verifica 
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: '(Usuario) o contraseña incorrectos'
                }
            });
        }

        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o (contraseña) incorrectos'
                }
            });
        }

        usuarioDB.password = null;

        let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

        res.json({
            ok: true,
            usuarioDB,
            token
        });

    }).catch(err => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'Error al realizar la consula en la base de datos'
                }
            });
        }
    });


});




module.exports = app;