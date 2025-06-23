/* ● Ejercicio 2: Filtra los números pares de una lista 
Tienes una lista con varios números: [1, 2, 3, 4, 5, 6]. Queremos separar y 
guardar únicamente los números pares en una nueva lista. Los números 
pares son aquellos que se pueden dividir entre 2 sin dejar residuo. Una vez 
que hayas creado la nueva lista, muéstrala en la consola. 
 */

const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter(numero => numero % 2 == 0);
console.log(pares);