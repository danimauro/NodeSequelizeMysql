const express = require('express');
const app = express();


app.use(require('./usuario'));
app.use(require('./permiso'));
app.use(require('./rol'));
app.use(require('./login'));

module.exports = app;