///////////////////////////////////////////////////////////////////////////////////////
// RETO EGG ---------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Sumando números ---------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, crearás un programa para sumar dos números que le asigna el
usuario de la página web. Luego, el resultado se mostrará en la página como una 
alerta. Se debe tener en cuenta que la salida de la función prompt devuelve un
string; por ello, se usará la función number para convertirlo a un valor numeric */

const firstNumber = Number(prompt("Ingrese el primer número:"))
const secondNumber = Number(prompt("Ingrese el segundo número:"))
const sumTotal = firstNumber + secondNumber

alert(`El resultado de la suma es: ${sumTotal}`)

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Realizando más operaciones ----------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, ampliarás la funcionalidad del programa anterior calculando el 
promedio de la suma y realizando operaciones adicionales. Se debe crear una variable
que sea el triple del promedio, luego debes crear otra variable donde se le reste 10
al valor triplicado */

const average = sumTotal / 2
const averageThree = average * 3
const averageThreeResDifferenceTen = averageThree - 10

alert(`El promedio de los números es: ${average}. 
El promedio multiplicado por tres es: ${averageThree}.
Restando diez unidades resulta: ${averageThreeResDifferenceTen}.`)

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Determinando la longitud de una palabra/frase ---------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, el usuario va a introducir una frase y la página nos mostrará por
medio de una alerta cuantos carácteres posee. */

const phrase = prompt("Ingrese una frase:")
alert(`La frase contiene ${phrase.length} carácteres.`)

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Cambio de minúsculas/mayúsculas -----------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, vas a ampliar la funcionalidad del programa anterior 
transformando la entrada en minúsculas/mayúsculas. */

const phraseUpperCase = phrase.toUpperCase()
const phraseLowerCase = phrase.toLowerCase()

alert(`La frase en mayúscula es: ${phraseUpperCase}.`)
alert(`La frase en minúscula es: ${phraseLowerCase}.`)
