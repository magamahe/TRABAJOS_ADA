const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const PORT = 4000;
const HOST = '127.0.0.1';

// Función para conectar al servidor y enviar una solicitud
const requestBook = (bookId) => {
    const client = new net.Socket();

    client.connect(PORT, HOST, () => {
        console.log(`Conectado al servidor. Solicitando información del libro con ID: ${bookId}`);
        client.write(bookId);
    });

    client.on('data', (data) => {
        console.log('Respuesta del servidor:', data.toString());
        client.destroy(); // Cierra la conexión después de recibir la respuesta
    });

    client.on('close', () => {
        console.log('Conexión cerrada');
        rl.close();
    });

    client.on('error', (err) => {
        console.error('Error en el cliente:', err);
        rl.close();
    });
};

// Solicita al usuario el ID del libro
rl.question('Ingrese el ID del libro que desea consultar: ', (bookId) => {
    requestBook(bookId);
});