/* Ejercicio 2: Descubre tu perfil
Consigna:
Lee el archivo perfil.json que creaste en el ejercicio anterior y muestra la información en la consola.

💡 Pista: Usa fs.readFile con la codificación 'utf-8' para obtener el contenido del archivo como texto legible. */

const { cargar } = require('./utils');

const perfil = cargar('perfil.json');
console.log("📄 Tu perfil:", perfil);