// routes/inmuebleRoutes.js
const express = require('express');
const router = express.Router();
const inmuebleController = require('../controllers/inmuebleController');

router.post('/', inmuebleController.crearInmueble);
router.get('/', inmuebleController.listarInmuebles);
router.put('/:id', inmuebleController.actualizarInmueble);
router.delete('/:id', inmuebleController.eliminarInmueble);

module.exports = router;
