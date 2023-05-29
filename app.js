// 1
const numero = parseInt(prompt("Ingresa un número:"));


if (numero % 2 === 0) {
    console.log(numero + " es divisible entre 2");
} else {
    console.log(numero + " no es divisible entre 2");
}

//2 

const numero2 = parseInt(prompt("Ingresa un número:"));

if (numero2 % 2 === 0) {
    alert(numero2 + " es un número par.");
} else {
    alert(numero2 + " no es un número par.");
}

//3 

const numeroA = parseFloat(prompt("Ingresa el primer número:"));
const numeroB = parseFloat(prompt("Ingresa el segundo número:"));


if (numeroA < numeroB) {
    console.log(numeroA + " es menor que " + numeroB);
} else if (numeroB < numeroA) {
    console.log(numeroB + " es menor que " + numeroA);
} else {
    console.log("Los números son iguales");
}


//4

const numero_1 = parseFloat(prompt("Ingresa el primer número:"));
const numero_2 = parseFloat(prompt("Ingresa el segundo número:"));
const numero_3 = parseFloat(prompt("Ingresa el tercer número:"));


if (numero_1 > numero_2 && numero_1 > numero_3) {
    console.log(numero_1 + " es el número mayor.");
} else if (numero_2 > numero_1 && numero_2 > numero_3) {
    console.log(numero_2 + " es el número mayor.");
} else if (numero_3 > numero_1 && numero_3 > numero_2) {
    console.log(numero_3 + " es el número mayor.");
} else if (numero_1 === numero_2 && numero_1 > numero_3) {
    console.log(numero_1 + " y " + numero_2 + " son iguales y mayores que " + numero3);
} else if (numero_1 === numero_3 && numero_1 > numero_2) {
    console.log(numero_1 + " y " + numero_3 + " son iguales y mayores que " + numero2);
} else if (numero_2 === numero_3 && numero_2 > numero_1) {
    console.log(numero_2 + " y " + numero_3 + " son iguales y mayores que " + numero1);
} else {
    console.log("Los números son iguales.");
}

// 5

const diaSemana = prompt("Ingresa un día de la semana:");


if (diaSemana.toLowerCase() === "lunes") {
    console.log("Hoy es lunes. Ánimo, comienza una nueva semana.");
} else if (diaSemana.toLowerCase() === "viernes") {
    console.log("¡Por fin es viernes! Disfruta el fin de semana.");
} else if (diaSemana.toLowerCase() === "sábado" || diaSemana.toLowerCase() === "domingo") {
    console.log("¡Es fin de semana! A descansar y disfrutar.");
} else {
    console.log("El día ingresado no es válido o no corresponde a los días de la semana.");
}


//6

