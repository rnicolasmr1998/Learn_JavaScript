///////////////////////////////////////////////////////////////////////////////////////
// Objeto Math ------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* Cuando trabajamos con Javascript, es posible realizar gran cantidad de 
operaciones matemáticas de forma nativa, sin necesidad de librerías externas. 
Para ello, haremos uso del objeto Math, un objeto interno de Javascript que 
tiene incorporadas ciertas constantes y métodos (funciones) para trabajar 
matemáticamente. */

// 1. Constantes ----------------------------------------------------------------------

/* El objeto Math de Javascript incorpora varias constantes que podemos necesitar 
en algunas operaciones matemáticas. Algunas de ellas son: */

// Número PI o Π
console.log(Math.PI)            // 3.141592653589793

// Número de Euler
console.log(Math.E)             // 2.718281828459045

// Equivalente a Math.sqrt(2).
console.log(Math.SQRT2)         // 1.4142135623730951

// Equivalente a Math.sqrt(1/2).
console.log(Math.SQRT1_2)       // 0.7071067811865476

// Equivalente a Math.log(2)
console.log(Math.LN2)           // 0.6931471805599453

// Equivalente a Math.log(10)
console.log(Math.LN10)          // 2.302585092994046

// Equivalente a Math.log2(Math.E)
console.log(Math.LOG2E)         // 1.4426950408889634

// Equivalente a Math.log10(Math.E)
console.log(Math.LOG10E)        // 0.4342944819032518


// 2. Métodos ------------------------------------------------------------------------

// 2.1. Métodos matemáticos ----------------------------------------------------------

/* El objeto Math de Javascript incorpora varios métodos (funciones) que podemos 
necesitar para trabajar matemáticamente. Algunos de ellos son: */

// Valor absoluto de un número
console.log(Math.abs(-5))       // 5

// Devuelve el signo del número: 1 positivo, -1 negativo
console.log(Math.sign(-5))      // -1

// 	Exponenciación. Devuelve el número e elevado a x.
console.log(Math.exp(5))        // 148.4131591025766

// Equivalente a Math.exp(x) - 1.
console.log(Math.expm1(5))      // 147.4131591025766

// Devuelve el número más grande de los indicados por parámetro.
console.log(Math.max(5, 10))   // 10

// Devuelve el número más pequeño de los indicados por parámetro.
console.log(Math.min(5, 10))   // 5

// Potenciación. Devuelve el número base elevado a exp.
console.log(Math.pow(5, 2))     // 25

// Devuelve la raíz cuadrada de x.
console.log(Math.sqrt(5))      // 2.23606797749979

// Devuelve la raíz cúbica de x.
console.log(Math.cbrt(5))      // 1.7099759466766968

// Equivalente a a * b, pero a nivel de bits.
console.log(Math.imul(5, 10))  // 50

// Devuelve el número de ceros a la izquierda de x en binario (32 bits).
console.log(Math.clz32(5))     // 29

// 2.2. Método aleatorio ---------------------------------------------------------------

/* Uno de los métodos más útiles e interesantes del objeto Math es Math.random(). */

let x = Math.random()
console.log(x)

// 2.3. Métodos de logaritmo -------------------------------------------------------------

/* Algunos de los métodos de logaritmo incorporados en el objeto Math son: */

// Devuelve el logaritmo natural en base e de x.
console.log(Math.log(5))        // 1.6094379124341003

// Devuelve el logaritmo decimal (en base 10) de x.
console.log(Math.log10(5))      // 0.6989700043360189

// Devuelve el logaritmo en base 2 de x.
console.log(Math.log2(5))       // 2.321928094887362

// Devuelve el logaritmo natural de (1+x).
console.log(Math.log1p(5))      // 1.6094379124341003

// 2.4. Métodos de redondeo ---------------------------------------------------------------

/* Algunos de los métodos de redondeo incorporados en el objeto Math son: */

// Devuelve x con redondeo (el entero más cercano)
console.log(Math.round(5.5))    // 6

// Devuelve x con redondeo superior (el entero más alto)
console.log(Math.ceil(5.5))     // 6

// Devuelve x con redondeo inferior (el entero más bajo)
console.log(Math.floor(5.5))    // 5

// Devuelve x con redondeo (flotante con precisión simple)
console.log(Math.fround(3.123456789))    // 3.1234567165374756

// Trunca el número x (devuelve sólo la parte entera)
console.log(Math.trunc(5.5))   // 5

// 2.5. Métodos trigonométricos -----------------------------------------------------------

/** Algunos de los métodos trigonométricos incorporados en el objeto Math son: */

// Seno de x
console.log(Math.sin(5))        // -0.9589242746631385

// Arcoseno de x
console.log(Math.asin(-0.6))    // -0.6435011087932844

// Seno hiperbólico de x
console.log(Math.sinh(5))       // 74.20321057778875

// Arcoseno hiperbólico de x
console.log(Math.asinh(5))      // 2.3124383412727525
// Coseno de x
console.log(Math.cos(5))        // 0.28366218546322625

// Arcocoseno de x
console.log(Math.acos(0.8))     // 0.6435011087932843

// Coseno hiperbólico de x
console.log(Math.cosh(5))       // 74.20994852478785

// Arcocoseno hiperbólico de x
console.log(Math.acosh(5))      // 2.2924316695611777

// Tangente de x
console.log(Math.tan(5))        // -3.380515006246586

// Arcotangente de x
console.log(Math.atan(5))       // 1.373400766945016

// Tangente hiperbólica de x
console.log(Math.tanh(5))       // 0.9999092042625951

// Arcotangente hiperbólica de x
console.log(Math.atanh(-0.5))   // -0.5493061443340548

// Arcotangente del conc    iente de x/y
console.log(Math.atan2(5, 5))   // 0.7853981633974483

// Devuelve la raíz cuadrada de a2 + b2 + ...
console.log(Math.hypot(5, 5))   // 7.0710678118654755

