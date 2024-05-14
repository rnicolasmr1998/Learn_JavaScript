///////////////////////////////////////////////////////////////////////////////////////
// Expresiones regulares --------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* Las expresiones regulares son una forma de describir patrónes en datos de 
cadena. Forman un pequeño lenguaje separado que es parte de JavaScript y muchos 
otros lenguajes y sistemas. 

Las expresiones regulares son tanto terriblemente incómodas como extremadamente 
útiles. Su sintaxis es críptica y la interfaz de programación que JavaScript 
proporciona para ellas es torpe. Pero son una herramienta poderosa para inspeccionar 
y procesar cadenas. Comprender adecuadamente las expresiones regulares te hará un 
programador más efectivo. Un ejemplo del uso de expresiones regulares es el 
siguiente:

Necesitamos detectar si un nombre empieza con las letras «n» o «a» y además termina 
con las letras «r» o «n». Es decir, necesitamos comprobar si se cumplen dos 
restricciones con dos posibilidades cada una. */

const names = ["Juan", "Nicolas", "Miriam", "Nestor", "Adrián", "Aron"];

// Comprobación sin usar expresiones regulares
names.forEach(function (name) {
    const firstLetter = name.at(0).toLowerCase();
    const lastLetter = name.at(-1).toLowerCase();

    if (
        (firstLetter === "n" || firstLetter === "a") &&
        (lastLetter === "r" || lastLetter === "n")
    ) {
        console.log(`El nombre ${name} cumple las restricciones.`);
    }
});

// Comprobación usando expresiones regulares
names.forEach(function (name) {
    const regex = /^(n|a).+(r|n)$/i;

    if (regex.test(name)) {
        console.log(`El nombre ${name} cumple las restricciones.`);
    }
});

// 1. Creando una expresión regular ----------------------------------------------------

/* Una expresión regular es un tipo de objeto. Puede ser construido con el constructor 
RegExp o escrito como un valor literal al encerrar un patrón entre caracteres de barra 
diagonal (/). */

let regOne = new RegExp("abc", "i");
let regTwo = /abc/i; // El mismo patrón

/* Ambos objetos de expresión regular representan el mismo patrón: un carácter a 
seguido de un b seguido de un c. */

// 2. Partes de una RegExp -------------------------------------------------------------

/* Las partes de una expresión regular son las siguientes: 
- Los slash / : son los delimitadores de las partes de una expresión regular.
- La definición de la expresión regular: es un texto con símbolos especiales que 
indica que textos va a incluir.
- Los flags: son una serie de carácteres que indican como funcionará la expresión 
regular.

En el ejemplo de arriba, la expresión regular comienza con una barra diagonal (/) y 
indica que el patrón debe ser encontrado en la cadena. Las flags pueden ser los 
siguientes: 

i: El patrón debe ser ignorado por mayúsculas y minúsculas.
g: El patrón debe ser encontrado en todas las posiciones de la cadena.
m: El patrón debe ser encontrado en multiples lineas de la cadena.
u: El patrón debe ser encontrado en cadenas Unicode. Interpreta el patrón como 
un código de una secuencia Unicode.
y: Sticky. Busca sólo desde la posición indicada por lastIndex.
s: Establece si \n, \r, separación de párrafo o separación de línea deberían 
considerarse en los.
d: Establece si al ejecutar un .exec() el resultado deberá tener 
propiedad .indices.

Las propiedades de comprobación para ver si un flag está activo son:
string.source: Devuelve la expresión regular original definida (sin 
los flags).
string.flags: Devuelve los flags activados en la expresión regular.
number.lastIndex: Devuelve la posición donde detectó una ocurrencia 
en la última búsqueda. */

console.log(regTwo.source);                     // "abc"
console.log(regTwo.flags);                      // "i"
console.log(regTwo.flags.includes("g"));        // false
console.log(regTwo.flags.includes("i"));        // true
console.log(regTwo.lastIndex);                  // 0


// 2. Métodos de un objeto RegExp ------------------------------------------------------

/* Cualquier objeto  tiene los siguientes métodos que podemos ejecutar para realizar 
una búsqueda: 
- test(text): Comprueba si la expresión regular con el texto text pasado por parámetro.
- exec(text): Ejecuta una búsqueda en el texto text. Devuelve con capturas de lo 
que coincide.

Mientras que el primero, el método .test() se suele utilizar simplemente para 
comprobar si la expresión regular detecta algún texto que encaje con el  
proporcionado, el método .exec() es un poco más avanzado, y podemos utilizarlo 
para capturar coincidencias. */

// 2.1. Detectando coincidencias -------------------------------------------------------

/* El método .test() siempre te devolverá un  para indicar si la expresión regular ha 
encontrado un texto que encaja con el patrón definido. */

