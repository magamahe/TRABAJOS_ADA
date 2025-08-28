/* Actividad 6: Gestión de un diario personal
Consigna: Crea un programa que te permita gestionar un diario personal. El programa debe permitirte:
1. Agregar una entrada al diario: Registrar una nueva entrada con la fecha y el texto.
2. Listar las entradas: Mostrar todas las entradas registradas.
3. Eliminar una entrada: Eliminar una entrada específica por su ID.
Pistas:
• Usa un archivo JSON para guardar las entradas del diario.
• Cada entrada tendrá una fecha y un texto.
• Si el archivo no existe, comienza con un arreglo vacío. */

const fs = require('fs');
const path = './diario.json';

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
const guardar = (diario) => {
    fs.writeFileSync(path, JSON.stringify(diario, null, 2)); // Escribimos las tareas en el archivo
};


// AGREGAR contactos con nombre, teléfono y correo electrónico
const agregar = (texto) => {
    const diario = cargar(); // Leemos las tareas existentes
    const nuevaEntrada ={
        id: diario.length + 1,
        fecha :  new Date().toLocaleString(),// Obtenemos la fecha actual
        texto : texto.trim()
    }
    diario.push(nuevaEntrada); // Agregamos nuevo contacto
    guardar(diario); // Guardamos la lista actualizada
    console.log(`Nueva entrada al diario: "fecha: ${nuevaEntrada.fecha}, texto: ${nuevaEntrada.texto}"`);
};

//2 LISTAR

const listar = () => {
    const diario = cargar(); // Leemos las tareas
    console.log('Entradas al Diario:');
    diario.forEach(entrada => {
        console.log(`${entrada.id}: ${entrada.fecha}, ${entrada.texto}`);
    });}


//3 ELIMINAR
const eliminar = (id) => {
    let diario = cargar(); // Leemos las tareas
    diario = diario.filter(entrada => entrada.id !== parseInt(id)); // Filtramos para eliminar la tarea por ID
    guardar(diario); // Guardamos la lista actualizada
    console.log(`Entrada eliminada`);
};


//// MENU
// Detectar comando desde la consola
const [,, comando, ...args] = process.argv;

switch (comando) {
  case 'agregar':
    agregar(args[0] );
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