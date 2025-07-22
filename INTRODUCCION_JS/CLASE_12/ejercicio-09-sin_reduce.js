// Matriz de gastos: 4 semanas x 7 días
const gastos = [
  [1135, 2500, 900, 1600, 2800, 3650, 1100],  // Semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800],  // Semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // Semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950]    // Semana 4
];

// a) Total de gastos en una semana dada
function totalSemana(gastos, numeroSemana) {
  const fila = numeroSemana - 1; // Convertir a índice base 0
  let suma = 0;
  for (let i = 0; i < gastos[fila].length; i++) {
    suma += gastos[fila][i];
  }
  return suma;
}

// b) Total de gastos en un día dado
function totalDia(gastos, numeroDia) {
  const col = numeroDia - 1; // índice base 0
  let suma = 0;
  for (let fila = 0; fila < gastos.length; fila++) {
    suma += gastos[fila][col];
  }
  return suma;
}

// c) Total de gastos en todo el mes
function totalMes(gastos) {
  let total = 0;
  for (let fila = 0; fila < gastos.length; fila++) {
    for (let col = 0; col < gastos[fila].length; col++) {
      total += gastos[fila][col];
    }
  }
  return total;
}

// d) Obtener la semana que más gastos tuvo
function semanaMasGastos(gastos) {
  let maxGastos = 0;
  let semanaMax = 0;
  for (let i = 0; i < gastos.length; i++) {
    let sumaSemana = 0;
    for (let j = 0; j < gastos[i].length; j++) {
      sumaSemana += gastos[i][j];
    }
    if (sumaSemana > maxGastos) {
      maxGastos = sumaSemana;
      semanaMax = i + 1; // +1 para que sea semana 1, 2, 3, ...
    }
  }
  return { semanaMax, maxGastos };
}

// e) Obtener el día que más gastos tuvo
function diaMasGastos(gastos) {
  const dias = gastos[0].length;
  let maxGastos = 0;
  let diaMax = 0;
  for (let col = 0; col < dias; col++) {
    let sumaDia = 0;
    for (let fila = 0; fila < gastos.length; fila++) {
      sumaDia += gastos[fila][col];
    }
    if (sumaDia > maxGastos) {
      maxGastos = sumaDia;
      diaMax = col + 1; // +1 para que sea día 1, 2, 3, ...
    }
  }
  return { diaMax, maxGastos };
}

// Ejemplo de uso:
console.log("a) Total gastos semana 2:", totalSemana(gastos, 2));
console.log("b) Total gastos día 3:", totalDia(gastos, 3));
console.log("c) Total gastos mes:", totalMes(gastos));

const semanaMax = semanaMasGastos(gastos);
console.log(`d) Semana con más gastos: Semana ${semanaMax.semanaMax} con ${semanaMax.maxGastos} gastos`);

const diaMax = diaMasGastos(gastos);
console.log(`e) Día con más gastos: Día ${diaMax.diaMax} con ${diaMax.maxGastos} gastos`);
