/* Actividad 1: Registro de libros favoritos
Consigna: ¡Hola! Hoy serás una bibliotecaria digital. Debes crear un programa que permita registrar libros favoritos en un archivo JSON. Implementa las siguientes funciones:
1. Agregar un libro: Se debe agregar un libro a la lista de favoritos. Para esto, el libro tendrá solo un campo: su nombre.
2. Listar los libros: Muestra todos los libros registrados.
Pistas:
• Usa un archivo JSON para guardar los libros.
• Si el archivo no existe, comienza con un arreglo vacío. */

const fs = require('fs');
const FILE_PATH = './archivo.json';

//1. CARGAR
// Función para cargar los libros desde el archivo
cargarLibros= ()=> {
  if (!fs.existsSync(FILE_PATH)) {
    return []; // Si el archivo no existe, devuelve un array vacío
  }
  const contenido = fs.readFileSync(FILE_PATH, 'utf8');
  return JSON.parse(contenido);
}

//GUARDAR
// Función para guardar los libros en el archivo
guardarLibros=(libros)=> {
  const json = JSON.stringify(libros, null, 2); // Formateado con 2 espacios
  fs.writeFileSync(FILE_PATH, json, 'utf8');
}

//AGREGAR
// Función para agregar un libro nuevo
agregarLibro=(nombre)=> {
  const libros = cargarLibros();
  libros.push({ nombre });
  guardarLibros(libros);
  console.log(`📚 Libro agregado: "${nombre}"`);
}


//2.
// Función para listar todos los libros
listarLibros=() =>{
  const libros = cargarLibros();
  if (libros.length === 0) {
    console.log('No hay libros favoritos registrados.');
  } else {
    console.log('Lista de libros favoritos:');
    libros.forEach((libro, index) => {
      console.log(`${index + 1}. ${libro.nombre}`);
    });
  }
}


//MENU
// Detectar comando desde la consola
const [,, comando, ...args] = process.argv;
if (comando === 'agregar') {
  agregarLibro(args[0]);
} else if (comando === 'listar') {
  listarLibros();
} 

/* 
agregarLibro('El Principito');
listarLibros();
console.log('---');

agregarLibro('Cien años de soledad');
listarLibros(); 
 */