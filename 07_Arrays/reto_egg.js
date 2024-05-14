///////////////////////////////////////////////////////////////////////////////////////
// RETO EGG ---------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Listado de objetos ------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, crearás un listado de objetos. Luego, programe la impresión
de la consola del array completo, del segundo objeto del array y el último objeto
del array. */

const objetOne = {
    name: "John",
    age: 30,
    city: "New York",
};

const objetTwo = {
    name: "Jane",
    age: 25,
    city: "London",
};

const objetThree = {
    name: "Jim",
    age: 35,
    city: "Paris",
};

const objectFour = {
    name: "Jill",
    age: 20,
    city: "Berlin",
};

const objectFive = {
    name: "Jack",
    age: 40,
    city: "Madrid",
};

const array = [objetOne, objetTwo, objetThree, objectFour, objectFive];

// Impresión de la consola del array completo
console.log(array);

// Impresión del segundo objeto del array
console.log(array[1]);

// Impresión del último objeto del array
console.log(array[array.length - 1]);

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Ampliando la lista de objetos -------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, ampliarás el listado de objetos. Para ello, definirás dos
nuevos objetos y los insertaras en el array, uno de ellos al inicio y el otro
al final del array. */

const objectSix = {
    name: "Jenny",
    age: 30,
    city: "London",
};

const objectSeven = {
    name: "Nicolas",
    age: 25,
    city: "Lima",
};

// Agrega objectSix al inicio del array
array.unshift(objectSix);
console.log(array)

// Agrega objectSeven al final del array
array.push(objectSeven);
console.log(array)

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Eliminando objetos del array --------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, eliminaras objetos del array usando el índice y el nombre
del objeto que deseas eliminar. */

console.clear()
console.log(array)

// Elimina el primer objeto del array
array.shift();
console.log(array)

// Elimina el último objeto del array
array.pop();
console.log(array)

// Elimina el objeto con el name de "jenny"
const index = array.findIndex(object => object.name === "Jenny");
array.splice(index, 1);
console.log(array)

