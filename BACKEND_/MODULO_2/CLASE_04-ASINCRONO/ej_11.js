/* Ejercicio 11: Sistema de gestión de contactos
Consigna: Imagina que estás desarrollando una miniaplicación para gestionar contactos. Tu objetivo es:
1. Crear un archivo llamado contactos.json que almacene una lista de contactos.
2. Implementar funciones para:
o Agregar un contacto: Cada contacto debe tener nombre, teléfono y email.
o Listar todos los contactos.
o Buscar un contacto por nombre.
3. Asegúrate de que los contactos no se repitan (valida el nombre antes de agregarlo).
Pista: Usa readFile para obtener la lista actual de contactos y writeFile para guardar cambios. */

const utils = require('./utils');
const archivoContactos = 'contactos.json';

// ✅ 1. Agregar un nuevo contacto
const agregarContacto = (nombre, telefono, email) => {
  utils.cargar(archivoContactos, (error, contactos) => {
    if (error) {
      console.error("Error al cargar los contactos:", error);
      return;
    }

    if (!contactos) contactos = [];

    const existe = contactos.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());

    if (existe) {
      console.log(`⚠️ El contacto "${nombre}" ya existe.`);
    } else {
      contactos.push({ nombre, telefono, email });
      utils.guardar(archivoContactos, contactos, (errorGuardar) => {
        if (errorGuardar) {
          console.error("Error al guardar el contacto:", errorGuardar);
        } else {
          console.log(`✅ Contacto "${nombre}" agregado correctamente.`);
        }
      });
    }
  });
};

// ✅ 2. Listar todos los contactos
const listarContactos = () => {
  utils.cargar(archivoContactos, (error, contactos) => {
    if (error) {
      console.error("Error al cargar los contactos:", error);
      return;
    }

    if (!contactos || contactos.length === 0) {
      console.log("No hay contactos registrados.");
      return;
    }

    console.log("📒 Lista de contactos:");
    contactos.forEach((c, i) => {
      console.log(`${i + 1}. ${c.nombre} - ${c.telefono} - ${c.email}`);
    });
  });
};

// ✅ 3. Buscar contacto por nombre
const buscarContacto = (nombreBuscado) => {
  utils.cargar(archivoContactos, (error, contactos) => {
    if (error) {
      console.error("Error al cargar los contactos:", error);
      return;
    }

    if (!contactos) {
      console.log("No hay contactos registrados.");
      return;
    }

    const contacto = contactos.find(c => c.nombre.toLowerCase() === nombreBuscado.toLowerCase());

    if (contacto) {
      console.log("🔍 Contacto encontrado:");
      console.log(`Nombre: ${contacto.nombre}`);
      console.log(`Teléfono: ${contacto.telefono}`);
      console.log(`Email: ${contacto.email}`);
    } else {
      console.log(`No se encontró ningún contacto con el nombre "${nombreBuscado}".`);
    }
  });
};

// node index_11.js agregar "Ana" "123456789" "ana@email.com"
// node index_11.js listar
// node index_11.js buscar "Ana"

const comando = process.argv[2];
const nombre = process.argv[3];
const telefono = process.argv[4];
const email = process.argv[5];

switch (comando) {
  case "agregar":
    if (!nombre || !telefono || !email) {
      console.log("Debes ingresar nombre, teléfono y email.");
    } else {
      agregarContacto(nombre, telefono, email);
    }
    break;
  case "listar":
    listarContactos();
    break;
  case "buscar":
    if (!nombre) {
      console.log("Debes ingresar el nombre a buscar.");
    } else {
      buscarContacto(nombre);
    }
    break;
  default:
    console.log("Comandos disponibles: agregar, listar, buscar");
}


