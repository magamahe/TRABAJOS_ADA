/* 
Dada una lista de clientes que se registraron varias veces: 
["Ana", "Carlos", "Ana", "Sofía", "Carlos"], 
eliminar los duplicados y mostrar la lista limpia.
*/
const clientes = ["Ana", "Carlos", "Ana", "Sofía", "Carlos"];

// Eliminar duplicados usando Set
const clientesUnicos = [...new Set(clientes)];

console.log("Lista limpia de clientes:");
console.log(clientesUnicos);
