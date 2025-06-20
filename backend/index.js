const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

//Middlewares
app.use(cors());
app.use(express.json());

//Rotas
const authRoutes = require('./routes/auth');
const prayerRoutes = require('./routes/prayer');

app.use('/api/auth', authRoutes);
app.use('/api/prayer', prayerRoutes);

//TesteAPI
app.get('/', (req, res) => {
    res.send('API do JORE rodando!');
});

//Server
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
