
import readlineSync from "readline-sync";
import { cargarTareas, guardarTareas } from "../model/model.js";  // 👈 muy importante
import { mostrarMenu, mostrarTareas, mostrarMensaje } from "../view/view.js";

export function iniciar() {
  let salir = false;

  while (!salir) {
    mostrarMenu();
    const opcion = readlineSync.question("Elige una opcion: ");

    switch (opcion) {
      case "1":
        const tareas = cargarTareas();
        mostrarTareas(tareas);
        break;

      case "2":
        const titulo = readlineSync.question("Titulo de la tarea: ");
        const lista = cargarTareas();
        lista.push({ id: Date.now(), titulo, completada: false });
        guardarTareas(lista);
        mostrarMensaje("Tarea guardada correctamente.");
        break;

      case "3":
        salir = true;
        console.log("👋 Saliendo...");
        break;

      default:
        console.log("⚠️ Opcion invalida.");
    }
  }
}
