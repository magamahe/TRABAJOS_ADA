/* ● Ejercicio 10: Flores Favoritas 
Escribe un programa en JavaScript para contar cuántas veces el usuario 
menciona sus flores favoritas. Realiza las siguientes acciones: 
1. Inicializa un array vacío para almacenar las flores favoritas. 
2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y 
agrega cada una al array manualmente (sin usar métodos como push). 
3. Pregunta al usuario por una flor específica y verifica si está entre sus 
favoritas. 
4. Muestra por consola cuántas de las flores favoritas se mencionaron (esto 
debe hacerse manualmente).  */
const prompt = require('prompt-sync')();

const floresFavoritas = {
  flores: new Array(3),  // array vacío de 3 posiciones
  
  cargarFlores: function() {
    for(let i = 1; i <= 3; i++) {
      const flor = prompt(`Ingrese 3 flores favoritas, la ${i}° flor: `).toLowerCase().trim();
      this.flores[i] = flor;  // cargamos manualmente sin usar push
    }
  },

  contarFlor: function(florBuscada) {
    let contador = 0;
    const florNormalizada = florBuscada.toLowerCase().trim();

    for(let i = 0; i < this.flores.length; i++) {
      if(this.flores[i] === florNormalizada) {
        contador++;
      }
    }

    return contador;
  },

  mostrarResultado: function(florBuscada) {
    const cantidad = this.contarFlor(florBuscada);
    if (cantidad > 0) {
      console.log(`La flor "${florBuscada}" fue mencionada ${cantidad} vez/veces entre tus favoritas.`);
    } else {
      console.log(`La flor "${florBuscada}" NO está entre tus favoritas.`);
    }
  }
};

// Uso:
floresFavoritas.cargarFlores();

const florABuscar = prompt("¿Qué flor querés buscar entre tus favoritas? ");
floresFavoritas.mostrarResultado(florABuscar);
