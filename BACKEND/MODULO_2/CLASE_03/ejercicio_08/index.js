/* Actividad 8: Seguimiento de proyectos
Consigna: Crea un programa para gestionar proyectos. El programa debe permitirte:
1. Agregar un proyecto: Registrar un proyecto con su nombre y estado (pendiente o en progreso).
2. Listar los proyectos: Mostrar todos los proyectos registrados.
3. Actualizar el estado de un proyecto: Cambiar el estado de un proyecto a "finalizado" o "en progreso".
Pistas:
• Usa un archivo JSON para guardar los proyectos.
• Si el archivo no existe, comienza con un arreglo vacío.
• Cada proyecto debe tener un ID único. */

const fs = require('fs');
const path = './proyectos.json';

// LEER
const cargar = () => {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '[]'); // Si no existe, crea un archivo vacío
    }
    const contenido = fs.readFileSync(path, 'utf-8');
    return JSON.parse(contenido); // Convertimos el contenido a un arreglo de tareas
};

// GUARDAR
const guardar = (proyectos) => {
  fs.writeFileSync(path, JSON.stringify(proyectos, null, 2), 'utf8');
};

// 1. 
// AGREGAR
const agregar = (nombre) => {
  if (!nombre) {
    console.log('❌ Debés pasar un nombre.');
    return;
  }

  const proyectos = cargar();
  const nuevo = {
    id: proyectos.length + 1,
    nombre: nombre.trim(),
    estado: 'pendiente'
  };
  proyectos.push(nuevo);
  guardar(proyectos);
  console.log(`✅ Proyecto agregado: "${nuevo.nombre}"`);
};


// 2. 
// LISTAR
const listar = () => {
  const proyectos = cargar();
  if (proyectos.length === 0) {
    console.log('📭 No hay proyectos registrados.');
    return;
  }

  console.log('🗓️ Proyectos Registrados:');
  proyectos.forEach(t => {
    console.log(`${t.id}. [${t.estado.toUpperCase()}] ${t.nombre}`);
  });
};

// 3. 
// CAMBIAR ESTADO
const actualizar = (id, estado) => {
  const proyectos = cargar();
  const proyecto = proyectos.find(t => t.id === parseInt(id));
  if (!proyecto) {
    console.log(`❌ No se encontró el proyecto con ID ${id}.`);
    return;
  }
  proyecto.estado = estado;
  guardar(proyectos);
  console.log(`✅ Proyecto actualizado: "${proyecto.nombre}" a estado "${estado}"`);
};

//3.1
//actualizar automaticamente de pendiente => en curso => finalizado
// 3. CAMBIAR ESTADO automáticamente en orden lógico
const actualizarEstado = (id) => {
  const proyectos = cargar();
  const proyecto = proyectos.find(p => p.id === parseInt(id));

  if (!proyecto) {
    console.log(`❌ No se encontró el proyecto con ID ${id}.`);
    return;
  }

  // Secuencia de estados
  const estados = ['pendiente', 'en progreso', 'finalizado'];
  const estadoActual = proyecto.estado;
  const indiceActual = estados.indexOf(estadoActual);

  if (indiceActual === -1) {
    console.log(`❌ Estado desconocido "${estadoActual}".`);
    return;
  }

  if (indiceActual === estados.length - 1) {
    console.log(`✅ El proyecto "${proyecto.nombre}" ya está FINALIZADO.`);
    return;
  }

  const nuevoEstado = estados[indiceActual + 1];
  proyecto.estado = nuevoEstado;
  guardar(proyectos);
  console.log(`🔄 Proyecto "${proyecto.nombre}" actualizado a estado: ${nuevoEstado.toUpperCase()}`);
};



// Menú por consola
const [,, comando, ...args] = process.argv;

switch (comando) {
  case 'agregar':
    agregar(args[0]);
    break;
  case 'listar':
    listar();
    break;
  case 'actualizar':
    actualizar(args[0], args[1]);
    break;
  case 'actualizarEstado':
    actualizarEstado(args[0]);
    break;
  default:
    console.log('⚠️ Comando no reconocido. Usá: agregar, listar o actualizar');
}