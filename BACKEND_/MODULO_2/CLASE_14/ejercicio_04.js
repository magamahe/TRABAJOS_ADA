// Importa el módulo 'crypto' nativo de Node.js, que permite generar hashes y cifrar datos
const crypto = require("crypto");

// Importa 'readline-sync' para leer datos del usuario desde la consola de forma interactiva
const readline = require("readline-sync");

// Pide al usuario que ingrese una contraseña y la guarda en la variable 'password'
const password = readline.question("Ingrese una contrasena: ");

// Pide al usuario que ingrese un valor de "sal" y lo guarda en la variable 'sal'
// La sal se usa para añadir seguridad al hash y evitar ataques de diccionario
const sal = readline.question("Ingrese un valor de sal: ");

// Crea un hash SHA-256 de la combinación de la contraseña y la sal
// 1. createHash("sha256") → crea el objeto hash con algoritmo SHA-256
// 2. update(password + sal) → alimenta el hash con la concatenación de password y sal
// 3. digest("hex") → finaliza el hash y devuelve el resultado en formato hexadecimal
const hash = crypto.createHash("sha256").update(password + sal).digest("hex");

// Muestra el hash generado en la consola
console.log("Hash con sal:", hash);
