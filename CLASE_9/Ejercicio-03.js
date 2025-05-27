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




////////// Para los que no entienden las lineas anteriores forma de hacerlo mas largo pero entendible
//
//const prompt = require("prompt-sync")();

//let var1 = prompt ("ingrese la primer variable booleana - true/false-:").toLowerCase();
//let var2 = prompt ("ingrese la primer variable booleana:- true/false-").toLowerCase();

//let valor1;
//let valor2;

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

//pregunto si lo ingresado  es distinto a "true" o "false".
//if ((var1 !== "true" && var1 !== "false") || (var2 !== "true" && var2 !== "false")){
//    prompt(" unos de los valores no es booleano")
//}

// pregunto que valor en string tomo la variable 1 y la transformo a booleano
//if (var1 === "true"){
//    valor1 = true;
//    console.log(`valor1: ${valor1}`);
//} else {
//    valor1= false;
//} 

// pregunto que valor en string tomo la variable 2 y la transformo a booleano
//if (var2 === "true"){
//    valor2 = true;
//     console.log(`valor2: ${valor2}`);
//} else {
//    valor2= false;
//     console.log(`valor2: ${valor2}`);
//}

  // Mostramos resultados de combinaciones lógicas
  //console.log("\n✅ Resultados lógicos:");
  //console.log(`valor1 AND valor2: ${valor1 && valor2}`);
  //console.log(`valor1 OR  valor2: ${valor1 || valor2}`);
  //console.log(`NOT valor1:            ${!valor1}`);
  //console.log(`NOT valor2:            ${!valor2}`);




