/* Ejercicio 6: La tabla de multiplicar
Consigna:
Crea un programa que le pida al usuario un número y luego imprima su tabla de multiplicar desde el 1 hasta el 10. Usa un ciclo for.
 */

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Introduce un número para ver su tabla de multiplicar desde 1 hasta 10: "));

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}   
