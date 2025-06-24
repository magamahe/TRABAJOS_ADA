/* ## 🔸 Ejercicio 5: Mostrá los nombres con índice

Dada una lista `['Juan', 'Pedro', 'Lucía']`, imprimí en consola:

```
1. Juan
2. Pedro
3. Lucía
```
 */

/* const nombres = ['Juan', 'Pedro', 'Lucía'];

for (i = 0; i< nombres.length; i++){
    console.log(` ${i+1} . ${nombres[i]}`);
    
} */

const nombres = ['Juan', 'Pedro', 'Lucía'];

nombres.forEach((nombre, indice) => {
  console.log(`${indice + 1}. ${nombre}`);
});
