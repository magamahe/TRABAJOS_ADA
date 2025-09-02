// Importamos el modulo 'net'
const net = require('net');

// Importamos el controlador 
// Nos va a ayudar a manejar la logica de las solicitudes
const VehicleController = require('./controllers/vehicleController');

// Creamos el sercidor TCP
const server = net.createServer((socket) => {
    // Cuando el cliente se conecta, se ejecuta este bloque de codigo
    console.log('Cliente conectado.');

    // Escuchamos el evento 'data'
    socket.on('data', (data) => {
        const vehicleId = data.toString().trim();
        console.log(`Solicitud recibida: ID ${vehicleId}`);
        
        // Vamos a llamar al metodo del controller 'handleRequest'
        // Toma el ID del vehiculo y devuelve la respuesta formateada
        const response = VehicleController.handleRequest(vehicleId);

        // Enviar la respuesta al usuario
        socket.write(response);
    });

    // Escuchamos el evento 'end'
    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });
});

server.listen(4000, () => {
    console.log('Servidor escuchando en el puerto 4000...');
});