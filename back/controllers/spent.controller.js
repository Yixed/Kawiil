const Gasto = require('../models/Gasto');
const bcrypt = require("bcrypt");

const JWT_SECRET = "tu_super_secreto";//Cambiar a clave de jwt.
const JWT_EXPIRES_IN = "30d";

const crearGasto = async (req, res) => {
  const { usuarioId, descripcion, importe, fecha, estadoFactura } = req.body;

  try {
    const nuevoGasto = new Gasto({ usuarioId, descripcion, importe, fecha, estadoFactura });
    await nuevoGasto.save();
    res.status(201).json(nuevoGasto);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear el gasto', error });
  }
};

// Obtener gastos
const obtenerGastos = async (req, res) => {
  const { usuarioId } = req.query;

  try {
    const gastos = await Gasto.find({ usuarioId });
    res.status(200).json(gastos);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al obtener los gastos', error });
  }
};

module.exports = {
  crearGasto,
  obtenerGastos
};
