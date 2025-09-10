// Importa el módulo 'readline-sync' para poder leer datos del usuario desde la consola
const readline = require("readline-sync");

// Pide al usuario que ingrese números separados por comas y los guarda en la variable 'entrada'
const entrada = readline.question("Ingrese numeros separados por comas: ");

// Separa la cadena ingresada por comas, elimina espacios extra y convierte cada elemento a número entero
const numeros = entrada.split(",").map(num => parseInt(num.trim()));

// Ordena los números de menor a mayor usando sort con función de comparación (a - b)
const ordenados = numeros.sort((a, b) => a - b);

// Muestra la lista ordenada en la consola
console.log("Lista ordenada:", ordenados);
