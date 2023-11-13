const http = require('node:http');
const app = require('./src/app');

// Config .env
require('dotenv').config();

// Config BD
require('./src/config/db');

// Server
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on('listening', () => console.log(`Servidor escuchando en puerto ${PORT}`));
server.on('error', (error) => console.log(error));
