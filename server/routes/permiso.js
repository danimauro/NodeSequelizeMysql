const express = require('express');
const app = express();

const Permisos = require('../models').Permisos;
const Rol = require('../models').Rol;

const { verificaToken } = require('../middlewares/autentication');

/**
 *  Traer todos los permisos
 **/

app.get('/permisos', verificaToken, (req, res) => {

    Permisos.findAll().then(permisos => {
        res.json({
            ok: true,
            permisos
        });
    })

});

/**
 *  Guardar en la base de datos un permiso nuevo
 **/

app.post('/permiso', verificaToken, (req, res) => {

    Permisos.create({
        create: 1,
        read: 1,
        update: 1,
        delete: 1

    }).then(Permisos => {
        Permisos.createRol({
            nombre: 'Super Administrador',
            descrip: 'Super admininistrador'
        }).then(rol => {
            res.json({
                ok: true,
                message: 'Permiso y rol guardado correctamente'
            });
        });
    });


});

module.exports = app;