const pool = require('../db/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
    // Registro de usuário
    
    async register(req, res) {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Preencha todos os campos' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

            if (existingUser.rows.length > 0) {
                return res.status(400).json({ error: 'Usuário já cadastrado' });
            }

            await pool.query(
                'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
                [username, email, hashedPassword]
            );

            res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro no servidor' });
        }
    },

    //Login
    
    async login(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Preencha todos os campos' });
        }

        try {
            const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

            if (user.rows.length === 0) {
                return res.status(400).json({ error: 'Usuário não encontrado' });
            }

            const validPassword = await bcrypt.compare(password, user.rows[0].password);

            if (!validPassword) {
                return res.status(400).json({ error: 'Senha incorreta' });
            }

            const token = jwt.sign(
                {
                    id: user.rows[0].id,
                    username: user.rows[0].username,
                    email: user.rows[0].email
                },
                JWT_SECRET,
                { expiresIn: '1h' }
            );

            res.json({
                message: 'Login bem-sucedido',
                token
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro no servidor' });
        }
    }
};
