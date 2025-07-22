/* ●	Ejercicio 2: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta. La contraseña correcta es "1234".
 */
const prompt = require('prompt-sync')();

let contrasena_correcta = "1234";
let contrasena_usuario

do{
    contrasena_usuario = prompt("Ingrese la contraseña: ");
    
    if (contrasena_usuario !== contrasena_correcta) {
        console.log("Contraseña incorrecta. Inténtalo de nuevo.");
    }

} while(contrasena_usuario !== contrasena_correcta);

console.log("Contraseña correcta. Acceso concedido.");