///////////////////////////////////////////////////////////////////////////////////////
// PROGRAMACIÓN ORIENTADA A OBJETOS ---------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* La programación orientada a objetos (POO) es un paradigma de programación que
se basa en la creación y manipulación de objetos para resolver problemas. Este modo 
o paradigma de programación nos permite organizar el código de una manera que se 
asemeja bastante a como pensamos en la vida real, utilizando las famosas clases. 
Estas nos permiten agrupar un conjunto de variables y funciones que veremos a 
continuación.

En POO, un objeto es una entidad que combina datos (propiedades) y
comportamientos (métodos) relacionados. Los objetos son instancias de clases,
que son como plantillas o modelos que definen la estructura y el comportamiento
de los objetos. */

// 1. Definiendo clases -------------------------------------------------------------

/* En JavaScript, una clase es una plantilla que define la estructura y el
comportamiento de los objetos. Se declaran usando la palabra clave class. */

// Por ejemplo:
class Animals { }

/* Se trata de una clase vacía y sin mucha utilidad práctica, pero es 
la mínima clase que podemos crear. */

// 2. Definiendo objetos -------------------------------------------------------------

/* Los objetos son instancias de clases y se crean utilizando la palabra clave ‘new’. 
Por ejemplo: */

const animalOne = new Animals();
console.log(animalOne);

// 3. Propiedades o atributos --------------------------------------------------------

/* Son variables que pertenecen a un objeto y almacenan datos relacionados con ese
objeto. */

// 4. Metodos -------------------------------------------------------------------------

/* Son funciones que pertenecen a un objeto y definen su comportamiento. */

///////////////////////////////////////////////////////////////////////////////////////
// ¿Cómo hago para crear una clase?----------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

// 1. Definir la clase -----------------------------------------------------------------

/* Para comenzar, usamos la palabra clave class seguida del nombre de la clase. Por
convención, los nombres de clase empiezan con una letra mayúscula. */

class MiClase {
    // Contenido de la clase aqui
}

// 2. Constructor ----------------------------------------------------------------------

/* El constructor es un método especial que se ejecuta cuando se crea una instancia
de la clase. Puedes usarlo para inicializar propiedades y realizar configuraciones
iniciales. */

class MiClaseConstructor {
    constructor(parametro1, parametro2) {
        this.propiedad1 = parametro1;
        this.propiedad2 = parametro2;
    }
}

// 3. Métodos --------------------------------------------------------------------------

/* Puedes agregar métodos a la clase usando la sintaxis de función dentro de la
definición de la clase. */

class MiClaseMetods {
    constructor(parametro1, parametro2) {
        this.propiedad1 = parametro1;
        this.propiedad2 = parametro2;
    }
    // Método de la clase
    miMetodo() {
        // Contenido del método aquí
    }
}

// 4. Crear instancias -----------------------------------------------------------------

/* Para crear una instancia de la clase, utilizamos la palabra clave new seguida del
nombre de la clase y los parámetros del constructor, si los hay. */

const instancia = new MiClaseMetods("valor1", "valor2");

/* El resultado final de una clase seria */

// Definir la clase "Persona"
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad}
    años.`);
    }
}
// Crear una instancia de la clase "Persona"
const persona1 = new Persona("Juan", 30);
// Llamar al método "saludar" de la instancia
persona1.saludar(); // Salida: "Hola, mi nombre es Juan y tengo 30 años."

///////////////////////////////////////////////////////////////////////////////////////
// Características de la programación orientada a objetos------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* Vamos a ver los cuatro pilares principales de la POO: la abstracción, la
encapsulación, la herencia y el polimorfismo. */

// 1. Abstracción ----------------------------------------------------------------------

/* En términos sencillos, la abstracción consiste en identificar las características
esenciales e ignorar los detalles irrelevantes o complejos de un objeto para
modelarlo en el programa de manera más simple y comprensible. Es decir, llevar al
objeto a su mínima expresión comprensible. 
Un ejemplo simple de abstracción podría ser una clase ‘Coche‘: */

class Coche {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    acelerar() {
        console.log('El coche está acelerando.');
    }
    frenar() {
        console.log('El coche está frenando.');
    }
    obtenerInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año:
    ${this.año}`;
    }
}

