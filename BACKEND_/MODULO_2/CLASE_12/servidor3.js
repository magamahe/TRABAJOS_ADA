/* OBTIENE INFORMACION DE RUTAS */
const net = require("net");
const path = require("path");

// Crear el servidor TCP
const server = net.createServer((socket) => {
  console.log("Cliente conectado.");

  // Manejar datos recibidos del cliente
  socket.on("data", (data) => {

     // Convertir datos recibidos a una cadena y eliminar espacios en blanco
    const ruta = data.toString().trim();
    
    // Obtener la base del nombre, el directorio y la extensión del archivo
    const info = {
      directorio: path.dirname(ruta),
      base: path.basename(ruta),
      extension: path.extname(ruta)
    };

     // Formatear la información para enviar al cliente
    const response = `Base del nombre: ${info.base}\n` +
            `Directorio: ${info.directorioe}\n` +
            `Extensión del archivo: ${info.extension}`;
    
    // Enviar la información al cliente
    socket.write(response);
  });
   // Manejar la desconexión del cliente
  socket.on("end", () => console.log("Cliente desconectado."));
});

// Configurar el puerto en el que el servidor escuchará
server.listen(8082, () => {
  console.log("Servidor escuchando en puerto 8082...");
});
