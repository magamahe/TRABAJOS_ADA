/*Se  agrega el pedir el nombre del estudiante)*/

const prompt = require("prompt-sync")({ sigint: true });
let cantidadEstudiantes = parseInt(prompt("¿Cuántos estudiantes hay?"));
let nombres = [];
let notas = [];

for (let i = 0; i < cantidadEstudiantes; i++) {
  let nombre = prompt(`Ingresá el nombre del estudiante #${i + 1}:`);
  let nota = parseFloat(prompt(`Ingresá la nota de ${nombre}:`));
  nombres[i] = nombre;
  notas[i] = nota;
}
console.log("----------------");
console.log("Notas ingresadas:");
console.log("----------------");
for (let i = 0; i < cantidadEstudiantes; i++) {
  console.log(`${nombres[i]}: ${notas[i]}`);
}
console.log("----------------");
