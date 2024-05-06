///////////////////////////////////////////////////////////////////////////////////////
// ESTRUCTURA DEL PROGRAMA ------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
// EXPRESIONES Y DECLARACIONES --------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En el capítulo anterior creamos valores y le aplicamos operadores para obtener 
nuevos valores. Crear valores de esta manera es la sustancia principal de cualquier 
programa JavaScript. Pero esa sustancia debe enmarcarse en una estructura más grande 
para ser útil; por ello, profundizaremos un poco más en la creación de variables y 
cuál es su principal finalidad. */

/* Un fragmento de código que produce un valor se llama una expresión. Cada valor que 
está escrito literalmente (como 25 o "economía") es una expresión. El tipo más simple 
de declaración es una expresión con un punto y coma al final (para versiones recientes
de javascript no es necesario el punto y coma al final para saltar la linea). Este es 
un ejemplo de expresión: */
5;
!true

/* El problema con las expresiones anteriores es que se muestran y luego se desechan, 
no se pueden utilizar en el código posteior a menos que las vuelvas a escribir. Por
ello, es necesario contener ese dato en una variable o enlace para poder reutilizarla 
en código futuro. Las tres formas de crear una variable son: */
let     myName = "Piero"           // Se puede modificar el valor más adelante
var     myBirthday = "28/01/1997"  // Similar a "let", se creo para versiones antiguas 
const   myLastName = "Marroquin"   // No se puede modificar el valor

/* Cuando un enlace o variable apunta a un valor, eso no significa que esté atado a 
ese valor para siempre. El operador = se puede usar en cualquier momento en enlaces 
existentes para desconectarlos de su valor actual y hacer que apunten a uno nuevo: */
let mood = "red"
console.log(mood)                  // la salida es: red
mood = "blue"
console.log(mood)                  // la salida es: blue

/* Una sola instrucción let puede definir múltiples enlaces y si defines un enlace 
sin asignarle un valor, cuando lo llames esta te dará como resultado "undefined". 
Las definiciones deben estar separadas por comas: */
let one = 1, two = 2, blank
console.log(one + two)                  // la salida es: 3
console.log(blank)                      // la salida es: undefined

/* La colección de enlaces y sus valores que existen en un momento dado se llama 
entorno. Cuando un programa se inicia, este entorno no está vacío. Siempre contiene 
enlaces que forman parte del lenguaje estándar, y la mayoría de las veces también 
tiene enlaces que proporcionan formas de interactuar con el sistema circundante. 
Por ejemplo, en un navegador, existen funciones para interactuar con el sitio web 
cargado actualmente y para leer la entrada del ratón y el teclado. */

///////////////////////////////////////////////////////////////////////////////////////
// CONTROL DE FLUJO -------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* Cuando tu programa contiene más de una sentencia, las sentencias se ejecutan de
manera ordenada, de arriba hacia abajo. Se muestra un ejemplo en el siguiente 
programa: */

let theNumber = Number(prompt("Elige un número del 1 al 10:"));
console.log("Tu número es la raíz cuadrada de " + theNumber * theNumber);

/* Primero se declara el enlace con un valor asignado por el usuario y luego se 
muestra un mensaje en la consola. Eso representa un esquema bastante trivial del
flujo de control en línea recta. */

// 1. Ejecución condicional ------------------------------------------------------------

/* No todos los programas son caminos rectos. Podríamos, por ejemplo, querer crear una 
carretera ramificada donde el programa tome la rama adecuada basada en la situación en 
cuestión. Esto se llama ejecución condicional. */

// 1.1. IF ------------------------------------------------------------------------------

/* El condicional if es un condicional lógico que evalúa el camino a tomar en base a
la evaluación de una condición. Este se ejecuta o salta una sentencia dependiendo del 
valor de una expresión booleana (true o false). La expresión de decisión se escribe 
después de la palabra clave, entre paréntesis, seguida de la sentencia a ejecutar. */
let theValue = Number(prompt("Elige un número del 1 al 10:"));
if (!Number.isNaN(theNumber)) {
    console.log("Tu número es la raíz cuadrada de " + theValue * theValue);
}

