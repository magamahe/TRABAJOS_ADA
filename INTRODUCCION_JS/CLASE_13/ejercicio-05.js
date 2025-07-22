/* Ejercicio 5: Concatenar nombres (función expresada) 
Crea una función expresada llamada concatenarNombres que reciba dos 
nombres (nombre y apellido) como parámetros y devuelva el nombre 
completo concatenado. */

const concatenarNombres = function(nombre, apellido) {
  return nombre + " " + apellido;
};

console.log(concatenarNombres("Juan", "Pérez"));   // Juan Pérez
console.log(concatenarNombres("María", "Gómez"));  // María Gómez
