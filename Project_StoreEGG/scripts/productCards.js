// Actividad: Renderizando los productos con un template string
/* Define una variable productsSelector, para seleccionar la etiqueta correspondiente donde se renderizarán las tarjetas de productos. */
const productsSelector = document.getElementById("products")

/* Define una variable productsTemplate con un template string y pega el contenido de todas las tarjetas: */
let productsTemplate = `
    <a class="product-container-card" href="./details.html">
        <img class="product-img" src="./assets/funko_pop_black_clover.webp" alt="Funko Pop de Black Clover" />
        <div class="product-info">
            <span class="product-title">Funko Pop Black Clover - Black Asta</span>
            <span class="product-description">Exclusive Limited Edition</span>
            <div class="product-price-block">
                <span class="price">S/. 70.00</span>
                <span class="discount">10% Off</span>
            </div>
            <div class="product-tax-policy">Incluye IGV</div>
        </div>
    </a>
    <a class="product-container-card" href="./details.html">
        <img class="product-img" src="./assets/funko_pop_black_clover.webp" alt="Funko Pop de Black Clover" />
        <div class="product-info">
            <span class="product-title">Funko Pop Black Clover - Black Asta</span>
            <span class="product-description">Exclusive Limited Edition</span>
            <div class="product-price-block">
                <span class="price">S/. 70.00</span>
                <span class="discount">10% Off</span>
            </div>
            <div class="product-tax-policy">Incluye IGV</div>
        </div>
    </a>
    <a class="product-container-card" href="./details.html">
        <img class="product-img" src="./assets/funko_pop_black_clover.webp" alt="Funko Pop de Black Clover" />
        <div class="product-info">
            <span class="product-title">Funko Pop Black Clover - Black Asta</span>
            <span class="product-description">Exclusive Limited Edition</span>
            <div class="product-price-block">
                <span class="price">S/. 70.00</span>
                <span class="discount">10% Off</span>
            </div>
            <div class="product-tax-policy">Incluye IGV</div>
        </div>
    </a>
    <a class="product-container-card" href="./details.html">
        <img class="product-img" src="./assets/funko_pop_black_clover.webp" alt="Funko Pop de Black Clover" />
        <div class="product-info">
            <span class="product-title">Funko Pop Black Clover - Black Asta</span>
            <span class="product-description">Exclusive Limited Edition</span>
            <div class="product-price-block">
                <span class="price">S/. 70.00</span>
                <span class="discount">10% Off</span>
            </div>
            <div class="product-tax-policy">Incluye IGV</div>
        </div>
    </a>
    <a class="product-container-card" href="./details.html">
        <img class="product-img" src="./assets/funko_pop_black_clover.webp" alt="Funko Pop de Black Clover" />
        <div class="product-info">
            <span class="product-title">Funko Pop Black Clover - Black Asta</span>
            <span class="product-description">Exclusive Limited Edition</span>
            <div class="product-price-block">
                <span class="price">S/. 70.00</span>
                <span class="discount">10% Off</span>
            </div>
            <div class="product-tax-policy">Incluye IGV</div>
        </div>
    </a>
    <a class="product-container-card" href="./details.html">
        <img class="product-img" src="./assets/funko_pop_black_clover.webp" alt="Funko Pop de Black Clover" />
        <div class="product-info">
            <span class="product-title">Funko Pop Black Clover - Black Asta</span>
            <span class="product-description">Exclusive Limited Edition</span>
            <div class="product-price-block">
                <span class="price">S/. 70.00</span>
                <span class="discount">10% Off</span>
            </div>
            <div class="product-tax-policy">Incluye IGV</div>
        </div>
    </a>
`

productsSelector.innerHTML = productsTemplate

// Actividad: Renderizar los productos de forma dinámica
/* Define una función createCard para que reciba como parámetro un objeto y devuelva un template string con sólo una tarjeta de producto. */

function createCard(product) {
    return `
    <a class="product-container-card" href="./details.html?id=${product.id}">
        <img class="product-img" src="./assets/${product.images[0]}" alt="Funko Pop de Black Clover" />
        <div class="product-info">
            <span class="product-title">${product.title}</span>
            <span class="product-description">${product.subtitle}</span>
            <div class="product-price-block">
                <span class="price">S/. ${product.price}</span>
                <span class="discount">${product.discount}% Off</span>
            </div>
            <div class="product-tax-policy">Incluye IGV</div>
        </div>
    </a>
    `
}

productsTemplate = ""
for (const element of products) {
    productsTemplate = productsTemplate + createCard(element)
}
productsSelector.innerHTML = productsTemplate

// Actividad: Función de renderizado
/* Crear una función que “encapsule” todo lo desarrollado en la actividad anterior. */

function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = ""
    for(const element of arrayOfProducts) {
        productsTemplate = productsTemplate + createCard(element)
    }
    const productsSelector = document.getElementById(idSelector)
    productsSelector.innerHTML = productsTemplate
}

printCards(products, "products");
