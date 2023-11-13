const Inmueble = require('../models/inmueble.js');

const crearInmueble = async (req, res) => {
  try {
    const nuevoInmueble = new Inmueble(req.body);
    await nuevoInmueble.save();
    res.status(201).json(nuevoInmueble);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear un inmueble' });
  }
};

const listarInmuebles = async (req, res) => {
  try {
    const inmuebles = await Inmueble.find();
    res.json(inmuebles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de inmuebles' });
  }
};

const actualizarInmueble = async (req, res) => {
  try {
    const inmueble = await Inmueble.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(inmueble);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el inmueble' });
  }
};

const eliminarInmueble = async (req, res) => {
  try {
    await Inmueble.findByIdAndDelete(req.params.id);
    res.json({ message: 'Inmueble eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el inmueble' });
  }
};

module.exports = {crearInmueble, listarInmuebles, actualizarInmueble, eliminarInmueble };