const regThree = /.o.e/i;
console.log(regThree.test("conejo"));          // true
console.log(regThree.test("gato"));            // false


// 2.2. Ejecutando una búsqueda ------------------------------------------------------------

/* El método .exec() ejecuta una búsqueda en el texto y devuelve todas las 
coincidencias.
Algunos detaller de sobre la parentización:
(x): El patrón x incluído dentro de paréntesis se captura y se guarda.
(?:x): Si incluímos ?: al inicio del patrón en los paréntesis, no se captura ese patrón.
x(?=y): Busca sólo si x está seguido de y.
x(?!y): Busca sólo si x no está seguido de y.

Algunos ejemplos para entenderlo bien: */

const textOne = `Hola Manz,

Soy el otro Manz (el gato) y necesito Whiskas.
El pato del patio sigue haciendo ruido. Te lo digo como dato.

Gracias.`;

const regFour = /(.a.o)./g;

regFour.exec(textOne);     // ["gato)", "gato"]
regFour.exec(textOne);     // ["pato ", "pato"]
regFour.exec(textOne);     // ["dato.", "dato"]
regFour.exec(textOne);     // null

/* Observa que en cada ejecución del método .exec() se nos devuelve 
un resultado diferente. Esto ocurre por usar el flag g (búsqueda global) 
y nos devuelve un array. El primer elemento del array es la coincidencia 
con toda la expresión regular, mientras que el segundo elemento del 
array es la coincidencia con lo incluido en paréntesis. 

Ten en cuenta que también podemos hacer múltiples capturas. Al definir 
la expresión regular, he incluído varios paréntesis para realizar varias 
capturas: */

const regFive = /(..) (.a.o)/g;

regFive.exec(textOne);     // ["el gato", "el", "gato"]
regFive.exec(textOne);     // ["El pato", "El", "pato"]
regFive.exec(textOne);     // ["mo dato", "mo", "dato"]
regFive.exec(textOne);     // null

/* Se debe tener en cuenta que el array devuelto por .exec() es un array 
especial que, a parte de funcionar como un array normal, tiene algunas 
propiedades extra que nos pueden ser de ayuda: 
.length: Como array, se puede consultar la longitud (coincidencia 
completa + capturas)
.groups: Crea un objeto con los resultados de parentizaciones 
nombradas (ver más adelante)
.index: Posición del string donde se encontró la ocurrencia.
.input: Texto string original pasado por parámetro a .exec().
.indices: Si se usa el flag d, se incluye un array con las posiciones 
inicial y final de las coincidencias del array. 

Veamos el array resultante de la ejecución del método .exec() en 
esta ocasión: */

const textTwo = "Hola Manz. El formato adecuado es 2022-08-15. Ignoraremos fechas en el formato 15-08-2022.";
const regSix = /([0-9]{4})-([0-9]{2})-([0-9]{2})/gd;

regSix.global;        // true (el flag global está activado)

const result = regSix.exec(textTwo);    // ["2022-08-15", "2022", "08", "15"]   index: 34
regSix.exec(textTwo);                   // null

console.log(result)                     // ["2022-08-15", "2022", "08", "15"]
console.log(result.length)              // 4
console.log(result.index)               // 34
console.log(result.input === textTwo)   // true

console.log(regSix.hasIndices)          // true
console.log(result.indices)             // [[34, 44], [34, 38], [39, 41], [42, 44]]
console.log(result.groups)              // undefined

/* El  contenido en result.indices contiene varios , uno por cada elemento del array 
result. Así pues, 34 es la posición inicial de result[0], mientras que 44 es la posición 
final. En el siguiente array, 34 es la posición inicial de result[1], mientras que 38 es 
la posición final. Y así sucesivamente. 

Es posible asignarle un nombre a cada parentización realizada, de modo que sea más 
«humana» la forma de capturar elementos y gestionarlos después. Para ello, solo 
tenemos que añadir ?<nombre> al inicio de la parentización, como se puede ver en 
el siguiente ejemplo: */

const textThree = `Hola Manz. Son las 13:33:02, a las 18:45:00 te avisaré para que inicies stream.`;
const regSeven = /(?<hours>[0-9]{2}):(?<mins>[0-9]{2}):(?<secs>[0-9]{2})/gd

const resultTwo = regSeven.exec(textThree);     // ["13:33:02", "13", "33", "02"]

/* En este caso, podremos ver que la propiedad .groups no es undefined, 
sino que tiene los textos de las parentizaciones capturadas: */

