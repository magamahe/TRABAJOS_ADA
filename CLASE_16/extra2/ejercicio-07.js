/*  Ejercicio 7: Buscar cliente por DNI */

// Recibís un array de clientes y un DNI, devolvé el cliente que coincida.
const clientes = [
  { nombre: "Laura", dni: "12345678" },
  { nombre: "Carlos", dni: "87654321" }
];

function buscarClientePorDNI(lista, dniBuscado) {
  const cliente = lista.find(c => c.dni === dniBuscado);
  if (cliente) {
    return cliente;
  } else {
    return "Cliente no encontrado";
  }
}

console.log(buscarClientePorDNI(clientes, "87654321" ));
console.log("---------------------------------------");

console.log(buscarClientePorDNI(clientes, "8765321" ));

