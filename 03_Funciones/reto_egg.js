///////////////////////////////////////////////////////////////////////////////////////
// RETO EGG ---------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Función de cálculo de velocidad -----------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, definirás una función que calcule la velocidad de un automóvil 
teniendo en cuenta la distancia recorrida y el tiempo que tarda en recorrerla. */

function calcularVelocidad() {
    const distancia = 10
    const tiempo = 2
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
}

calcularVelocidad()

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Función de velocidad dinámica -------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, mejorarás la función anterior para que reciba la distancia y 
el tiempo como parámetros, lo que la hará más reutilizable. */

function calcularVelocidadDinamica(distancia, tiempo) {
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
}
calcularVelocidadDinamica(10, 2)

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Retorno de velocidad ----------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, mejorarás la función anterior para que devuelva la velocidad y 
así poder reutilizar este valor. */

const calcularVelocidadReturn = (distancia, tiempo) => {
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
    return velocidad
}

const velocidad1 = calcularVelocidadReturn(20, 2)
console.log("La velocidad de Pedro es " + velocidad1);

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Cálculo del total de compras diarias ------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, crearás una función que va a simular una caja registradora y 
registrar la compra de tres clientes que adquieren tres productos cada uno en un día. 
Al final del día, la caja registradora debe mostrar el monto total facturado.*/

const cajaRegistradora = () => {
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
    
    return totalApagar
    }

const cliente1= cajaRegistradora()
const cliente2= cajaRegistradora()
const cliente3= cajaRegistradora()

console.log("El total a pagar de los tres clientes es: " +
        `${cliente1 + cliente2 + cliente3} soles`)