console.log(resultTwo.groups)           // { hours: "13", mins: "33", secs: "02" }
console.log(resultTwo.index)            // 19
console.log(resultTwo.indices)          // [[19, 27], [19, 21], [22, 24], [25, 27]]
console.log(resultTwo.indices.groups)   // { hours: [19, 21], mins: [22, 24], secs: [25, 27] }

// 3. Expresiones regulares ------------------------------------------------------------

/* Crear expresiones regulares puede parecer fácil al principio, sin embargo, es muy 
fácil crear expresiones regulares que tengan resultados no previstos, por lo que hay 
que practicar mucho y tener cierta experiencia con ellas. */

// 3.1. Clases básicas -----------------------------------------------------------------

/*Algunos caracteres especiales son:
.: Comodín, significa cualquier caracter (letra, número, símbolo...), pero que 
ocupe sólo 1 carácter.
\: Precedido de un carácter especial, lo invalida (se llama «escapar»).

Algunos ejemplos de expresiones regulares: */

const regEight = /M.nz/;

regEight.test("Manz");      // true (el texto "Manz" encaja con el patrón)
regEight.test("manz");      // false (La «M» debe ser mayúscula)

const regNine = /M.nz/i;

regNine.ignoreCase        // true
regNine.test("manz");     // true (ignoramos mayús/minús con el flag «i»)

const regTen = /gato./;

regTen.test("gatos.");      // true
regTen.test("gatosa");      // true
regTen.test("gatos ");      // true

const regEleven = /gato\./;

regEleven.test("gatos.");      // true (es literalmente el punto)
regEleven.test("gatosa");      // false
regEleven.test("gatos ");      // false

// 3.2. Conjunto de caracteres ---------------------------------------------------------

/* Dentro de las expresiones regulares, los corchetes [] tienen un significado 
especial. Se trata de un mecanismo para englobar un conjunto de carácteres 
personalizado o alternativas. Pero por otro lado, si incluimos un 
circunflejo ^ en el interior de los corchetes, invertimos el significado, 
pasando a significar que no exista el conjunto de carácteres personalizado: 

[]: Rango de carácteres. Cualquiera de los caracteres del interior de los corchetes.
[^]: Que no exista cualquiera de los caracteres del interior de los corchetes.
|: Establece una alternativa: lo que está a la izquierda o lo que está a la derecha.

Algunos ejemplos son: */

const regTwelve = /[aeiou]/i;    // RegExp que acepta vocales (mayús/minús)

regTwelve.test("a");             // true (es vocal)
regTwelve.test("E");             // true (es vocal, ignora mayus/minus porque tiene flag «i»)
regTwelve.test("t");             // false (no es vocal)

const regexpThirteen = /[^aeiou]/i;   // RegExp que acepta lo que no sea vocal (mayús/minús)

regexpThirteen.test("a");             // false
regexpThirteen.test("E");             // false
regexpThirteen.test("T");             // true
regexpThirteen.test("m");             // true

const regFourteen = /casa|cama/;      // RegExp que acepta "casa" o "cama"

regFourteen.test("casa");          // true
regFourteen.test("cama");          // true
regFourteen.test("capa");          // false

const regFifteen = /cas(i|o)ta/;  // RegExp que acepta "casita" o "casota"

regFifteen.test("casita");        // true
regFifteen.test("casota");        // true
regFifteen.test("caseta");        // false

/* Los paréntesis () puedes agrupar una parte más específica para indicar 
alternativas, aunque recuerda que con los paréntesis estás haciendo 
capturas de textos con Expresiones regulares. */

// 3.3. Rango de caracteres -------------------------------------------------------------

/* En el interior de los corchetes [], si establecemos dos carácteres separados 
por guión, por ejemplo [0-9], se entiende que indicamos el rango de carácteres 
entre 0 y 9, sin tener que escribirlos todos explícitamente. 

[0-9]: Un dígito del 0 al 9 (alternativa -> \d).
[^0-9]:	No exista un dígito del 0 al 9 (alterna -> \D).
[A-Z]: Letra mayúscula de la A a la Z. Excluye ñ o letras acentuadas.
[a-z]: Letra minúscula de la a a la z. Excluye ñ o letras acentuadas.
[A-Za-z0-9]: Carácter alfanumérico (letra mayúscula, minúscula o dígito)
Alternativa -> \w.
[^A-Za-z0-9]: No exista carácter alfanumérico (letra mayúscula, minúscula o dígito).
Alternativa -> \W.
[ \t\r\n\f]: Carácter de espacio en blanco (espacio, TAB, CR, LF o FF).
Alternativa -> \s.
[^ \t\r\n\f]: No exista carácter de espacio en blanco (espacio, TAB, CR, LF o FF).
Alternativa -> \S.
\xN: Carácter hexadecimal número N.
\uN: Carácter Unicode número N. */

// 3.4. Anclas ----------------------------------------------------------------------------

