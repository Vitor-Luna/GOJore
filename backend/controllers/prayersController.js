const pool = require('../db/connection');

module.exports = {
    //Cria intenção de oração
    async createPrayer(req, res) {
        const { intention, description } = req.body;
        const userId = req.user.id;

        if (!intention || !description) {
            return res.status(400).json({ error: 'Preencha todos os campos' });
        }

        try {
            await pool.query(
                'INSERT INTO prayers (user_id, intention, description, created_at) VALUES ($1, $2, $3, NOW())',
                [userId, intention, description]
            );

            res.status(201).json({ message: 'Intenção cadastrada com sucesso' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro no servidor' });
        }
    },

    //Lista as intenções de oração
    async getPrayers(req, res) {
        try {
            const result = await pool.query(
                'SELECT p.id, p.intention, p.description, p.created_at, u.username FROM prayers p JOIN users u ON p.user_id = u.id ORDER BY p.created_at DESC'
            );

            res.json(result.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro no servidor' });
        }
    }
};
