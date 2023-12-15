
/*
carrocontrolle - conecta ao banco de dados
carroservice - fala o que é para buscar no banco de dados
*/


// Importa o módulo responsável pela conexão com o banco de dados
const db = require("../db");

// Exporta um objeto que contém métodos para interagir com a tabela 'carros' no banco de dados
module.exports = {
    // Retorna uma Promise que realiza uma consulta para obter todos os registros da tabela 'carros'
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    // Retorna uma Promise que realiza uma consulta para obter um registro da tabela 'carros' com base no código
    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros WHERE codigo = ?', [codigo], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                };
            });
        });
    },

    // Retorna uma Promise que realiza uma inserção na tabela 'carros' com os valores fornecidos
    inserir: (modelo, placa) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO carros (modelo, placa) VALUES (?, ?)', [modelo, placa], (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results.insertCodigo);
            });
        });
    }
};
