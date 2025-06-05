// Ejercicio 3: Constantes / Validación de Edad: 
//Más adelante vamos a querer validar que nuestros encuestados sean de 18 años de edad mínima y 99 años de edad máxima. 
//Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas en dos constantes (asignándoles los valores numéricos 18 y 99 respectivamente). Por último, Deberás pedirle al usuario que ingrese su edad para validarla usando parseInt.
const prompt = require("prompt-sync")();

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;
edad = parseInt(prompt("Por favor, ingresa tu edad: "));

const mensaje = (edad < EDAD_MINIMA || edad > EDAD_MAXIMA)
    ? `La edad ingresada ${edad} años no es válida. Debe estar entre ${EDAD_MINIMA} y ${EDAD_MAXIMA} años.`
    : `La edad ingresada ${edad} años es válida y esta comprendida entre ${EDAD_MINIMA} y ${EDAD_MAXIMA} años..`;

console.log(mensaje);
