// *************************************************************************************
// * Manejo de Eventos en JavaScript
// *************************************************************************************

/* En Javascript existe un concepto llamado evento, que no es más que una notificación 
de que alguna característica interesante acaba de ocurrir, generalmente relacionada 
con el usuario que navega por la página. 

Algunas características de eventos:
- Click de ratón del usuario sobre un elemento de la página
- Pulsación de una tecla específica del teclado
- Reproducción de un archivo de audio/video
- Scroll de ratón sobre un elemento de la página
- El usuario ha activado la opción «Imprimir página»

Como desarrolladores, nuestro objetivo es preparar nuestro código para que cuando ocurra
un determinado evento, se lleve a cabo una funcionalidad asociada. */

//* 1. Formas de manejar eventos ----------------------------------------------------------

/* Existen varias formas alternativas de manejar eventos en Javascript. Vamos a ver cada 
una de ellas por separado, con sus particularidades */

//* 1.1. Eventos mediante HTML -------------------------------------------------------------

/* Probablemente, la forma más fácil de trabajar con eventos Javascript es mediante 
atributos de una etiqueta HTML. Sin embargo, aunque es la más sencilla, también es la 
menos recomendable, pero es un buen punto de partida para comenzar a trabajar con 
eventos. */

//* 1.1.1. ¿Qué es un evento Javascript? ------------------------------------------------------

/* Un evento Javascript es una característica especial que ha sucedido en nuestra página y a 
la cuál le asociamos una funcionalidad, de modo que se ejecute cada vez que suceda dicho 
evento. Por ejemplo, el evento click se dispara cuando el usuario hace click en un elemento 
de nuestra página. */

//* 1.1.2. Tipos de eventos --------------------------------------------------------------------

/* Es el tipo del suceso que ha ocurrido, por ejemplo, un clic sobre un botón o el envío de 
un formulario. Cada tipo de elemento de la página ofrece diversos tipos de eventos de 
Javascript. 

Algunos de los elementos más utilizados son: 
● DOMContentLoaded: Se dispara cuando el DOM ha sido completamente cargado y está listo 
para usar.
● click: Se dispara cuando un usuario hace clic en un elemento.
● change: Se dispara para elementos de entrada (input, select, textarea) cuando
cambia su valor.
● submit: Se dispara cuando se envía un formulario.
● dblclick: Se activa cuando un usuario hace doble clic en un elemento.

Ten en cuenta que el nombre del evento es click, sin embargo, en los atributos HTML 
se coloca siempre precedido de on. Las minúsculas/mayúsculas dan igual, aunque lo más 
habitual es utilizar camelCase.

Un ejemplo es el siguiente:*/

// Creamos la función doTask
function doTask() {
    alert("Hello!");
}

// Asociamos la función a un botón con el atributo onclick en el HTML
// <button onClick="doTask()">Saludar</button>

/* Esta manera de agregar un evento a una etiqueta html no es la más recomendable.
En nuestro <button> estamos haciendo referencia a una función llamada doTask() que, 
aparentemente, confiaremos en que se encuentra declarada dentro del fichero 
javascript que esta vinculado. Esto podría convertirse en un problema, si 
posteriormente, o dentro de cierto tiempo, nos encontramos modificando código en el 
fichero y le cambiamos el nombre a la función doTask(), ya que podríamos olvidar 
que hay una llamada a una función Javascript en uno (o varios) ficheros .html. */

//* 1.2. Eventos mediante Javascript ----------------------------------------------------------

/* En líneas anteriores explicamos que es un evento Javascript y como gestionar eventos 
a través del HTML, concretamente, desde un atributo de una etiqueta HTML. Sin embargo, 
vimos que es preferible hacerlo todo desde el código Javascript, en nuestros ficheros .js 
a tener llamadas a funciones Javascript sueltas en nuestro código HTML. */

//* 1.2.1. Eventos a través del DOM ---------------------------------------------------------------

/* Existe una forma de gestionar eventos Javascript sin necesidad de hacerlo desde nuestros 
ficheros .html. Aunque, en el fondo se sigue haciendo lo mismo ya que captura un elemento
de html desde javascript y nos permite llevarlo a los ficheros .js. */

//* 1.2.1.1. Utilizando propiedad Javascript -------------------------------------------------------

/* La idea es la misma que vimos anteriormente, sólo que en esta ocasión haremos uso de una 
propiedad Javascript, a la que le asignaremos la función con el código asociado. */

const button = document.querySelector(".empezar");
button.onclick = () => {
    alert("Ready, set, go!");
}

