require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

pool.connect()
    .then(() => console.log('✅ Conectado ao PostgreSQL com sucesso!'))
    .catch(err => console.error('❌ Erro na conexão com o PostgreSQL:', err));

module.exports = pool;
