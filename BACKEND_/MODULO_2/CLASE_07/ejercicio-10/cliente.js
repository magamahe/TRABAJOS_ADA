const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Mensaje> '
});

const client = net.createConnection({ port: 3000 }, () => {
  console.log('Conectado al servidor.');
});

client.setEncoding('utf8');

client.on('data', (data) => {
  // Muestra cualquier dato recibido, como el historial o mensajes
  console.log(data.trim());
  rl.prompt();
});

client.on('end', () => {
  console.log('Desconectado del servidor.');
  rl.close();
  process.exit(0);
});

client.on('error', (err) => {
  console.error('Error:', err.message);
});

rl.prompt();

rl.on('line', (line) => {
  if (line.trim().toLowerCase() === 'exit') {
    console.log('Cerrando conexión...');
    client.end();
    rl.close();
  } else {
    client.write(line);
  }
});
