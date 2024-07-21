const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SpentSchema = new Schema({
  usuarioId: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  importe: {
    type: Number,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  estadoFactura: {
    type: String,
    enum: ['pendiente', 'pagada', 'vencida'],
    default: 'pendiente'
  }
});

module.exports = mongoose.model('Spent', _SpentSchema);
