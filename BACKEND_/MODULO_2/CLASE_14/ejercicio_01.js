// Importa el módulo 'crypto' nativo de Node.js, que permite generar hashes y cifrar datos
const crypto = require("crypto");

// Importa 'readline-sync' para leer datos del usuario desde la consola de forma interactiva
const readline = require("readline-sync");

// Pide al usuario que ingrese un texto y lo guarda en la variable 'texto'
const texto = readline.question("Ingrese un texto: ");

// Crea un hash SHA-256 del texto ingresado
// 1. createHash("sha256") → crea el objeto hash con algoritmo SHA-256
// 2. update(texto) → alimenta el hash con el texto
// 3. digest("hex") → finaliza el hash y devuelve el resultado en formato hexadecimal
const hash = crypto.createHash("sha256").update(texto).digest("hex");

// Muestra el hash generado en la consola
console.log("Hash SHA-256:", hash);
