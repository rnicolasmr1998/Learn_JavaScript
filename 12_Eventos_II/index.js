//*********************************************************************************************
//* Repaso de Eventos -------------------------------------------------------------------------
//*********************************************************************************************

/* Los eventos son acciones o sucesos que ocurren en el navegador que controlas o a los
que responden mediante JavaScript. Hay varios tipos de eventos, como clicks del mouse,
presiones de teclas, cambios en un formulario, etc. Cada evento puede ser capturado por
un escuchador de eventos (event listener) para realizar una acción. 

Los eventos se pueden declarar en línea y con escuchadores. Los eventos en línea se
asignan directamente en el HTML mientras que los escuchadores de eventos vinculan un
evento a un elemento HTML de forma programática, es decir, separando el HTML del
JavaScript, lo cual es una práctica recomendada. */

//* 1. Eventos de mouse --------------------------------------------------------------------------

/* Los eventos de mouse son una parte fundamental de la interacción en aplicaciones web,
permitiendo a los desarrolladores capturar y responder a diversas acciones realizadas con
el mouse por parte del usuario. El evento de mouse más utilizado es click que se dispara
cuando el usuario hace clic sobre un elemento, por ejemplo, para iniciar acciones como 
abrir menús, enviar formularios, etc. */

document.getElementById("miBoton").addEventListener("click", function() {
alert("Has hecho clic en el botón");
});

//* 2. Evento de cambio ----------------------------------------------------------------------------

/* El evento onchange en JavaScript es una pieza fundamental en la interacción del usuario
con formularios web y otros elementos interactivos. Este evento se dispara cuando el
valor de un elemento <input>, <textarea> o <select> cambia y el elemento pierde el foco.
Es decir, no se activa con cada golpe de tecla, sino cuando el usuario completa la entrada
de datos en un campo y pasa a otro elemento de la página, o cierra el formulario, lo que
marca el final de la edición de ese campo específico.
A modo de ejemplo:  */

document.getElementById("miElemento").addEventListener("change", function() {
alert("Has cambiado el elemento");
})

//* 3. Repaso - Funciones de Orden Superior -------------------------------------------------------------

//* 3.1. ¿Qué es map()? ---------------------------------------------------------------------------------

/* El método map es una función de orden superior en JavaScript que te permite transformar
los elementos de un arreglo en otro arreglo según las condiciones que se le pasen en una
función callback.

La función evalúa cada elemento del array, desde el primero hasta el último. El método
map retorna un nuevo arreglo que contiene exactamente la misma cantidad de elementos
pero transformados. */

// A modo de ejemplo: 

const numeros = [1, 12, 23, 8, 5, 7, 31];
const potencia = numeros.map(cadaElemento => cadaElemento ** 2);
console.log(potencia); // [1, 144, 529, 64, 25, 49, 961]

//* 3.2. ¿Para qué se utiliza map()? ------------------------------------------------------------------------

/* El método map se utiliza para crear un nuevo array con los resultados de la
llamada a una función proporcionada aplicada a cada elemento del array
original. La sintaxis básica del método map es la siguiente:

array.map((each, index, arr) => { })
● array: Es el array a iterar y evaluar con el método map.
● function(currentValue, index, arr): Es la función de prueba para cada elemento del
array y debe retornar el valor “transformado”.
○ each: Es el valor del elemento actual que está siendo procesado en el array.
○ index (opcional): Es el índice del elemento actual en el array.
○ arr (opcional): Es el array al que pertenece el elemento actual.
El método map NO cambia el array original sino que devuelve un nuevo array con
los resultados de aplicar la función a cada elemento. */

// Ejemplo 1:

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 16 },
    { nombre: "Luis", edad: 30 },
    { nombre: "Pedro", edad: 40 },
    { nombre: "Maria", edad: 50 }
    ];

const nombres = personas.map(persona => persona.nombre)
console.log(nombres) // ["Ana", "Juan", "Luis", "Pedro", "Maria"]

const edad = personas.map(persona => persona.edad)
console.log(edad) // [25, 16, 30, 40, 50]

// Ejemplo 2:

const personasDos = [ 
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 16 },
    { nombre: "Luis", edad: 30 },
    { nombre: "Pedro", edad: 13 },
    { nombre: "Maria", edad: 50 },
    { nombre: "Carlos", edad: 15 }
];

const personasConMayoríaDeEdad = personasDos.map(persona => {
return { ...persona, esMayorDeEdad: persona.edad >= 18 };
});
console.log(personasConMayoríaDeEdad);
/* 
[ 
    { nombre: "Ana", edad: 25, esMayorDeEdad: true },
    { nombre: "Juan", edad: 16, esMayorDeEdad: false },
    { nombre: "Luis", edad: 30, esMayorDeEdad: true }
    { nombre: "Pedro", edad: 13, esMayorDeEdad: false },
    { nombre: "Maria", edad: 50, esMayorDeEdad: true },
    { nombre: "Carlos", edad: 15, esMayorDeEdad: false }
] 
*/

/* La sintaxis ...persona (spread operator) dentro del map, sirve para copiar el objeto
completo persona, para luego agregar un nuevo campo (En este caso esMayorDeEdad). */

