///////////////////////////////////////////////////////////////////////////////////////
// Document Object Mode (DOM) ---------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* Cuando comenzamos en el mundo del desarrollo web, típicamente nos sumergimos 
en el etiquetado HTML y añadimos estilos CSS para darle color, forma e 
interactividad a nuestras páginas. Sin embargo, a medida que avanzamos, 
podemos encontrar limitaciones en este enfoque.

Con solo HTML/CSS, nuestras páginas son estáticas, lo que significa que no pueden 
adaptarse o cambiar en respuesta a las acciones del usuario. Pero al introducir 
JavaScript, podemos transformar nuestras páginas en dinámicas. Esto implica 
aprovechar la potencia y flexibilidad de un lenguaje de programación para 
crear documentos y páginas web mucho más ricas. Con JavaScript, podemos ofrecer 
una experiencia más completa, automatizar una amplia gama de tareas y acciones, 
y hacer que nuestras páginas web respondan y se ajusten según las interacciones 
del usuario. */

// 1. ¿Que es el DOM? ---------------------------------------------------------------------

/* Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura 
del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas 
una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se 
denomina árbol DOM (o simplemente DOM). 

En Javascript, cuando nos referimos al DOM nos referimos a esta estructura de árbol, 
mediante la cuál podemos acceder a ella y modificar los elementos del HTML desde 
Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando 
sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc... */

// 2. El objeto Document -------------------------------------------------------------------

/* En Javascript, la forma de acceder al DOM es a través de un objeto llamado document, 
que representa el árbol DOM de la página o, más concretamente, la página de la pestaña 
del navegador donde nos encontramos. En su interior pueden existir varios tipos de 
elementos, pero principalmente serán element o node: 

- element: no es más que la representación genérica de una etiqueta: HTMLElement.
- node: es una unidad más básica, la cuál puede ser  o un nodo de texto.
*/

// 3. Seleccionar elementos ---------------------------------------------------------------

/* Existen una serie de métodos que nos permitirán buscar en el DOM de la página y 
encontrar los elementos que contiene. El primer grupo son métodos más antiguos y 
tradicionales, el segundo grupo son métodos más modernos, pero requieren 
conocer selectores CSS. */

// 3.1. Métodos tradicionales ---------------------------------------------------------------

/* Los métodos más clásicos y tradicionales para realizar búsquedas de elementos en el 
DOM son más sencillos, pero menos potentes. Si lo que buscas es un elemento específico, 
lo mejor sería utilizar el método getElementById(). En caso contrario, utilizaremos 
alguno de los otros tres métodos, que nos devuelven siempre un : */

// 3.1.1. getElementById() -------------------------------------------------------------------

/* El primer método, .getElementById(id) busca un elemento HTML con el id especificado. 
En principio, un documento HTML bien construído no debería tener más de un elemento 
con el mismo id, por lo tanto, este método devolverá siempre un solo elemento: */

const container = document.getElementById("container");
console.log(container); // Muestra el elemento con id "container"

// 3.1.2. getElementsByClassName() ------------------------------------------------------------

/* El segundo método, .getElementsByClassName(className) busca todos los elementos HTML */

const display = document.getElementsByClassName("display");
console.log(display[0]);   // Muestra el primer elemento de un array con la clase "display"

// 3.1.3. getElementsByTagName() ----------------------------------------------------------------

/* El tercero método, .getElementsByTagName(tagName) busca todos los elementos HTML 
con el tag especificado. */

const div = document.getElementsByTagName("div");
console.log(div[1]);         // Muestra el segundp elemento de un array con el tag "div"

// 3.1.4. getElementsByName() -------------------------------------------------------------------

/* El cuarto método, .getElementsByName(name) busca todos los elementos HTML con el 
nombre de atributo especificado. */

const input = document.getElementsByName("up");
console.log(input[0]);      // Muestra el primer elemento de un array con el nombre de atributo "up"

// 3.2. Métodos modernos ---------------------------------------------------------------------------

