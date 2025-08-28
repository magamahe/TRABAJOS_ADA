/* Ejercicio 1: Creación y Manipulación de un Objeto JSON
1.Dentro de la carpeta ADA_TRABAJOS, crea una nueva carpeta llamada clase2.
2.En la carpeta clase2, crea un archivo JavaScript llamado actividad1.js.
3.En este archivo, crea un objeto JSON que represente un libro. El objeto debe tener las siguientes propiedades: titulo, autor, año, genero (puede ser un array de géneros).
Instrucciones:
• Muestra en la consola el título y el autor del libro.
• Actualiza el año del libro a un valor más reciente.
• Añade una nueva propiedad llamada páginas que indique el número de páginas del libro.
• Muestra el objeto actualizado en la consola. */

// Creamos el objeto libro
const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  anio: 1967,
  genero: ["Realismo mágico", "Ficción", "Literatura latinoamericana"]
};

// Mostrar en consola el título y el autor
console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);

// Actualizar el año del libro
libro.anio = 2020;

// Añadir nueva propiedad: páginas
libro.paginas = 417;

// Mostrar el objeto actualizado en consola
console.log("Libro actualizado:", libro);
