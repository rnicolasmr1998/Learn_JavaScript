
//* Actividad: Renderizar productos destacados --------------------------------

/* Define la función getRandomData para que dependa del array products.
La función creada debe devolver un array de 3 elementos no duplicados. */

function getRandomData(array) {
    const randomIndexes = new Set();
    while (randomIndexes.size < 3) {
        const randomIndex = Math.floor(Math.random() * array.length);
        randomIndexes.add(randomIndex);
    }
    return Array.from(randomIndexes).map(index => array[index]);
}

const productsFeatured = getRandomData(products);