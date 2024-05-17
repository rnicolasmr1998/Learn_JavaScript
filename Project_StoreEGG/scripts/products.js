// Creación de la clase Product
class Product {
    constructor(id, title, subtitle, price, stock, images, onsale, discount, supplier, colors, description, taxPolicy) {
        this.id = id
        this.title = title
        this.subtitle = subtitle
        this.price = price
        this.stock = stock
        this.images = images
        this.onsale = onsale
        this.discount = discount
        // Atributo privado
        this._supplier = supplier
        // Array de colores
        this.colors = colors
        //Descripción
        this.description = description;
        //Política de impuestos
        this.taxPolicy = taxPolicy
    }

    // Métodos getter y setter del atributo privado
    get Supplier() {
        return this._supplier
    }

    set Supplier(newSupplier) {
        if (typeof newSupplier !== "string" || newSupplier.trim() === "") {
            throw new Error("El proveedor debe ser un string")
        } else {
            this._supplier = newSupplier
        }
    }

    // Metodos
    sellUnits(units) {
        if (units <= this.stock) {
            this.stock -= units
        } else {
            alert(`Stock insuficiente!!!. Solo hay ${this.stock} unidades disponibles.`)
        }
    }
}

// Instanciamos los objetos
const prod1 = new Product(
    id= "prod1",
    title= "Funko Pop Black Clover - Black Asta",
    subtitle = "Exclusive Limited Edition",
    price= 70,
    stock= 10,
    images= ["funko_pop_black_clover.webp", 
        "funko_pop_black_clover_caja.webp",
        "funko_pop_black_clover_brillo.jpg"],
    onsale= true,
    discount= 10,
    supplier= "Funko",
    color= ["Silver", "Space Gray", "Gold"],
    description= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae dolore, facilis quasi eum cum, hic non vitae expedita eius mollitia modi quo voluptate illum? Vel, in. Facilis, exercitationem voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe maiores minima a, repellendus provident molestias, reiciendis qui fugit est consectetur libero hic ipsa dolore rem id praesentium molestiae quos!",
    taxPolicy= "Incluye IGV"
)

const prod2 = new Product(
    id= "prod2",
    title= "Funko Pop Black Clover - Black Asta",
    subtitle = "Exclusive Limited Edition",
    price= 70,
    stock= 10,
    images= ["funko_pop_black_clover.webp", 
        "funko_pop_black_clover_caja.webp",
        "funko_pop_black_clover_brillo.jpg"],
    onsale= true,
    discount= 20,
    supplier= "Funko",
    color= ["Silver", "Space Gray", "Gold"],
    description= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae dolore, facilis quasi eum cum, hic non vitae expedita eius mollitia modi quo voluptate illum? Vel, in. Facilis, exercitationem voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe maiores minima a, repellendus provident molestias, reiciendis qui fugit est consectetur libero hic ipsa dolore rem id praesentium molestiae quos!",
    taxPolicy= "Incluye IGV"
)

const prod3 = new Product(
    id= "prod3",
    title= "Funko Pop Black Clover - Black Asta",
    subtitle = "Exclusive Limited Edition",
    price= 70,
    stock= 10,
    images= ["funko_pop_black_clover.webp", 
        "funko_pop_black_clover_caja.webp",
        "funko_pop_black_clover_brillo.jpg"],
    onsale= true,
    discount= 40,
    supplier= "Funko",
    color= ["Silver", "Space Gray", "Gold"],
    description= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae dolore, facilis quasi eum cum, hic non vitae expedita eius mollitia modi quo voluptate illum? Vel, in. Facilis, exercitationem voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe maiores minima a, repellendus provident molestias, reiciendis qui fugit est consectetur libero hic ipsa dolore rem id praesentium molestiae quos!",
    taxPolicy= "Incluye IGV"
)

const prod4 = new Product(
    id= "prod4",
    title= "Funko Pop Black Clover - Black Asta",
    subtitle = "Exclusive Limited Edition",
    price= 70,
    stock= 10,
    images= ["funko_pop_black_clover.webp", 
        "funko_pop_black_clover_caja.webp",
        "funko_pop_black_clover_brillo.jpg"],
    onsale= true,
    discount= 20,
    supplier= "Funko",
    color= ["Silver", "Space Gray", "Gold"],
    description= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae dolore, facilis quasi eum cum, hic non vitae expedita eius mollitia modi quo voluptate illum? Vel, in. Facilis, exercitationem voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe maiores minima a, repellendus provident molestias, reiciendis qui fugit est consectetur libero hic ipsa dolore rem id praesentium molestiae quos!",
    taxPolicy= "Incluye IGV"
)

const prod5 = new Product(
    id= "prod5",
    title= "Funko Pop Black Clover - Black Asta",
    subtitle = "Exclusive Limited Edition",
    price= 70,
    stock= 10,
    images= ["funko_pop_black_clover.webp", 
        "funko_pop_black_clover_caja.webp",
        "funko_pop_black_clover_brillo.jpg"],
    onsale= true,
    discount= 20,
    supplier= "Funko",
    color= ["Silver", "Space Gray", "Gold"],
    description= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae dolore, facilis quasi eum cum, hic non vitae expedita eius mollitia modi quo voluptate illum? Vel, in. Facilis, exercitationem voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe maiores minima a, repellendus provident molestias, reiciendis qui fugit est consectetur libero hic ipsa dolore rem id praesentium molestiae quos!",
    taxPolicy= "Incluye IGV"
)

const prod6 = new Product(
    id= "prod6",
    title= "Funko Pop Black Clover - Black Asta",
    subtitle = "Exclusive Limited Edition",
    price= 70,
    stock= 10,
    images= ["funko_pop_black_clover.webp", 
        "funko_pop_black_clover_caja.webp",
        "funko_pop_black_clover_brillo.jpg"],
    onsale= true,
    discount= 30,
    supplier= "Funko",
    color= ["Silver", "Space Gray", "Gold"],
    description= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae dolore, facilis quasi eum cum, hic non vitae expedita eius mollitia modi quo voluptate illum? Vel, in. Facilis, exercitationem voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe maiores minima a, repellendus provident molestias, reiciendis qui fugit est consectetur libero hic ipsa dolore rem id praesentium molestiae quos!",
    taxPolicy= "Incluye IGV"
)

const products = [prod1, prod2, prod3, prod4, prod5, prod6]

