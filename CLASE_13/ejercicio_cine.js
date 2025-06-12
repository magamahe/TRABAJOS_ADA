/* const prompt = require("prompt-sync")();
let cine = [
  ["libre", "ocupado", "libre"],
  ["libre", "libre", "ocupado"],
  ["ocupado", "libre", "libre"]
];

alert("🎬 Bienvenido al cine. ¡Reservá tu asiento!");

let fila = parseInt(prompt("Elegí la fila (0 a 2):"));
let columna = parseInt(prompt("Elegí la columna (0 a 2):"));

if (cine[fila][columna] === "libre") {
  cine[fila][columna] = "ocupado";
  alert("✅ ¡Reserva exitosa!");
} else {
  alert("❌ Esa butaca ya está ocupada.");
}

let estado = "🪑 Estado actual de la sala:\n";
for (let i = 0; i < cine.length; i++) {
  estado += "Fila " + i + ": " + cine[i].join(" | ") + "\n";
}
alert(estado); */

const prompt = require("prompt-sync")();

let cine = [
  ["libre", "ocupado", "libre"],
  ["libre", "libre", "ocupado"],
  ["ocupado", "libre", "libre"]
];

console.log("🎬 Bienvenido al cine. ¡Reservá tu asiento!");

let fila = parseInt(prompt("Elegí la fila (0 a 2):"));
let columna = parseInt(prompt("Elegí la columna (0 a 2):"));

if (cine[fila][columna] === "libre") {
  cine[fila][columna] = "ocupado";
  console.log("✅ ¡Reserva exitosa!");
} else {
  console.log("❌ Esa butaca ya está ocupada.");
}

let estado = "🪑 Estado actual de la sala:\n";
for (let i = 0; i < cine.length; i++) {
  estado += "Fila " + i + ": " + cine[i].join(" | ") + "\n";
}
console.log(estado);
