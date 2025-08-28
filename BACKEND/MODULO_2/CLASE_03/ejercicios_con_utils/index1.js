// index_1.js - Registro de libros favoritos
const { cargar, guardar, listar } = require('./utils');
const ARCHIVO = 'libros.json';

// Función para agregar un libro
function agregarLibro(nombre) {
  if (!nombre) {
    console.log('❌ Debés pasar un nombre de libro.');
    return;
  }

  const libros = cargar(ARCHIVO);
  const nuevo = {
    id: libros.length + 1,
    nombre: nombre.trim()
  };
  libros.push(nuevo);
  guardar(ARCHIVO, libros);
  console.log(`📚 Libro agregado: "${nuevo.nombre}"`);
}

// Función para listar libros favoritos
function listarLibros() {
  const libros = cargar(ARCHIVO);
  if (libros.length === 0) {
    console.log('📭 No hay libros favoritos registrados.');
    return;
  }

  console.log('📖 Lista de libros favoritos:');
  libros.forEach((libro, i) => {
    console.log(`${libro.id}. ${libro.nombre}`);
  });
}

// Menú por consola
const [,, comando, ...args] = process.argv;

switch (comando) {
  case 'agregar':
    agregarLibro(args.join(' '));
    break;
  case 'listar':
    listarLibros();
    break;
  default:
    console.log('⚠️ Comando no reconocido. Usá: agregar "nombre del libro" o listar');
}
