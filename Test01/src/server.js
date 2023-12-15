// Carrega as variáveis de ambiente a partir do arquivo 'variaveis.env'
require('dotenv').config({ path: 'variaveis.env' });

// Importa os módulos necessários
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Importa as rotas da sua aplicação
const routes = require('./routes');

// Define a porta a ser usada, utilizando a variável de ambiente PORT ou a porta 3000 como padrão
const PORT = process.env.PORT || 3000;

// Cria uma instância do servidor Express
const server = express();

// Habilita o middleware CORS para lidar com requisições de diferentes origens
server.use(cors());

// Habilita o middleware para analisar corpos de requisição codificados em URL
server.use(bodyParser.urlencoded({ extended: false }));

// Define as rotas da aplicação a serem acessadas a partir do caminho '/api'
server.use('/api', routes);

// Inicia o servidor e escuta na porta definida
server.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});