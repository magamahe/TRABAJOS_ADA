/* ● Simulador de una cola de atención al cliente 
Simula una cola de atención al cliente donde los clientes llegan y son 
atendidos uno por uno. Tienes una lista inicial de clientes en espera y un 
bucle que los atiende de a uno. Realiza lo siguiente: 
1. Mientras haya clientes en la cola, atiende a cada uno y muéstralo por 
consola. 
2. Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un 
mensaje especial. 
3. Al final, muestra cuántos clientes fueron atendidos en total. 
Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"]. */

let clientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let atendidos = 0;

while (clientes.length > 0) {
  // Sacamos al primer cliente de la cola
  const cliente = clientes.shift();

  (cliente === "VIP")
  ? console.log(`¡Atendiendo a cliente VIP: ${cliente} con prioridad!`)
  : console.log(`Atendiendo a cliente: ${cliente}`)
  
  atendidos++;
}

console.log(`\nTotal de clientes atendidos: ${atendidos}`);
