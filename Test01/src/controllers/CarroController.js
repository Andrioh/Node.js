

/*
carrocontrolle - conecta ao banco de dados
carroservice - fala o que é para buscar no banco de dados
*/


// Importa o módulo responsável pelos serviços relacionados aos carros
const CarroService = require('../services/CarroService');

// Exporta um objeto que contém métodos relacionados às operações da API para carros
module.exports = {
    // Rota para buscar todos os carros
    buscarTodos: async (req, res) => {
        try {
            // Obtém a lista de carros usando o serviço CarroService
            const carros = await CarroService.buscarTodos();
            
            // Mapeia os resultados para um formato mais específico
            const result = carros.map(({ codigo, modelo }) => ({ codigo, descricao: modelo }));
            
            // Retorna os resultados como JSON
            res.json({ error: "", result });
        } catch (error) {
            // Se ocorrer um erro, retorna uma resposta JSON com uma mensagem de erro
            res.json({ error: "Erro ao buscar carros", result: [] });
        }
    },

    // Rota para buscar um carro específico
    buscarUm: async (req, res) => {
        try {
            // Obtém o código do carro a partir dos parâmetros da requisição
            const { codigo } = req.params;
            
            // Obtém as informações do carro usando o serviço CarroService
            const carro = await CarroService.buscarUm(codigo);
            
            // Retorna as informações do carro como JSON
            res.json({ error: "", result: carro || {} });
        } catch (error) {
            // Se ocorrer um erro, retorna uma resposta JSON com uma mensagem de erro
            res.json({ error: "Erro ao buscar o carro", result: {} });
        }
    },

    // Rota para inserir um novo carro
    inserir: async (req, res) => {
        try {
            // Obtém o modelo e a placa do novo carro a partir do corpo da requisição
            const { modelo, placa } = req.body;

            // Verifica se ambos o modelo e a placa foram fornecidos
            if (!modelo || !placa) {
                throw new Error('Campos não enviados');
            }

            // Insere o novo carro usando o serviço CarroService
            const carroCodigo = await CarroService.inserir(modelo, placa);
            
            // Retorna os resultados da inserção como JSON
            res.json({ error: "", result: { codigo: carroCodigo, modelo, placa } });
        } catch (error) {
            // Se ocorrer um erro, retorna uma resposta JSON com uma mensagem de erro
            res.json({ error: error.message || "Erro ao inserir o carro", result: {} });
        }
    },
};
