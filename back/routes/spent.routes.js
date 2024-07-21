const express = require('express');
const router = express.Router();

const { crearGasto, obtenerGastos } = require('../controllers/spentController');
const autenticarToken = require('../middleware/autenticarToken');

router.post('/crear', autenticarToken, crearGasto);
router.get('/obtener', autenticarToken, obtenerGastos);

module.exports = router;
