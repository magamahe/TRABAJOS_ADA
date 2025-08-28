// Importa el módulo 'net' para crear una conexión TCP y 'readline-sync' para la entrada del usuario.
const net = require('net');
const readline = require('readline-sync');

// Crea una nueva conexión TCP al servidor en el puerto 5000 en 'localhost'.
const client = net.createConnection({ port: 5000, host: 'localhost' });

// Maneja el evento 'connect' cuando la conexión se haya establecido.
client.on('connect', () => {
    // Muestra en consola que el cliente está conectado al servidor.
    console.log('Conectado al servidor');
    // Llama a la función para enviar el primer mensaje.
    sendMessage();
});

// Maneja el evento 'data' para recibir mensajes del servidor.
client.on('data', (data) => {
    // Muestra en consola la respuesta recibida del servidor.
    console.log('Respuesta del servidor: ' + data.toString());
    // Vuelve a llamar a la función para enviar el siguiente mensaje.
    sendMessage();
});

// Maneja el evento 'error' para mostrar cualquier error que ocurra.
client.on('error', (err) => {
    console.log('Error:', err.message);
});

// Función para enviar mensajes al servidor.
function sendMessage() {
    // Solicita al usuario ingresar un mensaje para enviar al servidor.
    const message = readline.question('Ingrese un mensaje para enviar al servidor: ');
    // Si el mensaje es 'exit', cierra la conexión.
    if (message.toLowerCase() === 'exit') {
        client.end();
    } else {
        // Envía el mensaje al servidor.
        client.write(message);
    }
}
