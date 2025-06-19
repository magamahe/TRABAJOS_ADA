/* Ejercicio 3: Agregar y eliminar a la fila de mascotas 
Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", 
"Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el 
"Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la fila y 
muéstrala. Finalmente, muestra la lista actualizada. 
 */

let mascotas = ["Perro", "Gato", "Conejo"];
console.log(`Lista ordenada de animales para ser atendidos: ${mascotas.join(", ")}`);

console.log("Llega ***Hámster*** que debe ser atendido primero");
mascotas.unshift("Hámster");
console.log(`Mascotas en orden para atender: ${mascotas.join(", ")}`);

// Atender a la primera mascota: eliminarla y mostrarla
const primeraAtendida = mascotas.shift();
console.log(`Primera mascota atendida: ${primeraAtendida}`);

console.log(`Mascotas restantes en la fila: ${mascotas.join(", ")}`);