/* Las llaves se pueden usar para agrupar cualquier cantidad de sentencias en una sola 
sentencia, llamada un bloque. También podrías haber omitido en este caso, ya que 
contienen solo una sentencia, pero para evitar tener que pensar si son necesarias, se 
mantine las llaves por buenas prácticas */
if (1 + 1 === 2) console.log("Es verdad");

/* A menudo no solo tendrás código que se ejecuta cuando una condición es verdadera, 
sino también código que maneja el otro caso. Esta ruta alternativa está representada 
por la segunda flecha en el diagrama. Puedes usar la palabra clave else, junto con if, 
para crear dos caminos de ejecución alternativos y separados: */
let myAge = Number(prompt("¿Cuántos años tienes?"));
if (!Number.isNaN(myAge) && myAge >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad o no has colocado un número correcto");
}

/* Si tienes más de dos caminos para elegir, puedes “encadenar” múltiples pares 
if/else. Aquí tienes un ejemplo: */
let number = Number(prompt("Escoge un número"));
if (Number.isNaN(number)) {
    console.log("Debes colocar un número");
} else if (number < 100) {
    console.log("El número es menor a 100");
} else {
    console.log("El número es mayor a 100")
}

/* Un caso especial del if es el if ternario que nos permite resolver una expresión
lógica asignando un valor. Su estructura es la siguiente: condición ? valor1 : valor2,
que significa que si la condición es verdadera, tomar el primer valor (valor1); caso
contrario, toma el segundo valor (valor2). Un ejemplo es el siguiente: */
console.log(10 < 100 ? "Es verdadero" : "Es falso")

// Esto se le puede asignar a una variable de la siguiente manera
let phrase = (10 < 100) ? "Es verdadero" : "Es falso"

// También se pueden anidar los if cuando se tienen múltiples condiciones
let weather = "soleado"
let temperature = 88
if (weather === "soleado") {
    if (temperature < 86) {
        console.log(`Está a ${temperature} grados afuera - agradable y soleado`)
    } else if (temperature >= 86) {
        console.log(`Está a ${temperature} grados afuera - ¡QUÉ CALOR`)
    }
} else {
    console.log("No está haciendo calor")
}

// 1.2. SWITCH --------------------------------------------------------------------------

/* La declaración switch evalúa una expresión, comparando el valor de esa expresión con 
una instancia case, y ejecuta declaraciones asociadas a ese case, así como las 
declaraciones en los case que siguen. El programa primero busca la primera instancia 
case cuya expresión se evalúa con el mismo valor de la expresión de entrada (usando 
comparación estricta, ===) y luego transfiere el control a esa cláusula, ejecutando 
las declaraciones asociadas. Si no se encuentra una cláusula de case coincidente, el 
programa busca la cláusula default opcional, y si se encuentra, transfiere el control a 
esa instancia, ejecutando las declaraciones asociadas. */

/*
switch (expresion) {
    case choice1:
    ejecuta este código
    break;
    
    case choice2:
    ejecuta este código
    break;
    
    "Se pueden incluir todos los casos que quieras"
    
    default:
    por si acaso, corre este código
}
*/

/* La declaración break es opcional y está asociada con cada etiqueta de case y
asegura que el programa salga del switch una vez que se ejecute la instrucción
coincidente y continúe la ejecución en la instrucción siguiente.*/

// Sin el condicional switch
if (weather == "lluvioso") console.log("Recuerda llevar un paraguas.");
else if (weather == "soleado") console.log("Vístete ligero.");
else if (weather == "nublado") console.log("Sal al exterior.");
else console.log("¡Tipo de clima desconocido!");

// Con el condicional switch
switch (weather) {
    case "lluvioso":
        console.log("Recuerda llevar un paraguas.");
        break;
    case "soleado":
        console.log("Vístete ligero.");
        break;
    case "nublado":
        console.log("Sal al exterior.");
        break;
    default:
        console.log("¡Tipo de clima desconocido!");
}

