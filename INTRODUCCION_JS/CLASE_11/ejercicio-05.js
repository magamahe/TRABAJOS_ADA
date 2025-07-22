/* Ejercicio 5: Encuentra los números pares entre dos valores
Consigna:
Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números entre el inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos.
 */

// Importa el módulo 'prompt-sync' para leer datos del usuario
const prompt = require("prompt-sync")(); 

// Pide al usuario que ingrese el número de inicio y lo convierte a entero
let inicio = parseInt(prompt("Ingresa el número de inicio: ")); 
// Pide al usuario que ingrese el número de fin y lo convierte a entero
let fin = parseInt(prompt("Ingresa el número de fin: ")); 

// Verifica si los valores ingresados son realmente números
if (isNaN(inicio) || isNaN(fin)) {
    console.log("Uno o ambos valores no son números válidos."); 
} else if (inicio > fin) {
    console.log("Los valores ingresados son inválidos. El inicio debe ser menor o igual al fin."); 
} else {
    console.log(`Los números pares entre ${inicio} y ${fin} son:`); // Mensaje inicial
    for (let i = inicio; i <= fin; i++) { 
        if (i % 2 === 0) { // Verifica si el número es par
            console.log(i); // Muestra el número par en la consola
        }
    }
}   