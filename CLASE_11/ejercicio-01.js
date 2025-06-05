/* Ejercicio 1: ¿Positivo, negativo o cero?
Consigna:
Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida al usuario un número cualquiera. El programa deberá analizar si el número ingresado es positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.
 */


// Importa el módulo 'prompt-sync' para poder leer datos del usuario desde la consola
const prompt = require("prompt-sync")(); 

// Pide al usuario que ingrese un número y lo convierte a tipo decimal (float)
let numero = parseFloat(prompt("Ingresa un número: ")); 

// Verifica si el número es mayor que cero
if (numero > 0) {
    console.log("El número es positivo."); // Muestra un mensaje si el número es positivo
}
// Si el número no es mayor que cero, verifica si es menor que cero
else if (numero < 0) {
    console.log("El número es negativo."); // Muestra un mensaje si el número es negativo
}
// Si no es mayor ni menor, entonces es igual a cero
else {
    console.log("El número es cero."); // Muestra un mensaje si el número es exactamente cero
}





