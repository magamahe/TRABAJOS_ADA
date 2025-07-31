const { cargar, guardar } = require('./utils');

const perfil = cargar('perfil.json');
perfil.hobby = "Programar y escuchar música";
guardar('perfil.json', perfil);
console.log("🎨 Perfil actualizado con hobby.");