/* En este caso, en lugar de añadir el atributo onClick a nuestro <button>, lo que hacemos es 
localizarlo mediante querySelector(). En la linea siguiente, observa que asignamos una función 
con el código deseado (el código que queremos ejecutar cuando ocurre el evento) en la propiedad 
.onclick del elemento <button>. Esta es una propiedad especial.
La propiedad .onclick (o del evento en cuestión) siempre irá en minúsculas, ya que se trata 
de una propiedad Javascript, y Javascript es sensible a mayúsculas y minúsculas. */

//* 1.2.1.2. Utilizando setAttribute() ----------------------------------------------------------------

/* Realmente lo que estamos haciendo es equivalente a añadir un atributo onclick en nuestro <button>, 
solo que lo hacemos a través de la API de Javascript. Otra forma similar, donde si se verá más claro, 
sería la siguiente: */

const buttonTwo = document.querySelector(".despedirse");
const doTaskTwo = () => alert("Bye!");
buttonTwo.setAttribute("onclick", "doTaskTwo()");

//* 1.3. El método addEventListener() -------------------------------------------------------------------

/* La forma más recomendable de incorporar eventos a nuestra página es hacer uso del método 
.addEventListener(), el cuál es mucho más potente y versatil para la mayoría de los casos. */

//* 1.3.1. Método .addEventListener() -------------------------------------------------------------------

/* El método .addEventListener() permite añadir una escucha del evento indicado (primer parámetro), 
y en el caso de que ocurra, se ejecutará la función asociada indicada (segundo parámetro). De forma 
opcional, se le puede pasar un tercer parámetro object con ciertas opciones, que veremos más 
adelante: */

const buttonThree = document.querySelector(".buttonOne");
function actionThree() {
    alert("buttonOne clicked!");
}

buttonThree.addEventListener("click", actionThree);

/* En este ejemplo:

- Buscamos el elemento que tendrá el evento, en este caso <button>
- Creamos una función action() que realizará la acción deseada.
- En el botón, escuchamos el evento click y le asociamos la función action. 

Se puede hacer uso de la función flecha para simplificar el código. */

const buttonFour = document.querySelector(".buttonTwo");
buttonFour.addEventListener("click", () => alert("buttonTwo clicked!"));

/* Dicho método .addEventListener() permite asociar múltiples funciones a un 
mismo evento, algo que, aunque no es imposible, es menos sencillo e intuitivo 
en las modalidades de gestionar eventos que vimos anteriormente: */

const buttonFive = document.querySelector(".buttonThree");
const actionFour = () => alert("buttonThree clicked!");
const toggleOne = () => buttonFive.classList.toggle("red");

buttonFive.addEventListener("click", actionFour);         // buttonThree clicked!
buttonFive.addEventListener("click", toggleOne);          // Add/remove red CSS

/* Al utilizar el método .addEventListener(), se puede indicar un tercer parámetro opcional. Se trata 
de un  objeto opcional en el cual podemos indicar alguna de las siguientes opciones para modificar 
alguna característica del listener en cuestión que vamos a crear: 

- En primer lugar, la opción capture nos permite modificar la modalidad en la que escuchará el 
evento (capture/bubbles, ver más adelante). Esto, básicamente, lo que hace es modificar en que 
momento se procesa el evento.
- En segundo lugar, la opción once nos permite indicar que el evento se procesará solo la primera 
vez que se dispare un evento. Internamente, lo que hace es ejecutarse una primera vez y luego 
llamar al .removeEventListener(), eliminando el listener una vez ha sido ejecutado.
- En tercer y último lugar, la opción passive nos permite crear un evento pasivo en el que indicamos 
que nunca llamaremos al método .preventDefault() para alterar el funcionamiento del evento. Esto 
puede ser muy interesante en temas de rendimiento (por ejemplo, al hacer scroll en una página), ya 
que los eventos pasivos son mucho menos costosos.*/

//* 1.3.2. Método .removeEventListener() -------------------------------------------------------------------

/* Elimina un listener que se ha añadido previamente al elemento. Para ello es muy importante indicar la 
misma función que añadimos con el .addEventListener() y no una función diferente que haga lo mismo que la 
primera. */

const buttonSix = document.querySelector(".buttonFour");
const actionFive = () => alert("buttonFour clicked!");
const toggleTwo = () => buttonSix.classList.toggle("blue");

buttonSix.addEventListener("click", actionFive);         // buttonThree clicked!
buttonSix.addEventListener("click", toggleTwo);          // Add/remove blue CSS
buttonSix.removeEventListener("click", actionFive);      // Delete listener actionFive

