/* ● Encuentra la película más corta y analiza los títulos largos 
Supón que tienes una lista de películas con su duración en minutos: 
const movies = [ 
{ title: 'El Señor de los Anillos', duration: 200 }, 
{ title: 'Inception', duration: 148 }, 
{ title: 'Matrix', duration: 136 }, 
{ title: 'Toy Story', duration: 81 }, 
{ title: 'Coco', duration: 105 } 
]; 
Queremos: 
o Encontrar la película más corta en duración. 
o De las películas restantes, quedarnos con aquellas cuyo título tenga 
más de 10 caracteres. 
o Crear una lista de los títulos largos en minúsculas. 
o Imprime en la consola: 
o El título de la película más corta. 
o La lista de títulos largos en minúsculas. */

const movies = [ 
  { title: 'El Señor de los Anillos', duration: 200 }, 
  { title: 'Inception', duration: 148 }, 
  { title: 'Matrix', duration: 136 }, 
  { title: 'Toy Story', duration: 81 }, 
  { title: 'Coco', duration: 105 } 
];

// 1. Encontrar la película más corta
const peliculaMasCorta = movies.reduce((min, pelicula) => {
  return pelicula.duration < min.duration ? pelicula : min;
}, movies[0]);

// 2. Filtrar las películas restantes (excluyendo la más corta)
const peliculasRestantes = movies.filter(pelicula => pelicula !== peliculaMasCorta);

// 3. Quedarse con los títulos que tengan más de 10 caracteres
const titulosLargos = peliculasRestantes
  .filter(pelicula => pelicula.title.length > 10)
  .map(pelicula => pelicula.title.toLowerCase());

// 4. Imprimir resultados
console.log('Película más corta:', peliculaMasCorta.title);
console.log('Títulos largos en minúsculas:', titulosLargos);

