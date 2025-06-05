/* IF TERNARIO

let hambre = true
let accionar = hambre ? " como pizza 🍕" : "sigo sin comer 😌";

console.log(accionar); */


/*SWItCH

let opcion = "pizzas";    

switch (opcion) {
  case "pizza":
    console.log("Elegiste 🍕");
    break;
  case "ensalada":
    console.log("Elegiste 🥗");
    break;
  default:
    console.log("¡Esa opción no está en el menú!");
}
*/


/* FOR */
// for (let i = 1; i <= 10; i++) {
//   console.log(`Entregando invitación número ${i}`);
// }




/* ¡Estás a cargo de organizar un desfile! Tenés que decidir cuántos personajes van a participar y qué emoji representa a tu equipo. Usando un bucle for, mostrá cómo desfilan uno a uno por la pasarela. */

const prompt = require("prompt-sync")();

let cantidadPersonajes = parseInt(prompt("¿Cuántos personajes van a participar en el desfile? "));
let emoji = prompt("¿Qué emoji representa a tu equipo? (ej: 🐶🐱)");

console.log(`¡El desfile comienza! 🎉`);

for (let i = 1; i <= cantidadPersonajes; i++) {
  console.log(`${i}. desfilando por la pasarela ${emoji}`);
} 

