// 1. Actividad: Renderizando la barra de navegación del store

/* Define una variable navSelector, para seleccionar la etiqueta 
correspondiente donde se renderizará la barra de navegación. */  
const navSelector = document.querySelector("#nav");

/* Crea una variable options, para guardar un array de objetos. 
Cada objeto representará los datos de un botón con las propiedades: */
const options = [
    {title: "OFERTAS", linkto: "#"},
    {title: "DC COMICS", linkto: "#"},
    {title: "DISNEY", linkto: "#"},
    {title: "MARVEL", linkto: "#"},
    {title: "STAR WARS", linkto: "#"},
    {title: "PRE-VENTA", linkto: "#"},
]

/* Itera con for of, de manera que cada iteración:
- Crea las etiquetas correspondientes.
- Asigna el texto de la propiedad title de cada objeto.
- Define la propiedad href de cada objeto.
- Luego “agregar un hijo” al navSelector */

for (let option of options) {
    const anchor = document.createElement("a");
    anchor.className = "navbar-a"
    anchor.textContent = option.title
    anchor.href = option.linkto
    navSelector.appendChild(anchor)
}

// 2. Actividad: Renderizando el pie de página del store

/* Define una variable footerSelector, para seleccionar la etiqueta
correspondiente donde se renderizará el pie de página. */
const footerSelector = document.querySelector("#footer");
console.log(footerSelector)

/* Crea una variable footerOptions, para guardar un array de objetos. 
Cada objeto representará los datos de un botón con las propiedades: */
const footerOptions = [
    {title: "OFERTAS", 
    opts: ["Chibi Masters", "Comics", "Hot Toys", "Merchandising", "Pop Keychain"]},
    {title: "ENLACES IMPORTANTES", 
    opts: ["Libro de reclamaciones", "Políticas y condiciones de uso", "Sugerencias", "Guía para padres", "Trabaja con nosotros"]},
    {title: "INFORMACIÓN", 
    opts: ["Nosotros", "Nuestras tiendas", "¿Qué comprar?", "Preguntas Frecuentes", "Comprobantes Electrónicos"]},
    {title: "SUSCRÍBETE", opts: ["suscription"]} 
]

/* Itera con for of, de manera que cada iteración:
- Crea las etiquetas correspondientes.
- Asigna el texto de la propiedad title de cada objeto.
- Luego “agregar un hijo” al footerSelector. */

for (let footerOption of footerOptions) {
    const divCol = document.createElement("div");
    divCol.className = "col"
    const spanTitle = document.createElement("span");
    spanTitle.className = "col-title"
    spanTitle.textContent = footerOption.title
    divCol.appendChild(spanTitle)

    if (footerOption.title !== "SUSCRÍBETE") {
        for (let opt of footerOption.opts) {
            const ulColList = document.createElement("ul");
            ulColList.className = "col-list"
            divCol.appendChild(ulColList)
            const liColList = document.createElement("li");
            liColList.className = "col-list-opcion"
            ulColList.appendChild(liColList)
            const anchor = document.createElement("a");
            anchor.className = "col-list-link"
            anchor.href = "#"
            anchor.textContent = opt
            liColList.appendChild(anchor)
        }    
    } else {
        const form = document.createElement("form");
        form.className = "col-form"
        form.action = ""
        divCol.appendChild(form)
        const input = document.createElement("input");
        input.className = "col-form-input"
        input.type = "text"
        input.placeholder = "example@gmail.com"
        input.id = "suscription"
        form.appendChild(input)
    }
    footerSelector.appendChild(divCol)
}