/* Ten en cuenta que es posible eliminar el listener del evento porque hemos guardado en una constante 
la función, y tanto en .addEventListener() como en .removeEventListener() estamos haciendo referencia 
a la misma función. Si en lugar de esto, añadieramos la función literalmente, aunque hagan lo mismo, 
serían funciones diferentes y no realizaría lo que esperamos. */

//* 2. Escuchar eventos y handleEvent -------------------------------------------------------------------

/* Hemos visto como funciona el método .addEventListener(). Sin embargo, sólo hemos visto la 
superficie, ya que existen multitud de formas de asociar una función a un evento determinado. 
Veamos que otras formas existen, y a repasar cada una de ellas y verlas aplicadas a un ejemplo. */

//* 2.1. Escuchar eventos con funciones ------------------------------------------------------------------

/* Primero, establezcamos unas bases para jugar con los diferentes ejemplos que veremos a continuación 
y entender mejor cada uno de ellos. Vamos a trabajar con la clase EventManager, que básicamente 
gestionará nuestros eventos de una forma más cómoda: 

class EventManager {
    constructor(element) {
        element.addEventListener("click", this.sendMessage()); 
    }

    sendMessage() {
        alert("Has hecho click en el botón");
    }
}

const buttonSeven = document.querySelector(".buttonFive");
const eventManager = new EventManager(buttonSeven);

Observa que al hacer un new EventManager() y pasarle el botón por parámetro, el constructor() de la 
clase empezará a escuchar el evento y en el caso de que se produzca (evento de tipo click) 
ejecutará el método de clase sendMessage(). Sin embargo, hay un error en este código.

Es muy frecuente que se cometa este error, y es que si nos fijamos en el segundo parámetro del 
.addEventListener(), se espera una función , sin embargo, lo que estamos haciendo realmente es 
ejecutar una función y pasarle lo que devuelva.

En este caso, sendMessage() no devuelve nada, pero si pusieramos un 42 en su interior, estaríamos 
realmente haciendo un .addEventListener("click", 42), lo que obviamente, es incorrecto. Veamos 
como solucionarlo. */

//* 2.1.1. Mediante funciones (referencia) ----------------------------------------------------------------

/* Al asociar una función a un evento utilizando .addEventListener() dentro de una clase, se nos 
podría ocurrir definirla con this.sendMessage(). Sin embargo, como hemos visto antes, esto es 
incorrecto.

La forma correcta de hacerlo, es pasando por parámetro la referencia de la función. Es decir, 
la opción anterior no nos vale porque estamos ejecutando el método sendMessage(). En su lugar, 
podríamos indicar this.sendMessage (sin especificar los paréntesis que hacen que se ejecute 
el método). Con esto, estaríamos efectivamente pasando una referencia al método de clase y nos 
funcionaría correctamente: */

class EventManager {
    constructor(element) {
        element.addEventListener("click", this.sendMessage);
    }

    sendMessage() {
        alert("Has hecho click en el botón");
      console.log(this);    // this = referencia al <button>
    }
} 

const buttonEight = document.querySelector(".buttonSix");
const eventManagerOne = new EventManager(buttonEight);

/* Sin embargo, esta opción tiene un pequeño inconveniente. Si no necesitamos hacer referencia a 
la clase, perfecto. En caso contrario, no nos vale. El método de clase se ejecutará 
correctamente, pero habremos perdido el contexto de this dentro del método, que en este 
caso, será una referencia al elemento que contiene el evento (button) y no a la clase del 
componente.

Por lo tanto, dentro de sendMessage() no podríamos, por ejemplo, llamar a otro método de 
clase o guardar información como propiedad. Además, al no poder añadirle los paréntesis, 
tampoco podríamos pasarle parámetros. */

//* 2.1.2. Mediante funciones con bind --------------------------------------------------------------------

/* Otra opción, es escribir this.sendMessage.bind(this), que lo que hace es llamar al método 
.bind() pasandole this por parámetro, del método de clase que queremos ejecutar. ¿Qué hace 
esto realmente? Pues en pocas palabras, realiza una copia de la función que queremos ejecutar, 
y le pasa por parámetro el elemento al que va a apuntar this. */

class EventManagerTwo {
    constructor(element) {
        element.addEventListener("click", this.sendMessage.bind(this));
    }

    sendMessage() {
        alert("Has hecho click en el botón");
      console.log(this);    // this = referencia al <button>
    }
} 

const buttonNine = document.querySelector(".buttonSeven");
const eventManagerTwo = new EventManagerTwo(buttonNine);

