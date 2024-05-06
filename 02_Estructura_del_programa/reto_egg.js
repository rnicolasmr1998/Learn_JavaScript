///////////////////////////////////////////////////////////////////////////////////////
// RETO EGG ---------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Evaluación con estructura if --------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, generarás un programa para validar si la edad ingresada por un
usuario corresponde a la de mayoría de edad. */
let yourAge
do {
    yourAge = Number(prompt("¿Cuántos años tienes?"));
    if (Number.isNaN(yourAge)) {
        alert("Ingresa una edad en números");
    } else if (yourAge <=0) {
        alert("Ingresa una edad válida (no negativa)");
    }
} while(Number.isNaN(yourAge) || yourAge <= 0)

if (yourAge >= 18) {
    alert("Eres mayor de edad, puedes continuar en la página")
}

if (yourAge < 18 ) {
    alert("Eres menor de edad, no puedes entrar a la página")
}

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Evaluación con estructura if/else ---------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, mejorarás el programa anterior para validar si una persona es 
mayor de edad o no. */

do {
    yourAge = Number(prompt("¿Cuántos años tienes?"));
    if (Number.isNaN(yourAge)) {
        alert("Ingresa una edad en números");
    } else if (yourAge <=0) {
        alert("Ingresa una edad válida (no negativa)");
    }
} while(Number.isNaN(yourAge) || yourAge <=0)

if (yourAge >= 18) {
    alert("Eres mayor de edad, puedes continuar en la página")
} else {
    alert("Eres menor de edad, no puedes entrar a la página")
}

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Evaluación de múltiples condiciones -------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/*En esta actividad, vas a mejorar el programa anterior para validar si una persona 
es mayor de edad e incluso validar si ingresa un número negativo*/

do {
    yourAge = Number(prompt("¿Cuántos años tienes?"));
    
    if (Number.isNaN(yourAge) || yourAge <= 0) {
        alert("Ingresa una edad válida (mayor que cero)");
    } else if (yourAge < 18) {
        alert("Eres menor de edad, no puedes entrar a la página");
    } else {
        alert("Eres mayor de edad, puedes continuar en la página");
    }
} while (Number.isNaN(yourAge) || yourAge <= 0);

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Sumando varios números  -------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, crearás un programa que solicite una cantidad de números a 
sumar y luego realice la suma. */

let cantidad;
do {
    cantidad = Number(prompt("¿Cuántos números deseas sumar?"));
    if (Number.isNaN(cantidad)) {
        alert("Ingresa una cantidad correcta en números");
    } else if (cantidad <= 0) {
        alert("Ingresa una cantidad válida (no negativa)");
    }
} while (Number.isNaN(cantidad) || cantidad <= 0);

let sumatoria = 0;
let numeroAsumar;
for (let index = 0; index < cantidad; index++) {
    do {
        numeroAsumar = Number(prompt(`Ingrese el número ${index + 1} a sumar`));
        if (Number.isNaN(numeroAsumar)) {
            alert("Ingresa una cantidad correcta en números");
        } else if (numeroAsumar <= 0) {
            alert("Ingresa una cantidad válida (no negativa)");
        }
    } while (Number.isNaN(numeroAsumar) || numeroAsumar <= 0);
    sumatoria += numeroAsumar;
}
console.log(sumatoria);

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Calculando el total a pagar por una compra ------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, desarrollarás un programa para calcular el total a pagar por 
una compra de 3 productos. */

let totalApagar = 0  // Inicialización de la variable que acumula el total a pagar
let nombreProduct
let cantidadProduct
let precioProduct

for (let index = 1; index <= 3; index++) {
    nombreProduct = prompt(`El producto ${index} que desea llevar es:`)
    do {
        cantidadProduct = Number(prompt(`Ingrese la cantidad de ${nombreProduct}:`));
        if (Number.isNaN(cantidadProduct)) {
            alert("Ingresa una cantidad correcta en números");
        } else if (cantidadProduct <= 0) {
            alert("Ingresa una cantidad válida (no negativa)");
        }
    } while (Number.isNaN(cantidadProduct) || cantidadProduct <= 0);
    
    do {
        precioProduct = Number(prompt(`Ingrese el precio de ${nombreProduct}:`));
        if (Number.isNaN(precioProduct)) {
            alert("Ingresa una cantidad correcta en números");
        } else if (precioProduct <= 0) {
            alert("Ingresa un precio válido (no negativa)");
        }
    } while (Number.isNaN(precioProduct) || precioProduct <= 0);
    
    let subtotalProduct = cantidadProduct * precioProduct
    console.log(`El subtotal del producto (${nombreProduct.toLowerCase()})` + 
                ` es: ${subtotalProduct} soles`)
    totalApagar += subtotalProduct
}

console.log("El total a pagar por los tres productos es: " +
            `${Math.round(totalApagar)} soles`)
