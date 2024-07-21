const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const InvoiceSchema = new Schema({
  usuarioId: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  empresa: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  importe: {
    type: Number,
    required: true
  },
  archivo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('invoice', InvoiceSchema);
