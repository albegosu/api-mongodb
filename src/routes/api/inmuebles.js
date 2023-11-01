// routes/api/inmuebles.js
const router = require('express').Router();
const inmuebleController = require('../../controllers/inmuebleController');

// Rutas para inmuebles
router.get('/', inmuebleController.listarInmuebles);
router.post('/', inmuebleController.crearInmueble);
router.put('/:id', inmuebleController.actualizarInmueble);
router.delete('/:id', inmuebleController.eliminarInmueble);

module.exports = router;
