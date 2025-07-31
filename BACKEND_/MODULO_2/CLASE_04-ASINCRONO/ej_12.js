/* Ejercicio 12: Sistema de registro de tareas
Consigna: Crea un programa que maneje un archivo tareas.json con las siguientes funcionalidades:
1.
Agregar una tarea: Cada tarea debe tener nombre, descripcion y estado (pendiente o completa).
2.
Completar una tarea: Cambia el estado de una tarea a completa.
3.
Listar tareas por estado: Muestra las tareas agrupadas por su estado (pendiente o completa).
Pista: Utiliza métodos como filter y map para manipular la lista de tareas. */

const utils = require('./utils');
const archivoTareas = 'tareas.json';

// ✅ 1. Agregar una tarea
const agregarTarea = (nombre, descripcion) => {
  utils.cargar(archivoTareas, (error, tareas) => {
    if (error) {
      console.error("Error al cargar tareas:", error);
      return;
    }

    if (!tareas) tareas = [];

    const existe = tareas.find(t => t.nombre.toLowerCase() === nombre.toLowerCase());

    if (existe) {
      console.log(`⚠️ La tarea "${nombre}" ya existe.`);
    } else {
      tareas.push({ nombre, descripcion, estado: "pendiente" });
      utils.guardar(archivoTareas, tareas, (errorGuardar) => {
        if (errorGuardar) {
          console.error("Error al guardar la tarea:", errorGuardar);
        } else {
          console.log(`✅ Tarea "${nombre}" agregada correctamente.`);
        }
      });
    }
  });
};

// ✅ 2. Completar una tarea
const completarTarea = (nombre) => {
  utils.cargar(archivoTareas, (error, tareas) => {
    if (error || !tareas) {
      console.error("Error al cargar tareas o no hay tareas registradas.");
      return;
    }

    const tarea = tareas.find(t => t.nombre.toLowerCase() === nombre.toLowerCase());

    if (!tarea) {
      console.log(`❌ La tarea "${nombre}" no existe.`);
    } else if (tarea.estado === "completa") {
      console.log(`✅ La tarea "${nombre}" ya estaba completa.`);
    } else {
      tarea.estado = "completa";
      utils.guardar(archivoTareas, tareas, (errorGuardar) => {
        if (errorGuardar) {
          console.error("Error al actualizar la tarea:", errorGuardar);
        } else {
          console.log(`✅ Tarea "${nombre}" marcada como completa.`);
        }
      });
    }
  });
};

// ✅ 3. Listar tareas por estado
const listarTareas = () => {
  utils.cargar(archivoTareas, (error, tareas) => {
    if (error || !tareas || tareas.length === 0) {
      console.log("No hay tareas registradas.");
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
  });
};

// node ej_12.js agregar "Tarea 1" "Estudiar callbacks"
// node ej_12.js completar "Tarea 1"
// node ej_12.js listar

const comando = process.argv[2];
const nombre = process.argv[3];
const descripcion = process.argv[4];

switch (comando) {
  case "agregar":
    if (!nombre || !descripcion) {
      console.log("Usá: node index_12.js agregar \"Nombre\" \"Descripción\"");
    } else {
      agregarTarea(nombre, descripcion);
    }
    break;
  case "completar":
    if (!nombre) {
      console.log("Usá: node index_12.js completar \"Nombre\"");
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
