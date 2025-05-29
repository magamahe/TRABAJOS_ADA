// Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y luego intercambia sus valores. Muestra los valores antes y después del intercambio en la consola.
// Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea), eres libre de elegir el que desees, eso si, investiga sobre el que usaras.
const prompt = require("prompt-sync")({ sigint: true });

let var1 = "Gabriela";
let var2 = "Martinez";
console.log("-----------------------");
console.log("Antes del intercambio:");
console.log("var1:", var1);
console.log("var2:", var2);

// Método de intercambio usando una variable temporal
let temp = var1;
var1 = var2;
var2 = temp;
console.log("-----------------------");
console.log("Después del intercambio:");
console.log("var1:", var1);
console.log("var2:", var2);