const express = require('express');
const app = express();

const Rol = require('../models').Rol;

const { verificaToken } = require('../middlewares/autentication');

app.get('/roles', verificaToken, (req, res) => {

    Rol.findAll({}).then(roles => {
        res.json({
            ok: true,
            roles
        });
    });
});

module.exports = app;