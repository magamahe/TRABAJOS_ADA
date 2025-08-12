const net = require('net');

const usuariosValidos = {
    'usuario1': 'pass123',
    'usuario2': 'clave456'
};

let clientes = [];

const server = net.createServer((socket) => {
    socket.setEncoding('utf8');

    let etapa = 'usuario'; // pasos: usuario -> password -> autenticado
    let usuarioActual = '';

    socket.write('Bienvenido. Por favor ingrese su nombre de usuario:\n');

    socket.on('data', (data) => {
        const mensaje = data.toString().trim();

        if (etapa === 'usuario') {
            usuarioActual = mensaje;
            socket.write('Ingrese su contraseña:\n');
            etapa = 'password';

        } else if (etapa === 'password') {
            const password = mensaje;
            if (usuariosValidos[usuarioActual] && usuariosValidos[usuarioActual] === password) {
                socket.write(`¡Autenticación exitosa! Bienvenido ${usuarioActual}.\n`);
                etapa = 'autenticado';
                clientes.push({ socket, usuario: usuarioActual });
                broadcast(`${usuarioActual} se ha conectado.\n`, socket);
            } else {
                socket.write('Credenciales incorrectas. Cerrando conexión.\n');
                socket.end();
            }

        } else if (etapa === 'autenticado') {
            // Cliente autenticado puede enviar mensajes
            broadcast(`${usuarioActual}: ${mensaje}\n`, socket);
        }
    });

    socket.on('end', () => {
        if (etapa === 'autenticado') {
            clientes = clientes.filter(c => c.socket !== socket);
            broadcast(`${usuarioActual} se ha desconectado.\n`, socket);
        }
    });

    socket.on('error', (err) => {
        console.error(`Error socket: ${err.message}`);
    });
});

function broadcast(mensaje, remitente) {
    clientes.forEach(({ socket }) => {
        if (socket !== remitente && !socket.destroyed) {
            socket.write(mensaje);
        }
    });
}

server.listen(3000, () => {
    console.log('Servidor TCP con autenticación escuchando en puerto 3000');
});
