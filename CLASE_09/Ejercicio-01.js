/* Ejercicio 1:  
Declara dos variables numéricas numero1 y numero2. Pide al usuario 
que ingrese dos números y muestra cuál es mayor o si son iguales. */

const prompt = require('prompt-sync')(); 

let numero1 = parseInt(prompt("Ingrese el primer número: "));
let numero2 = parseInt(prompt("Ingrese el segundo número: "));

// Agrego esta linea para que el usuario no ingrese algo distinto a un numero
if (isNaN(numero1) || isNaN(numero2)) {
  console.log("Error: Debe ingresar números válidos.");
} else if (numero1 > numero2) {
  console.log("El número mayor es: " + numero1);
} else if (numero2 > numero1) {
  console.log("El número mayor es: " + numero2);
} else {
  console.log("Ambos números son iguales.");
}

