/* Ejercicio 1: ¿Positivo, negativo o cero?
Consigna:
Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida al usuario un número cualquiera. El programa deberá analizar si el número ingresado es positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.
 */



const prompt = require("prompt-sync")();
let numero = parseFloat(prompt("Ingresa un número: "));

// Guardamos el resultado del ternario en una variable
let mensaje = 
    numero > 0 ? "El número es positivo." :
    numero < 0 ? "El número es negativo." :
    "El número es cero.";

// Mostramos el mensaje
console.log(mensaje);

