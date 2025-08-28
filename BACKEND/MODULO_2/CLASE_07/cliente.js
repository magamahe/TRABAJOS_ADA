// CLIENTE PARA USAR DE PRUEBA.
// LO VEREMOS MÁS ADELANTE. 
const net = require('net');

const client = net.createConnection({ port: 3000 }, () => {
    console.log('Conectado al servidor!')

    client.write('ip');
});

client.on('data', (data) => {
    console.log('Datos recibidos del servidor:', data.toString());
    //client.end();
});

client.on('end', () => {
    console.log('Desconectado del servidor');
});