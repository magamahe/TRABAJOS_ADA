// Ejercicio 9: Cálculo del IMC: Escribe un programa que calcule el Índice de Masa Corporal (IMC). El IMC se calcula con la fórmula: 
// Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
// Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
// Pista 2: La fórmula puede representarse asi:

const prompt = require('prompt-sync')();
let peso = parseFloat(prompt("Ingrese su peso en kg: "));
let altura = parseFloat(prompt("Ingrese su altura en metros: "));


if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("Error: Por favor ingrese valores numéricos válidos para peso y altura.");
} else {
    let imc = peso / (altura * altura);
    console.log("----------");
    console.log(`Su peso es: ${peso} kg`);
    console.log(`Su altura es: ${altura} m`);
    console.log(`Su Índice de Masa Corporal (IMC) es: ${imc.toFixed(1)}`);
}
