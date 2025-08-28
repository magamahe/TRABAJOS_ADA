/* Actividad 9: Registro de eventos
Consigna: Crea un programa para registrar eventos. El programa debe permitirte:
1. Agregar un evento: Registrar un evento con nombre, fecha y lugar.
2. Listar los eventos: Mostrar todos los eventos registrados.
3. Eliminar un evento: Eliminar un evento de la lista.
Pistas:
• Usa un archivo JSON para guardar los eventos.
• Si el archivo no existe, comienza con un arreglo vacío.
• Cada evento debe tener un ID único. */

const fs = require('fs');
const path = './eventos.json';

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
const guardar = (eventos) => {
    fs.writeFileSync(path, JSON.stringify(eventos, null, 2)); // Escribimos las tareas en el archivo
};


// AGREGAR nombre, fecha y lugar
const agregar = (nombre, fecha, lugar) => {
    const eventos = cargar(); // Leemos las tareas existentes

    const nuevoEvento = {
    id: eventos.length + 1,
    nombre: nombre.trim(),
    fecha: fecha,
    lugar: lugar.trim()
  };
    eventos.push(nuevoEvento); // Agregamos nuevo contacto
    guardar(eventos); // Guardamos la lista actualizada
    console.log(`Evento agregado: "nombre: ${nuevoEvento.nombre}, fecha: ${nuevoEvento.fecha}, lugar: ${nuevoEvento.lugar},"`);
};

//2 LISTAR

const listar = () => {
    const eventos = cargar(); // Leemos las tareas
    console.log('Lista de Eventos:');
    eventos.forEach(evento => {
        console.log(`${evento.id}: ${evento.nombre}, ${evento.fecha}, ${evento.lugar}`);
    });}


//3 ELIMINAR
const eliminar = (id) => {
    let eventos = cargar(); // Leemos las tareas
    eventos = eventos.filter(evento => evento.id !== parseInt(id)); // Filtramos para eliminar la tarea por ID
    guardar(eventos); // Guardamos la lista actualizada
    console.log(`Evento eliminado.`);
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