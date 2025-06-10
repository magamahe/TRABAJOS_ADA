/* ●	Ejercicio 9: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera. 

a)	Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. 
b)	La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
c)	Por último, es necesario tener el total de gastos realizados en el mes.
✔	Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
✔	Posibles matrices para comprobar los resultados.
 	Día 1	Día 2	Día 3	Día 4	Día 5	Día 6	Día 7
Semana 1	 1135	 2500	 900	 1600	 2800	 3650	 1100
Semana 2	 1750	 1890	 1900	 1300	 898	 1750	 2800
Semana 3	 1700	 1150	 1690	 1900	 1770	 4500	 2560
Semana 4	 800	 1250	 1430	 2100	 1980	 1270	 950

 */

// Matriz de gastos: 4 semanas x 7 días
const gastos = [
  [1135, 2500, 900, 1600, 2800, 3650, 1100],  // Semana 1 (fila 0)
  [1750, 1890, 1900, 1300, 898, 1750, 2800],  // Semana 2 (fila 1)
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // Semana 3 (fila 2)
  [800, 1250, 1430, 2100, 1980, 1270, 950]    // Semana 4 (fila 3)
];

// a) Total de gastos en una semana dada
function totalSemana(gastos, numeroSemana) {
  const fila = numeroSemana - 1; // convertir a índice base 0
  return gastos[fila].reduce((acc, val) => acc + val, 0);
}

// b) Total de gastos en un día dado
function totalDia(gastos, numeroDia) {
  const col = numeroDia - 1; // índice base 0
  let total = 0;
  for (let fila = 0; fila < gastos.length; fila++) {
    total += gastos[fila][col];
  }
  return total;
}

// c) Total de gastos en todo el mes
function totalMes(gastos) {
  let total = 0;
  for (let fila = 0; fila < gastos.length; fila++) {
    total += gastos[fila].reduce((acc, val) => acc + val, 0);
  }
  return total;
}

// d) Obtener la semana que más gastos tuvo
function semanaMasGastos(gastos) {
  let maxGastos = 0;
  let semanaMax = 0;
  for (let i = 0; i < gastos.length; i++) {
    const sumaSemana = gastos[i].reduce((acc, val) => acc + val, 0);
    if (sumaSemana > maxGastos) {
      maxGastos = sumaSemana;
      semanaMax = i + 1; // +1 para que sea 1-based
    }
  }
  return { semanaMax, maxGastos };
}

// d) Obtener el día que más gastos tuvo
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
      diaMax = col + 1; // +1 para que sea 1-based
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
console.log(`d) Día con más gastos: Día ${diaMax.diaMax} con ${diaMax.maxGastos} gastos`);
