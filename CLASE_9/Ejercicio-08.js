/*Ejercicio 8:  
Pide al usuario que ingrese las longitudes de los tres lados de un 
triángulo. Determina y muestra si el triángulo es equilátero, isósceles o 
escaleno. (Investiga sobre los triángulos para determinar la formula) */

const prompt = require('prompt-sync')();

// Pedimos las longitudes de los lados
let lado1 = parseFloat(prompt("Ingrese la longitud del lado 1: "));
let lado2 = parseFloat(prompt("Ingrese la longitud del lado 2: "));
let lado3 = parseFloat(prompt("Ingrese la longitud del lado 3: "));

// Verificamos que los lados sean válidos y formen un triángulo
if (
  lado1 > 0 && lado2 > 0 && lado3 > 0 &&
  lado1 + lado2 > lado3 &&
  lado1 + lado3 > lado2 &&
  lado2 + lado3 > lado1
) {
  // Clasificamos el triángulo
  if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es **equilátero** (todos los lados iguales).");
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es **isósceles** (dos lados iguales).");
  } else {
    console.log("El triángulo es **escaleno** (todos los lados diferentes).");
  }
} else {
  console.log("Los valores ingresados no forman un triángulo válido.");
}
