// models/inmueble.js
const mongoose = require('mongoose');

const inmuebleSchema = new mongoose.Schema({
  piso: String,
  letra: String,
  extension: Number,
  habitaciones: Number,
  alquilado: Boolean,
  propietario: String,
  mail: String,
});

module.exports = mongoose.model('Inmueble', inmuebleSchema);
