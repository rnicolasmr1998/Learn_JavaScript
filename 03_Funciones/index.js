///////////////////////////////////////////////////////////////////////////////////////
// FUNCIONES --------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/*Las funciones son una de las herramientas más centrales en la programación en 
JavaScript. El concepto de envolver un fragmento de programa en un valor tiene 
muchos usos. Nos proporciona una manera de estructurar programas más grandes, de 
reducir la repetición, de asociar nombres con subprogramas y de aislar estos 
subprogramas entre sí. */

// 1. Definir una función -------------------------------------------------------------

/* Una definición de función es un enlace habitual donde el valor del enlace es una 
función. Por ejemplo, este código define cubic para que se refiera a una función 
que produce el cubo de un número dado: */

const cubic = function (x) {
  return x ** 3;
};

console.log(cubic(6)); // La salida es 216

/* Una función se crea con una expresión que comienza con la palabra clave function. 
Las funciones tienen un conjunto de parámetros (en este caso, solo x) y un cuerpo, 
que contiene las declaraciones que se ejecutarán cuando se llame a la función. 
El cuerpo de una función creada de esta manera siempre debe estar envuelto entre 
llaves, incluso cuando consiste en una única declaración. */

/* Una instrucción return determina el valor que devuelve la función. Cuando el 
control llega a una instrucción de ese tipo, salta inmediatamente fuera de la función 
actual y le da el valor devuelto al código que llamó a la función. Una palabra clave 
return sin una expresión después de ella hará que la función devuelva undefined. Las 
funciones que no tienen ninguna instrucción return en absoluto, devuelven igualmente 
undefined. */

// 2. Definir una función -------------------------------------------------------------

/* Cada enlace tiene un ámbito, que es la parte del programa en la que el enlace es 
visible. Para los enlaces definidos fuera de cualquier función, bloque o módulo, el 
ámbito es todo el programa—puedes hacer referencia a esos enlaces donde quieras. Estos 
se llaman globales. */

/* Los enlaces creados para los parámetros de una función o declarados dentro de una 
función solo pueden ser referenciados en esa función, por lo que se conocen como 
enlaces locales. Cada vez que se llama a la función, se crean nuevas instancias de 
estos enlaces. */

/* Los enlaces declarados con let y const en realidad son locales al bloque en el que 
se declaran, por lo que si creas uno de ellos dentro de un bucle, el código antes y 
después del bucle no puede “verlo”; en cambio, la palabra clave var, son visibles en 
toda función en la que aparecen—o en todo el ámbito global, si no están dentro de una 
función. */

let x = 10; // global
if (true) {
  let y = 20; // local al bloque
  var z = 30; // también global
}

/* Cada ámbito puede “mirar hacia afuera” al ámbito que lo rodea, por lo que x es 
visible dentro del bloque en el ejemplo. La excepción es cuando múltiples enlaces 
tienen el mismo nombre—en ese caso, el código solo puede ver el más interno. Por 
ejemplo, cuando el código dentro de la función halve hace referencia a n, está 
viendo su propio n, no el n global. */

const halve = function (h) {
  return h / 4;
};

let h = 10;
console.log(halve(100));                  // La salida es: 25
console.log(h);                           // La salida es: 10

// 3. Ámbito anidado ------------------------------------------------------------------

/* JavaScript distingue no solo entre enlaces globales y locales. Bloques y funciones 
pueden ser creados dentro de otros bloques y funciones, produciendo múltiples grados 
de localidad. Como se muestra en el siguiente código: */

const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "lata", "garbanzos");
  ingredient(0.25, "taza", "tahini");
  ingredient(0.25, "taza", "jugo de limón");
  ingredient(1, "diente", "ajo");
  ingredient(2, "cucharada", "aceite de oliva");
  ingredient(0.5, "cucharadita", "comino");
}

/* El código dentro de la función ingredient puede ver el enlace factor de la función 
exterior, pero sus enlaces locales, como unit o ingredientAmount, no son visibles en 
la función exterior. El conjunto de enlaces visibles dentro de un bloque está 
determinado por el lugar de ese bloque en el texto del programa. */

console.log(hummus(23))

// 4. Notación de declaración ---------------------------------------------------------

/* Hay una manera ligeramente más corta de crear un enlace de función. Cuando se 
utiliza la palabra clave function al inicio de una declaración, funciona de manera 
diferente (se les conoce como "función declarativa"). Volvemos a escribir la función 
cubic lineas arriba: */

function otherCubic(x) {
  return x ** 3;
}

/* Las declaraciones de función no forman parte del flujo de control regular de 
arriba hacia abajo. Por ello, el siguiente código no va arrojar ningún error: */

console.log("El futuro dice:", future());

function future() {
  return "Nunca tendrás autos voladores";
}

// 5. Funciones flecha ----------------------------------------------------------------

/* Hay una tercera notación para funciones, que se ve muy diferente de las otras. En 
lugar de la palabra clave function, utiliza una flecha (=>) compuesta por un signo 
igual y un caracter mayor que. Su estructura es la siguiente:  
let func = (arg1, arg2, ..., argN) => expresion
Ejemplos de ellos son: */

const exponente1 = (x) => { return x * x; }
const exponente2 = x => x * x

function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2)
console.log(twice(2))

// 6. Puntos claves de las funciones --------------------------------------------------

/* JavaScript es extremadamente flexible en cuanto al número de argumentos que puedes 
pasar a una función. Si pasas demasiados, los extras son ignorados. Si pasas muy pocos, 
los parámetros faltantes se les asigna el valor undefined. Un ejemplo usando la función
otherCubic donde vamos a proporcionarle más de un argumento: */

console.log(otherCubic(25, 30, 50, "Perro"))

// El resultado solo toma el primer valor y lo eleva al cubo teniendo un valor de: 15625

/* Es perfectamente válido que una función se llame a sí misma, siempre y cuando no lo 
haga tan a menudo que desborde la pila. Una función que se llama a sí misma se llama 
recursiva. La recursión permite que algunas funciones se escriban de una manera diferente. 
Toma, por ejemplo, esta función power, que hace lo mismo que el operador 
** (potenciación): */

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(3, 3))

// El resultado es 27
