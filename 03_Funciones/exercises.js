///////////////////////////////////////////////////////////////////////////////////////
// EJERCICIOS -------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

// Mínimo ------------------------------------------------------------------------------

/* Escribir la función min que toma dos argumentos y devuelve su mínimo. */

function min(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Ingresa un valor en números"
    }
    else if (a > b) {
        return b
    } else {
        return a
    }
}

console.log(min(3, 50))

// Recursión ---------------------------------------------------------------------------

/* Hemos visto que podemos usar % (el operador de resto) para verificar si un número 
es par o impar al usar % 2 para ver si es divisible por dos. Aquí hay otra forma de 
definir si un número entero positivo es par o impar:
- El cero es par.
- El uno es impar.
-Para cualquier otro número N, su paridad es la misma que N - 2.

Define una función recursiva isEven que corresponda a esta descripción. La función 
debe aceptar un solo parámetro (un número entero positivo) y devolver un booleano. */

const isEven = (x) => {
    if (x === 0) return true
    else if (x === 1) return false
    else if (x < 0) return isEven(-x)
    else if (isNaN(x)) return "Ingresa un valor en números"
    else return isEven(x - 2)
}

console.log(isEven(2145))

// Contando frijoles -------------------------------------------------------------------

/* Escribe una función countFs que tome una cadena como su único argumento y regrese 
un número que indique cuántos caracteres “F” mayúscula hay en la cadena. A continuación, 
escribe una función llamada countChar que se comoporte como countFs, con la diferencia 
de que tome un segundo caracter que indique el caracter que será contado (en vez de sólo 
caracteres “F”). Reescribe countFs para hacer uso de esta nueva función.*/

function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
    }
    return counted;
}

function countFs(string) {
    return countChar(string, "F");
}

console.log(countFs("Fabuloso Futuro"))     // El resultado es: 2
console.log(countChar("kakkerkak", "k"))    // El resultado es: 5

// Números primos ----------------------------------------------------------------------

/* Implementar una función que determine si un número dado es un número primo. */
function isPrime(x) {
    if (x <= 1) return false
    for (let i = 2; i < x; i++) {
        if (x % i === 0) return false
    }
    return true
}

console.log(isPrime(5))