/* Ejercicio 3: ¿Sabes contar?
Consigna:
Crea un programa que le pida al usuario un número positivo. El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola. Usa un ciclo for para realizar la tarea.

 */

const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Introduce un número positivo: "));

console.log(`Contando desde 1 hasta ${numero}:`);
if (isNaN(numero) || numero <= 0) {
    console.log("Por favor, introduce un número positivo válido.");
    return;
}   

for(let i = 1; i <= numero; i++) {
    console.log(i);
}