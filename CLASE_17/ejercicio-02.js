/* Ejercicio 2: Análisis y Modificación de Cadenas de Texto
Pide al usuario que ingrese una oración. Luego, escribe la función “procesarOracion” que haga lo siguiente:
1. Quite los espacios en blanco al principio y al final.
2. Divida la oración en palabras.
3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar “/a/g” que indica que se debe buscar todas las apariciones del carácter 'a' en la cadena (la bandera g es para global, lo que significa que reemplazará todas las apariciones, no solo la primera).
4. Encuentre la posición de la primera aparición de la palabra "javascript". De no aparecer retornar -1
5. Convierta la oración a una cadena de palabras separadas por guiones.
 */

const prompt = require("prompt-sync")();
const oracionUsuario = prompt("Ingresá una oración:");

// Función para procesar la oración
function procesarOracion(oracion) {
  const oracionLimpia = oracion.trim(); // 1. Quitar espacios al principio y al final
  const palabras = oracionLimpia.split(" "); // 2. Dividir la oración en palabras
  const reemplazada = oracionLimpia.replace(/a/g, "@");// 3. Reemplazar todas las 'a' por '@'
  const posicionJS = oracionLimpia.toLowerCase().indexOf("javascript"); // 4. Buscar la posición de la palabra "javascript"
  const oracionConGuiones = palabras.join("-"); // 5. Convertir en cadena separada por guiones

  return {  // Devolver todo junto como un objeto
    Oracion_original: oracionLimpia,
    Oracion_reemplazada : reemplazada,
    Posicion_de_Javascript: posicionJS,
    Cadena_con_Guiones: oracionConGuiones
  };
}

// Ejecutamos la función y mostramos el resultado
const resultado = procesarOracion(oracionUsuario);
console.log("Resultado del análisis:", resultado);