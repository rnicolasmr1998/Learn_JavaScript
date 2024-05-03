///////////////////////////////////////////////////////////////////////////////////////
// INTRODUCCIÓN A JAVASCRIPT ----------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
// PRIMEROS PASOS ---------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

// 1. Comentarios ---------------------------------------------------------------------
// Para hacer un comentario de una línea se usa el doble slashe
/*Para hacer un comentario de varias líneas se inicia y termina
con slah-star */

// 2. Vinculando el script ------------------------------------------------------------
// Para conectar el código javascript al html se tiene dos opciones:
// a. Colocarlo en el head usando una palabra reservada
/* Se puede usar la palabra defer o async (la diferencia entre
ellos es que con defer los scripts se corren en orden a como
lo colocas; en cambio, async lo hace de manera paralela)
/*
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
*   <script src="./index.js" defer></script>
</head>
*/
// b. Colocarlo en el body
/* No se necesita ninguna palabra clave puesto que espera que termine de 
cargar la página para corre el script */
/*
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
*   <script src="./index.js"></script>
</body>
</html>
*/
/* Para ver si se sincronizo el script de javascript con el html podemos
usar la siguiente función que nos devuelve una alerta a la hora de correr
el html*/
alert("El script se ha conectado satisfactoriamente")

/* También se puede escribir el código javascript directamente en html usando
el elemento "<script></script>" o en la misma linea del elemento html; como es
el caso de: <button onclick="alert('¡Hiciste clic en el botón!')">Haz clic</button>.*/

///////////////////////////////////////////////////////////////////////////////////////
// Numbers, Strings and Operators -----------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

// 1. Numbers -------------------------------------------------------------------------
/* Los valores del tipo number son, como era de esperar, valores numéricos. 
En un programa de JavaScript, se escriben de la siguiente manera: */
13          // Número entero
-13         // Número entero negativo
9.81        // Número decimal o fraccional
3.598e8     // Eso es 3.598 × 10^8 = 359,800,000.
3.5264e-5   // Eso es 3.5264 × 10^(-5) = 0.000035264.

/* Para ver el tipo de dato se usa la función typeof. La función 
console.log muestra el resultado en la consola del navegador */
console.log(typeof 3.5264e-5)
console.log(typeof(3.598e8))

// Dentro de este tipo de valor, existen tres tipos de valores especiales
Infinity    // Número infinito positivo
-Infinity   // Número infinito negativo
NaN         // No es un número pero es de tipo númerico

console.log(typeof NaN)

/* A este tipo de dato se le puede realizar diferentes tipos de
operaciones aritméticas, como son:*/
console.log(45 + 50)        // Suma
console.log(100 - 20)       // Resta
console.log(35.4 * 8.12)    // Multiplicación
console.log(2540 / 43)      // División
console.log(5 ** 4)         // Potencia

// Se puede combinar las operaciones
console.log((130 + 52) / 25)

// 2. Strings -------------------------------------------------------------------------
/* Este tipo de dato se utiliza para representar texto. 
Se escriben encerrando su contenido entre comillas. Puedes usar comillas 
simples, comillas dobles o acentos graves para marcar las cadenas, siempre 
y cuando las comillas al principio y al final de la cadena coincidan. */
console.log(`La divina comedia`)         // acento grave o template literals
console.log("El psicoanalista")          // acento doble
console.log('El perfume')                // acento simple

/* Si un valor númerico lo colocó entre comillas dobles, simples o template
literals, el tipo de dato se convierte a string */

/* Tener en cuenta que los template literals para que no te genere error debe
estar colocado dentro de un contenedor de variable o dentro de una función
como es el caso de console.log */
/* Puedes poner casi cualquier cosa entre comillas para que JavaScript 
genere un valor de cadena a partir de ello; no obstante, algunos 
caracteres son más difíciles. Por ejemplo, imaginate lo complicado que 
sería poner comillas entre comillas, seria confuso para el programa reconocer 
cual comilla es de cierre. Otro ejemplo sería los Saltos de línea (los 
caracteres que obtienes al presionar enter) solo se pueden incluir cuando la 
cadena está entre acentos graves (`). */

/* Para poder incluir dichos caracteres en una cadena, se utiliza la siguiente 
notación: una barra invertida (\) dentro de un texto entre comillas indica que 
el carácter posterior tiene un significado especial. Esto se llama escapar el 
carácter. */

