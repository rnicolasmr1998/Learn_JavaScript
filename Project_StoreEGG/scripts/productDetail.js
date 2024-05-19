//* Actividad: Capturar el id del producto -----------------------------------------------

/* En esta actividad capture el parámetro id utilizando las propiedades y métodos 
de la teoría e imprimelos en la consola */

const query = location.search
// console.log(query)
const params = new URLSearchParams(query)
// console.log(params)
const id = params.get('id')
// console.log(id)

//* Actividad: Renderizar dinámicamente la vista de detalle --------------------------------

/* Define la función printDetails para que dependa del parámetro id del 
detalle del producto, guarde en una variable el producto encontrado con 
el id del parámetro, defina una variable para la plantilla de la vista 
de detalles e interpole con ${} los datos correspondientes al detalle 
del producto, seleccione un id del html donde se imprimirá la plantilla
y actualice la vista con la renderización del detalle */

function printDetails(id) {
    const productSelect = products.find(each => each.id === id)
    const detailsTemplate = `
            <div class="product-img-block">
                <div id="img-small" class="product-thumbnail">
                    ${productSelect.images.map(image => `<img src="./assets/${image}" alt="Funko Pop Black Clover - Black Asta - Caja" >`).join('')}
                </div>
                <img src="./assets/${productSelect.images[0]}" alt="Funko Pop de Black Clover" id="main-img" >
            </div>
            <div id="description-block" class="product-description-block">
                <h1 class="product-heading">${productSelect.title}</h1>
                <p class="product-model">${productSelect.subtitle}</p>
                <form class="product-selector">
                    <fieldset class="product-fieldset">
                        <label class="selector-label" for="color">Color:</label>
                        <select class="selector-select" id="color">
                            <option selected disabled>-- Seleccionar --</option>
                            ${productSelect.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
                        </select>
                    </fieldset>
                </form>
                <div class="product-description">
                    <h4 class="product-description-title">Descripción:</h4>
                    <p class="product-description-content">
                        ${productSelect.description}
                    </p>
                </div>
            </div>
            <div class="product-checkout-block">
                <p class="product-total">Total</p>
                <p class="product-price">S/. ${productSelect.price}.00</p>
                <p class="product-tax">${productSelect.taxPolicy}.</p>
                <p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero harum ratione officia sint excepturi fugiat beatae magnam autem dignissimos, veniam ipsam exercitationem natus sapiente quam, nemo inventore nobis! Perferendis, quidem.</p>
                <ul class="product-checkout-info">
                    <li class="product-checkout-list">
                        <span class="list-icon">
                            <img src="./assets/truck.png" alt="icon truck">
                        </span>
                        <span class="list-description">
                            Agrega el producto al carrito para conocer los costos de envío
                        </span>
                    </li>
                    <li class="product-checkout-list">
                        <span class="list-icon">
                            <img src="./assets/plane.png" alt="icon plane">
                        </span>
                        <span class="list-description">
                            Recibe el producto en aproximadamente 10 a 15 días hábiles, seleccionando envío normal
                        </span>
                    </li>
                    <li class="product-checkout-list">
                        <span class="list-icon">
                            <img src="./assets/award-solid.svg" alt="icon award">
                        </span>
                        <span class="list-description">
                            Todos nuestros productos cuentan con una garantía del 100% de devolución del dinero.
                        </span>
                    </li>
                    <li class="product-checkout-list">
                        <span class="list-icon">
                            <img src="./assets/credit-card-solid.svg" alt="icon credit-card">
                        </span>
                        <span class="list-description">
                            Se aceptan todas las tarjetas y pago contraentrega.
                        </span>
                    </li>
                </ul>
                <form class="product-form-group">
                    <div class="form-top">
                        <input type="number" min="1" value="1"/>
                        <button class="btn-outline">Añadir al Carrito</button>
                    </div>
                </form>
            </div>
    `
    const detailsSelector = document.querySelector('#products')
    detailsSelector.innerHTML = detailsTemplate
}

printDetails(id)

//* Define la función changeMini para que:
/* Dependa del evento de click, guarde en una variable la ruta de la imagen de la 
miniatura, seleccione el id de la imagen agrandada y actualice la vista con la 
imagen agrandada seleccionada */

const imageSmall = document.querySelectorAll('#img-small img')
imageSmall.forEach(image => {
    // console.log(image)
    image.addEventListener('click', changeMini)
})

function changeMini(event) {
    // Traer el src de la imagen seleccionada
    const selectedImage = event.target.src
    
    // Traer el selector de la imagen grande
    const mainImage = document.getElementById('main-img')
    
    // Actualizar el src de la imagen grande
    mainImage.src = selectedImage
}

//*  Actividad: Calcular el subtotal a pagar
/* Modifica la función printDetails para que el input numérico de la cantidad 
tenga asignado un evento de cambio “en línea”. Cada cambio en las unidades 
a comprar debe ejecutar una función que actualice el subtotal a pagar */

const inputSelect = document.querySelector('.form-top input')
console.log(inputSelect)
inputSelect.addEventListener('input', changePrice)

function changePrice(event){
    //traer la cantidad del input de tipo number
    const quantity = event.target.value;
    //traer el producto
    const productSelect = products.find(product => product.id == id);
    //traer el selector del precio
    const priceSelector = document.querySelector(".product-price");
    priceSelector.innerHTML = `S/. ${quantity * productSelect.price}.00`
}
