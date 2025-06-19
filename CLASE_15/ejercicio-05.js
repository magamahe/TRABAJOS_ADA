/* ● Ejercicio 5: Buscar la posición de un elemento 
Tienes una lista de colores ["Rojo", "Verde", "Azul", "Amarillo"]. Encuentra y 
muestra el índice del color "Azul" en la lista. 
 */

const color = "Azul";
const colores = ["Rojo", "Verde", "Azul", "Amarillo"];
const indice = colores.indexOf(color);

console.log(
  indice !== -1
    ? `La posicion del color ${color} dentro de la lista [${colores.join(", ")}] es: ${indice + 1}`
    : `El color "${color}" no está en la lista.`
);
