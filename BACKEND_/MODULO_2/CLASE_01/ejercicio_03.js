/* Ejercicio 3: Ordenando números

Crea una función que reciba un array de números y devuelva un nuevo
array con los números ordenados de menor a mayor.
Consigna:
• Usa el método sort(). */

function ordenarNumerosAscendente(numeros) {
    return numeros.sort((a, b) => a - b);
}

// Ejemplo de uso:
const lista = [5,2,1,9,7];
const ordenados = ordenarNumerosAscendente(lista);

console.log("Números ordenados de menor a mayor:", ordenados);
