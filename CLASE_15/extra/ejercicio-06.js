/* 
Dado un array de nombres ["ana", "juan", "sofia"], 
crear otro array con todos los nombres en mayúsculas.
*/
const nombres = ["ana", "juan", "sofia"];

// Crear un nuevo array con los nombres en mayúsculas
const nombresMayuscula = nombres.map(nombre => nombre.toUpperCase());

console.log(nombresMayuscula);

