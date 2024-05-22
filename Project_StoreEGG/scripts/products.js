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
    "prod1",
    "POP! BLACK ASTA (GLOW)",
    "BLACK CLOVER",
    75,
    10,
    ["prod1_main.png", 
        "prod1_1.png",
        "prod1_2.png"],
    true,
    10,
    " Pop!",
    ["Silver", "Space Gray", "Gold"],
    "¡En su afán por convertirse en el próximo Rey Mago, Pop! Asta se ha hecho con un poder demoníaco. ¡Esgrime tu magia junto a este Caballero Real de los Toros Negros del Reino del Trébol cuando des la bienvenida a este exclusivo Pop! Black Asta a tu colección de Black Clover. La figura de vinilo mide aproximadamente 4.55 pulgadas.",
    "Incluye IGV"
)

const prod2 = new Product(
    "prod2",
    "POP! FUEGOLEON (GLOW)",
    "BLACK CLOVER",
    70,
    10,
    ["prod2_main.png", 
        "prod2_1.png",
        "prod2_2.png"],
    true,
    20,
    "Pop!",
    ["Silver", "Space Gray", "Gold"],
    "¡Refuerza tus filas con Pop! ¡Fuegoleon de los Leones Carmesí del Reino del Trébol! Esgrime tu magia junto a este mago exclusivo que brilla en la oscuridad cuando le des la bienvenida a tu colección de Trébol Negro. La figura de vinilo mide aproximadamente 3.9 pulgadas.",
    "Incluye IGV"
)

const prod3 = new Product(
    "prod3",
    "POP! VENOM (HARRY OSBORN)",
    "MARVEL",
    60,
    10,
    ["prod3_main.png", 
        "prod3_1.png"],
    true,
    40,
    "Pop!",
    ["Silver", "Space Gray", "Gold"],
    "¡Harry Osborn ha tomado el manto de un simbionte alienígena y se ha convertido en el alborotador Pop! ¡Venom! Acógelo en tu colección de Spider-Man 2 añadiendo este villano a tu set Marvel Gamerverse. El muñeco de vinilo mide aproximadamente 4.05 pulgadas.",
    "Incluye IGV"
)

const prod4 = new Product(
    "prod4",
    "POP! PETER PARKER ADVANCED SUIT 2.0",
    "MARVEL",
    50,
    10,
    ["prod4_main.png", 
        "prod4_1.png"],
    true,
    20,
    "Pop!",
    ["Silver", "Space Gray", "Gold"],
    "¡Ha llegado tu héroe trepamuros favorito! ¡Saltando entre rascacielos, Pop! ¡Peter Parker está ansioso por salvar el día en tu colección de Spider-Man 2! ¡Reúne a tu equipo de héroes cuando lo añadas a tu alineación Marvel Gamerverse como Pop! Peter Parker (Traje Avanzado 2.0). El muñeco de vinilo mide aproximadamente 4.1 pulgadas.",
    "Incluye IGV"
)

const prod5 = new Product(
    "prod5",
    "POP! THE JOKER (WAR JOKER)",
    "DC COMICS",
    50,
    10,
    ["prod5_main.png", 
        "prod5_1.png"],
    true,
    20,
    "Pop!",
    ["Silver", "Space Gray", "Gold"],
    "¡Abre las alas y reúne a tus héroes Pop! Batman™ héroes. ¡Funko Pop! The Joker™ quiere invadir tu colección Batman War Zone, y parece que está preparado para causar la destrucción. ¡Reúne a todos los miembros de un formidable equipo Pop! DC Super Hero para enfrentarse a este amenazador villano. La figura de vinilo mide aproximadamente 3,82 pulgadas.",
    "Incluye IGV"
)

const prod6 = new Product(
    "prod6",
    "POP! OBI-WAN KENOBI (PADAWAN)",
    "STAR WARS",
    40,
    10,
    ["prod6_main.png",
        "prod6_1.png",
    ],
    true,
    30,
    "Pop!",
    ["Silver", "Space Gray", "Gold"],
    "¡La galaxia está al borde de la confusión! ¡Pop! ¡Obi-Wan Kenobi™ busca mantener la paz bajo la tutela del Maestro Qui-Gon Jinn™ en tu colección! ¡Celebra el 25º Aniversario de Star Wars: La Amenaza Fantasma™ dando la bienvenida a este Padawan™ a tu alineación de Jedi™! El muñeco de vinilo mide aproximadamente 10 cm.",
    "Incluye IGV"
)

const products = [prod1, prod2, prod3, prod4, prod5, prod6]
