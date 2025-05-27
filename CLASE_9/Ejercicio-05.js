/* Ejercicio 5: 
Escribe un programa que pida al usuario que ingrese tres números y 
determine cuál es el mayor de los tres. */

const prompt = require('prompt-sync')();

// Pedimos los tres números al usuario
let numero1 = parseInt(prompt("Ingrese el primer número: "));
let numero2 = parseInt(prompt("Ingrese el segundo número: "));
let numero3 = parseInt(prompt("Ingrese el tercer número: "));

// Determinamos cuál es el mayor
if (numero1 >= numero2 && numero1 >= numero3) {
  console.log(`El número mayor es: ${numero1}`);
} else if (numero2 >= numero1 && numero2 >= numero3) {
  console.log(`El número mayor es: ${numero2}`);
} else {
  console.log(`El número mayor es: ${numero3}`);
}
