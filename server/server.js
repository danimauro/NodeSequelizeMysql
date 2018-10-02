require('./config/configuration');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

//parse aplication /x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//habilitar la carpeta public para que se pueda acceder externamente
app.use(express.static(path.resolve(__dirname, '../public')));

//parse aplication/json
app.use(bodyParser.json());

//Configuracion global de rutas
app.use(require('./routes/index'));


app.listen(process.env.PORT, () => {
    console.log("escuchando el puerto: ", process.env.PORT);
});