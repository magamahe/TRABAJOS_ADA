const prompt = require("prompt-sync")();
// Sistema de Gestión de Biblioteca
// -------------------------------

// Punto 1: Estructura de datos
const libros = [
  { id: 1, titulo: "Cien Años de Soledad", autor: " Gabriel Garcia Marquez ", anio: 1967, genero: "Realismo mágico", disponible: true },
  { id: 2, titulo: "1984", autor: "George Orwell", anio: 1949, genero: "Distopía", disponible: true },
  { id: 3, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", anio: 1943, genero: "Fábula", disponible: true },
  { id: 4, titulo: "Crónica de una muerte anunciada", autor: "Gabriel Garcia Marquez", anio: 1981, genero: "Novela", disponible: true },
  { id: 5, titulo: "Rayuela", autor: "Julio Cortázar", anio: 1963, genero: "Experimental", disponible: true },
  { id: 6, titulo: "Fahrenheit 451", autor: "Ray Bradbury", anio: 1953, genero: "Ciencia ficción", disponible: true },
  { id: 7, titulo: "La Odisea", autor: "Homero", anio: -800, genero: "Épica", disponible: true },
  { id: 8, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio: 1605, genero: "Novela", disponible: true },
  { id: 9, titulo: "Orgullo y Prejuicio", autor: "Jane Austen", anio: 1813, genero: "Romance", disponible: true },
  { id: 10, titulo: "Mujercitas", autor: "Louisa May Alcott", anio: 1868, genero: "Drama", disponible: true }
];

const usuarios = [
  { id: 1, nombre: "Ana", email: "ana@mail.com", librosPrestados: [] },
  { id: 2, nombre: "Luis", email: "luis@mail.com", librosPrestados: [] },
  { id: 3, nombre: "Sofía", email: "sofia@mail.com", librosPrestados: [] },
  { id: 4, nombre: "Pedro", email: "pedro@mail.com", librosPrestados: [] },
  { id: 5, nombre: "Lucía", email: "lucia@mail.com", librosPrestados: [] }
];

// Punto 2: Gestión de Libros
function agregarLibro(id, titulo, autor, anio, genero) {
  libros.push({ id, titulo, autor, anio, genero, disponible: true });
  console.log("Libro agregado exitosamente.");
}

function buscarLibro(criterio, valor) {
  return libros.filter(libro => libro[criterio].toLowerCase().includes(valor.toLowerCase()));
}

function ordenarLibros(criterio) {
  for (let i = 0; i < libros.length - 1; i++) {
    for (let j = 0; j < libros.length - i - 1; j++) {
      if (libros[j][criterio] > libros[j + 1][criterio]) {
        [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];
      }
    }
  }
  console.log(libros);
  console.log("Libros ordenados por " + criterio);
}

function borrarLibro(id) {
  const index = libros.findIndex(libro => libro.id == id);
  if (index !== -1) {
    if (libros[index].disponible) {
      libros.splice(index, 1);
      console.log("Libro eliminado.");
    } else {
      console.log("No se puede eliminar un libro prestado.");
    }
  } else {
    console.log("Libro no encontrado.");
  }
}

// Punto 3: Gestión de Usuarios
function registrarUsuario(nombre, email) {
  const nuevoId = usuarios.length + 1;
  usuarios.push({ id: nuevoId, nombre, email, librosPrestados: [] });
  console.log("Usuario registrado correctamente.");
}

function mostrarTodosLosUsuarios() {
  console.log(usuarios);
}

function buscarUsuario(email) {
  return usuarios.find(usuario => usuario.email.toLowerCase() === email.toLowerCase());
}

function borrarUsuario(nombre, email) {
  const index = usuarios.findIndex(u => u.nombre === nombre && u.email === email);
  if (index !== -1) {
    if (usuarios[index].librosPrestados.length === 0) {
      usuarios.splice(index, 1);
      console.log("Usuario eliminado.");
    } else {
      console.log("No se puede eliminar usuario con libros prestados.");
    }
  } else {
    console.log("Usuario no encontrado.");
  }
}

// Punto 4: Préstamos
function prestarLibro(idLibro, idUsuario) {
  const libro = libros.find(l => l.id == idLibro);
  const usuario = usuarios.find(u => u.id == idUsuario);
  if (libro && usuario && libro.disponible) {
    libro.disponible = false;
    usuario.librosPrestados.push(libro.id);
    console.log("Libro prestado correctamente.");
  } else {
    console.log("No se pudo prestar el libro.");
  }
}

function devolverLibro(idLibro, idUsuario) {
  const libro = libros.find(l => l.id == idLibro);
  const usuario = usuarios.find(u => u.id == idUsuario);
  if (libro && usuario) {
    libro.disponible = true;
    usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro);
    console.log("Libro devuelto correctamente.");
  } else {
    console.log("No se pudo devolver el libro.");
  }
}

