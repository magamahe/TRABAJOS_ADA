/* ● Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays
Crea un objeto literal que represente un estudiante. El mismo debe tener las siguientes propiedades: nombre, edad y un array de notas (con 5 notas).
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo realizar las siguientes tareas:
1. Agregar una nueva nota al array de notas.
2. Eliminar la primera nota del array.
3. Calcular el promedio de las notas restantes.
4. Convertir el nombre del estudiante a mayúsculas. Para esto investiga sobre el método “toUpperCase()”
https://www.w3schools.com/jsref/jsref_touppercase.asp
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de las notas. */

const prompt= require("prompt-sync")();

// 1. Solicitar datos del estudiante
const nombreIngresado = prompt("📌 Ingresá el nombre del estudiante:");
const edadIngresada = parseInt(prompt("🎂 Ingresá la edad del estudiante:"), 10);

// 2. Solicitar 5 notas (una por una)
const notasIngresadas = [];
for (let i = 0; i < 5; i++) {
  const nota = parseFloat(prompt(`✏️ Ingresá la nota ${i + 1} (número entre 1 y 10):`));
  notasIngresadas.push(nota);
}

// 3. Crear objeto estudiante
const estudiante = {
  nombre: nombreIngresado,
  edad: edadIngresada,
  notas: notasIngresadas
};

// 4. Función que procesa al estudiante
function procesarEstudiante(est) {
  est.notas.push(9);    // Agrega una nueva nota
  est.notas.shift();    // Elimina la primera nota

  const suma = est.notas.reduce((acum, nota) => acum + nota, 0);
  const promedio = suma / est.notas.length;

  const nombreMayuscula = est.nombre.toUpperCase();

  return {
    nombre: nombreMayuscula,
    promedio: promedio
  };
}

// 5. Ejecutar la función y mostrar resultados
const resultado = procesarEstudiante(estudiante);

//console.log("🎓 Resultado del procesamiento:", resultado);
console.log(`🎓 Estudiante: ${resultado.nombre}\n📊 Promedio: ${resultado.promedio.toFixed(2)}`);
