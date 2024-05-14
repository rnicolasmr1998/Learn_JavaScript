///////////////////////////////////////////////////////////////////////////////////////
// ARRAYS -----------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

// 1. ¿Qué es un array? ---------------------------------------------------------------

/* Un array es una estructura de datos que te permite almacenar y organizar múltiples
elementos en una sola variable. Los arrays son una de las estructuras de datos más
fundamentales y utilizadas en la programación y son útiles para trabajar con
conjuntos de datos. 

Para crear un array en JavaScript, puedes usar la siguiente sintaxis: */

// Array vacío
let miArray = [];

// Array con elementos
let miArrayConElementos = [1, 2, 3, 4, 5];

/* Los arrays en JavaScript son dinámicos, lo que significa que pueden cambiar de
tamaño y puedes agregar o eliminar elementos en cualquier momento. También
pueden contener diferentes tipos de datos en sus elementos, como números,
cadenas, objetos y otras arrays. */

// 2. Acceder a elementos ---------------------------------------------------------------

/* Puedes acceder a los elementos de un array utilizando su índice. El índice de un
array comienza desde 0 para el primer elemento y aumenta en 1 para cada
elemento subsiguiente. Para acceder a un elemento específico, simplemente
proporciona el índice entre corchetes: */

miArray = [10, 20, 30, 40, 50];
console.log(miArray[0]); // Muestra 10
console.log(miArray[3]); // Muestra 40

// 3. Modificar elementos ---------------------------------------------------------------

/* Para modificar un elemento en el array, simplemente accede a su posición y asigna
un nuevo valor: */

miArray = [15, 25, 30, 45, 55];
miArray[2] = 35;        // Cambia el tercer elemento a 35
console.log(miArray);   // Muestra [15, 25, 35, 45, 55]

// 4. Longitud de un array ---------------------------------------------------------------

/* La longitud de un array es la cantidad de elementos que contiene. Para obtener
la longitud de un array, simplemente usa la función length: */

console.log(miArray.length); // Muestra 5

// 5. Métodos comunes de arrays ---------------------------------------------------------------

/* JavaScript proporciona una variedad de métodos integrados que facilitan la
manipulación de arrays. Algunos de los métodos más comunes son: */

// 5.1. Métodos transformadores ----------------------------------------------------------------

/* Llamamos métodos transformadores a los que generan un cambio en el array que estamos 
afectando. 

● push(): Agrega uno o más elementos al final del array.
● pop(): Elimina el último elemento del array.
● shift(): Elimina el primer elemento del array.
● unshift(): Agrega uno o más elementos al inicio del array.
● reverse(): Se utiliza para revertir el orden de los elementos de un array
● splice(): Permite agregar, eliminar o reemplazar elementos en cualquier
posición del array.
● sort(): Se utiliza para ordenar los elementos de un array. Por defecto, el
método sort() ordena los elementos en función de sus representaciones de
cadena Unicode (UTF-16). Esto significa que, para los elementos que son
cadenas, se realizará una ordenación alfabética. Para los elementos que son
números, también se realizará una ordenación de menor a mayor.
*/

miArray.push(60,90);                // Agrega 60 y 90 al final del array
console.log(miArray);               // Muestra [15, 25, 35, 45, 55, 60, 90]

miArray.pop();                      // Elimina el último elemento del array
console.log(miArray);               // Muestra [15, 25, 35, 45, 55, 60]

miArray.shift();                    // Elimina el primer elemento del array
console.log(miArray);               // Muestra [25, 35, 45, 55, 60]

miArray.unshift(5);                 // Agrega 5 al principio del array
console.log(miArray);               // Muestra [5, 25, 35, 45, 55, 60]

miArray.reverse();                  // Revierte el orden de los elementos del array
console.log(miArray);               // Muestra [60, 55, 45, 35, 25, 5]

miArray.splice(2, 1);               // Elimina el elemento en la posición 2
console.log(miArray);               // Muestra [60, 55, 35, 25, 5]

miArray.sort((a, b) => a - b);      // Ordena los elementos del array
console.log(miArray);               // Muestra [5, 25, 35, 55, 60]

// 5.2. Métodos accesores ----------------------------------------------------------------

/* Llamamos metodos accesores a los que devuelven un valor. 

● slice(): Devuelve una copia de una porción del array original, especificada por
los índices de inicio y fin.
● join(): Se utiliza para crear una nueva cadena concatenando todos los
elementos de un array. Permite especificar un separador opcional que se
utilizará entre los elementos mientras se los une en la cadena resultante. Si no
se proporciona ningún separador, los elementos se concatenarán sin ningún
carácter intermedio.
● indexOf(): Busca un elemento y devuelve su índice en el array.
● includes(): Verifica si un elemento está presente en el array y devuelve true o
false.
*/

