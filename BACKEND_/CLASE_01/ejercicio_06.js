/* Ejercicio 6: Calculadora de promedio
Escribe una función que reciba un array de números y devuelva el promedio.
Consigna:
•
Usa un bucle for para sumar los números.
•
Divide la suma total entre la cantidad de elementos del array. */

function calcularPromedio(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    let promedio = suma / numeros.length;
    return promedio;
}

// Ejemplo de uso:
const notas = [7, 8, 9, 10, 6];
console.log("El promedio es:", calcularPromedio(notas));
