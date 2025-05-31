/* Ejercicio 3: 
Declara dos variables booleanas condicion1 y condicion2. Pide al 
usuario que ingrese dos valores booleanos (true o false) y muestra el 
resultado de diversas combinaciones lógicas. */

const prompt = require('prompt-sync')();

// Pedimos dos valores booleanos al usuario
let input1 = prompt("Ingrese el primer valor booleano (true/false): ").toLowerCase();
let input2 = prompt("Ingrese el segundo valor booleano (true/false): ").toLowerCase();

// Verificamos que los valores sean "true" o "false"
if (
  (input1 !== "true" && input1 !== "false") ||
  (input2 !== "true" && input2 !== "false")
) {
  console.log("\n No ingresaste un valor correcto. Debes escribir 'true' o 'false'.");
} else {
  // Convertimos los strings a booleanos reales
  let condicion1 = (input1 === "true");
  let condicion2 = (input2 === "true");

  // Mostramos resultados de combinaciones lógicas
  console.log("\n✅ Resultados lógicos:");
  console.log(`condicion1 AND condicion2: ${condicion1 && condicion2}`);
  console.log(`condicion1 OR  condicion2: ${condicion1 || condicion2}`);
  console.log(`NOT condicion1:            ${!condicion1}`);
  console.log(`NOT condicion2:            ${!condicion2}`);
}





/*Cond1	Cond2	Rdo(&&)
true	true	true
true	false	false
false	true	false
false	false	false */

/* Cond1 Cond2 Rdo(||) 
true  true  true 
true  false  true 
false  true  true 
false  false  false */