/* En este ejemplo, la clase Coche representa la abstracción de un coche con sus
propiedades (marca, modelo, año) y sus métodos (acelerar(), frenar(),
obtenerInformacion()). Estos métodos representan el comportamiento del coche
sin entrar en los detalles internos de cómo se realiza la aceleración o el frenado. 
Esto permite que otros desarrolladores utilicen esta clase para interactuar con coches 
en su programa sin necesidad de preocuparse por los detalles de implementación. */


// 2. Encapsulación ---------------------------------------------------------------------

/* La encapsulación es el concepto de agrupar datos y métodos relacionados en un
objeto y ocultar los detalles internos de su funcionamiento. En JavaScript, esto se
logra mediante el uso de métodos públicos y propiedades privadas utilizando la
convención del númeral (#). Aunque es importante destacar que JavaScript no
impone un nivel estricto de privacidad, sino que depende de las convenciones de
nombramiento para indicar la intención. 
Los métodos accesores (getters, setters) nos permiten acceder y modificar los 
atributos (propiedades) de un objeto de una manera controlada. Estos métodos 
ofrecen una forma de encapsulación, lo que significa que ocultan los detalles 
internos de la implementación de las propiedades y proporcionan una interfaz 
para interactuar con ellas. 
a. Getter (método de acceso): se utiliza para obtener el valor de una 
propiedad privada de un objeto. Se define utilizando la palabra clave get seguida 
del nombre de la propiedad que se quiere obtener. Los getters no toman argumentos 
y se invocan simplemente llamando al nombre de la propiedad como si fuera 
un atributo.
b. Setter (método de modificación): se utiliza para modificar el valor de 
una propiedad privada de un objeto. Se define utilizando la palabra clave set 
seguida del nombre de la propiedad que se quiere modificar. Los setters toman 
un argumento que representa el nuevo valor de la propiedad y se invocan como 
si estuvieras asignando un valor a una propiedad. */

// Un ejemplo es:
class ClassPersona {
    #edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.#edad = edad;
    }
    get edad() {
        return this.#edad;
    }

    set edad(nuevaEdad) {
        if (nuevaEdad > 0) {
            this.#edad = nuevaEdad;
        };
    }
}

const persona = new ClassPersona('Juan', 30);
console.log(persona.edad); // Output: 30
persona.edad = 35;
console.log(persona.edad); // Output: 35
persona.edad = -5; // No se permiten valores negativos
console.log(persona.edad); // Output: 35

// 3. Modularidad -----------------------------------------------------------------------

/* Se refiere a la capacidad de dividir un programa en módulos o unidades más
pequeñas y bien definidas, donde cada módulo representa una funcionalidad
específica o un conjunto de funcionalidades relacionadas. Cada módulo se
implementa como una clase o un conjunto de clases que interactúan entre sí para
lograr un objetivo particular. */