/* Dentro de las expresiones regulares, las anclas son un recurso muy importante, ya 
que permiten delimitar los patrones de búsqueda e indicar si empiezan o terminan 
por carácteres concretos, siendo mucho más específicos al realizar la búsqueda: 

^: Ancla. Delimita el inicio del patrón. Significa empieza por.
$: Ancla. Delimita el final del patrón. Significa acaba en.
\b: Límite de una palabra separada por espacios, puntuación o inicio/final.
\B: Opuesta al anterior. Posición entre 2 caracteres alfanuméricos o no alfanuméricos.

Algunos ejemplos son: */

const regSixteen = /^mas/i;     // Debe empezar por "mas"
regSixteen.test("Formas");      // false  (contiene "mas", pero no empieza por "mas")
regSixteen.test("Master");      // true (empieza por "mas" y tiene el flag «i»)
regSixteen.test("masticar");    // true

const regSeventeen = /do$/i;      // Debe terminar por "do"

regSeventeen.test("Vívido");      // true
regSeventeen.test("Dominó");      // false (contiene "do" pero no acaba por "do")

const regEighteen = /fo\b/;

regEighteen.test("Esto es un párrafo de texto.");  // true (tras "fo" hay un límite de palabra)
regEighteen.test("Esto es un párrafo.");           // true (tras "fo" hay un signo de puntuación)
regEighteen.test("Un círculo es una forma.");      // false (tras "fo" sigue la palabra)
regEighteen.test("Frase que termina en fo");       // true (tras "fo" termina el string)

// 3.5. Cuantificadores --------------------------------------------------------------------

/* En las expresiones regulares los cuantificadores permiten indicar cuántas veces se puede 
repetir el carácter inmediatamente anterior. Existen varios tipos de cuantificadores: 

*: El carácter anterior puede aparecer 0 o más veces.
+: El carácter anterior puede aparecer 1 o más veces.
?: El carácter anterior puede aparecer o no (es opcional).
{n}: El carácter anterior aparece n veces.
{n,}: El carácter anterior aparece n o más veces.
{n,m}: El carácter anterior aparece de n a m veces.

Algunos ehjemplos son: */

const regNineTeen = /a*/;   // 'a' aparece 0 o más veces en el string

regNineTeen.test("");       // true ('a' aparece 0 veces)
regNineTeen.test("a");      // true ('a' aparece 1 veces)
regNineTeen.test("aa");     // true ('a' aparece 2 veces)

const regTwenty = /a+/;    // 'a' aparece 1 o más veces (equivalente a /aa*/)

regTwenty.test("");        // false ('a' aparece 0 veces)
regTwenty.test("a");       // true ('a' aparece 1 veces)
regTwenty.test("aa");      // true ('a' aparece 2 veces)
regTwenty.test("aba");     // true ('a' aparece 2 veces)
regTwenty.test("bbb");     // false ('a' aparece 0 veces)

const regTwentyOne = /disparos?/i;      // Acepta tanto "disparo" como "disparos"

regTwentyOne.test("Escuché disparos en la habitación.");  // true
regTwentyOne.test("Efectuó un disparo al sujeto.");       // true
regTwentyOne.test("La pistola era de agua.");             // false

// 3.6. Cuantificadores númericos -----------------------------------------------------------

/* Los tres cuantificadores siguientes, se utilizan cuando necesitamos concretar más 
el número de repeticiones del caracter anterior. Por ejemplo, {n} indica un número 
exacto, {n,} indica al menos n veces y {n,m} establece que se puede repetir de n a m 
veces:*/

const regTwentyTwo = /[0-9]{2}/;    // Un número formado por 2 dígitos (del 0 al 9)

regTwentyTwo.test(42);              // true
regTwentyTwo.test(88);              // true
regTwentyTwo.test(1);               // false (no son 2 dígitos)
regTwentyTwo.test(100);             // true (tiene al menos 2 dígitos)

const regTwentyThree = /^[0-9]{2}$/;    // Un número de exactamente 2 dígitos (del 0 al 9)

regTwentyThree.test(4);                 // false (no llega a 2 dígitos)
regTwentyThree.test(55);                // true
regTwentyThree.test(100);               // false (no tiene exáctamente 2 dígitos)

const regTwentyFour = /^[0-9]{3,}$/;

regTwentyFour.test(33);                // false (debe tener al menos 3 dígitos)
regTwentyFour.test(4923);              // true

const regTwentyFive = /^[0-9]{2,5}$/;

regTwentyFive.test(2);                 // false (no tiene de 2 a 5 dígitos)
regTwentyFive.test(444);               // true
regTwentyFive.test(543213);            // false (no tiene de 2 a 5 dígitos)