const express = require('express');
const router = express.Router();
const prayersController = require('../controllers/prayersController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rotas protegidas
router.post('/', authMiddleware, prayersController.createPrayer);
router.get('/', authMiddleware, prayersController.getPrayers);
router.put('/:id', authMiddleware, prayersController.updatePrayer);
router.delete('/:id', authMiddleware, prayersController.deletePrayer);

module.exports = router;
