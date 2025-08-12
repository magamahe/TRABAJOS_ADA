// ejercicio7.js
const net = require('net');

let clientes = [];

const server = net.createServer((socket) => {
    clientes.push(socket);
    console.log('Un cliente se ha conectado.');

    broadcast(`Un nuevo cliente se ha conectado. Total: ${clientes.length}\n`, socket);

    socket.on('data', (data) => {
        const mensaje = data.toString().trim();
        console.log(`Mensaje recibido: ${mensaje}`);
        broadcast(`Cliente: ${mensaje}\n`, socket);
    });

    socket.on('end', () => {
        // No hace falta eliminar aquí si usamos 'close'
        console.log('Un cliente envió end.');
    });

    socket.on('close', () => {
        clientes = clientes.filter(c => c !== socket);
        console.log('Un cliente se ha desconectado (close).');
        broadcast(`Un cliente se ha desconectado. Total: ${clientes.length}\n`);
    });

    socket.on('error', (err) => {
        console.error(`Error: ${err.message}`);
    });
});

function broadcast(mensaje, remitente) {
    clientes.forEach(cliente => {
        if (cliente !== remitente && !cliente.destroyed) {
            cliente.write(mensaje);
        }
    });
}

server.listen(3000, () => {
    console.log('Servidor de chat escuchando en el puerto 3000.');
});
