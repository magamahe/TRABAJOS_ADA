/* ## 🔸 Ejercicio 8: Contá cuántos nombres comienzan con vocal

Con `['Ana', 'Oscar', 'Luis', 'Esteban', 'Marta', 'Ignacio']`, contá cuántos nombres **empiezan con vocal**. */




///PRIMERA FORMA
const nombres = ['Ana', 'Oscar', 'Luis', 'Esteban', 'Marta', 'Ignacio'];

const vocales = ['a', 'e', 'i', 'o', 'u'];

const cuenta = nombres.filter(nombre => {
    const primera_letra = nombre[0].toLowerCase();
    return vocales.includes(primera_letra);
});
console.log(" Se usa filter, includes")
console.log(cuenta.length);




/////SEGUNDA FORMA
//const nombres = ['Ana', 'Oscar', 'Luis', 'Esteban', 'Marta', 'Ignacio'];
//const vocales = ['a', 'e', 'i', 'o', 'u'];

const cantidad = nombres.reduce((acum, nombre) => {
  const primeraLetra = nombre[0].toLowerCase();
  if (vocales.includes(primeraLetra)) {
    return acum + 1;
  }
  return acum;
}, 0);

console.log("Se usa reduce, includes");

console.log(`Cantidad de nombres que empiezan con vocal: ${cantidad}`);