/* Cuando un carácter n aparece después de una barra invertida, se interpreta 
como un salto de línea. */

console.log("Primera oración\nSegunda oración")

/* Si se colocan dos barras seguidas, colapsarán juntas y solo quedará una en 
el valor de cadena resultante. */

console.log("Un carácter de nueva línea se escribe como: \"\\n\".")

/* Las cadenas no se pueden dividir, multiplicar o restar. El operador + se 
puede usar en ellas, no para sumar, sino para concatenar —unir dos cadenas. 
La siguiente línea producirá la cadena "economía": */
console.log("ec" + "on" + "om" + "ía")

/* La ventaja de utilizar un template literals con respecto a los otras
formas para crear un string es que en ellas puedes incrustar otros valores
o realizar operaciones dentro de ella; para ello usamos el siguiente
símbolo "${ } en el interior se coloca la operación o variable" */
console.log(`El resultado de multiplicar 123 por 7 es: ${123 * 7}`)

// 3. Operadores unarios --------------------------------------------------------------
/* No todos los operadores son símbolos. Algunos se escriben como palabras. 
Un ejemplo es el operador typeof, que produce un valor de cadena que indica el 
tipo del valor que le proporcionas. Los operadores que utilizan dos valores se 
llaman operadores binarios, mientras que aquellos que toman uno se llaman 
operadores unarios. Un caso especial es el operador menos que puede usarse
como un operador binario o como un operador unario. */

// typeof: determina el tipo de un objeto.
console.log(typeof "Nombre")
console.log(typeof 55.45) 

// delete: elimina una propiedad de un objeto (se verás más adelante)
const Employee = {
    firstname: 'Maria',
    lastname: 'Sanchez',
};  
console.log(Employee.firstname);        // Expected output: "Maria"
delete Employee.firstname;

console.log(Employee.firstname);        // Expected output: undefined

// void: se utiliza para obtener el valor primitivo undefined, usando void o void(0)
let foo = void(0);

console.log(foo);                       //output undefined

console.log(foo === undefined);         //output true

/* 
* Otros operadores unarios son:
+x   => Convertir un valor en un número
-x   => Convertir un valor en un número y negarlo
++x  => Suma uno al valor
x++  => Suma uno al valor
x--  => Resta uno al valor
--x  => Resta uno al valor 
*/

// 4. Boolean values ------------------------------------------------------------------
/* A menudo es útil tener un valor que distinga solo entre dos posibilidades, como 
“sí" y “no” o “encendido” y “apagado”. Para este propósito, JavaScript tiene un tipo 
Booleano, que tiene solo dos valores, true y false, escritos como esas palabras. Si
se le asigna el signo más, estos se convierten en datos númericos donde true es 1 y
false es 0*/

console.log(true)       // devuelve un boolean true
console.log(+true)      // devuelve un dato tipo númerico

// Para producir valores booleanos se pueden hacer las siguients comparaciones
console.log(57 > 45)    // la condición se cumple, true
console.log(38 < 24)    // no se cumple la condición, false

// También se pueden comparar cadenas de texto
console.log("Zordvark" < "Zoroaster")
/* La forma en que se ordenan las cadenas es aproximadamente alfabética pero no es 
realmente lo que esperarías ver en un diccionario: las letras mayúsculas son siempre 
“menores” que las minúsculas, por lo que "Z" < "a", y los caracteres no alfabéticos 
(!, -, y así sucesivamente) también se incluyen en la ordenación. Al comparar cadenas, 
JavaScript recorre los caracteres de izquierda a derecha, comparando los códigos 
Unicode uno por uno. */

/* Otros operadores similares son >= (mayor o igual que), <= (menor o igual que), 
== (igual a), y != (no igual a). */

console.log("Granate" != "Rubí")        // true
console.log("Perla" == "Amatista")      // false

/* Solo hay un valor en JavaScript que no es igual a sí mismo, y ese es NaN (“no es 
un número”), ya que NaN se supone que denota el resultado de un cálculo sin sentido y, 
como tal, no es igual al resultado de ningún otro cálculo sin sentido. */

console.log(NaN == NaN)                 // false

// 5. Operadores lógicos --------------------------------------------------------------

/* JavaScript soporta tres operadores lógicos: and (y), or (o), y not (no). Estos se 
pueden usar para “razonar” sobre valores Booleanos. */

