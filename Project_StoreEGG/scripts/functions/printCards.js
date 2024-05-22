
import createCard from "../functions/createCard.js"
export default function printCards(arrayOfProducts, idSelector) {
    const productsSelector = document.getElementById(idSelector)
    let productsTemplate = ""
    arrayOfProducts.array.forEach(element => {
        productsTemplate = productsTemplate + createCard(element)
    });
    productsSelector.innerHTML = productsTemplate
}