// 2. Estructura repetitiva (bucle) ----------------------------------------------------

/* Un bucle o lazo (Loop)  es un segmento de un algoritmo o programa, cuya instrucciones 
se repiten un número determinado de veces mientras se cumple una determinada condición 
(existe o es verdadera la condición). */

/* Especialmente al hacer bucles, un programa a menudo necesita “actualizar” un enlace 
para que contenga un valor basado en el valor anterior de ese enlace o variable.*/
let counterInit
counterInit = counterInit + 1

// JavaScript proporciona un atajo para esto:
counterInit += 1

/* Atajos similares funcionan para muchos otros operadores, como result *= 2 para 
duplicar result o counter -= 1 para contar hacia atrás. Esto nos permite acortar aún 
más nuestro ejemplo de contar: */

for (let numberInit = 0; numberInit <= 12; numberInit += 2) {
    console.log(numberInit);
}

/* Para counter += 1 y counter -= 1, existen equivalentes aún más cortos: 
counter++ y counter--. */

// 2.1. Bucles while y do ---------------------------------------------------------------

/* Considera un programa que imprime todos los números pares de 0 a 10. Una forma de 
escribirlo es la siguiente:*/
console.log(0)
console.log(2)
console.log(4)
console.log(6)
console.log(8)
console.log(10)

/* Eso funciona, pero la idea de escribir un programa es hacer menos trabajo, no más. 
Si necesitáramos todos los números pares menores que 1,000, este enfoque sería 
inviable. Por ello, lo que necesitamos es una manera de ejecutar un fragmento de código 
múltiples veces. Esta forma de control de flujo se llama bucle.*/

/* El control de flujo mediante bucles nos permite regresar a algún punto en el programa 
donde estábamos antes y repetirlo con nuestro estado de programa actual. Si combinamos 
esto con una variable que cuente, podemos hacer algo como esto: */
let numberInitial = 0
while (numberInitial <= 10) {
    console.log(numberInitial);
    numberInitial= numberInitial + 2;
}

/* Una sentencia que comienza con la palabra clave while crea un bucle. La palabra while 
va seguida de una expresión entre paréntesis y luego un enunciado, similar a if. El bucle 
sigue ejecutando ese enunciado mientras la expresión produzca un valor que se convierta 
en true al convertirse a Booleano. Otro ejemplo sería calcular y mostrar 2 elevado a las
10. Para ello, se usa dos enlaces o variables, uno para llevar un seguimiento de nuestro 
resultado y otro para contar cuántas veces hemos multiplicado este resultado por 2. El 
bucle comprueba si el segundo enlace ya ha alcanzado 10 y, si no, actualiza ambos 
enlaces.*/
console.clear()
let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);                        // El resultado es 1024

/* Un bucle do es una estructura de control similar a un bucle while. La única diferencia 
radica en que un bucle do siempre ejecuta su cuerpo al menos una vez, y comienza a probar 
si debe detenerse solo después de esa primera ejecución. Para reflejar esto, la prueba 
aparece después del cuerpo del bucle:*/
let yourName;
do {
    yourName = prompt("¿Cuál es tu nombre?");
} while (!yourName);
console.log("Hola " + yourName);

/* Este programa te obligará a ingresar un nombre. Preguntará una y otra vez hasta que 
obtenga algo que no sea una cadena vacía. Aplicar el operador ! convertirá un valor al 
tipo Booleano antes de negarlo, y todas las cadenas excepto "" se convierten en true. 
Esto significa que el bucle continúa hasta que proporciones un nombre no vacío. */

// 2.1. Bucle for -----------------------------------------------------------------------

/* Muchos bucles siguen el patrón mostrado en los ejemplos de while. Primero se crea 
una variable de “contador” para rastrear el progreso del bucle. Luego viene un bucle 
while, generalmente con una expresión de prueba que verifica si el contador ha alcanzado 
su valor final. Al final del cuerpo del bucle, el contador se actualiza para rastrear 
el progreso.*/

