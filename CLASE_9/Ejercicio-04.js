/* Ejercicio 4:  
Declara una variable nombre y pide al usuario que ingrese su nombre. 
Verifica si el nombre ingresado es igual a tu nombre.*/

const prompt = require('prompt-sync')();

// Tu nombre real (el que querés comparar)
const nom = "Agustina";

// Pedir al usuario que ingrese su nombre y eliminar espacios
let nombre = prompt("Ingrese su nombre: ").trim();

// Comparar convirtiendo ambos a minúsculas
if (nombre.toLowerCase() === nom.toLowerCase()) {
  console.log(`¡Hola ${nombre}! Tenemos el mismo nombre`);
} else {
  console.log(`Hola ${nombre}, tu nombre es diferente al mío`);
}



