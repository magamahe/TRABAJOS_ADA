/* Ejercicio 7: Libros 
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores: 
✔ título: una cadena con el título del libro. 
✔ autor: una cadena con el nombre del autor del libro. 
✔ anioPublicacion: un número con el año de publicación del libro. 
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros 
como parámetro y muestre por consola la información de cada libro en el 
formato especificado. */

const libro1 = {
    titulo: "Mi primer libro",
    autor: "Pedro Picapiedra",
    anioPublicacion: 2021
}

const libro2 = {
    titulo: "Mi segundo libro",
    autor: "Superman",
    anioPublicacion: 2024
}

const mostrarLibro= (libros)=> {
    libros.forEach(libro => {
    console.log(`Título: ${libro.titulo}`);
    console.log(`Autor: ${libro.autor}`);
    console.log(`Año de publicación: ${libro.anioPublicacion}`);
    console.log('---------------------------');

})};     

const listaLibros = [libro1, libro2];

console.log(listaLibros)