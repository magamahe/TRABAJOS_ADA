/* Actividad 5: Registro de contactos
Consigna: Crea un programa que permita registrar contactos con nombre, teléfono y correo electrónico. El programa debe permitirte:
1. Agregar un contacto: Registrar un nuevo contacto.
2. Listar los contactos: Mostrar todos los contactos registrados.
3. Eliminar un contacto: Eliminar un contacto de la lista.
Pistas:
• Usa un archivo JSON para guardar los contactos.
• Si el archivo no existe, comienza con un arreglo vacío. */

const fs = require('fs');
const path = './contactos.json';

//1.

//LEER
const cargar = () => {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '[]'); // Si no existe, crea un archivo vacío
    }
    const contenido = fs.readFileSync(path, 'utf-8');
    return JSON.parse(contenido); // Convertimos el contenido a un arreglo de tareas
};

//GUARDAR
const guardar = (contactos) => {
    fs.writeFileSync(path, JSON.stringify(contactos, null, 2)); // Escribimos las tareas en el archivo
};


// AGREGAR contactos con nombre, teléfono y correo electrónico
const agregar = (nombre, telefono, correo) => {
    const contactos = cargar(); // Leemos las tareas existentes

    const nuevoContacto = {
    id: contactos.length + 1,
    nombre: nombre.trim(),
    telefono: parseInt(telefono),
    correo: correo.trim()
  };
    contactos.push(nuevoContacto); // Agregamos nuevo contacto
    guardar(contactos); // Guardamos la lista actualizada
    console.log(`COntacto agregado: "nombre: ${nuevoContacto.nombre}, telefono: ${nuevoContacto.telefono}, correo: ${nuevoContacto.correo},"`);
};

//2 LISTAR

const listar = () => {
    const contactos = cargar(); // Leemos las tareas
    console.log('Lista de Contactos:');
    contactos.forEach(contacto => {
        console.log(`${contacto.id}: ${contacto.nombre}, ${contacto.telefono}, ${contacto.correo}`);
    });}


//3 ELIMINAR
const eliminar = (id) => {
    let contactos = cargar(); // Leemos las tareas
    contactos = contactos.filter(contacto => contacto.id !== parseInt(id)); // Filtramos para eliminar la tarea por ID
    guardar(contactos); // Guardamos la lista actualizada
    console.log(`Contacto eliminado.`);
};


//// MENU
// Detectar comando desde la consola
const [,, comando, ...args] = process.argv;

switch (comando) {
  case 'agregar':
    agregar(args[0], args[1], args[2] );
    break;
  case 'listar':
    listar();
    break;
  case 'eliminar':
    eliminar(args[0]);
    break;
  default:
    console.log('⚠️ Comando no reconocido. Usá: agregar, listar o eliminar');
}