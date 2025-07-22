
// ==========================
// 🟢 BÁSICO
// ==========================

function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

function contarVocales(palabra) {
    return palabra.match(/[aeiouáéíóú]/gi)?.length || 0;
}

function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function eliminarDuplicados(arr) {
    return [...new Set(arr)];
}

function contarPalabras(frase) {
    return frase.trim().split(/\s+/).length;
}

// ==========================
// 🟡 INTERMEDIO
// ==========================

function invertirFrase(frase) {
    return frase.split(" ").reverse().join(" ");
}

function esPalindromo(palabra) {
    const limpio = palabra.toLowerCase().replace(/\s/g, "");
    return limpio === limpio.split("").reverse().join("");
}

function masFrecuente(arr) {
    const freq = {};
    let max = 0, res;
    arr.forEach(n => {
        freq[n] = (freq[n] || 0) + 1;
        if (freq[n] > max) {
            max = freq[n];
            res = n;
        }
    });
    return res;
}

function fibonacciHasta(n) {
    const fib = [0, 1];
    while (fib[fib.length - 1] + fib[fib.length - 2] <= n) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
}

function sumarDigitos(numero) {
    return numero.toString().split("").reduce((acc, d) => acc + Number(d), 0);
}

// ==========================
// 🔴 AVANZADO
// ==========================

function aplanarArray(arr) {
    return arr.flat(Infinity);
}

function agruparAnagramas(palabras) {
    const grupos = {};
    palabras.forEach(p => {
        const clave = p.split("").sort().join("");
        if (!grupos[clave]) grupos[clave] = [];
        grupos[clave].push(p);
    });
    return Object.values(grupos);
}

function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function miMap(arr, fn) {
    const resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(fn(arr[i], i));
    }
    return resultado;
}

// ==========================
// EXTRA: ESTRUCTURAS DE CONTROL
// ==========================

function clasificarEdad(edad) {
    if (edad < 13) return "Niñez";
    else if (edad < 18) return "Adolescencia";
    else return "Adultez";
}

function diaDeLaSemana(n) {
    switch (n) {
        case 1: return "Lunes";
        case 2: return "Martes";
        case 3: return "Miércoles";
        case 4: return "Jueves";
        case 5: return "Viernes";
        case 6: return "Sábado";
        case 7: return "Domingo";
        default: return "Número inválido";
    }
}

function contarWhile() {
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
}

function pedirMayorQue10() {
    let num;
    do {
        num = parseInt(prompt("Introduce un número mayor que 10"));
    } while (num <= 10);
    return num;
}

function imprimirPares() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) console.log(i);
    }
}

const triple = (n) => n * 3;

const persona = {
    nombre: "Lucía",
    hablar() {
        return `Hola, soy ${this.nombre}`;
    }
};

const productos = [
    { nombre: "Laptop", precio: 1500 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 100 }
];

productos.forEach(p => console.log(`${p.nombre} cuesta $${p.precio}`));
