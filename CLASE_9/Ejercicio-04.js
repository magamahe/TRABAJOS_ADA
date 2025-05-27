/* Ejercicio 4:  
Declara una variable nombre y pide al usuario que ingrese su nombre. 
Verifica si el nombre ingresado es igual a tu nombre.*/

const prompt = require('prompt-sync')();

// Tu nombre real (el que querés comparar)
const nom = "Agustina"; // Podés cambiarlo por el tuyo

// Pedir al usuario que ingrese su nombre
let nombre = prompt("Ingrese su nombre: ").trim(); // trim() elimina espacios innecesarios

// Comparar los nombres
if (nombre === nom) {
  console.log(`¡Hola ${nombre}! Tenemos el mismo nombre`);
} else {
  console.log(`Hola ${nombre}, tu nombre es diferente al mío`);
}
