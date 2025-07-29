// index_8.js - Seguimiento de proyectos
const { cargar, guardar } = require('./utils');
const ARCHIVO = 'proyectos.json';

// 1. Agregar proyecto (nombre + estado "pendiente" por defecto)
function agregarProyecto(nombre) {
  if (!nombre) {
    console.log('❌ Debés pasar el nombre del proyecto.');
    return;
  }
  const proyectos = cargar(ARCHIVO);
  const nuevoProyecto = {
    id: proyectos.length + 1,
    nombre: nombre.trim(),
    estado: 'pendiente' // estado inicial
  };
  proyectos.push(nuevoProyecto);
  guardar(ARCHIVO, proyectos);
  console.log(`✅ Proyecto agregado: "${nuevoProyecto.nombre}" (pendiente)`);
}

// 2. Listar proyectos con estado
function listarProyectos() {
  const proyectos = cargar(ARCHIVO);
  if (proyectos.length === 0) {
    console.log('📭 No hay proyectos registrados.');
    return;
  }
  console.log('🗓️ Proyectos:');
  proyectos.forEach(p => {
    console.log(`${p.id}. [${p.estado.toUpperCase()}] ${p.nombre}`);
  });
}

// 3. Actualizar estado: Solo permite "en progreso" o "finalizado"
function actualizarEstado(id) {
  if (!id) {
    console.log('❌ Debés pasar el ID del proyecto.');
    return;
  }
  const proyectos = cargar(ARCHIVO);
  const idNum = parseInt(id);
  const proyecto = proyectos.find(p => p.id === idNum);
  if (!proyecto) {
    console.log(`❌ No se encontró proyecto con ID ${idNum}.`);
    return;
  }

  // Estados válidos y orden de ciclo
  const estadosValidos = ['pendiente', 'en progreso', 'finalizado'];
  const actualIndex = estadosValidos.indexOf(proyecto.estado);

  if (actualIndex === -1) {
    console.log(`❌ Estado actual desconocido: ${proyecto.estado}`);
    return;
  }
  if (actualIndex === estadosValidos.length - 1) {
    console.log(`ℹ️ El proyecto ya está en estado "${proyecto.estado}" y no puede avanzar más.`);
    return;
  }

  // Avanzar al siguiente estado
  proyecto.estado = estadosValidos[actualIndex + 1];
  guardar(ARCHIVO, proyectos);
  console.log(`✅ Proyecto "${proyecto.nombre}" actualizado a estado "${proyecto.estado}".`);
}

// Menú por consola
const [,, comando, ...args] = process.argv;

switch (comando) {
  case 'agregar':
    agregarProyecto(args.join(' '));
    break;
  case 'listar':
    listarProyectos();
    break;
  case 'actualizarEstado':
    actualizarEstado(args[0]);
    break;
  default:
    console.log('⚠️ Comando no reconocido. Usá: agregar nombre | listar | actualizarEstado id');
}
