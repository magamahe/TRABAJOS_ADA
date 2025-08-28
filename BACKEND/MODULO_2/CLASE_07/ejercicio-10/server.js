const net = require('net');

const PORT = 3000;
const MAX_HISTORIAL = 10;

let historial = []; // Array para almacenar los últimos 10 mensajes

const server = net.createServer((socket) => {
  console.log('Nuevo cliente conectado.');

  // Enviar historial al cliente conectado
  if (historial.length > 0) {
    socket.write('Historial de mensajes:\n');
    historial.forEach((msg, idx) => {
      socket.write(`${idx + 1}: ${msg}\n`);
    });
  } else {
    socket.write('No hay mensajes en el historial aún.\n');
  }

  // Evento cuando el cliente envía datos
  socket.on('data', (data) => {
    const mensaje = data.toString().trim();
    console.log(`Mensaje recibido: ${mensaje}`);

    // Actualizar historial, limitando a MAX_HISTORIAL
    historial.push(mensaje);
    if (historial.length > MAX_HISTORIAL) {
      historial.shift(); // elimina el mensaje más antiguo
    }

    // Opcional: retransmitir el mensaje a otros clientes
    // Por simplicidad, acá solo lo logueamos
  });

  socket.on('end', () => {
    console.log('Cliente desconectado.');
  });

  socket.on('error', (err) => {
    console.error('Error socket:', err.message);
  });
});

server.listen(PORT, () => {
  console.log(`Servidor TCP escuchando en puerto ${PORT}`);
});
