// view/view.js

export function mostrarMenu() {
  console.log(`
  ====== GESTOR DE TAREAS ======
  1. Listar tareas
  2. Agregar tarea
  3. Salir
  `);
}

export function mostrarTareas(tareas) {
  if (tareas.length === 0) {
    console.log("⚠️  No hay tareas registradas.");
  } else {
    console.log("📋 Lista de tareas:");
    tareas.forEach((t, i) => {
      console.log(`${i + 1}. ${t.titulo} - ${t.completada ? "✅" : "❌"}`);
    });
  }
}

export function mostrarMensaje(msg) {
  console.log(`\n✅ ${msg}`);
}