/* De esta forma solucionamos el problema anterior, ya que ahora cuando se ejecute el 
método sendMessage(), this si hará referencia a la clase en cuestión, siendo posible 
ejecutar otros métodos o consultar y guardar información en las propiedades. Si 
queremos añadirle parámetros, basta con incluirlos después del this del primer 
parámetro del .bind(). */

//* 2.1.3. Mediante funciones anónimas ------------------------------------------------------------------

/* Se pueden utilizar las funciones flecha anónimas. Como el segundo parámetro de .addEventListener() 
se espera una función, podemos pasar una función flecha anónima que «envuelva» y ejecute la función 
que nos interesa y devuelva su resultado. Al estar dentro de una función flecha, no tiene concepto 
propio de this, por lo que no pierde el valor, y this sigue haciendo referencia a la clase del 
componente. */

class EventManagerThree {
    constructor(element) {
        element.addEventListener("click", () => this.sendMessage());
    }

    sendMessage() {
        alert("Has hecho click en el botón");
      console.log(this);    // this = referencia a EventManager
    }
}

const buttonTen = document.querySelector(".buttonEight");
const eventManagerThree = new EventManager(buttonTen);

//* 2.2. Escuchar eventos con objetos -------------------------------------------------------------------------

/* Como hemos visto, aunque el trabajo con eventos no es especialmente complejo, dependiendo de la 
situación se puede complicar mucho. Además, cuando tenemos muchos eventos, se vuelve tedioso de 
organizar, y corremos el riesgo de que se vuelva muy complejo. Existe un patrón Javascript muy 
interesante y desconocido que permite organizar y administrar los eventos de una forma muy elegante. 

En lugar de a una función, es posible asociar un evento a un objeto. Este objeto debe contener un 
método mágico .handleEvent(). Si lo hacemos, dicho método recibirá el evento y podremos gestionarlo 
desde su interior:*/

const buttonEleven = document.querySelector(".buttonNine");
const eventManagerFour = {
    handleEvent: function(ev) {
        alert("¡Has hecho click!");
    }
}
buttonEleven.addEventListener("click", eventManagerFour);

/* De esta forma, si tenemos múltiples eventos, podemos centralizar su administración desde dicho 
objeto, accediendo a ev, que es el objeto con información sobre el evento disparado, donde podemos 
consultar muchas de sus propiedades, que nos brindan información interesante:

- ev.type: devuelve el tipo de evento disparado: click
- ev.target: devuelve el elemento que disparó el evento: <button>
- ev.ctrlKey: devuelve  si la tecla  estaba pulsada
- etc... 

Por ejemplo: */

const buttonTwelve = document.querySelector(".buttonTen");
const eventManagerFive = {
    handleEvent: function(ev) {
        if (ev.type === "click") {
            alert("¡Has hecho click!");
        } else if (ev.type === "mouseleave") {
            alert("¡Has abandonado el botón!");
        }
    }
}

buttonTwelve.addEventListener("click", eventManagerFive);
buttonTwelve.addEventListener("mouseleave", eventManagerFive);

//* 2.3. Escuchar eventos con clases ---------------------------------------------------------------------------

/* Podemos crear una clase, o incluso varias instancias del objeto, de forma que sea mucho más flexible 
y reutilizable para nosotros.

Ten en cuenta que this en el contexto del método handleEvent() apunta al propio objeto eventManager, 
por lo que podemos utilizarlo para acceder a otros métodos o propiedades del objeto: */

const buttonThirteen = document.querySelector(".buttonEleven");

class EventManagerSix {
    handleEvent(ev) {
        if (ev.type === "click") {
            this.onClick(ev.type, ev.target);
        } else if (ev.type === "mouseleave") {
            this.onLeave(ev.type, ev.target);
        }
    }

    onClick(type, element) {
        alert("¡Has hecho click!");
        console.log({ type, element });
    }

    onLeave(type, element) {
        alert("¡Has abandonado el botón!");
        console.log({ type, element });
    }
}

const eventManagerSix = new EventManagerSix();
buttonThirteen.addEventListener("click", eventManagerSix);
buttonThirteen.addEventListener("mouseleave", eventManagerSix);

/* Trabajando y ampliando un poco más la clase, podríamos incluso pasarle el objeto que 
queremos escuchar en el new y que el constructor realice los addEventListener() 
necesarios para gestionarlo todo de una forma limpia y legible. */

//* 3. El objeto Event --------------------------------------------------------------------------------------------------

