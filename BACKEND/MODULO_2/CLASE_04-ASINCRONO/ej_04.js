/* Ejercicio 4: ¿Existe tu perfil?
Consigna: Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json existe. Si no existe, crea uno nuevo con un perfil básico.
Pista: Usa fs.existsSync para verificar la existencia del archivo. */

const fs = require('fs');
const utils = require('./utils');
const path = require('path');

// Ruta al archivo perfil.json dentro de la carpeta JSON
nombre = 'perfil.json'
const rutaPerfil = path.join(__dirname, 'JSON', nombre);
//const rutaPerfil = path.join(__dirname, 'JSON', 'perfill.json');

// Perfil básico por defecto
const perfilBasico = {
  nombre: "María Gabriela",
  edad: 28,
  ciudadFavorita: "Disney"
};

if (fs.existsSync(rutaPerfil)) {
  console.log(`El archivo  ${nombre}  ya existe.`);
} else {
  console.log(`No existe ${nombre}, creando uno nuevo...`);

  utils.guardar(nombre, perfilBasico, (error) => {
    if (error) {
      console.error("Error al crear perfil básico:", error);
    } else {
      console.log("Perfil básico creado exitosamente.");
    }
  });
}
