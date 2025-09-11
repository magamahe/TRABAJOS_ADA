// Importamos el módulo 'net'
import net from 'net';

// Conectamos al servidor en el puerto 8080
const client = net.createConnection(8080, () => {
    console.log('Conectado al servidor');
});

// Manejamos los datos recibidos del servidor
client.on('data', (data) => {
    console.log(data.toString());
    client.end(); // Cerramos la conexión después de recibir los datos
});
