const auto = {
  modelosAutos: [
    "fiat", "peugeot", "chevrolet", "bmw", "fiat",
    "bmw", "chevrolet", "peugeot", "toyota", "toyota"
  ],

  ultimaAparicionModeloAuto: function(modelo) {
    let ultimaPosicion = -1;

    for (let i = 0; i < this.modelosAutos.length; i++) {
      if (this.modelosAutos[i].toLowerCase().trim() === modelo.toLowerCase().trim()) {
        ultimaPosicion = i;
      }
    }

    if (ultimaPosicion === -1) {
      console.log(`El modelo de automóvil "${modelo}" no se encuentra presente.`);
    } else {
      console.log(`El modelo "${modelo}" aparece por última vez en la posición ${ultimaPosicion + 1}.`);
    }
  }
};

// 📌 Pruebas
auto.ultimaAparicionModeloAuto("peugeot");  // posición 8
auto.ultimaAparicionModeloAuto("FiAt");     // posición 5
auto.ultimaAparicionModeloAuto("tesla");    // no se encuentra
