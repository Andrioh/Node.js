const express = require('express')
const rotas = express.Router();

const DdsController = require('./src/Controllers/DdsController');

//

rotas.get('/users', DdsController.tableusers); // Mostrar informações da table user
rotas.get('/user/:Id', DdsController.tableuserid); // Mostrar informações da table user relacionadas a um id

//

module.exports = rotas;