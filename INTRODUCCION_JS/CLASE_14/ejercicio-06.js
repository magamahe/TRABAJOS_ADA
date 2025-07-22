/* ● Ejercicio 6: El deportista 
Para este ejercicio deberán definir un objeto literal “deportista”, con los 
siguientes atributos: nombre, energía, experiencia. 
Ademas queremos poder pedirle al deportista que entrene. Para esto, 
nuestro trabajo va a ser realizar una función “entrenarHoras.” 
La función entrenarHoras tiene las siguientes tres características: 
✔ Recibe por parámetro la cantidad de horas. 
✔ Resta a su energía (this.energia) la cantidad de horas x 5. 
✔ Incrementa su experiencia (this.experiencia) la cantidad de horas x 2. 
Una vez definida la función, podemos ejecutar el código y ver cómo va 
variando la energía y experiencia del deportista por consola. */

/* const deportista = {
    nombre: "Gabriela" , 
    energia: 10,
    experiencia: 5,
    entrenarHoras(horas){
        this.energia -=  (horas * 5);
        this.experiencia += (horas * 2); 
    }
}


console.log("Estado inicial:", deportista);

deportista.entrenarHoras(5);

console.log("Después de entrenar 5 horas:", deportista);
 */



const deportista = {
  nombre: "Gabriela",
  energia: 1,
  experiencia: 0,
  entrenarHoras(horas) {
    const energiaPerdida = horas * 5;
    const experienciaGanada = horas * 2;

    if (this.energia - energiaPerdida < 0) {
      console.log("¡No tienes suficiente energía para entrenar tantas horas!");
      return;
    }

    this.energia -= energiaPerdida;
    this.experiencia += experienciaGanada;
  }
};

console.log("Antes de entrenar:", deportista);
deportista.entrenarHoras(5); // Intentar entrenar 5 horas con energía 10
console.log("Después de entrenar 5 horas:", deportista);
