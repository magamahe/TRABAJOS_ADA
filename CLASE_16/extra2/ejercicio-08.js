/*   Ejercicio 8: Generar usuario desde nombre */

// Recibís nombre y apellido, devolvé un nombre de usuario tipo: "juan.perez"
function generarUsuario(nombre, apellido) {
  // tu código acá
  return  nombre.toLowerCase() + "." + apellido.toLowerCase();
}

const prompt = require("prompt-sync")();

const nombre = prompt("Ingrese su nombre:");
const apellido = prompt("Ingrese su apellido:");

console.log(`Su usuario generado a partir de su nombre y de su apellido es: ${generarUsuario(nombre, apellido)}`);
