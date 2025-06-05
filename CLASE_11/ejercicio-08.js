/* Ejercicio 8: Encuentra los múltiplos de un número
Consigna:
Escribe un programa que le pida al usuario un número entero positivo y muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for para resolverlo.

 */

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Introduce un número entero positivo: "));

// Validación del número ingresado
if (isNaN(numero) || numero <= 0) {
    console.log("Por favor, introduce un número entero positivo.");
}else{
    for (let i = 1; i <= 100; i++) {
        let multiplo = i * numero;
        console.log(`Múltiplo de ${numero} x ${i} = ${multiplo}`);
    }
}
