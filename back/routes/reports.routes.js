const express = require('express');
const router = express.Router();

const { obtenerInformeVentas } = require('../controllers/informeController');
const autenticarToken = require('../middleware/autenticarToken');


router.get('/ventas', autenticarToken, obtenerInformeVentas);

module.exports = router;
