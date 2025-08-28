// index_3.js - Registro de tareas pendientes
const { cargar, guardar } = require('./utils');
const ARCHIVO = 'tareas.json';

// 1. Agregar tarea
function agregarTarea(descripcion) {
  if (!descripcion) {
    console.log('❌ Debés pasar una descripción.');
    return;
  }
  const tareas = cargar(ARCHIVO);
  const nueva = {
    id: tareas.length + 1,
    descripcion: descripcion.trim()
  };
  tareas.push(nueva);
  guardar(ARCHIVO, tareas);
  console.log(`✅ Tarea agregada: "${nueva.descripcion}"`);
}

// 2. Listar tareas
function listarTareas() {
  const tareas = cargar(ARCHIVO);
  if (tareas.length === 0) {
    console.log('📭 No hay tareas pendientes.');
    return;
  }

  console.log('📝 Lista de tareas pendientes:');
  tareas.forEach(t => {
    console.log(`${t.id}. ${t.descripcion}`);
  });
}

// 3. Eliminar tarea por ID
function eliminarTarea(id) {
  if (!id) {
    console.log('❌ Debés pasar el ID de la tarea a eliminar.');
    return;
  }

  let tareas = cargar(ARCHIVO);
  const idNum = parseInt(id);
  const tareaEncontrada = tareas.find(t => t.id === idNum);
  if (!tareaEncontrada) {
    console.log(`❌ No se encontró tarea con ID ${idNum}.`);
    return;
  }

  tareas = tareas.filter(t => t.id !== idNum);
  guardar(ARCHIVO, tareas);
  console.log(`🗑️ Tarea eliminada: "${tareaEncontrada.descripcion}"`);
}

// Menú por consola
const [,, comando, ...args] = process.argv;

switch (comando) {
  case 'agregar':
    agregarTarea(args.join(' '));
    break;
  case 'listar':
    listarTareas();
    break;
  case 'eliminar':
    eliminarTarea(args[0]);
    break;
  default:
    console.log('⚠️ Comando no reconocido. Usá: agregar "descripción" | listar | eliminar id');
}