/* Cuando se disparan ciertos eventos, hay casos en los que nos podría interesar obtener 
información relacionada con la naturaleza del evento en cuestión. Por ejemplo, si 
estamos escuchando un evento de tipo click de ratón, nos podría interesar saber con que 
botón del ratón se ha hecho click, en que punto concreto de la pantalla se ha hecho 
click, etc. Estos detalles se pueden obtener de forma opcional a través de un objeto 
event que se proporciona en la función asociada al evento. Para ello, sólo es necesario 
indicar un primer parámetro en la función que gestiona el evento, y dicho parámetro, 
será de tipo evento con dicha información asociada.*/

const buttonFourteen = document.querySelector(".buttonTwelve");
buttonFourteen.addEventListener("click", (event) => {
    console.log(event);
});

/* Simplemente se trata de una función que escucha los eventos de tipo click en un 
<button> del HTML. Observa que la función asociada tiene el parámetro event. Si 
hacemos click en el botón, en la consola se nos mostrará la información de este 
evento, que en nuestro ejemplo anterior está basado en PointerEvent, ya que 
click es un evento realizado con un puntero (generalmente, de ratón). */

//* 3.1. Propiedades del evento -----------------------------------------------------------------------------------------

/* Veamos algunas de la propiedades comunes, que están disponibles en cualquier 
tipo de evento. Ampliemos un poco la escucha del evento anterior, donde vamos a 
observar el contenido de cada una de las siguientes propiedades básicas: */

const buttonFifteen = document.querySelector(".buttonThirteen");
buttonFifteen.addEventListener("click", (event) => {
    const { type, timeStamp, isTrusted } = event;
    console.log({ type, timeStamp, isTrusted });
});

/* Como se puede ver, desestructuramos las tres propiedades siguientes del objeto 
event y las mostramos a través de una sentencia console.log(), de modo que 
podamos ver su contenido. */

//* 3.1.1. Tipo de evento (type) -----------------------------------------------------------------------------------------

/* Mediante la propiedad .type podemos obtener el tipo de evento. Esto es, simplemente, 
el nombre del evento con el que escuchamos en el .addEventListener(), o en el caso de 
un evento personalizado, el establecido en el primer parámetro de la instancia del 
new CustomEvent().

En el ejemplo inicial de este artículo estabamos escuchando un evento nativo donde 
type sería click. */

//* 3.1.2. Hora del evento (timeStamp) -----------------------------------------------------------------------------------------

/* La propiedad .timeStamp devuelve un  donde tenemos el número de milisegundos 
transcurridos desde que se creó el evento. */

//* 3.1.3. Evento de confianza (isTrusted) ----------------------------------------------------------------------------------------

/* Se denomina un evento de confianza al evento que ha lanzado el navegador por 
una acción del usuario, ya que un desarrollador puede falsear y crear eventos para 
simular una acción del usuario. La propiedad .isTrusted sirve precisamente para 
diferenciar uno de otro.

Mediante la propiedad .isTrusted a true podemos saber si el evento en cuestión 
que estamos examinando es un evento real que ha surgido de una acción del 
usuario, o de lo contrario, ha devuelto false y es un evento que ha sido 
emitido mediante código con un .dispatchEvent(). */

//* 3.2. Evitar la acción por defecto (preventDefault) -----------------------------------------------------------------------------------------

/* Algunos elementos tienen un comportamiento por defecto. Por ejemplo, el elemento 
<details> muestra el texto del elemento <summary>, si se pulsa sobre el, se despliega 
el resto del contenido de <details>. Si se vuelve a pulsar, se oculta nuevamente. 
Ese es su comportamiento por defecto.

Sin embargo, pueden existir situaciones donde queremos que se anule este comportamiento 
y no se realice. Por ejemplo, para reimplementarlo nosotros, o cambiar su funcionalidad 
habitual. Para ello, tenemos a nuestra disposición una propiedad y un método que harán 
que sea muy sencillo: 

.defaultPrevented: false, Indica si el comportamiento por defecto se ha evitado.
.preventDefault(): Evita que se realice el comportamiento por defecto del evento.

Mediante el método .preventDefault() se establecerá el flag .defaultPrevented a 
true y podremos evitar el comportamiento base por defecto de dicho evento y añadirle 
otro diferente: */

const details = document.querySelector("details");

details.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Has hecho click pero hemos eliminado el comportamiento por defecto.");
});

/* De esta forma, veremos que al pulsar sobre el elemento <details> ya no se 
expande ni se contrae, por lo que ahora podríamos crear nuestra propia lógica 
para reimplementar esta funcionalidad. */