/* Aunque los métodos tradicionales anteriores son más que suficientes para buscar elementos, 
actualmente tenemos a nuestra disposición dos nuevos métodos de búsqueda de elementos que son 
mucho más cómodos y prácticos si conocemos y dominamos los selectores CSS. */

// 3.2.1. querySelector() -------------------------------------------------------------------------

/* Devuelve el primer elemento que encuentra que encaja con el selector CSS suministrado por 
parámetro. Siempre devuelve un solo elemento y en caso de no coincidir con ninguno, 
devuelve null: */

const page = document.querySelector("#page");               // <div id="page"></div>
console.log(page);                                          // Muestra el elemento con id "page"
const info = document.querySelector(".main .info");         // <div class="info"></div>
console.log(info);                                          // Muestra el elemento con clase "info"

/* El primer ejemplo sería equivalente a utilizar un .getElementById(), sólo que en la 
versión de .querySelector() indicamos por parámetro un selector, y en el primero le 
pasamos un simple string. Observa que estamos indicando un # porque se trata de un id.

En el segundo ejemplo, estamos recuperando el primer elemento con clase info que esté 
dentro de otro con clase main. En los métodos tradicionales, sería menos directo ya 
que tendríamos que realizar varias llamadas. Con .querySelector() se hace directamente 
sólo con una. */

// 3.2.2. querySelectorAll() -----------------------------------------------------------------------

/* Devuelve todos los elementos que encajan con el selector CSS suministrado por parámetro. 
Devuelve un nodelist de elementos: */

// Obtiene todos los elementos con clase "info"
const infos = document.querySelectorAll(".info");
console.log(infos);

// Obtiene todos los elementos con atributo name="nickname"
const nicknames = document.querySelectorAll('[name="down"]');
console.log(nicknames);

// Obtiene todos los elementos <div> de la página HTML
const divs = document.querySelectorAll("div");
console.log(divs);

/* Al realizar una búsqueda de un elemento particular y guardarlo en una variable o constante, 
podemos volver a realizar una nueva búsqueda posteriormente sobre este elemento, en lugar del 
DOM íntegro document:* */

const menu = document.querySelector("#container");
const links = menu.querySelectorAll(".display");
console.log(links);

/* Sin embargo, si controlamos un poco de CSS, esto puede ser más sencillo si hacemos 
lo siguiente: */

const linksTwo = document.querySelectorAll("#container .display");
console.log(linksTwo);

// 3.3. Nodelist o HTMLCollection ----------------------------------------------------------------

/* Ten en cuenta que los métodos de búsqueda generalmente devuelven un tipo de dato 
HTMLCollection o NodeList, que aunque son muy similares, no son exactamente un array. */

const elements = document.querySelectorAll("div");
console.log(elements.map) // undefined

const elementsTwo = [...document.querySelectorAll("div")];
console.log(elementsTwo.map) // ƒ map() { [native code] }

// 4. Crear elementos HTML --------------------------------------------------------------------------

/* Existe una serie de métodos para crear de forma eficiente diferentes elementos HTML o nodos. 
Dichos métodos nos ofrecen una forma muy sencilla de crear estructuras dinámicas, mediante 
bucles o estructuras definidas: */

// 4.1. createElement() -----------------------------------------------------------------------------

/* Mediante el método .createElement() podemos crear un  HTML en memoria (¡no estará insertado aún 
en nuestro documento HTML!). Con dicho elemento almacenado en una variable o constante, podremos 
modificar sus características o contenido, para posteriormente insertarlo en una posición 
determinada del DOM o documento HTML. */

const divOne = document.createElement("div");      // Creamos un <div></div>
const spanOne = document.createElement("span");    // Creamos un <span></span>
const imgOne = document.createElement("img");      // Creamos un <img>

/* Aunque menos frecuente, de la misma forma, podríamos crear comentarios HTML con .createComment() 
o fragmentos de texto sin etiqueta HTML con .createTextNode(), pasándole a ambos un  con el texto 
en cuestión. En ambos, se devuelve un  que podremos utilizar luego para insertar en el documento 
HTML: */

