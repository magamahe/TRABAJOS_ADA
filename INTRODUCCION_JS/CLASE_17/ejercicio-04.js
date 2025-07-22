/* Ejercicio 4: Transformación y Análisis de Cadenas
Pide al usuario que ingrese una lista de nombres separados por comas. Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”, “Pablo” y “Pedro”.
Luego, escribe la función “transformarYAnalizarNombres”que realice las siguientes tareas:
1. Quite los espacios en blanco alrededor de cada nombre.
2. Verifique si existe el nombre "Juan".
3. Reemplace todos los nombres "María" por "Ana".
4. Encuentre el índice del nombre "Pedro".
5. Devuelva una cadena de nombres en orden alfabético separados por puntos. Investigar el método “.sort()”
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort/*  */ 

const prompt = require("prompt-sync")();

// Pedimos al usuario una lista de nombres separados por comas
const entradaUsuario = prompt("📋 Ingresá una lista de nombres separados por comas (Ej: Julian, Maria, Malena, Andrea, Pablo, Pedro):" );

// Función que transforma y analiza los nombres
function transformarYAnalizarNombres(cadena) {
  
    const nombres = cadena.split(",").map(nombre => nombre.trim());   // 1. Separar y quitar espacios alrededor de cada nombre
    const existeJuan = nombres.includes("Juan"); // 2. Verificar si existe el nombre "Juan"
    const nombresReemplazados = nombres.map(nombre => nombre === "Maria" ? "Ana" : nombre); // 3. Reemplazar "Maria" (sin tilde) por "Ana"
    const indicePedro = nombresReemplazados.indexOf("Pedro");  // 4. Encontrar el índice de "Pedro"
    const nombresOrdenados = [...nombresReemplazados].sort().join(".");  // 5. Orden alfabético y unir con puntos
    
    return {    // Devolver resultados como objeto
        existeJuan,
        indicePedro,
        nombresOrdenados
    };
}

// Ejecutar función y mostrar resultados
const resultado = transformarYAnalizarNombres(entradaUsuario);
/* console.log(entradaUsuario)
console.log(nombres) */
console.log("Resultado del análisis de nombres:");
console.log(resultado);
