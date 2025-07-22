/* Ejercicio 7: Filtrar palabras largas
Escribe una función que reciba un array de palabras y un número, y devuelva las palabras que tienen más caracteres que el número dado.
Consigna:
•
Usa el método filter().
•
Usa una función flecha para simplificar el código. */

function filtrarPalabrasLargas(palabras, longitudMinima) {
    return palabras.filter(palabra => palabra.length > longitudMinima);
}

// Ejemplo de uso:
const lista = ["javascript", "html", "css", "nodejs"];
const resultado = filtrarPalabrasLargas(lista, 4);
console.log(resultado); // ["computadora", "programación"]
