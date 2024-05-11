///////////////////////////////////////////////////////////////////////////////////////
// RETO EGG ---------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Conteo de caracteres ----------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, crearás una función "lengthOf" que determine la longitud de 
una cadena. */

function lengthOf(stringValue) {
    if (stringValue.trim() === "") {
        return "Invalid input"
    } else {
        return stringValue.length
    }
}

console.log(lengthOf("Nicolas"))        // 7
console.log(lengthOf("   "))            // Invalid input

///////////////////////////////////////////////////////////////////////////////////////
// Actividad:  Formato de título ------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, crearás una función "format" que formate el título, colocando
la primera letra en maýuscula y el resto en minúscula. */

function titleFormat(stringValue) {
    if (stringValue.trim() === "") {
        return "Invalid input"
    } else {
        return stringValue.charAt(0).toUpperCase() + stringValue.slice(1).toLowerCase()
    }
}

console.log(titleFormat("NicoLas"))        // Nicolas
console.log(titleFormat("piero"))          // Piero

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Incluir -----------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* Define una función stringIncludes que determine si una cadena de texto incluye 
otra cadena de texto. */

function stringIncludes(stringValue, searchString) {
    if (stringValue.trim() === "") {
        return "Invalid input"
    } else {
        return stringValue.includes(searchString)
    }
}

console.log(stringIncludes("Hello, World!", "World"))        // true
console.log(stringIncludes("Hello, World!", "World!"))       // true
console.log(stringIncludes("Hello, World!", "Worlds"))       // false
console.log(stringIncludes("Hello, World!", "hello"))        // false

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Cantidad de caracteres --------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* Define una función palindrome que reciba como parámetro una cadena de texto, rebane 
la cadena (método split) e invierta la lista “spliteada” (método reverse). Una la 
lista (método join) y evalue, si la cadena de entrada es igual a la cadena de salida, 
devolver true Si no, devolver false */

function palindrome(stringValue) {
    if (stringValue.trim() === "") {
        return "Invalid input"
    } else {
        return stringValue.split("").reverse().join("") === stringValue
    }
}

console.log(palindrome("perro"))        // false
console.log(palindrome("reconocer"))    // true
console.log(palindrome("huevo"))        // false
console.log(palindrome("radar"))        // true
