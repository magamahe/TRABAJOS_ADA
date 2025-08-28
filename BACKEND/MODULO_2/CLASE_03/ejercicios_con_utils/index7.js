// index_7.js - Control de tareas diarias
const { cargar, guardar } = require('./utils');
const ARCHIVO = 'tareasDiarias.json';

// 1. Agregar tarea con descripción y estado "pendiente" por defecto
function agregarTarea(descripcion) {
  if (!descripcion) {
    console.log('❌ Debés pasar la descripción de la tarea.');
    return;
  }
  const tareas = cargar(ARCHIVO);
  const nuevaTarea = {
    id: tareas.length + 1,
    descripcion: descripcion.trim(),
    estado: 'pendiente' // por defecto
  };
  tareas.push(nuevaTarea);
  guardar(ARCHIVO, tareas);
  console.log(`✅ Tarea agregada: "${nuevaTarea.descripcion}" (pendiente)`);
}

// 2. Listar tareas con su estado
function listarTareas() {
  const tareas = cargar(ARCHIVO);
  if (tareas.length === 0) {
    console.log('📭 No hay tareas registradas.');
    return;
  }
  console.log('📋 Tareas diarias:');
  tareas.forEach(t => {
    console.log(`${t.id}. [${t.estado.toUpperCase()}] ${t.descripcion}`);
  });
}

// 3. Marcar tarea como completada por ID
function completarTarea(id) {
  if (!id) {
    console.log('❌ Debés pasar el ID de la tarea a completar.');
    return;
  }
  const tareas = cargar(ARCHIVO);
  const idNum = parseInt(id);
  const tarea = tareas.find(t => t.id === idNum);
  if (!tarea) {
    console.log(`❌ No se encontró tarea con ID ${idNum}.`);
    return;
  }
  if (tarea.estado === 'completada') {
    console.log(`ℹ️ La tarea con ID ${idNum} ya está completada.`);
    return;
  }
  tarea.estado = 'completada';
  guardar(ARCHIVO, tareas);
  console.log(`✅ Tarea completada: "${tarea.descripcion}"`);
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
  case 'completar':
    completarTarea(args[0]);
    break;
  default:
    console.log('⚠️ Comando no reconocido. Usá: agregar descripción | listar | completar id');
}
