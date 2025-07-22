/* Ejercicio 1: Duplica los números impares

Dado el array `[1, 2, 3, 4, 5, 6, 7]`, crea un nuevo array que contenga **solo los números impares duplicados**.  
Ejemplo: `1 → 2`, `3 → 6`, etc. */

const arreglo = [1, 2, 3, 4, 5, 6, 7];

const impar_dupli = arreglo.filter(elem => elem %2 !==0)
                            .map (elem => elem *2);

console.log(`Original: ${arreglo}`);

console.log(`Impares duplicados: ${impar_dupli}`);
