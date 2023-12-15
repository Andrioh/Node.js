// Carregar os dados dentro de dados.env
require('dotenv').config({path: 'dados.env'});

// Dependencias
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

// Importar as rotas
const rotas = require("./rotas")

// Definir a porta
const PORT = process.env.PORT || 3000;

// Instancia do servidor
const server = express();

// Habilitar
server.use(cors())
server.use(bodyparser.urlencoded({ extended: false}));

// Define as rotas da aplicação a serem acessadas a partir do caminho '/api'
server.use('/api', rotas);

// Iniciar server
server.listen(PORT, ()=>{
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
});