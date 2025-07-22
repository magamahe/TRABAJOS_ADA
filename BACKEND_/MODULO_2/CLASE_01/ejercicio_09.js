/* Ejercicio 9: Números únicos
Escribe una función que reciba un array de números y devuelva un nuevo array sin números repetidos.
Consigna:
•
Usa el objeto Set para eliminar duplicados.
•
Convierte el Set a un array usando el operador spread (...). */

function obtenerNumerosUnicos(numeros) {
    return [...new Set(numeros)];
}

// Ejemplo de uso:
const numeros = [1, 2, 3, 2, 4, 1, 5];
console.log(obtenerNumerosUnicos(numeros)); 
