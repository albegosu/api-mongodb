// inmueble.js
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

const Inmueble = mongoose.model('Inmueble', inmuebleSchema);

module.exports = Inmueble;
