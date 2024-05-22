export default function createCard(arrayOfProducts) {
    return `
    <a class="product-container-card" href="./details.html?id=${arrayOfProducts.ide}">
        <img class="product-img" src="./assets/${arrayOfProducts.images[0]}" alt="Funko Pop de Black Clover" />
        <div class="product-info">
            <span class="product-title">${arrayOfProducts.title}</span>
            <span class="product-description">${arrayOfProducts.subtitle}</span>
            <div class="product-price-block">
                <span class="price">S/. ${arrayOfProducts.price}</span>
                <span class="discount">${arrayOfProducts.discount}% Off</span>
            </div>
            <div class="product-tax-policy">${arrayOfProducts.taxPolicy}</div>
        </div>
    </a>
    `
}