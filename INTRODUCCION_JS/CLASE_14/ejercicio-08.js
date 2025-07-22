/* Ejercicio 8: Funcion backEnd() 
Creá la función backEnd() que recibirá 2 números como parámetros. La 
función deberá imprimir por pantalla los números del 1 al 100, pero teniendo 
en cuenta los siguientes criterios: 
✔ Si el número a imprimir es múltiplo del primer parámetro que se 
ingresó, deberá mostrar el string “Back” en lugar del número. 
✔ Si el número a imprimir es múltiplo del segundo parámetro ingresado, 
deberá mostrar el string “End” en su lugar del número. 
✔ Si el número a imprimir es múltiplo de ambos parámetros, deberá 
mostrar el string “Back End” en lugar del número. */

const backEndTool = {
  limite: 100,
  mensaje1: "Back",
  mensaje2: "End",
  mensajeAmbos: "Back End",
  
  generar: function(n1, n2) {
    const resultado = [];
    for (let i = 1; i <= this.limite; i++) {
      if (i % n1 === 0 && i % n2 === 0) {
        resultado.push(this.mensajeAmbos);
      } else if (i % n1 === 0) {
        resultado.push(this.mensaje1);
      } else if (i % n2 === 0) {
        resultado.push(this.mensaje2);
      } else {
        resultado.push(i);
      }
    }
    return resultado;
  }
};

const salida = backEndTool.generar(2, 3);
console.log(salida);
