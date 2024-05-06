///////////////////////////////////////////////////////////////////////////////////////
// EJERCICIOS -------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

// Haciendo un triángulo con bucles ----------------------------------------------------

/* Escribe un bucle que realice siete llamadas usando para console.log para 
mostrar un triángulo */

// Con for
for (let line = "#"; line.length <= 7; line += "#") {
    console.log(line)
}

// Con while
let line = "#"
while(line.length <= 7) {
    console.log(line)
    line += "#"
}

// FizzBuzz -------------------------------------------------------------------------------

/* Escribe un programa que use console.log para imprimir todos los números del 1 al 100, 
con dos excepciones. Para los números divisibles por 3, imprime "Fizz" en lugar del 
número, y para los números divisibles por 5 (y no por 3), imprime "Buzz" en su lugar. */

// Con if
console.clear()
for (let number = 1; number <= 100; number++ ) {
    if (number % 3 == 0) {
        console.log("Fizz")
    } else if (number % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(number)
    }
}

// Con switch
console.clear()
for (let number = 1; number <= 100; number++ ) {
    switch(true) {
        case (number % 3 == 0):
            console.log("Fizz")
            break
        case (number % 5 == 0):
            console.log("Buzz")
            break
        default:
            console.log(number)
            break            
    }
}

/*Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz" para los 
números que son divisibles por 3 y 5 (y sigue imprimiendo "Fizz" o "Buzz" para los 
números que son divisibles solo por uno de esos). */

// Con if
console.clear()
for (let number = 1; number <= 100; number++ ) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz")
    } else if (number % 3 == 0) {
        console.log("Fizz")
    } else if (number % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(number)
    }
}

// Con switch
console.clear()
for (let number = 1; number <= 100; number++ ) {
    switch(true) {
        case (number % 3 == 0 && number % 5 == 0):
            console.log("FizzBuzz")
            break
        case (number % 3 == 0):
            console.log("Fizz")
            break
        case (number % 5 == 0):
            console.log("Buzz")
            break
        default:
            console.log(number)
            break            
    }
}

// Otra solución
console.clear()
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}

// Tablero de ajedrez ---------------------------------------------------------------------

/* Escribe un programa que cree una cadena que represente un tablero de 8x8, usando 
caracteres de salto de línea para separar las líneas. En cada posición del tablero hay un 
carácter de espacio o un carácter "#". Los caracteres deben formar un tablero de 
ajedrez. */

// Primera solución
console.clear()
let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
        board += " ";
        } else {
        board += "#";
        }
    }
    board += "\n";
}
console.log(board);
console.log("segunda opcion")

// Segunda solución
let textoPar = ""
let textoImpar = ""
while(textoPar.length < 8){
    if(textoPar.length % 2 === 0){
        textoPar += "#";
        textoImpar += " ";
    } else {
        textoPar += " ";
        textoImpar += "#";
    }
}
for (let i = 0; i < 8; i++) {
    if(i % 2 !== 1) console.log(textoImpar + "\n");
    if(i % 2 === 0) console.log(textoPar + "\n");
}



