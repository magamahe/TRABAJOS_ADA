/* 
Simula una lista de tareas donde el usuario puede:
1. Agregar tareas (con push),
2. Completar tareas (con shift) y mostrar cuál fue completada,
3. Mostrar cuántas tareas quedan por hacer.
*/

let tareas = []; // Lista inicial vacía

// Función para agregar tareas
function agregarTarea(tarea) {
  tareas.push(tarea);
  console.log(`Tarea agregada: "${tarea}"`);
}

// Función para completar la primera tarea
function completarTarea() {
  if (tareas.length === 0) {
    console.log("No hay tareas para completar.");
  } else {
    const tareaCompletada = tareas.shift();
    console.log(`Tarea completada: "${tareaCompletada}"`);
  }
}

// Función para mostrar cuántas tareas quedan
function mostrarTareasPendientes() {
  console.log(`Tareas pendientes: ${tareas.length}`);
  if (tareas.length > 0) {
    console.log("Lista de tareas:");
    tareas.forEach((t, i) => console.log(`${i + 1}. ${t}`));
  }
}

// Simulación:
agregarTarea("Lavar los platos");
agregarTarea("Estudiar JavaScript");
agregarTarea("Sacar la basura");

mostrarTareasPendientes();

completarTarea();
mostrarTareasPendientes();

completarTarea();
completarTarea();
completarTarea(); // Intenta completar sin tareas

mostrarTareasPendientes();
