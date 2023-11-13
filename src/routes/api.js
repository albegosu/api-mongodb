const router = require('express').Router();

router.use('/inmuebles', require('./api/inmuebles')); // Rutas relacionadas con inmuebles

module.exports = router;
