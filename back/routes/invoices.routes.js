const express = require('express');
const router = express.Router();
const { subirFactura, obtenerFacturas } = require('../controllers/invoiceController');

const { protect, restrictTo, restrictToSelf } = require('../middlewares/auth.middlware');

router.post('/subir', autenticarToken, upload.single('archivo'), subirFactura);
router.get('/obtener', autenticarToken, obtenerFacturas);

module.exports = router;
