////////// Para los que no entienden las lineas anteriores forma de hacerlo mas largo pero entendible
//
const prompt = require("prompt-sync")();

let var1 = prompt ("ingrese la primer variable booleana - true/false-: ").toLowerCase();
let var2 = prompt ("ingrese la primer variable booleana:- true/false-: ").toLowerCase();


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

// Verificamos si alguno de los valores ingresados NO es "true" ni "false"
if ((var1 !== "true" && var1 !== "false") || (var2 !== "true" && var2 !== "false")) {
    console.log("Uno de los valores no es booleano (true/false como texto)");
} else {
    // Convertimos las cadenas "true"/"false" a booleanos reales
    var1 = (var1 === "true") ? true : false;
    var2 = (var2 === "true") ? true : false;

    // Mostramos los valores ya convertidos
    console.log("Valor 1:", var1);
    console.log("Valor 2:", var2);
}


// Mostramos resultados de combinaciones lógicas
console.log("\n✅ Resultados lógicos:");
console.log(`valor1 AND valor2: ${var1 && var2}`);
console.log(`valor1 OR  valor2: ${var1 || var2}`);
console.log(`NOT valor1:            ${!var1}`);
console.log(`NOT valor2:            ${!var2}`);




