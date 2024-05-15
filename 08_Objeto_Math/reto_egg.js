///////////////////////////////////////////////////////////////////////////////////////
// RETO EGG ---------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Actividad: Cálculos con Math --------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* Define una función palindrome que pruebe los siguientes métodos: Math.abs(x), 
Math.ceil(x), Math.floor(x), Math.round(x), Math.max(x1, x2, ..., xn),
Math.min(x1, x2, ..., xn) y Math.random() */

function palindrome(x) {
    // Instanciar variables
    const number1 = 11.2, number2 = 221, number3 = 3.33, number4 = 421, number5 = 530

    // Calcular el valor absoluto de x
    const absoluteValue = Math.abs(x)
    console.log(`El valor absoluto de ${x} es ${absoluteValue}`)

    // Redondear hacia arriba x
    const ceilingValue = Math.ceil(x)
    console.log(`El valor redondeado hacia arriba de ${x} es ${ceilingValue}`)

    // Redondear hacia abajo x
    const floorValue = Math.floor(x)
    console.log(`El valor redondeado hacia abajo de ${x} es ${floorValue}`)

    // Redondear x
    const roundValue = Math.round(x)
    console.log(`El valor redondeado de ${x} es ${roundValue}`)

    // Obtener el número más grande de los indicados por parámetro
    const maxValue = Math.max(x, number1, number2, number3, number4, number5)
    console.log(`El número más grande de los indicados por parámetro es ${maxValue}`)

    // Obtener el número más pequeño de los indicados por parámetro
    const minValue = Math.min(x, number1, number2, number3, number4, number5)
    console.log(`El número más pequeño de los indicados por parámetro es ${minValue}`)

    // Obtener un número aleatorio entre 0 y 1
    const randomValue = Math.random()
    console.log(`El número aleatorio entre 0 y 1 es ${randomValue}`)
}

palindrome(11.2)

///////////////////////////////////////////////////////////////////////////////////////
// Actividad Complementaria: Creando una Calculadora ----------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, desarrollarás una calculadora básica con las operaciones de 
suma, resta, multiplicación, división, potencias, raíz cuadrada, raíz cúbica.  */

console.clear()

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            return 'Error: No se puede dividir por cero';
        }
        return a / b;
    }

    squareRoot(a) {
        return Math.sqrt(a);
    }

    cubeRoot(a) {
        return Math.cbrt(a);
    }

    power(a, b) {
        return Math.pow(a, b);
    }
}

function startCalculator() {
    const calculator = new Calculator();
    const operation = prompt('Elige la operación: (sumar, restar, multiplicar, dividir, raiz cuadrada, raiz cubica, potencia)').toLowerCase();

    const num1 = parseFloat(prompt('Ingresa el primer número:'));
    let num2;
    if (operation !== 'raiz cuadrada' && operation !== 'raiz cubica') {
        num2 = parseFloat(prompt('Ingresa el segundo número:'));
    }

    let result;
    switch (operation) {
        case 'sumar':
            result = calculator.add(num1, num2);
            break;
        case 'restar':
            result = calculator.subtract(num1, num2);
            break;
        case 'multiplicar':
            result = calculator.multiply(num1, num2);
            break;
        case 'dividir':
            result = calculator.divide(num1, num2);
            break;
        case 'raiz cuadrada':
            result = calculator.squareRoot(num1);
            break;
        case 'raiz cubica':
            result = calculator.cubeRoot(num1);
            break;
        case 'potencia':
            result = calculator.power(num1, num2);
            break;
        default:
            alert('Operación inválida. Por favor, elige una operación válida.');
            return;
    }

    alert(`El resultado es: ${result}`);
}

startCalculator();