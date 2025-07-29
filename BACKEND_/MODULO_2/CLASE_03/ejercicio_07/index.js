/* Actividad 7: Control de tareas diarias
Consigna: Crea un programa para gestionar tus tareas diarias. El programa debe permitirte:
1. Agregar una tarea diaria: Registrar una nueva tarea con su descripción y estado.
2. Listar las tareas diarias: Mostrar todas las tareas con su estado.
3. Marcar una tarea como completada: Cambiar el estado de una tarea de "pendiente" a "completada".
Pistas:
• Usa un archivo JSON para guardar las tareas.
• El estado de cada tarea puede ser "pendiente" o "completada".
• Si el archivo no existe, comienza con un arreglo vacío. */

const fs = require('fs');
const path = './tareas_diarias.json';

// LEER
const cargar = () => {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '[]'); // Si no existe, crea un archivo vacío
    }
    const contenido = fs.readFileSync(path, 'utf-8');
    return JSON.parse(contenido); // Convertimos el contenido a un arreglo de tareas
};

// GUARDAR
const guardar = (tareas) => {
  fs.writeFileSync(path, JSON.stringify(tareas, null, 2), 'utf8');
};

// 1. 
// AGREGAR
const agregar = (descripcion) => {
  if (!descripcion) {
    console.log('❌ Debés pasar una descripción.');
    return;
  }

  const tareas = cargar();
  const nueva = {
    id: tareas.length + 1,
    descripcion: descripcion.trim(),
    estado: 'pendiente',
    fecha: new Date().toLocaleString('es-AR')
  };
  tareas.push(nueva);
  guardar(tareas);
  console.log(`✅ Tarea agregada: "${nueva.descripcion}"`);
};


// 2. 
// LISTAR
const listar = () => {
  const tareas = cargar();
  if (tareas.length === 0) {
    console.log('📭 No hay tareas registradas.');
    return;
  }

  console.log('🗓️ Tareas Diarias:');
  tareas.forEach(t => {
    console.log(`${t.id}. [${t.estado.toUpperCase()}] ${t.descripcion} - (${t.fecha})`);
  });
};

// 3. 
// CAMBIAR ESTADO
const completar = (id) => {
  const tareas = cargar();
  const tarea = tareas.find(t => t.id === parseInt(id));
  if (!tarea) {
    console.log(`❌ No se encontró una tarea con ID ${id}.`);
    return;
  }

  tarea.estado = 'completada';
  guardar(tareas);
  console.log(`✅ Tarea completada: "${tarea.descripcion}"`);
};

// Menú por consola
const [,, comando, ...args] = process.argv;

switch (comando) {
  case 'agregar':
    agregar(args.join(' '));
    break;
  case 'listar':
    listar();
    break;
  case 'completar':
    completar(args[0]);
    break;
  default:
    console.log('⚠️ Comando no reconocido. Usá: agregar, listar o completar');
}
