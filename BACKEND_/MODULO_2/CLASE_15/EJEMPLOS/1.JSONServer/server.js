// Paso 1: Importamos el modulo 'http' para crear el servidor (solicitudes)
// Importamos tambien el modulo 'fs' para trabajar con los archivos
import http from 'http';
import fs from 'fs';

// Paso 2: Definimos el puerto
const PORT = 3000;

// Creamos el servidor
const server = http.createServer((req, res) => {
    // Leemos el archivo datos.json
    fs.readFile('datos.json', 'utf8', (err, data) => {
        if (err) {
            // Si hay un error, mostramos un mensaje
            res.end('No se pudo leer el archivo JSON');
            return;
        }
        // Enviamos el contenido del archivo json al navegador 
        res.setHeader('Content-Type', 'application/json'); // Configuramos el tipo de contenido
        res.end(data); // Enviamos el contenido del archivo .json
    })
});

// Hacemos que el servidor escuche en el puerto definido
server.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
}); 