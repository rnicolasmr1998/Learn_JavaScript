///////////////////////////////////////////////////////////////////////////////////////
// RETO EGG ---------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Creación de un objeto producto ------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, definirás los productos de una aplicación web, mediante el uso
de objetos. Luego, le vas agregar la propiedad id y foto. */

const productOne = {
    name: "celular",
    price: 1000,
    stock: 10
}

productOne.id = "id123"
productOne["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp"

console.log(productOne)

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Creación de una clase producto ------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, definirás una clase de objetos, la cual va a tener diferentes
propiedades, como son: id, title, price, stock, images y onsale. */

class Product {
    constructor(id, title, price, stock, images, onsale) {
        this.id = id
        this.title = title
        this.price = price
        this.stock = stock
        this.images = images
        this.onsale = onsale
    }
}
const prodOne = new Product()
const prodTwo = new Product(id = "id123", title = "televisor", price = 2500,
    sctock = 20, images = [], onsale = true)

console.log(prodOne, prodTwo)

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Obtención y modificación de propiedades de una instancia ----------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, vas a definir propiedades privadas de la clase Product y vas a 
crear getters y setters para poder leer y modificar las mismas. Para este ejercicio 
tienes que seguir los siguientes pasos: */

class ProductTwo {
    #supplier
    constructor(id, title, price, stock, images, onsale, supplier) {
        this.id = id
        this.title = title
        this.price = price
        this.stock = stock
        this.images = images
        this.onsale = onsale
        this.#supplier = supplier
    }

    get getSupplier() {
        return this.#supplier
    }

    set setSupplier(newsupplier) {
        this.#supplier = newsupplier
    }
}

const prodThree = new ProductTwo(id = "id124", title = "televisor", price = 2500,
    sctock = 20, images = [], onsale = true, supplier = "Apple")
console.log(prodThree.getSupplier)
prodThree.setSupplier = "Samsung"
console.log(prodThree.getSupplier)

///////////////////////////////////////////////////////////////////////////////////////
// Actividad: Venta de productos ------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////

/* En esta actividad, vas a definir propiedades privadas de la clase Product y vas a 
crear getters y setters para poder leer y modificar las mismas. Para este ejercicio 
tienes que seguir los siguientes pasos: */

class ProductThree {
    #supplier
    constructor(id, title, price, stock, images, onsale, supplier) {
        this.id = id
        this.title = title
        this.price = price
        this.stock = stock
        this.images = images
        this.onsale = onsale
        this.#supplier = supplier
    }
    get getSupplier() {
        return this.#supplier
    }

    set setSupplier(newsupplier) {
        if (typeof newsupplier !== "string" || newsupplier.trim() === "") {
            throw new Error("El proveedor debe ser un string")
        } else {
            this.#supplier = newsupplier
        }
    }
    sellUnits(units) {
        if (units <= this.stock) {
            this.stock -= units
        } else {
            alert(`Stock insuficiente!!!. Solo hay ${this.stock} unidades disponibles.`)
        }
    }
}

const prodFour = new ProductThree(id = "id125", title = "lavadora", price = 1600,
    stock = 10, images = [], onsale = true, supplier = "LG")

console.clear()
console.log(prodFour)
prodFour.setSupplier ="Samsung"
console.log(prodFour)

prodFour.sellUnits(5)
console.log(prodFour.stock)

prodFour.sellUnits(10)          // Stock insuficiente!!!, Solo hay 5 unidades disponibles
console.log(prodFour.stock)
