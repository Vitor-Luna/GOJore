const pool = require('../db/connection');

module.exports = {
    //Criar intenção
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

    //Listar intenções
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
    },

    //Atualizar intenção
    async updatePrayer(req, res) {
        const { id } = req.params;
        const { intention, description } = req.body;
        const userId = req.user.id;

        if (!intention || !description) {
            return res.status(400).json({ error: 'Preencha todos os campos' });
        }

        try {
            const prayer = await pool.query(
                'SELECT * FROM prayers WHERE id = $1 AND user_id = $2',
                [id, userId]
            );

            if (prayer.rows.length === 0) {
                return res.status(404).json({ error: 'Intenção não encontrada' });
            }

            await pool.query(
                'UPDATE prayers SET intention = $1, description = $2 WHERE id = $3',
                [intention, description, id]
            );

            res.status(200).json({ message: 'Intenção atualizada com sucesso' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro no servidor' });
        }
    },

    //Deletar intenção
    async deletePrayer(req, res) {
        const { id } = req.params;
        const userId = req.user.id;

        try {
            const prayer = await pool.query(
                'SELECT * FROM prayers WHERE id = $1 AND user_id = $2',
                [id, userId]
            );

            if (prayer.rows.length === 0) {
                return res.status(404).json({ error: 'Intenção não encontrada' });
            }

            await pool.query('DELETE FROM prayers WHERE id = $1', [id]);

            res.status(200).json({ message: 'Intenção deletada com sucesso' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro no servidor' });
        }
    }
};
