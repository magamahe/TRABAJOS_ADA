// Importamos el módulo 'net', que nos permite trabajar con servidores TCP.
const net = require("net");

// Creamos el servidor TCP utilizando 'net.createServer'.
// La función dentro de 'createServer' se ejecutará cada vez que un cliente se conecte.
const server = net.createServer((socket) => {
    // Ejercicio 2: Detectar conexiones de clientes
    // Mostramos un mensaje en la consola cuando un cliente se conecta.
    console.log('¡Un cliente se ha conectado!');

    // Ejercicio 3: Recibir y mostrar datos del cliente
    // Escuchamos el evento 'data' para recibir datos del cliente.
    socket.on('data', (data) => {
        // Convertimos el buffer recibido a texto legible usando .toString().
        const mensaje = data.toString();

        // Mostramos el mensaje del cliente en la consola.
        console.log(`Mensaje recibido del cliente: ${mensaje}`);

        // Ejercicio 4: Responder al cliente
        // Enviamos una respuesta al cliente usando 'socket.write'.
        const respuesta = '¡Hola, cliente! Tu mensaje fue recibido correctamente.';
        socket.write(respuesta); // Esto envía el mensaje de vuelta al cliente.
    });

    // Ejercicio 5: Detectar cuando el cliente se desconecta
    // Escuchamos el evento 'end' para saber cuándo el cliente se desconecta.
    socket.on('end', () => {
        // Mostramos un mensaje en la consola cuando el cliente se desconecta.
        console.log('El cliente se ha desconectado.');
    });
});

// Ejercicio 1: Crear el servidor básico
// Definimos el puerto en el que el servidor estará escuchando.
const PORT = 5000;

// Hacemos que el servidor "escuche" en el puerto definido.
server.listen(PORT, () => {
    // Mostramos un mensaje en la consola indicando que el servidor está listo.
    console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
});