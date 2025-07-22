const prompt = require('prompt-sync')(); 

const edad = parseInt(prompt(`Ingresar una edad correcta:`));

const rta = (edad) => {
  return edad < 18
    ? "niño"
    : edad >= 18 && edad < 70
    ? "adulto"
    : "adulto mayor";
};

console.log(`Según la edad ingresada :${edad}, sos un ${rta(edad)}.`);