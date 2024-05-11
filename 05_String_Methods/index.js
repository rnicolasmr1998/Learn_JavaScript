///////////////////////////////////////////////////////////////////////////////////////
// STRING METHODS ---------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En JavaScript, los métodos de cadenas son funciones predefinidas que se utilizan
para manipular y operar con cadenas de texto. Las cadenas son una secuencia de
caracteres y, debido a que son muy comunes en la programación, JavaScript
proporciona una variedad de métodos para trabajar con ellas. 

Algunos de los métodos de cadenas más utilizados son los siguientes: */

// length: Devuelve la longitud de la cadena (el número de caracteres).
const stringOne = "Hello, World!"
console.log(stringOne.length)     // 13

/* charAt(index): Devuelve el carácter en la posición especificada por el índice. 
El primer carácter tiene un índice de 0. */
console.log(stringOne.charAt(0))  // H
console.log(stringOne.charAt(4))  // o

/* indexOf(substring): Devuelve el índice de la primera ocurrencia de la
subcadena especificada. Si no se encuentra la subcadena, devuelve -1. */
console.log(stringOne.indexOf("W"))    // 7
console.log(stringOne.indexOf("or"))   // 8

/* lastIndexOf(substring): Devuelve el índice de la última ocurrencia del
subcadena especificada. Si no se encuentra la subcadena, devuelve -1. */
console.log(stringOne.lastIndexOf("World"))     // 7
console.log(stringOne.lastIndexOf("l"))         // 10

/* Diferencia entre indexOf y lastIndexOf */
function myFunction() {
    let str = "Hello planet earth, you are a great planet.";
    let n_lastIndexOf = str.lastIndexOf("planet");
    let n_indexOf = str.indexOf("planet");
    console.log(`El primer planet se encuentra en el índice ${n_indexOf} ` + 
                `y el último planet se encuentra en el índice ${n_lastIndexOf}`);
}

myFunction()

/* substring(startIndex, endIndex): Devuelve una subcadena que comienza en
el índice startIndex y se extiende hasta, pero sin incluir, el índice endIndex. */
console.log(stringOne.substring(7, 11))    // Worl

/* slice(startIndex, endIndex): Similar a substring, pero también permite índices
negativos, que cuentan desde el final de la cadena. */
console.log(stringOne.slice(4, -4))       // "o, Wo"

/* toUpperCase(): Devuelve la cadena en mayúsculas. */
console.log(stringOne.toUpperCase())     // "HELLO, WORLD!"

/* toLowerCase(): Devuelve la cadena en minúsculas. */
console.log(stringOne.toLowerCase())     // "hello, world!"

/* trim(): Devuelve la cadena sin espacios en blanco al principio y al final. */
const stringTwo = "   Hello, World!   "
console.log(stringTwo.trim())            // "Hello, World!"

/* split(separator): Divide la cadena en un array de subcadenas utilizando el
separator como criterio. */
console.log(stringOne.split(","))        // ["Hello", " World!"]

/* replace(searchValue, replaceValue): Reemplaza la primera ocurrencia de
searchValue con replaceValue. */
const stringThree = "Hello, World World!"
console.log(stringThree.replace("World", "Universe"))    // "Hello, Universe World!"

/* replaceAll(searchValue, replaceValue): Reemplaza todas las ocurrencias de
searchValue con replaceValue. */
console.log(stringThree.replaceAll("World", "Universe"))    // "Hello, Universe Universe!"

/* startsWith(): para verificar si una cadena comienza con un determinado
prefijo. */
console.log(stringOne.startsWith("Hello"))    // true
console.log(stringOne.startsWith("World"))    // false

/* endsWith(): para verificar si una cadena termina con un determinado
sufijo. */
console.log(stringOne.endsWith("World!"))    // true
console.log(stringOne.endsWith("Hello"))     // false

/* includes(): para verificar si una cadena contiene una subcadena específica */
console.log(stringOne.includes("World"))    // true
console.log(stringOne.includes("Dog"))      // false

/* reverse(): El método reverse() invierte el orden de los elementos de un array,
es decir, el primer elemento pasa a ser el último y el último pasa a ser el
primero. */
const stringFour = stringOne.split(",")
console.log(stringFour.reverse())           // ["World!", "Hello"]

/* join(): El método join() une todos los elementos de un array en una cadena,
utilizando un separador especificado. Por defecto, el separador es una coma ,. */
console.log(stringFour.join(" "))          // "World!, Hello"

/* concat(): El método concat() concatena dos o más cadenas. */
console.log(stringOne.concat(" ", stringThree))    // Hello, World! Hello, World World!


