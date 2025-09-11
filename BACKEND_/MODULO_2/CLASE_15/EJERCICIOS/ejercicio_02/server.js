// Importamos los módulos necesarios
import net from 'net';
import { v5 as uuidv5 } from 'uuid';

// Definimos un espacio de nombres UUID
const NAMESPACE = uuidv5.URL; // Espacio de nombres para URLs

// Creamos el servidor TCP
const server = net.createServer((socket) => {
    // Generamos un UUID v5 basado en un nombre fijo
    const nombre = "usuarioEjemplo";
    const uuid = uuidv5(nombre, NAMESPACE);

    // Creamos un objeto JSON con el UUID
    const response = JSON.stringify({
        mensaje: "Aquí está tu UUID v5",
        uuid: uuid
    });

    // Enviamos el JSON al cliente
    socket.write(response);

    // Manejamos el evento 'end' cuando la conexión se cierra
    socket.on('end', () => {
        console.log('Conexión finalizada');
    });
});

// El servidor escucha en el puerto 8080
server.listen(8080, () => {
    console.log('Servidor TCP escuchando en el puerto 8080');
});