const express = require('express');
const router = express.Router();
const prayersController = require('../controllers/prayersController');
const authMiddleware = require('../middlewares/authMiddleware');

//Rotas para autenticação
router.use(authMiddleware);
//Cadastrar intenção
router.post('/create', prayersController.createPrayer);
//Listar intenções
router.get('/list', prayersController.getPrayers);

module.exports = router;
