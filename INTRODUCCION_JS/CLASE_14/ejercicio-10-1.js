/// CON PUSH Y FILTER

const prompt = require('prompt-sync')();

const floresFavoritas = {
  flores: [],

  cargarFlores: function() {
    for (let i = 0; i < 3; i++) {
      const flor = prompt(`Ingrese la flor favorita número ${i + 1}: `).toLowerCase().trim();
      this.flores.push(flor);
    }
  },

  contarFlor: function(florBuscada) {
    const florNormalizada = florBuscada.toLowerCase().trim();
    return this.flores.filter(flor => flor === florNormalizada).length;
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

// Uso
floresFavoritas.cargarFlores();

const florABuscar = prompt("¿Qué flor querés buscar entre tus favoritas? ");
floresFavoritas.mostrarResultado(florABuscar);
