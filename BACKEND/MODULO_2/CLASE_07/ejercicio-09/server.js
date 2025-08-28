const net = require('net');
const fs = require('fs');
const path = require('path');

const MAX_SIZE = 1 * 1024 * 1024; // 1 MB en bytes

const server = net.createServer((socket) => {
    console.log('Cliente conectado para enviar archivo.');

    let chunks = [];
    let totalBytes = 0;
    let filename = `archivo_recibido_${Date.now()}.txt`; // nombre con timestamp para evitar sobreescritura

    socket.write('Envía tu archivo de texto.\n');

    socket.on('data', (data) => {
        totalBytes += data.length;

        if (totalBytes > MAX_SIZE) {
            socket.write('ERROR: Archivo excede 1 MB. Conexión cerrada.\n');
            socket.end();
            console.log('Archivo excedió tamaño máximo. Conexión cerrada.');
            return;
        }

        chunks.push(data);
        socket.write(`Recibidos ${totalBytes} bytes hasta ahora...\n`);
    });

    socket.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const filepath = path.join(__dirname, filename);

        fs.writeFile(filepath, buffer, (err) => {
            if (err) {
                console.error('Error guardando archivo:', err);
                socket.write('ERROR: No se pudo guardar el archivo.\n');
            } else {
                console.log(`Archivo guardado correctamente en ${filepath}`);
                socket.write('Archivo recibido y guardado correctamente.\n');
            }
            socket.end();
        });
    });

    socket.on('error', (err) => {
        console.error('Error socket:', err.message);
    });
});

server.listen(3000, () => {
    console.log('Servidor TCP para recibir archivos escuchando en puerto 3000.');
});
