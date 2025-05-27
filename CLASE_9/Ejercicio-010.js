/*  Ejercicio 10:  
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
semana correspondiente. Si el número no está dentro de ese rango, 
muestra un mensaje de error. */

// Importamos la librería 'prompt-sync' para poder leer datos del usuario desde la consola
const prompt = require('prompt-sync')();

// Le pedimos al usuario que ingrese un número del 1 al 7
// prompt(...) devuelve un string, por eso usamos parseInt para convertirlo a número entero
let numero = parseInt(prompt("Ingrese un número del 1 al 7: "));

// Creamos un array con los días de la semana, en orden.
// El índice del array va de 0 (Lunes) a 6 (Domingo)
const dias = [
  "Lunes",      // índice 0
  "Martes",     // índice 1
  "Miércoles",  // índice 2
  "Jueves",     // índice 3
  "Viernes",    // índice 4
  "Sábado",     // índice 5
  "Domingo"     // índice 6
];

// Validamos que el número ingresado esté entre 1 y 7
if (numero >= 1 && numero <= 7) {
  // Si es válido, mostramos el día correspondiente
  // Restamos 1 porque los arrays en JavaScript comienzan en índice 0
  console.log(`El día correspondiente al número ${numero} es: ${dias[numero - 1]}`);
} else {
  // Si el número no está en el rango válido, mostramos un mensaje de error
  console.log("Error: Número fuera de rango. Por favor ingrese un número entre 1 y 7.");
}