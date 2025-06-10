/* ●	Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo. Luego, imprime la suma de todos los números ingresados.
 */

const prompt = require('prompt-sync')();
let suma = 0;

while (true) {
    let numero = parseFloat(prompt('Ingrese un número positivos a sumar: (numero negativo para salir): '));
    
    if (isNaN(numero)) {
        console.log("Eso no es un número. Intentá de nuevo.");
        continue;
    } 
    
    if (numero < 0) {
        break; // Salir del bucle si el número es negativo
    }
    console.log(`Número ingresado: ${numero}`);

    suma += numero; // Sumar el número ingresado a la suma total
}

console.log(`La suma de los números ingresados es: ${suma}`);