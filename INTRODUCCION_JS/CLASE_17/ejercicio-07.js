/* Ejercicio 7: “La Floreria”
Escribe una función "gestionarFloreria" que realice las siguientes tareas con una lista predefinida de nombres de flores:
1. Quite los espacios en blanco alrededor de cada flor.
2. Verifique si existe la flor "Margarita" y, si está presente, agregue "Azucena" al final de la lista.
3. Reemplace todas las flores "Orquídea" por "Clavel".
4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue "Girasol" al inicio de la lista.
Devuelva una cadena de flores en orden alfabético separadas por puntos. */

let entrada = "Rosa, Tulipán, Orquídea, Lirio";

function gestionarFloreria(flores) {
  // 1. Separar por comas y quitar espacios
  let coleccionFlores = flores.split(",").map(f => f.trim());

  // 2. Verificar si existe "Margarita" (sin importar mayúsculas) y agregar "Azucena"
  const tieneMargarita = coleccionFlores.some(f => f.toLowerCase() === "margarita");
  if (tieneMargarita) {
    coleccionFlores.push("Azucena");
  }

  // 3. Reemplazar "Orquídea" por "Clavel" (ignorar mayúsculas)
  coleccionFlores = coleccionFlores.map(f => f.toLowerCase() === "orquídea" ? "Clavel" : f);

  // 4. Verificar si "Girasol" está presente, si no, agregarlo al inicio
  const tieneGirasol = coleccionFlores.some(f => f.toLowerCase() === "girasol");
  if (!tieneGirasol) {
    coleccionFlores.unshift("Girasol");
  }

  // 5. Ordenar alfabéticamente y unir con puntos
  const floresOrdenadas = coleccionFlores.sort().join(".");

  return floresOrdenadas;
}

// Ejecutar y mostrar el resultado
const resultado = gestionarFloreria(entrada);
console.log("🌸 Resultado de la florería:");
console.log(resultado);