const commentOne = document.createComment("Comentario");   // <!--Comentario-->
const textOne = document.createTextNode("Hola");           // Nodo de texto: 'hola'

// 4.2. cloneNode() ----------------------------------------------------------------------------------

/* El método .cloneNode() nos permite clonar un elemento HTML o nodo. Por ejemplo, si queremos
clonar un elemento, podemos hacerlo de la siguiente manera: */

const divTwo = document.querySelector(".main");
const divTwoClone = divTwo.cloneNode();
console.log(divTwoClone);

/* El método cloneNode(deep) acepta un parámetro  deep opcional, a false por defecto, para 
indicar el tipo de clonación que se realizará:

- Si es true, clonará también elementos hijos. Se conoce como clonación profunda (Deep Clone).
- Si es false, no clonará elementos hijos. Se conoce como clonación superficial (Shallow Clone). */

const divTwoCloneTwo = divTwo.cloneNode(true);
console.log(divTwoCloneTwo);

// 4.3. .isConnected ----------------------------------------------------------------------------------

/* La propiedad isConnected nos indica si el elemento en cuestión está conectado al DOM, es decir, 
si está insertado en el documento HTML:

- Si devuelve true, significa que el elemento está conectado al DOM.
- Si devuelve false, significa que el elemento no está conectado al DOM. */

// 4.5. Usando fragmentos --------------------------------------------------------------------------------

/* En algunas ocasiones, nos puede resultar muy interesante utilizar fragmentos. Los fragmentos son 
una especie de documento paralelo, aislado de la página con la que estamos trabajando, que tiene 
varias características:

- No tiene elemento padre. Está aislado de la página o documento.
- Es mucho más simple y ligero (mejor rendimiento).
- Si necesitamos hacer cambios consecutivos, no afecta al reflow (repintado de un documento). 

Así pues, el object que devuelve el método document.createDocumentFragment() es un fragmento que 
podremos utilizar para almacenar en su interior un pequeño DOM temporal, que luego añadiremos en 
nuestro DOM principal. */

const fragment = document.createDocumentFragment();
console.log(fragment);

for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    div.textContent = `Item número ${i}`;
    fragment.appendChild(div);
}

console.log(fragment);
document.body.appendChild(fragment);

// 5. Gestionar atributos ----------------------------------------------------------------------------

/* Las etiquetas HTML tienen ciertos atributos que definen el comportamiento de la etiqueta. 
Existen atributos comunes a todas las etiquetas HTML, y atributos que sólo existen para 
determinadas etiquetas HTML. El orden de los atributos en HTML no es importante, da igual que 
este primero o segundo, no influye en nada. */

// 5.1. Acceder a atributos HTML ----------------------------------------------------------------------

/* En general, una vez tenemos un elemento sobre el que vamos a crear algunos atributos, lo más 
sencillo es asignarle valores como propiedades de objetos: */

const elementOne = document.querySelector("div")
console.log(elementOne);

elementOne.id = "elementOne";
console.log(elementOne);

elementOne.className = "elementOne";
console.log(elementOne);

elementOne.style = "color: red";
console.log(elementOne);

// 5.2. Obtener atributos HTML -------------------------------------------------------------------------

/* Aunque la forma anterior es la más rápida, tenemos algunos métodos para obtener los atributos HTML 
de forma clara y literal, sin problemas como los de className: */

//  hasAttributes(): Indica si el elemento tiene atributos HTML.
console.log(elementOne.hasAttributes())                 // true (tienes atributos)

// hasAttribute(attr): Indica si el elemento tiene el atributo HTML attr.
console.log(elementOne.hasAttribute("id"))              // true (tienes el atributo id)
console.log(elementOne.hasAttribute("data-number"))     // false (no tienes el atributo)

// getAttributeNames(): Devuelve un  con los atributos del elemento.
console.log(elementOne.getAttributeNames())             // ["id", "class", "style"]

// getAttribute(attr): Devuelve el valor del atributo attr del elemento o null si no existe.
console.log(elementOne.getAttribute("id"))              // "elementOne"