const numeroH = parseInt(prompt("Ingresa un número:"));
console.log("Los múltiplos de 5 hasta el número " + numeroH + " son:");
for (let i = 1; i <= numeroH; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

//7


const num1 = parseInt(prompt("Ingresa el primer número (entre 1 y 50):"));
const num2 = parseInt(prompt("Ingresa el segundo número (entre 1 y 50):"));


console.log("Los números del 1 al 50:");
for (let i = 1; i <= 50; i++) {
    if (i === num1 || i === num2) {
        console.log(i + " ¡Lotería!");
    } else {
        console.log(i);
    }
}

//8

const numeros = [];


let num_13;
do {
    num_13 = parseFloat(prompt("Ingresa un número (ingresa 0 para terminar):"));
    if (num_13 !== 0 && !isNaN(num_13)) {
        numeros.push(num_13);
    }
} while (num_13 !== 0);


console.log("Lista de números capturados:");
console.log(numeros);

//9


let resultado = "";


let entrada;
do {
    entrada = prompt("Ingresa una letra o palabra (deja vacío para terminar):");
    if (entrada !== "") {
        resultado += entrada;
    }
} while (entrada !== "");


console.log("Concatenación de palabras capturadas:");
console.log(resultado);

//10

// Solicitar al usuario un día de la semana
let diaSemana_1;
do {
    diaSemana_1 = prompt("Ingresa un día de la semana:");
    diaSemana_1 = diaSemana_1.toLowerCase();

    // Mostrar mensaje personalizado para cada día de la semana utilizando un alert
    switch (diaSemana_1) {
        case "lunes":
            alert("Es lunes. Ánimo, comienza una nueva semana.");
            break;
        case "martes":
            alert("Es martes. ¡A darle con todo!");
            break;
        case "miércoles":
        case "miercoles":
            alert("Es miércoles. Ya estamos a mitad de semana.");
            break;
        case "jueves":
            alert("Es jueves. ¡Casi llegamos al fin de semana!");
            break;
        case "viernes":
            alert("Es viernes. ¡Por fin llegó el tan esperado fin de semana!");
            break;
        case "sábado":
        case "sabado":
            alert("Es sábado. A disfrutar del fin de semana.");
            break;
        case "domingo":
            alert("Ve a descansar");
            break;
        default:
            alert("El día ingresado no es válido o no corresponde a los días de la semana.");
    }
} while (diaSemana_1 !== "domingo");

//11


const calificacion = parseFloat(prompt("Ingresa una calificación (entre 1 y 10):"));


if (calificacion >= 1 && calificacion <= 10) {

    let mensaje;
    if (calificacion < 6) {
        mensaje = "Reprobado";
    } else if (calificacion >= 6 && calificacion <= 8) {
        mensaje = "Regular";
    } else if (calificacion === 9) {
        mensaje = "Bien";
    } else {
        mensaje = "Excelente";
    }


    console.log("La calificación obtenida es: " + mensaje);
} else {
    console.log("Error: La calificación ingresada no está en el rango válido.");
}

//12
const costoBaseHelado = 50;

const topping = prompt("Elige el topping para tu helado (oreo, KitKat o brownie):");

let costoTotalHelado;

switch (topping) {
    case "oreo":
        costoTotalHelado = costoBaseHelado + 10;
        break;
    case "KitKat":
        costoTotalHelado = costoBaseHelado + 15;
        break;
    case "brownie":
        costoTotalHelado = costoBaseHelado + 20;
        break;
    default:
        console.log("No tenemos este topping, lo sentimos.");
        costoTotalHelado = costoBaseHelado;
        break;
}

console.log("El costo total de tu helado con topping " + topping + " es: " + costoTotalHelado + " MXN.");


//13


const costoMensual = {
    Course: 4999,
    Carrera: 3999,
    Master: 2999
};


const duracionMeses = {
    Course: 2,
    Carrera: 6,
    Master: 12
};


const opcion = prompt("Elige una opción educativa (Course, Carrera o Master):");


if (costoMensual.hasOwnProperty(opcion)) {

    const beca = prompt("¿Cuentas con alguna beca? (Facebook, Google o Jesua)");


    let descuento = 0;
    switch (beca) {
        case "Facebook":
            descuento = 0.2;
            break;
        case "Google":
            descuento = 0.15;
            break;
        case "Jesua":
            descuento = 0.5;
            break;
    }


    const costoMensualDescuento = costoMensual[opcion] * (1 - descuento);
    const costoTotal = costoMensualDescuento * duracionMeses[opcion];


    console.log("El costo mensual con descuento es: " + costoMensualDescuento + " MXN.");
    console.log("El costo total por el curso elegido es: " + costoTotal + " MXN.");
} else {
    console.log("La opción ingresada no es válida.");
}

//14
const distanciaRecorrida = parseFloat(prompt("Ingrese la distancia recorrida en kilómetros:"));
const tipoVehiculo = prompt("Ingrese el tipo de vehículo (coche, moto o autobús):");
let precioKilometro;
switch (tipoVehiculo) {
    case "coche":
        precioKilometro = 0.20;
        break;
    case "moto":
        precioKilometro = 0.10;
        break;
    case "autobús":
        precioKilometro = 0.5;
        break;
    default:
        console.log("Tipo de vehículo no válido.");
        break;
}
const litrosConsumidos = parseFloat(prompt("Ingrese los litros consumidos:"));
let extraLitros;
if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
    extraLitros = 5;
} else {
    extraLitros = 10;
}
const totalPagar = (precioKilometro * distanciaRecorrida) + extraLitros;
console.log("El total a pagar es: " + totalPagar + " MXN.");









