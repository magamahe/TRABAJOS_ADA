/*  Ejercicio 2: Eliminar al último invitado 
Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. El 
último invitado no puede asistir. Elimina al último invitado y muestra quién 
fue eliminado y el estado actualizado de la lista. */

let fiesta =  ["Ana", "Juan", "Carlos", "Sofía"];

console.log("------------------------")
console.log(`invitados a la fiesta: ${fiesta.join(", ")}`);
console.log("------------------------")
const noAsiste = fiesta.pop();
console.log(`No asiste a la fiesta: ${noAsiste}`);
console.log(`Invitados que si asiste a la fiesta ${fiesta.join(", ")}` )