// 5.3. Modificar o eliminar atributos HTML ------------------------------------------------------------

/* Por otro lado, tenemos algunos métodos para modificar atributos HTML existentes, o directamente, 
eliminarlos: */

// setAttribute(attr, value): Añade o cambia el atributo attr al valor value del elemento HTML.
elementOne.setAttribute("data-number", 1);
console.log(elementOne);

// removeAttribute(attr): Elimina el atributo attr del elemento HTML.
elementOne.removeAttribute("data-number");
console.log(elementOne);

// 5.4. Caso especial: Atributos booleanos ----------------------------------------------------------------

/* Hay que hablar de un caso especial, que es el que comentamos en el que podemos establecer atributos 
HTML que son boolean, es decir, que no tienen indicado ningún valor. 
Si esto lo hacemos con el método setAttribute() y le indicamos un booleano, no tendremos exactamente 
lo que buscamos. Recuerda que los atributos HTML son siempre de tipo string: */

const buttonOne = document.querySelector("button");
console.log(buttonOne);

buttonOne.setAttribute("disabled", true);   // <button disabled="true">Clickme!</button>
console.log(buttonOne);

buttonOne.disabled = true;                  // <button disabled>Clickme!</button>
buttonOne.setAttribute("disabled", "");     // <button disabled>Clickme!</button>
console.log(buttonOne);

/* Por lo tanto, la forma correcta de establecerlos es indicar un string vacío. Automáticamente, 
el navegador sabrá que una cadena de texto vacía es un booleano y ocultará su valor. 
Por otro lado, si lo haces mediante una propiedad Javascript, si puedes usar un booleano, 
y añadirá el atributo HTML automáticamente.  */

// toggleAttribute(attr, force): Añade atributo attr si no existe, si existe lo elimina.

buttonOne.toggleAttribute("disabled");         // Como ya existe "disabled", lo elimina
buttonOne.toggleAttribute("hidden");           // Como no existe "hidden", lo añade

// 6. La API classList de Javascript --------------------------------------------------------------

/* La API classList de Javascript nos permite gestionar la lista de clases de un elemento
HTML. */

// 6.1. La propiedad .className ---------------------------------------------------------------------------

/* Javascript tiene a nuestra disposición una propiedad .className en todos los elementos HTML. 
Dicha propiedad contiene el valor del atributo HTML class como un string, y puede tanto leerse 
como reemplazarse.

La propiedad .className viene a ser la modalidad directa y rápida de utilizar el getter 
.getAttribute("class") y el setter .setAttribute("class", value).*/

const divThree = document.querySelector(".element");

// Obtener clases CSS
console.log(divThree.className);              // "element shine dark-theme"
console.log(divThree.getAttribute("class"));  // "element shine dark-theme"

// Modificar clases CSS
divThree.className = "element shine light-theme";
divThree.setAttribute("class", "element shine light-theme");

/* Trabajar con .className tiene una limitación cuando trabajamos con múltiples clases CSS, y 
es que puedes querer realizar una manipulación sólo en una clase CSS concreta, dejando las 
demás intactas. En ese caso, modificar clases CSS mediante una asignación .className se vuelve 
poco práctico. */

// 6.2. La propiedad .classList --------------------------------------------------------------------------

/* Se trata de un objeto especial que contiene una serie de ayudantes que permiten trabajar con 
las clases de forma más intuitiva y lógica. Si accedemos a .classList, nos devolverá un DOMTokenList 
de clases CSS de dicho elemento. Pero además, incorpora una serie de métodos ayudantes que nos harán 
muy sencillo trabajar con clases CSS:*/

// .classList: Devuelve la lista de clases del elemento HTML.
const element = document.querySelector("#new_page");
console.log(element.classList);             // DOMTokenList(3) ['info', 'data', 'dark']
console.log(element.classList.value);       // "info data dark"

// .classList.length: Devuelve el número de clases del elemento HTML.
console.log(element.classList.length);      // 3

