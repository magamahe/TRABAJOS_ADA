//  Simular un sistema de ingreso a una nave espacial donde los tripulantes deben pasar filtros de validación usando variables, coerción, y operadores lógicos.
// 🧩 Desarrollo:
// Pedí a tus alumnas que creen un script que haga lo siguiente:
// 1. Solicite el nombre del tripulante.
const prompt = require("prompt-sync")(); // Importar la librería prompt-sync para usar prompt en Node.js
let nombre = prompt("Ingrese su nombre galactico:");
// 2. Solicite la edad del tripulante y conviértala a número.
let edad = parseInt(prompt("Cual es tu edad terrestre:"));
let especie = prompt("¿A qué especie perteneces? (humano, alienígena, cyborg):").toLowerCase();
let tienePermiso = (edad>18 && especie!=="") || nombre == "Capitana)";

const mensaje = tienePermiso
    ? "Bienvenido a Bordo " + (nombre || "tripulante desconocido") + "!" 
    : "Acceso denegado"

console.log(mensaje);