// Punto 5: Reporte de Libros
function generarReporteLibros() {
  const total = libros.length;
  const prestados = libros.filter(l => !l.disponible).length;
  const porGenero = libros.reduce((acc, libro) => {
    acc[libro.genero] = (acc[libro.genero] || 0) + 1;
    return acc;
  }, {});
  const masAntiguo = libros.reduce((a, b) => (a.anio < b.anio ? a : b));
  const masNuevo = libros.reduce((a, b) => (a.anio > b.anio ? a : b));

  console.log({ total, prestados, porGenero, masAntiguo, masNuevo });
}

// Punto 6: Títulos con más de una palabra
function librosConPalabrasEnTitulo() {
  const resultado = libros
    .filter(l => /^[a-zA-Z\s]+$/.test(l.titulo) && l.titulo.trim().split(" ").length > 1)
    .map(l => l.titulo);
  console.log(resultado);
}

// Punto 7: Estadísticas
function calcularEstadisticas() {
  const anios = libros.map(l => l.anio);
  const promedio = anios.reduce((a, b) => a + b) / anios.length;
  const frecuencia = {};
  let max = 0, anioMasFrecuente;
  anios.forEach(a => {
    frecuencia[a] = (frecuencia[a] || 0) + 1;
    if (frecuencia[a] > max) {
      max = frecuencia[a];
      anioMasFrecuente = a;
    }
  });
  const diferencia = Math.max(...anios) - Math.min(...anios);
  console.log({ promedio, anioMasFrecuente, diferencia });
}

// Punto 8: Normalización
function normalizarDatos() {
  libros.forEach(l => {
    l.titulo = l.titulo.toUpperCase();
    l.autor = l.autor.trim();
  });
  usuarios.forEach(u => u.email = u.email.toLowerCase());
  console.log("Datos normalizados.");
}

// Punto 9: Menú iterativo
function menuPrincipal() {
  let opcion;
  do {
       opcion = prompt(`\n--- SISTEMA DE BIBLIOTECA ---\nSeleccione una opción:
        \n1. Agregar libro
        \n2. Buscar libro
        \n3. Ordenar libros
        \n4. Borrar libro
        \n5. Registrar usuario
        \n6. Ver todos los usuarios
        \n7. Buscar usuario
        \n8. Borrar usuario
        \n9. Prestar libro
        \n10. Devolver libro
        \n11. Reporte de libros
        \n12. Libros con títulos largos
        \n13. Estadísticas
        \n14. Normalizar datos\n0. Salir\n`);

    switch (opcion) {
      case "1":
        agregarLibro(
          parseInt(prompt("- ID: ")),
          prompt("- Título: "),
          prompt("- Autor: "),
          parseInt(prompt("- Año: ")),
          prompt("- Género: ")
        );
        break;
      case "2":
        const crit = prompt("Buscar por: ¿titulo, autor o genero?  ");
        const val = prompt("Ingrese valor");
        console.log(buscarLibro(crit, val));
        break;
      case "3":
        const criterio = prompt("Ordenar por: titulo o anio");
        ordenarLibros(criterio);
        break;
      case "4":
        borrarLibro(parseInt(prompt("ID del libro")));
        break;
      case "5":
        registrarUsuario(prompt("Nombre"), prompt("Email"));
        break;
      case "6":
        mostrarTodosLosUsuarios();
        break;
      case "7":
        console.log(buscarUsuario(prompt("Email")));
        break;
      case "8":
        borrarUsuario(prompt("Nombre"), prompt("Email"));
        break;
      case "9":
        prestarLibro(parseInt(prompt("ID libro")), parseInt(prompt("ID usuario")));
        break;
      case "10":
        devolverLibro(parseInt(prompt("ID libro")), parseInt(prompt("ID usuario")));
        break;
      case "11":
        generarReporteLibros();
        break;
      case "12":
        librosConPalabrasEnTitulo();
        break;
      case "13":
        calcularEstadisticas();
        break;
      case "14":
        normalizarDatos();
        break;
      case "0":
        console.log("Gracias por usar el sistema. ¡Hasta luego!");
        break;
      default:
        console.log("Opción no válida. Intente nuevamente.");
    }
  } while (opcion !== "0");
}

// Ejecutar menú principal
menuPrincipal();
