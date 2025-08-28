/* Ejercicio 1: ¡Crea tu perfil digital!
Consigna:
Imagina que acabas de unirte a una red social donde puedes crear tu perfil digital básico. Tu misión es:

Crear un archivo llamado perfil.json.
Dentro de este archivo, guarda información sobre ti: nombre, edad y tu ciudad favorita.
Usa el módulo fs para escribir este archivo desde Node.js.
💡 Pista: Usa JSON.stringify() para convertir tu información en un formato que pueda guardarse en el archivo. */


const { guardar } = require('./utils');

const perfil = {
  nombre: "Gabriela",
  edad: 30,
  ciudadFavorita: "Disney"
};

guardar('perfil.json', perfil);
console.log("✅ Perfil guardado con éxito en la carpeta JSON.");
