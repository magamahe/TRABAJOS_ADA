const utils = require('./utils');
const archivoTareas = 'tareas.json';

const agregarTarea = (nombre, descripcion) => {
  let tareas = utils.cargar(archivoTareas) || [];

  const existe = tareas.find(t => t.nombre.toLowerCase() === nombre.toLowerCase());

  if (existe) {
    console.log(`⚠️ La tarea "${nombre}" ya existe.`);
  } else {
    tareas.push({ nombre, descripcion, estado: "pendiente" });
    utils.guardar(archivoTareas, tareas);
    console.log(`✅ Tarea "${nombre}" agregada correctamente.`);
  }
};

const completarTarea = (nombre) => {
  let tareas = utils.cargar(archivoTareas);

  if (!tareas || tareas.length === 0) {
    console.log("❌ No hay tareas registradas.");
    return;
  }

  const tarea = tareas.find(t => t.nombre.toLowerCase() === nombre.toLowerCase());

  if (!tarea) {
    console.log(`❌ La tarea "${nombre}" no existe.`);
  } else if (tarea.estado === "completa") {
    console.log(`ℹ️ La tarea "${nombre}" ya estaba completa.`);
  } else {
    tarea.estado = "completa";
    utils.guardar(archivoTareas, tareas);
    console.log(`✅ Tarea "${nombre}" marcada como completa.`);
  }
};

const listarTareas = () => {
  const tareas = utils.cargar(archivoTareas);

  if (!tareas || tareas.length === 0) {
    console.log("❌ No hay tareas registradas.");
    return;
  }

  const pendientes = tareas.filter(t => t.estado === "pendiente");
  const completas = tareas.filter(t => t.estado === "completa");

  console.log("📌 Tareas pendientes:");
  if (pendientes.length === 0) {
    console.log(" - (ninguna)");
  } else {
    pendientes.forEach(t => console.log(`- ${t.nombre}: ${t.descripcion}`));
  }

  console.log("\n✅ Tareas completas:");
  if (completas.length === 0) {
    console.log(" - (ninguna)");
  } else {
    completas.forEach(t => console.log(`- ${t.nombre}: ${t.descripcion}`));
  }
};

// ⚙️ Control desde consola
const comando = process.argv[2];
const nombre = process.argv[3];
const descripcion = process.argv[4];

switch (comando) {
  case "agregar":
    if (!nombre || !descripcion) {
      console.log('Usá: node ejercicio_12.js agregar "Nombre" "Descripción"');
    } else {
      agregarTarea(nombre, descripcion);
    }
    break;

  case "completar":
    if (!nombre) {
      console.log('Usá: node ejercicio_12.js completar "Nombre"');
    } else {
      completarTarea(nombre);
    }
    break;

  case "listar":
    listarTareas();
    break;

  default:
    console.log("Comandos disponibles: agregar, completar, listar");
}

/* 
node ejercicio_12.js agregar "Tarea 2" "Salir a comer"
node ejercicio_12.js completar "Tarea 1"
node ejercicio_12.js listar */