// .classList.item(n): Devuelve la clase número n del elemento HTML.  si no existe.
console.log(element.classList.item(1));     // "data"

// .classList.contains(clase): Indica si la clase existe en el elemento HTML.
console.log(element.classList.contains("data"));  // true

// .classList.add(c1, c2, ...): Añade las clases c1, c2... al elemento HTML.
element.classList.add("shine", "light-theme");
console.log(element.classList);             // DOMTokenList(5) ['info', 'data', 'dark', 'shine', 'light-theme']

// .classList.remove(c1, c2, ...): Elimina las clases c1, c2... del elemento HTML.
element.classList.remove("shine", "light-theme");
console.log(element.classList);             // DOMTokenList(3) ['info', 'data', 'dark']

// .classList.toggle(clase): Si la clase no existe, la añade. Si no, la elimina.
element.classList.toggle("shine");
console.log(element.classList);             // DOMTokenList(4) ['info', 'data', 'dark', 'shine']

// .classList.toggle(clase, expr): Si expr es true, añade la clase. Si es false, la elimina.
element.classList.toggle("color", true);
console.log(element.classList);             // DOMTokenList(5) ['info', 'data', 'dark', 'shine', 'color']

// .classList.replace(old, new): Reemplaza la clase old por la clase new.
element.classList.replace("shine", "light-theme");
console.log(element.classList);             // DOMTokenList(4) ['info', 'data', 'dark', 'light-theme', 'color']

// Utilizando Array.from()
const arrayFromClassListOne = Array.from(element.classList); // ["info", "data", "dark"]

// Utilizando spread operator
const arrayFromClassListTwo = [...element.classList]; // ["info", "data", "dark"]

// 7. Contenido en el DOM ----------------------------------------------------------------------------------

/* Si tenemos elementos HTML y queremos modificar su contenido, podemos hacerlo desde Javascript desde 
ciertas propiedades de elementos del DOM. Estas propiedades son muy útiles tanto para obtener información, 
para modificarla, así como para eliminarla. Vamos a analizar como podemos hacerlo. */

// 7.1. textContent ------------------------------------------------------------------------------------------

/* Devuelve el contenido de texto del elemento. Se puede asignar para modificar. */

/*
const elementTwo = document.querySelector(".message");
console.log(elementTwo.textContent)                         // Me llamo Manz. New message
elementTwo.textContent = "Hola a todos";
console.log(elementTwo.textContent)                         // Hola a todos
*/

// 7.2. innerText -----------------------------------------------------------------------------------------------

/* La propiedad .innerText es muy similar a .textContent, pero tiene una diferencia clave: accede al 
texto renderizado visualmente por el navegador. Por ejemplo, observa el siguiente fragmento de código: */

/* La propiedad .innerText es muy similar a .textContent, pero tiene una diferencia clave: accede al 
texto renderizado visualmente por el navegador. Por ejemplo, observa el siguiente fragmento de código:

<div class="container_two">
    <p>Hola a todos.</p>
    <p>Me llamo <strong>Manz</strong>. <mark style="display: none">New message</mark></p>
    <p hidden>Esto es un mensaje posterior oculto semánticamente.</p>
    <details>
        <summary>Más información</summary>
        <div>Esto es un desplegable que está colapsado.</div>
    </details>
</div>

Observa que:

El contenido de la etiqueta <mark> está oculto mediante CSS.
El contenido de la tercera etiqueta <p> está oculto semánticamente mediante el atributo hidden.
El contenido de la etiqueta <div> dentro del <details> está oculto porque el acordeón está colapsado.
Si consultamos el contenido de texto del .container mediante la propiedad .textContent nos 
devolvería todo el contenido de texto de todas las etiquetas del interior del .container. 
Sin embargo, si lo hacemos mediante la propiedad .innerText nos devolvería lo siguiente:
*/

const elementThree = document.querySelector(".container_two");
console.log(elementThree.innerText);  
// Hola a todos. Me llamo Manz. New message. Esto es un mensaje posterior oculto semánticamente.

// 7.3. innerHTML ---------------------------------------------------------------------------------------------

