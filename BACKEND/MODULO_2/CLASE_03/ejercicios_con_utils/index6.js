// index_6.js - Gestión de un diario personal
const { cargar, guardar } = require('./utils');
const ARCHIVO = 'diario.json';

// 1. Agregar entrada con fecha y texto
function agregarEntrada(texto) {
  if (!texto) {
    console.log('❌ Debés pasar el texto de la entrada.');
    return;
  }
  const diario = cargar(ARCHIVO);
  const nuevaEntrada = {
    id: diario.length + 1,
    fecha: new Date().toLocaleString(), // fecha y hora actuales
    texto: texto.trim()
  };
  diario.push(nuevaEntrada);
  guardar(ARCHIVO, diario);
  console.log(`✅ Entrada agregada: "${texto.trim()}" (${nuevaEntrada.fecha})`);
}

// 2. Listar entradas
function listarEntradas() {
  const diario = cargar(ARCHIVO);
  if (diario.length === 0) {
    console.log('📭 No hay entradas en el diario.');
    return;
  }
  console.log('📖 Entradas del diario:');
  diario.forEach(e => {
    console.log(`${e.id}. [${e.fecha}] ${e.texto}`);
  });
}

// 3. Eliminar entrada por ID
function eliminarEntrada(id) {
  if (!id) {
    console.log('❌ Debés pasar el ID de la entrada a eliminar.');
    return;
  }
  const diario = cargar(ARCHIVO);
  const idNum = parseInt(id);
  const nuevasEntradas = diario.filter(e => e.id !== idNum);
  if (nuevasEntradas.length === diario.length) {
    console.log(`❌ No se encontró entrada con ID ${idNum}.`);
    return;
  }
  guardar(ARCHIVO, nuevasEntradas);
  console.log(`🗑️ Entrada con ID ${idNum} eliminada.`);
}

// Menú por consola
const [,, comando, ...args] = process.argv;

switch (comando) {
  case 'agregar':
    agregarEntrada(args.join(' '));
    break;
  case 'listar':
    listarEntradas();
    break;
  case 'eliminar':
    eliminarEntrada(args[0]);
    break;
  default:
    console.log('⚠️ Comando no reconocido. Usá: agregar texto | listar | eliminar id');
}
