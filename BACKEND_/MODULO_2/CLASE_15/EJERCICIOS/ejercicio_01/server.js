// Importamos los módulos necesarios
import net  from 'net';
import { v4 as uuidv4 } from 'uuid';

// Creamos el servidor TCP
const server = net.createServer((socket) => {
    // Generamos un UUID v4 único para la conexión
    const connectionId = uuidv4();

    // Enviamos el UUID al cliente
    socket.write(`Tu UUID es: ${connectionId}`);

    // Manejamos el evento 'end' cuando la conexión se cierra
    socket.on('end', () => {
        console.log(`Conexión con ID ${connectionId} finalizada`);
    });
});

// El servidor escucha en el puerto 8080
server.listen(8080, () => {
    console.log('Servidor TCP escuchando en el puerto 8080');
});