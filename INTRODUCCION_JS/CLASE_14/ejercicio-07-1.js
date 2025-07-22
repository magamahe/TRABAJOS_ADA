class Libro {
  constructor(titulo, autor, anioPublicacion) {
    this.titulo = titulo;
    this.autor = autor;
    this.anioPublicacion = anioPublicacion;
  }
}

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
const libro2 = new Libro("1984", "George Orwell", 1949);

const libros = [libro1, libro2];

const mostrarLibro= (libros)=> {
    libros.forEach(libro => {
    console.log(`Título: ${libro.titulo}`);
    console.log(`Autor: ${libro.autor}`);
    console.log(`Año de publicación: ${libro.anioPublicacion}`);
    console.log('---------------------------');

})};     

console.log(mostrarLibro(libros))