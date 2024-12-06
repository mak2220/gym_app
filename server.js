const express = require('express');
const https = require('https');
const fs = require('fs');
const next = require('next');
const path = require('path');

// Configuración de Next.js
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Rutas de los certificados SSL
const options = {
  key: fs.readFileSync(path.join(__dirname, 'localhost-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'localhost.pem')),
};

// Iniciar Next.js
console.log('Iniciando servidor...');
app.prepare()
  .then(() => {
    console.log('Next.js preparado...');
    const server = express();

    // Manejar todas las solicitudes con Next.js
    server.all('*', (req, res) => {
      console.log(`Solicitud recibida: ${req.method} ${req.url}`);
      return handle(req, res);
    });

    // Crear el servidor HTTPS
    https.createServer(options, server).listen(3000, (err) => {
      if (err) {
        console.error('Error al iniciar el servidor:', err);
      } else {
        console.log('> Servidor listo en https://localhost:3000');
      }
    });
  })
  .catch((err) => {
    console.error('Error preparando Next.js:', err);
  });
