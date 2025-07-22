/* Ejercicio 4: ¿Es par o impar?
Consigna:
Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un número y determine si es par o impar. Muestra un mensaje explicativo indicando qué significa cada caso.
 */

const prompt = require("prompt-sync")(); // Importa el módulo 'prompt-sync' para leer datos del usuario
let numero = parseInt(prompt("Ingresa un número: ")); // Pide al usuario que ingrese un número y lo convierte a entero
// Verifica si el valor ingresado es realmente un número
if (isNaN(numero)) {
    console.log("No es un número válido."); // Muestra un mensaje de error si no es un número
} else {
    // Verifica si el número es divisible por 2
    let esPar = numero % 2 === 0 ? "El número es par." : "El número es impar."; // Calcula si el número es par
    console.log(esPar); // Muestra el resultado en la consola
}