const net = require('net');
const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'archivo_a_enviar.txt'); // Cambia por el archivo que quieras enviar

const client = net.createConnection({ port: 3000 }, () => {
  console.log('Conectado al servidor, enviando archivo:', FILE_PATH);

  // Leer el archivo como stream y enviarlo por chunks
  const readStream = fs.createReadStream(FILE_PATH);

  readStream.on('data', (chunk) => {
    client.write(chunk);
  });

  readStream.on('end', () => {
    console.log('Archivo enviado completamente.');
    client.end(); // Indica fin de transmisión
  });

  readStream.on('error', (err) => {
    console.error('Error leyendo archivo:', err.message);
    client.end();
  });
});

client.setEncoding('utf8');

client.on('data', (data) => {
  console.log('Servidor:', data.trim());

  if (data.includes('ERROR: Archivo excede 1 MB')) {
    console.error('El archivo es demasiado grande. Terminando la conexión.');
    client.end();
  }
});

client.on('end', () => {
  console.log('Desconectado del servidor.');
});

client.on('error', (err) => {
  console.error('Error conexión:', err.message);
});
