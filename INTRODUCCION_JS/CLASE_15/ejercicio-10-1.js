///PIDO AL USUARIO

const prompt = require("prompt-sync")();

const frase = prompt("Ingresá una frase: ");
const palabraOriginal = prompt("¿Qué palabra querés reemplazar?: ");
const palabraNueva = prompt("¿Por cuál palabra la querés reemplazar?: ");

const fraseModificada = frase.replace(palabraOriginal, palabraNueva);

console.log("\n------------------------------");
console.log("Frase original: ", frase);
console.log("Frase actualizada: ", fraseModificada);
console.log("------------------------------");