/* La propiedad .innerHTML, nos permite acceder al contenido de un elemento, pero en lugar de 
devolver su contenido de texto, nos devuelve su contenido HTML, es decir, su marcado HTML. 
Esto tiene varias implicaciones que explicaremos más adelante. */

const elementFour = document.querySelector(".message");

console.log(elementFour.innerHTML);    
// Me llamo <strong>Manz</strong>. <mark style="display: none">New message</mark>
console.log(elementFour.textContent);  
// Me llamo Manz. New message

/* De la misma forma que .textContent, también podemos usar .innerHTML para modificar el contenido. 
Ten en cuenta que el contenido HTML suministrado a .innerHTML se interpretará, mientras que el 
suministrado por .textContent se inserta literalmente como texto: */

elementFour.textContent = "<strong>Importante</strong>";  // Se lee "<strong>Importante</strong>"
elementFour.innerHTML = "<strong>Importante</strong>";    // Se lee "Importante" (en negrita)

// 7.4. Parseo de marcado HTML --------------------------------------------------------------------------------

/* Ten en cuenta que la propiedad .innerHTML comprueba y parsea el marcado HTML escrito 
(corrigiendo si hay errores) antes de realizar la asignación. Por ejemplo, observa el siguiente código: */

const divFour = document.createElement("div");
divFour.innerHTML = "<strong>Manz";
console.log(divFour.innerHTML)   // "<strong>Manz</strong>"

/* Aunque hemos insertado el HTML incompleto con .innerHTML, si examinamos el contenido, podemos 
ver que está completo. Esto ocurre porque el navegador parsea e intenta que el código HTML sea 
correcto en todo momento. */

// 7.5. outterHTML -------------------------------------------------------------------------------------------

/* La propiedad .outerHTML es muy similar a la anterior. Mientras que .innerHTML devuelve el código 
HTML del interior de un elemento HTML, .outerHTML devuelve el código HTML desde el exterior, 
es decir, incluyendo al propio elemento implicado: */

const data = document.querySelector("summary");
data.innerHTML = "<h1>Tema 1</h1>";

console.log(data.textContent);   // "Tema 1"
console.log(data.innerHTML);     // "<h1>Tema 1</h1>"
console.log(data.outerHTML);     // "<summary><h1>Tema 1</h1></summary>"

// 7.6. setHTML ----------------------------------------------------------------------------------------------

/* El método .setHTML() es muy interesante para insertar contenido HTML sin preocuparte excesivamente 
por temas de seguridad, como suele ocurrir con .innerHTML. Su utilización es muy sencilla, observa 
el siguiente fragmento de código: */

const containerTwo = document.querySelector(".container");
const unsafe_html = "<strong onmouseover='alert(\"hello\")'>Hello</strong>";

containerTwo.innerHTML = unsafe_html;    // Introduce literalmente el código HTML
containerTwo.setHTML(unsafe_html);       // Introduce "<strong>Hello</strong>"

// 8. Insertar elementos en el DOM --------------------------------------------------------------------------

/* Si tenemos que hacer múltiples inserciones o necesitamos insertar elementos manteniendo intacta 
la estructura existente (o los listeners de eventos asociados), estaría bien disponer de formas en 
las que podamos indicar exactamente donde queremos añadir el elemento, de forma más controlada. 
Y eso es lo que vamos a ver en este artículo.

Veamos 3 formas (de más tradicional a más moderna) de inserción o modificación de elementos:

1️⃣ La API de nodos
2️⃣ La API de elementos
3️⃣ La API de inserción adyacente */

// 8.1. API de nodos -----------------------------------------------------------------------------------------

/* La API de nodos nos permite insertar elementos en el DOM. Por ejemplo, la API de nodos nos 
permite insertar elementos en el interior de un elemento HTML de forma sencilla. 

.appendChild(node): Añade como hijo el nodo node. Devuelve el nodo insertado.
.removeChild(node): Elimina y devuelve el nodo hijo node.
.replaceChild(new, old): Reemplaza el nodo hijo old por new. Devuelve old.
.insertBefore(new, node): Inserta el nodo new antes de node y como hijo del nodo actual.
.insertBefore(new, ): Inserta el nodo new después del último nodo hijo. Equivale a .appendChild().

*/

