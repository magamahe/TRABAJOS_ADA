// Importamos el modulo 'net'
const net = require('net');

// Creamos uan conexion TCP
const client = net.createConnection({ port: 4000 }, () => {
    console.log('Conectado al servidor');

    // Enviamos un ID del vehiculo al servidor
    const vehicleId = "2" // Lo podemos modificar para hacer pruebas
    client.write(vehicleId); // Enviar el ID al servidor
});

// Escuchamos el evento 'data'
client.on('data', (data) => {
    // Convetimos los datos (que esta en buffer) a cadena de texto
    console.log('Respuesta del servidor: ', data.toString());
    
    // Cerramos la conexion
    client.end();
});

// Escuchamos el evento 'end'
client.on('end', () => {
    console.log('Conexion cerrada.');
});