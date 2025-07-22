/* ● Ejercicio 7: Verificar si una lista contiene un elemento 
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si 
"Sushi" está en la lista y muestra un mensaje que confirme si está o no.  */

const comidas =  ["Pizza", "Hamburguesa", "Tacos"];
const aBuscar= "Sushi";
const esta = comidas.includes(aBuscar);
console.log(
  esta
    ? `La comida "${aBuscar}" se encuentra en la lista: [${comidas.join(", ")}]`
    : `La comida "${aBuscar}" no se encuentra en la lista: [${comidas.join(", ")}]`
);