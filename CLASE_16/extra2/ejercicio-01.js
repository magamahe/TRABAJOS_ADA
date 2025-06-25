/*  Ejercicio 1: Validar email */

//////////////MAS LARGA///////////////////
// Función que recibe un string y devuelve true si parece un email válido.
const prompt = require("prompt-sync")();

// Función que recibe un string y devuelve true si parece un email válido.
function validarEmail(email) {
  if (email.length >= 18) {
    if (email.charAt(8) === "@" && email.charAt(14) === ".") {
      return true;
    }
  }
  return false;
}

const mail = prompt("Ingrese su mail: ");
console.log(validarEmail(mail));



//////////////////MAS CORTA////////////////////////////////////

function validarEmail1(email) {
  return email.includes("@") && email.includes(".");
}

console.log("------------------");
console.log(validarEmail1(mail));


//////////////////OTRA OPCION////////////////////////
function validarEmail2(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

console.log("------------------");
console.log(validarEmail2(mail));

