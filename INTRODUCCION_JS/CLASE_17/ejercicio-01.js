/* ● Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays
Crea un objeto literal que represente un estudiante. El mismo debe tener las siguientes propiedades: nombre, edad y un array de notas (con 5 notas).
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo realizar las siguientes tareas:
1. Agregar una nueva nota al array de notas.
2. Eliminar la primera nota del array.
3. Calcular el promedio de las notas restantes.
4. Convertir el nombre del estudiante a mayúsculas. Para esto investiga sobre el método “toUpperCase()”
https://www.w3schools.com/jsref/jsref_touppercase.asp
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de las notas. */

// Objeto literal del estudiante
const estudiante = {
  nombre: "Gabriela",
  edad: 42,
  notas: [10, 9, 9, 10, 8]
};

// Función que procesa al estudiante
function procesarEstudiante(est) {
  est.notas.push(9);    // 1. Agregar una nueva nota
  est.notas.shift();    // 2. Eliminar la primera nota
  
  const suma = est.notas.reduce((acum, nota) => acum + nota, 0); // 3. Calcular el promedio de las notas restantes
  const promedio = suma / est.notas.length;

  const nombreMayuscula = est.nombre.toUpperCase(); // 4. Convertir el nombre a mayúsculas
  return {    // 5. Devolver un nuevo objeto con el resultado
    nombre: nombreMayuscula,
    promedio: promedio
  };
}

// Prueba de la función
const resultado = procesarEstudiante(estudiante);
console.log("🎓 Resultado del procesamiento:", resultado);