miArray = [10, 20, 30, 40, 50];
console.log(miArray.slice(2, 4));      // Muestra [30, 40]
console.log(miArray.join(" - "));      // Muestra 10 - 20 - 30 - 40 - 50
console.log(miArray.indexOf(40));      // Muestra 3
console.log(miArray.includes(40));     // Muestra true

// 5.3. Métodos de iteración ---------------------------------------------------------------

/* Llamamos metodos de iteración a los que permiten recorrer un array.

● forEach(): Ejecuta una función para cada elemento del array.
● map(): Crea un nuevo array con los resultados de una función para cada
elemento del array.
● filter(): Crea un nuevo array con los elementos que cumplan una condición.
● reduce(): Reduce el array a un solo valor. */

miArray.forEach((elemento) => console.log(elemento));      // Muestra 10 20 30 40 50
console.log(miArray.map((elemento) => elemento * 2));      // Muestra 20 40 60 80 100
console.log(miArray.filter((elemento) => elemento >= 30)); // Muestra 30 40 50
console.log(miArray.reduce((a, b) => a + b));              // Muestra 150

/*
filter()
La sintaxis básica de filter() es la siguiente:
const nuevoArreglo = arregloOriginal.filter(funcionCallback(elemento,
index, arreglo) {
- Condición de filtrado
- Retornar "true" si se desea incluir el elemento en el nuevo arreglo, o
"false" si se desea excluirlo.
});
Los parámetros de la función de callback son opcionales:
● elemento: El valor del elemento actual del arreglo que se está procesando.
● index (opcional): El índice del elemento actual en el arreglo.
● arreglo (opcional): El arreglo original al que se está aplicando el método
filter().
La función de callback debe retornar un valor booleano (true o false) que indique si
el elemento actual cumple o no con la condición de filtrado. Si el valor retornado es
true, el elemento se incluirá en el nuevo arreglo; si es false, el elemento se excluye.
Veamos un ejemplo práctico:
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Filtrar solo los números pares
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares); // Salida: [2, 4, 6, 8, 10]

/*
forEach()
La sintaxis del método forEach() es la siguiente:
array.forEach(callback(elemento, indice, array))
Donde array es el array sobre el cual se va a iterar, y callback es una función que se
ejecutará una vez por cada elemento del array. La función callback puede aceptar
hasta tres argumentos:
● elemento: El valor del elemento actual del array en cada iteración.
● indice (opcional): El índice del elemento actual dentro del array.
● array (opcional): El array sobre el cual se está iterando.
Es importante destacar que forEach() no devuelve nada, es decir, devuelve
undefined. Se utiliza principalmente para efectuar operaciones en cada elemento
del array, como realizar cálculos, modificar valores o mostrar información.
*/

// Array de ejemplo
const numerosTwo = [1, 2, 3, 4, 5];
// Usar forEach() para mostrar cada número en la consola
numerosTwo.forEach((numero, indice) => {
console.log(`Elemento ${indice}: ${numero}`);
});

/*
map()
La sintaxis del método map() es la siguiente:
array.map(callback(elemento, indice, array))
Donde array es el array sobre el cual se va a iterar, y callback es una función que se
ejecutará una vez por cada elemento del array. La función callback puede aceptar
hasta tres argumentos:
● elemento: El valor del elemento actual del array en cada iteración.
● indice (opcional): El índice del elemento actual dentro del array.
● array (opcional): El array sobre el cual se está iterando.
La función map() devuelve un nuevo array con los valores resultantes de la operación
aplicada a cada elemento del array. Por ejemplo:
*/

// Array de ejemplo
const numerosThree = [1, 2, 3, 4, 5];
// Crear un nuevo array con los valores del array original multiplicados por 2
const numerosCuadrados = numerosThree.map(numero => numero * 2);
console.log(numerosCuadrados); // Salida: [2, 4, 6, 8, 10]

/*
reduce()
La sintaxis del método reduce() es la siguiente:
array.reduce(callback(acumulador, elemento, indice, array), valor_inicial)
Donde array es el array sobre el cual se va a iterar, y callback es una función que se
ejecutará una vez por cada elemento del array. La función callback puede aceptar
hasta tres argumentos:
● acumulador: El valor acumulado hasta el momento.
● elemento: El valor del elemento actual del array en cada iteración.
● indice (opcional): El índice del elemento actual dentro del array.
● array (opcional): El array sobre el cual se está iterando.
La función reduce() devuelve un valor que es el resultado de la operación de reducción  
aplicada a todos los elementos del array. Por ejemplo:
*/

// Array de ejemplo
const numerosFour = [1, 2, 3, 4, 5];
// Sumar todos los valores del array
const suma = numerosFour.reduce((acumulador, elemento) => acumulador + elemento);
console.log(suma); // Salida: 15

