/* ## 🔸 Ejercicio 2: Convierte palabras a su longitud

Dado `['gato', 'perro', 'elefante', 'ratón']`, obtené un array con la **cantidad de letras** de cada palabra. */

const animales = ['gato', 'perro', 'elefante', 'ratón'];

const cant = animales.map(animal => animal.length);

console.log(cant);
