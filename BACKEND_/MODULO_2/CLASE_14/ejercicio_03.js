// Importa el módulo 'crypto' nativo de Node.js
const crypto = require("crypto"); 

// Importa 'readline-sync' para leer datos desde consola
const readline = require("readline-sync"); 

// Define el algoritmo de cifrado: AES con clave de 256 bits en modo CBC
const algoritmo = "aes-256-cbc"; 

// Genera una clave aleatoria de 32 bytes (256 bits)
const clave = crypto.randomBytes(32);   

// Genera un vector de inicialización (IV) de 16 bytes
const iv = crypto.randomBytes(16);      

// Muestra la clave y el IV en formato hexadecimal
console.log("Clave generada (hex):", clave.toString("hex"));
console.log("IV generado (hex):", iv.toString("hex"));

// Pide al usuario que ingrese un texto desde la consola
const texto = readline.question("Ingrese un texto para cifrar: "); 


// ---------------- CIFRADO ----------------

// Crea un objeto de cifrado con el algoritmo, la clave y el IV
const cifrador = crypto.createCipheriv(algoritmo, clave, iv); 

// Cifra el texto, de 'utf-8' a 'hex'
let textoCifrado = cifrador.update(texto, "utf-8", "hex"); 

// Finaliza el cifrado y concatena el resultado faltante
textoCifrado += cifrador.final("hex"); 

// Muestra el texto cifrado en consola
console.log("Texto cifrado:", textoCifrado); 


// ---------------- DESCIFRADO ----------------

// Crea un objeto de descifrado con el mismo algoritmo, clave y IV
const descifrador = crypto.createDecipheriv(algoritmo, clave, iv); 

// Descifra el texto, de 'hex' a 'utf-8'
let textoDescifrado = descifrador.update(textoCifrado, "hex", "utf-8"); 

// Finaliza el descifrado y concatena el resultado faltante
textoDescifrado += descifrador.final("utf-8"); 

// Muestra el texto original recuperado
console.log("Texto descifrado:", textoDescifrado); 
