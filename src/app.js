const express = require('express');
const cors = require('cors');

const app = express();

// Config App
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', require('./routes/api'));

module.exports = app;