// Módulo Libro
class Libro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
    }
    // Otros métodos relacionados con los libros...
}
// Módulo Usuario
class Usuario {
    constructor(nombre, edad, tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
    // Otros métodos relacionados con los usuarios...
}
// Módulo Prestamo
class Prestamo {
    constructor(libro, usuario, fechaInicio, fechaFin) {
        this.libro = libro;
        this.usuario = usuario;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    // Otros métodos relacionados con los préstamos...
}

// 4. Polimorfismo ----------------------------------------------------------------------

/* Se refiere a la capacidad de dividir un programa en módulos o unidades más
pequeñas y bien definidas, donde cada módulo representa una funcionalidad
específica o un conjunto de funcionalidades relacionadas. Cada módulo se
implementa como una clase o un conjunto de clases que interactúan entre sí para
lograr un objetivo particular. */

// 5. Herencia ---------------------------------------------------------------------------

/* La herencia permite que una clase (llamada subclase) herede propiedades y
métodos de otra clase (llamada clase base o superclase). Esto permite reutilizar
código y crear una jerarquía de clases. En JavaScript, se utiliza la palabra clave
extends ́para establecer la herencia. Por ejemplo: */

class Empleado extends Persona {
    constructor(nombre, edad, cargo) {
        super(nombre, edad); // Llama al constructor de la clase base (Persona).
        this.cargo = cargo;
    }
    presentarse() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy
    ${this.cargo}.`);
    }
}
const empleado1 = new Empleado('Pedro', 35, 'Desarrollador');
empleado1.saludar(); // Output: Hola, mi nombre es Pedro y tengo 35 años.
empleado1.presentarse(); // Output: Hola, soy Pedro, tengo 35 años y soy Desarrollador.

/* En el ejemplo se ve cómo se reutiliza la clase Persona ya creada, pero se le agrega el
parámetro de cargo, por eso se crea la clase Empleado heredando los parámetros
anteriores de la clase persona. 

La palabra clave super se utiliza en la herencia de clases en JavaScript para acceder a 
los métodos y propiedades de la superclase desde la subclase, permitiendo una extensión y
personalización de la funcionalidad heredada.
*/

// Definición de la superclase Animal
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerSonido() {
        return "Haciendo sonidos genéricos";
    }
}
// Definición de la subclase Perro que extiende Animal
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // Llamamos al constructor de la superclase usando super()
        this.raza = raza;
    }
    hacerSonido() {
        return "Guau, guau!";
    }
    moverCola() {
        return "Moviendo la cola felizmente";
    }
}
// Creación de una instancia de la subclase Perro
const miPerro = new Perro("Firulais", "Labrador");
// Llamando a los métodos de la subclase y superclase
console.log(miPerro.nombre); // Salida: "Firulais"
console.log(miPerro.raza); // Salida: "Labrador"
console.log(miPerro.hacerSonido()); // Salida: "Guau, guau!"
console.log(miPerro.moverCola()); // Salida: "Moviendo la cola felizmente"

/* En este ejemplo, hemos creado una superclase Animal con un constructor que
toma un parámetro nombre y un método hacerSonido(). Luego, definimos una
subclase Perro que extiende Animal. En el constructor de Perro, usamos
super(nombre) para llamar al constructor de la superclase Animal y pasarle el
nombre del perro.
Además, hemos redefinido el método hacerSonido() en la subclase Perro, lo que
significa que el método hacerSonido() de la superclase Animal se ha reemplazado
en la subclase. Por lo tanto, cuando llamamos a miPerro.hacerSonido(), se ejecuta
el método de la subclase Perro.

El método moverCola() es específico de la subclase Perro y no existe en la
superclase Animal. Al crear una instancia de Perro y llamar al método moverCola(),
podemos ver que solo está disponible en la subclase. */

// 6. Otras características de la POO ----------------------------------------------------

/* El método estático es un tipo especial de método que está asociado directamente con 
la clase en lugar de con instancias individuales de la clase. Esto significa que un 
método estático se puede llamar directamente desde la clase misma, sin necesidad de 
crear un objeto o instancia de la clase. Un ejemplo de ello: */

class MathUtils {
    static sumar(a, b) {
        return a + b;
    }
    static restar(a, b) {
        return a - b;
    }
}
// Llamando a los métodos estáticos directamente desde la clase
console.log(MathUtils.sumar(5, 3)); // Output: 8
console.log(MathUtils.restar(10, 4)); // Output: 6

/* En este ejemplo, sumar() y restar() son métodos estáticos de la clase MathUtils,
por lo que podemos invocarlos directamente desde la clase sin necesidad de crear
una instancia de MathUtils. Estos métodos no necesitan acceder a ninguna
propiedad de instancia o estado interno, ya que sus resultados solo dependen de los
argumentos que se les pasan. */

// 7. Algunos ejemplos de objetos --------------------------------------------------------

// * Ejemplo de un objeto Celular
const celular = {
    marca: "Samsung",
    modelo: "Galaxy S21",
    color: "Negro",
    almacenamiento: "128GB",
    sistemaOperativo: "Android",
    camaraMP: 64,
    encendido: false,
    // Método para sacar fotos
    sacarFoto: function () {
        if (!this.encendido) {
            console.log("El celular está apagado. Por favor, enciéndelo para sacar fotos.");
        } else {
            console.log(`Foto tomada con la cámara de ${this.camaraMP} MP en el ${this.modelo}. ¡Sonríe! 📸`);
        }
    },
    // Método para encender el celular
    encender: function () {
        this.encendido = true;
        console.log("¡El celular está encendido!");
    },
    // Método para apagar el celular
    apagar: function () {
        this.encendido = false;
        console.log("El celular se ha apagado.");
    }
};

// Prueba del objeto Celular
console.log("Información del celular:");
console.log(`Marca: ${celular.marca}`);
console.log(`Modelo: ${celular.modelo}`);
console.log(`Color: ${celular.color}`);
console.log(`Almacenamiento: ${celular.almacenamiento}`);
console.log(`Sistema Operativo: ${celular.sistemaOperativo}`);
// Encendemos el celular
celular.encender();
// Sacamos una foto
celular.sacarFoto();
// Apagamos el celular
celular.apagar();

/* En este ejemplo, el objeto "celular" tiene propiedades como marca, modelo, color,
almacenamiento, sistema operativo, y una propiedad "camaraMP" para representar
los megapíxeles de la cámara. También cuenta con métodos para sacar fotos,
encender el celular y apagarlo. */

// * Ejemplo de un objeto cuenta bancaria

const cuentaBancaria = {
    titular: "Juan Pérez",
    saldo: 1000,
    // Método para depositar dinero en la cuenta
    depositar: function (monto) {
        if (monto <= 0) {
            console.log("El monto a depositar debe ser mayor que cero.");
        } else {
            this.saldo += monto;
            console.log(`Se ha depositado $${monto} en la cuenta. Saldo actual: $${this.saldo}`);
        }
    },
    // Método para retirar dinero de la cuenta
    retirar: function (monto) {
        if (monto <= 0) {
            console.log("El monto a retirar debe ser mayor que cero.");
        } else if (monto > this.saldo) {
            console.log("Saldo insuficiente. No es posible realizar el retiro.");
        } else {
            this.saldo -= monto;
            console.log(`Se ha retirado $${monto} de la cuenta. Saldo actual: $${this.saldo}`);
        }
    },
    // Método para consultar el saldo de la cuenta
    consultarSaldo: function () {
        console.log(`Saldo actual: $${this.saldo}`);
    }
};
// Prueba del objeto Cuenta Bancaria
console.log(`Titular de la cuenta: ${cuentaBancaria.titular}`);
cuentaBancaria.consultarSaldo(); // Saldo actual: $1000
cuentaBancaria.depositar(500); // Se ha depositado $500 en la cuenta. Saldo actual: $1500
cuentaBancaria.retirar(200); // Se ha retirado $200 de la cuenta. Saldo actual: $1300
cuentaBancaria.consultarSaldo(); // Saldo actual: $1300

/* En este ejemplo, el objeto "cuentaBancaria" representa una cuenta bancaria con un
titular y un saldo. Los métodos "depositar", "retirar" y "consultarSaldo" permiten
realizar operaciones bancarias. El saldo se va actualizando de acuerdo a las
operaciones realizadas. */