/* Esto se puede simplificar mediante el uso del bucle for. Repetimos el ejemplo 
anterior que imprime todos los números pares de 0 a 10. */
for(let number = 0; number <= 10; number = number + 2) {
    console.log(number)
}
// 2.1. Bucle for -----------------------------------------------------------------------

/* La única diferencia entre este ejercicio y el anterior es que todas las declaraciones 
relacionadas con el “estado” del bucle están agrupadas después de for. La primera parte 
antes del primer punto y coma inicializa el bucle, generalmente definiendo una variable. 
La segunda parte es la expresión que verifica si el bucle debe continuar. La parte final 
actualiza el estado del bucle después de cada iteración. En la mayoría de los casos, 
esto  es más corto y claro que un while tradicional.*/
// 2.1. Bucle for -----------------------------------------------------------------------
/* Este es el código que calcula 2 elevado a la potencia de 10 usando for en lugar de 
while: */

let resultado = 1
for (let contador = 0; contador < 10; contador = contador + 1) {
    resultado = resultado * 2
}
console.log(resultado)

// 2.3. Palabras claves -----------------------------------------------------------------

/* 💡En el ámbito de las estructuras repetitivas en programación, existen etiquetas y 
palabras clave como 'break', 'label' y 'continue'.*/

// 2.3.1. Break --------------------------------------------------------------------------

/* Hacer que la condición del bucle produzca false no es la única forma en que un bucle 
puede terminar. La instrucción break tiene el efecto de salir inmediatamente del bucle que 
la contiene. Su uso se demuestra en el siguiente programa, que encuentra el primer número 
que es mayor o igual a 20 y divisible por 9: */
for (let current = 20; ; current = current + 1) {
    if (current % 9 == 0) {
        console.log(current);
        break;
    }
}

/* La construcción for en el ejemplo no tiene una parte que verifique el final del bucle. 
Esto significa que el bucle nunca se detendrá a menos que se ejecute la instrucción break 
dentro de él. Si eliminaras esa declaración break o escribieses accidentalmente una 
condición final que siempre produzca true, tu programa quedaría atrapado en un bucle 
infinito. */

// 2.3.2. Continue --------------------------------------------------------------------------

/* A diferencia de la instrucción break , continue no finaliza por completo la ejecución 
del bucle; en cambio:
- En un while bucle, vuelve a la condición.
- En un for bucle, salta a la expresión de actualización. 
Un ejemplo es el siguiente cuyo resultado es: 1, 3, 7, 12*/

let i = 0;
let n = 0;

while (i < 5) {
    i++;

    if (i === 3) {
    continue;
    }

    n += i;
    console.log (n);
}

// 2.3.3. Label ---------------------------------------------------------------------------------

/* La declaración label se utiliza con las declaraciones break y continue, sirve para 
identificar la declaración a la que se aplican las declaraciones break y continue. */

// Sin declaración de etiqueta, when j==i inner loop jumps to next iteration
function test() {
    for (var i = 0; i < 3; i++) {
        console.log("i=" + i);
        for (var j = 0; j < 3; j++) {   
        if (j === i) {
            continue;
        }
        console.log("j=" + j);
        }
    }
}
test()
/* El resultado es:
i=0 (note j=0 is missing)
j=1
j=2
i=1
j=0 (note j=1 is missing)
j=2
i=2
j=0
j=1 (note j=2 is missing) */

// using a labeled statement we can jump to the outer (i) loop instead
function testLabel() {
    outer: for (var i = 0; i < 3; i++) {
        console.log("i=" + i);
        for (var j = 0; j < 3; j++) {
            if (j === i) {
            continue outer;
        }
        console.log("j=" + j);
        }
    }
}
testLabel()  
/*
i=0 (j only logged when less than i)
i=1
j=0
i=2
j=0
j=1
*/

// Con más detalle se verán las funciones más adelante.
