const Factura = require('../models/Factura');
const path = require('path');
const bcrypt = require("bcrypt");

const JWT_SECRET = "tu_super_secreto";//Cambiar a clave de jwt.
const JWT_EXPIRES_IN = "30d";


const subirFactura = async (req, res) => {
  const { usuarioId, empresa, fecha, importe } = req.body;
  const archivo = req.file.path;

  try {
    const nuevaFactura = new Factura({ usuarioId, empresa, fecha, importe, archivo });
    await nuevaFactura.save();
    res.status(201).json(nuevaFactura);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al subir la factura', error });
  }
};

const obtenerFacturas = async (req, res) => {
  const { year, month, week, day, empresa } = req.query;

  let filtros = {};
  if (year) filtros.fecha = { $year: year };
  if (month) filtros.fecha = { $month: month };
  if (week) filtros.fecha = { $week: week };
  if (day) filtros.fecha = { $dayOfMonth: day };
  if (empresa) filtros.empresa = empresa;

  try {
    const facturas = await Factura.find(filtros);
    res.status(200).json(facturas);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al obtener facturas', error });
  }
};

module.exports = {
  subirFactura,
  obtenerFacturas
};
