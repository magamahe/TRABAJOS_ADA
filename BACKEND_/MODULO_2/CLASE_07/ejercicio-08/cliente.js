const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ''
});

const client = net.createConnection({ port: 3000 }, () => {
  console.log('Conectado al servidor. Esperando instrucciones...');
});

client.setEncoding('utf8');

client.on('data', (data) => {
  process.stdout.write(data);

  // Detectar si el servidor pidió ingresar usuario o contraseña para activar prompt
  if (
    data.includes('nombre de usuario') ||
    data.includes('contraseña') ||
    data.includes('¡Autenticación exitosa!')
  ) {
    rl.prompt();
  }
});

client.on('end', () => {
  console.log('\nDesconectado del servidor.');
  rl.close();
  process.exit(0);
});

client.on('error', (err) => {
  console.error('Error:', err.message);
});

rl.on('line', (line) => {
  client.write(line.trim());
});