// 8.2. API de elementos -------------------------------------------------------------------------------------

/* Los métodos mencionados con anterioridad sirven en muchos casos, sin embargo, son poco específicos 
y puede que no cubran todas las posibles situaciones. Existe otra familia de métodos para añadir e 
insertar elementos que quizás sea mucho más versátil. Todos los métodos permiten pasar por parámetro 
un elemento o una lista de elementos. También puedes pasar un  (para insertar un fragmento de texto). 
Echemos un vistazo a estos métodos:

Métodos	Descripción
.before(): Añade el nuevo elemento justo antes.
.after(): Añade el nuevo elemento justo después.
.prepend(): Se añade el nuevo elemento antes del primer hijo.
.append(): Se añade el nuevo elemento después del último hijo.
.replaceChildren(): Elimina todos los hijos y los sustituye por el nuevo elemento.
.replaceWith(): Se sustituye por el nuevo elemento.
.remove(): Elimina el propio elemento. */

// 8.3. API de inserción adyacente --------------------------------------------------------------------------------

/*Probablemente, una de las APIs de manejo del DOM más desconocidas y más interesantes, es la de Inserción de 
elementos adjacentes. Son una familia de 3 métodos que permiten hacer prácticamente cualquier operación 
posible en el DOM.

Son los métodos que tenemos a continuación:

Métodos	Descripción
.insertAdjacentElement(position, element) -> Inserta el element en la posición position. Si falla, .
.insertAdjacentHTML(position, htmlCode) -> Inserta el código HTML de htmlCode en la posición position.
.insertAdjacentText(position, text) -> Inserta el texto text en la posición position.

Los métodos de la familia insertAdjacent son bastante más versátiles que .appendChild(), ya que permiten 
muchas más posibilidades. Tenemos tres versiones diferentes:

.insertAdjacentElement() -> donde insertamos una etiqueta HTML 
.insertAdjacentHTML() -> donde insertamos código HTML directamente (similar a innerHTML)
.insertAdjacentText() -> donde insertamos un texto directamente (similar a textContent) 

Ten en cuenta que position es un  que puede tener uno de los siguientes valores:

beforebegin	-> Inserta el elemento antes de la etiqueta HTML de apertura.	before()
afterbegin	-> Inserta el elemento dentro, antes de su primer hijo.	preprend()
beforeend	-> Inserta el elemento dentro, justo antes de la etiqueta HTML de cierre.	append() o appendChild()
afterend	-> Inserta el elemento después de la etiqueta HTML de cierre.	after()
*/

// 9. Navegar por elementos del DOM --------------------------------------------------------------------------

/* En algunas ocasiones en las que conocemos y controlamos perfectamente la estructura del código HTML de 
la página, nos puede resultar más cómodo tener a nuestra disposición una serie de propiedades para navegar 
por la jerarquía de elementos HTML relacionados. 

- Navegar a través de elementos
children	            : Devuelve una lista de elementos HTML hijos.
parentElement	        : Devuelve el padre del elemento o  si no tiene.
firstElementChild	    : Devuelve el primer elemento hijo.
lastElementChild	    : Devuelve el último elemento hijo.
previousElementSibling	: Devuelve el elemento hermano anterior o  si no tiene.
nextElementSibling	    : Devuelve el elemento hermano siguiente o  si no tiene.

- Navegar a través de nodos
childNodes	            : Devuelve una lista de nodos hijos. Incluye nodos de texto y comentarios.
parentNode	            : Devuelve el nodo padre del nodo o  si no tiene.
firstChild	            : Devuelve el primer nodo hijo.
lastChild	            : Devuelve el último nodo hijo.
previousSibling	        : Devuelve el nodo hermano anterior o  si no tiene.
nextSibling	            : Devuelve el nodo hermano siguiente o  si no tiene.
*/