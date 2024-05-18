//* Actividad: Asignar evento de teclado en línea

/* En esta actividad, sólo te enfocarás en asignar un evento de teclado al input de tipo texto de la barra de navegación que cuando el usuario presione una tecla, se ejecute la consola.*/

const inputSearch = document.querySelector("#search");
let doTask = () => {
    console.log("capturado")
}
//inputSearch.setAttribute("onkeyup", "doTask()")

//* Actividad: asignación de evento de teclado con event listener

/* En esta actividad, vas a modificar el evento de teclado del input de tipo texto de la barra de navegación de manera que funcione con un escuchador de eventos. */

//inputSearch.addEventListener("keyup", doTask);

//* Actividad: Investigación del evento de teclado

/* Modifica el escuchador de eventos, de manera que ahora, la función depende de un objeto con todos los datos del evento. */
/*
inputSearch.addEventListener("keyup", (event) => {
    const {type, timeStamp, isTrusted} = event;
    console.log({type, timeStamp, isTrusted});
})
*/
//* Actividad: Filtrar productos
/*En esta actividad, modificarás la función captureText para renderizar los productos resultantes del filtro de tipo texto. Para este ejercicio tienes que seguir los siguientes pasos: */

const captureText = (event) => {
    // Valor capturado por el evento
    let valueText = event.target.value;
    console.log(valueText)

    // Omitir las palabras que comienzan con espacio
    if (valueText.trim().length === 0) {
        // Si el valor capturado es solo espacios, no aplicar filtro
        printCards(products, "products");
        return;
    }
    
    // Filtrar el array de productos cuyo nombre comience con el texto capturado
    let filterProducts = products.filter((product) => product.title.toLowerCase().startsWith(valueText.toLowerCase()))
    
    // Renderizar los productos filtrados
    printCards(filterProducts, "products")
}

inputSearch.addEventListener("keyup", event => captureText(event))
