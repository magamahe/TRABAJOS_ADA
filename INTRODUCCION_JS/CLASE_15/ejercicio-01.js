/* Ejercicio 1: Añadir personajes a una lista 
Tienes una lista de personajes de videojuegos ["Link", "Zelda"]. Agrega los 
personajes "Mario" y "Luigi" al final de la lista utilizando el método adecuado. 
Luego, muestra el array actualizado. */

const personajesVideojuegos = ["Link", "Zelda"];

console.log("------------------------");
console.log("Lista de personajes original:");
console.log(personajesVideojuegos);

personajesVideojuegos.push("Mario", "Luigi");

console.log("------------------------");
console.log(`Agregando "Mario" y "Luigi" al final de la lista...`);

console.log("Lista actualizada de personajes:");
console.log(personajesVideojuegos);
