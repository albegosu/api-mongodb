// app.js (o index.js)
const express = require('express');
const app = express();
const database = require('./config/database');
const inmuebleRoutes = require('./routes/inmuebleRoutes');

app.use(express.json());

app.use('/api/inmuebles', inmuebleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
