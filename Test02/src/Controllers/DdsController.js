const DadosService = require("../Service/DdsService");

module.exports = {
    tableusers: async (req, res) => {
        try {
            const Users = await DadosService.tableusers();
            const result = Users.map(({ Id, Nome, Senha }) => ({ Id, Nome, Senha }));
            res.json({ error: null, result }); 
        } catch (error) {
            console.error(`Erro no controlador: ${error.message}`);
            res.status(500).json({ error: "Erro interno do servidor", result: [] });
        }
    },

    tableuserid: async (req, res) => {
        try {
            const {Id} = req.params;
            const User = await DadosService.tableuserid(Id);
            res.json({ error: null, result: User || {} }); 
        } catch (error) {
            console.error(`Erro no controlador: ${error.message}`);
            res.status(500).json({ error: "Erro interno do servidor", result: [] });
        }
    }
};

