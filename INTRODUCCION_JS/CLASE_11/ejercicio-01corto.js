/* Ejercicio 1: ¿Positivo, negativo o cero?
Consigna:
Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida al usuario un número cualquiera. El programa deberá analizar si el número ingresado es positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.
 */

const prompt = require("prompt-sync")();

let input = prompt("Ingresa un número: ");
let numero = parseFloat(input);

let mensaje = isNaN(numero) 
  ? "Error: no ingresaste un número válido." 
  : numero > 0 
    ? "El número es positivo." 
    : numero < 0 
      ? "El número es negativo." 
      : "El número es cero.";

console.log(mensaje);


