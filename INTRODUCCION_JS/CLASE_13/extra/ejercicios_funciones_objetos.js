
// ==========================
// FUNCIONES DECLARADAS
// ==========================

/* // 1. Suma de dos números
function suma(a, b) {
    return  a + b;
}
console.log(suma(5, -3)); // 8 */

 
// 2. Verificar mayoría de edad
/* function esMayorDeEdad(edad) {
    return edad <= 18 ?  "Eres menor de edad": "Eres mayor de edad";
}

 console.log(esMayorDeEdad(2,0)); // "Eres mayor de edad" */

// 3. Tabla de multiplicar del 1 al 10
/* function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
tablaMultiplicar(5); // Imprime la tabla de multiplicar del 5 */


// 4. Verificar si un número es par o impar
/* function esPar(numero) {
    return numero % 2 === 0 ? "El número es par" : "El número es impar";
}
console.log(esPar(4)); // "El número es par"
console.log(esPar(5)); // "El número es impar" */


// ==========================
// FUNCIONES EXPRESADAS
// ==========================

// 1. Área de un triángulo
/* const areaTriangulo = function(base, altura) {
    return (base * altura) / 2;
};

console.log(areaTriangulo(5, 10)); // 25 */

// 2. Saludo personalizado
/* const saludo = function(nombre) {
    return `¡Hola, ${nombre}! ¿Cómo estás?`;
};

console.log(saludo("Juan")); // "¡Hola, Juan! ¿Cómo estás?" */


// 3. Celsius a Fahrenheit
/* const convertirAFahrenheit = function(celsius) {
    return (celsius * 9/5) + 32;
};
console.log(convertirAFahrenheit(0)); // 32 */

// 4. Palabra invertida
/* const invertirPalabra = function(palabra) {
    return palabra.split('').reverse().join('');
};
console.log(invertirPalabra("hola")); // "aloh"
 */


// ==========================
// FUNCIONES FLECHA
// ==========================
/* 
// 1. Cuadrado de un número
const cuadrado = (numero) => numero * numero;
};
console.log(cuadrado(4)); // 16

// 2. Contar letras
const contarLetras = (cadena) => cadena.length;

console.log(contarLetras("Hola")); // 4

// 3. Filtrar números pares
const filtrarPares = (array) => array.filter(numero => numero % 2 === 0);

console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// 4. Contar mayores de 18
const contarMayores = (edades) => edades.filter(edad => edad >= 18).lenght;
};
console.log(contarMayores([15, 20, 18, 22, 17])); // 2
 */
/*

// ==========================
// OBJETOS
// ==========================

// 1. Objeto persona
const persona = {
    nombre: "Maria",
    edad: 23,
    ciudad: "San Rafael-Mza"
};

// 2. Método saludar
persona.saludar = function() {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años. Vivo en ${this.ciudad}.`;
};

// 3. Objeto coche
const coche = {
    marca: "Peugeot",
    encender: function() {
        return `El coche de marca ${this.marca} está encendido.`;
    }
};

// 4. Descripción del producto
function describirProducto(producto) {
    return `El producto ${producto.nombre} cuesta $${producto.precio} y es de la marca ${producto.marca}.`;
}

// 5. Array de estudiantes
const estudiantes = [
    { nombre: "Ana", promedio: 8.5 },
    { nombre: "Luis", promedio: 7.2 },
    { nombre: "Carlos", promedio: 9.1 }
];

// Mostrar nombres y promedios
const mostrarEstudiantes = (estudiantes) => {
    estudiantes.forEach(estudiante => {
        console.log(`Nombre: ${estudiante.nombre}, Promedio: ${estudiante.promedio}`);
    });

estudiantes.forEach(est => {
    console.log(`Nombre: ${est.nombre}, Promedio: ${est.promedio}`);
});    */