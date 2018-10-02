const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

const Usuario = require('../models').Usuarios;
const Rol = require('../models').Rol;

const { verificaToken } = require('../middlewares/autentication');

/* 
 * Guardar un usuario
 */

app.post('/usuario', verificaToken, (req, res) => {

    //Se toman los datos por medio del POST
    let body = req.body;

    Usuario.create({
        identidad: body.identidad,
        nombre: body.nombre,
        apellido: body.apellido,
        telfijo: body.telfijo,
        telcelular: body.telcelular,
        sexo: body.sexo,
        email: body.email,
        nomusuario: body.nomusuario,
        password: bcrypt.hashSync(body.password, 10),
        rolId: body.rolId

    }).then(usuario => {

        res.status(200).json({
            ok: true,
            message: 'Usuario guardado correctamente'
        });

    }).catch(err => {
        return res.status(400).json({
            ok: false,
            message: err.errors
        });

    });

});

/* 
 * Mostrar todos los usuarios registrados
 */

app.get('/usuarios', verificaToken, (req, res) => {

    Usuario.findAll({
        //include: [Rol]
        attributes: { exclude: ['password'] }
    }).then(usuariosDB => {

        res.json({
            ok: true,
            usuariosDB
        });
    });


});

module.exports = app;