// && => "and" o "y"
console.log(true && false)              // false

// || => "or" o "o"
console.log(false || true)              // true

// !  => negación
console.log(!false)                     // true

/* El último operador lógico que veremos no es unario ni binario, sino ternario, 
operando en tres valores. Se escribe con un signo de interrogación y dos puntos, 
así: */

console.log(true ? 5 : 15);             // 5
console.log(false ? 8 : 10);            // 10

/* El operador usa el valor a la izquierda del signo de interrogación para 
decidir cuál de los otros dos valores “elegir”. Si escribes a ? b : c, el resultado 
será b cuando a es verdadero y c de lo contrario. */

/* El operador "??"" se asemeja a "||"", pero devuelve el valor de la derecha 
solo si el de la izquierda es null o undefined, no si es algún otro valor que 
se pueda convertir en false. A menudo, este comportamiento es preferible 
al de "||"". */

console.log(0 || 130);                  // 130
console.log(20 ?? 40);                  // 20
console.log(null ?? 100);               // 100

/* El operador "||", por ejemplo, devolverá el valor de su izquierda cuando 
ese valor pueda convertirse en true y devolverá el valor de su derecha de 
lo contrario. Esto tiene el efecto esperado cuando los valores son Booleanos 
y hace algo análogo para valores de otros tipos. */

console.log(null || "nickname")         // nickname
console.log("Kira" || "usuario")        // Kira

// 6. Empty values --------------------------------------------------------------------

/* Hay dos valores especiales, escritos null y undefined, que se utilizan para denotar 
la ausencia de un valor significativo. Son valores en sí mismos, pero no llevan 
ninguna información. Muchas operaciones en el lenguaje que no producen un valor 
significativo devuelven undefined simplemente porque tienen que devolver algún 
valor. */

// 7. Automatic type conversion -------------------------------------------------------

/* Cuando se aplica un operador al tipo de valor “incorrecto”, JavaScript convertirá 
silenciosamente ese valor al tipo que necesita, utilizando un conjunto de reglas que 
a menudo no son las que deseas o esperas. Esto se llama coerción de tipos. */

console.log(15 * null)                  // resultado: 0
console.log("5" - 1)                    // resultado: 4
console.log("5" + 1)                    // resultado: 51

// ¿Qué sucede si quieres probar si algo se refiere al valor preciso false? 

console.log(0 == false)                 // true
console.log("" == false)                // true    

/* Son verdaderas estas dos operaciones debido a la conversión automática de tipos.
Para evitar ello, existen dos operadores adicionales: "===" y "!=="" que compara si un 
valor es precisamente igual al otro tanto en tipo de dato como en el valor del dato y el
otro si no es precisamente igual al otro tanto en tipo de dato como en el valor del
dato, respectivamente. */

console.log(0 === false)                // false
console.log("" !== true)                // true  

// 8. Variable ----------------------------------------------------------------------------

/* Una variable es un contenedor para un valor, como un número que podríamos usar en una 
suma, o una cadena que podríamos usar como parte de una oración. Otra cosa especial acerca 
de las variables es que pueden contener casi cualquier cosa, no solo cadenas y números. 
Las variables también pueden contener datos complejos e incluso funciones completas para 
hacer cosas asombrosas. Por último, es útil declarar variables ya que podemos reutilizar
el valor para incorporarlos en cálculos en lineas posteriores del código. */

// Para declarar una variable existen tres formas:
let     myName = "Nicolas"              // Se puede modificar el valor más adelante
var     myAge = 25                      // Similar a "let", se creo para versiones antiguas 
const   myLastName = "Marroquin"        // No se puede modificar el valor

// Para actualizar una variable, se realiza de la siguiente manera
myName = "Renzo"
myAge = 26

/* myLastName = "Rubio" si corro la siguiente línea me arroja un error puesto que al
declarar mi contenedor de variable como constante, este no se puede modificar */

/* Para evitar esta llenando los datos de manera manual, se puede solicitar al
usuario que los llene de acuerdo a sus datos usando el método "prompt()" que se usa 
para mostrar un cuadro de diálogo con un mensaje que solicita al usuario que ingrese 
algún texto o información. Tener en cuenta que el resultado siempre será un string */

console.clear()         // Limpia la consola

let edad = window.prompt("Cuantos años tienes:")
console.log(typeof edad)