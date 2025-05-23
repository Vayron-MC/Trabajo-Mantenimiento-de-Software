// Datos de los menús
const menuData = {
    desayuno: {
        title: "Desayuno",
        phrase: "Comida hecha con el corazón",
        items: [
            { name: "Huevos con tocino", price: "$5.000", image: "huevos-tocino.jpg" },
            { name: "Pancakes", price: "$4.500", image: "pancakes.jpg" },
            { name: "Café y croissant", price: "$3.000", image: "cafe-croissant.jpg" },
        ],
    },
    almuerzo: {
        title: "Almuerzo",
        phrase: "Comida hecha con el corazón",
        items: [
            { name: "Pollo asado", price: "$10.000", image: "pollo-asado.jpg" },
            { name: "Ensalada César", price: "$8.500", image: "ensalada-cesar.jpg" },
            { name: "Hamburguesa", price: "$9.000", image: "hamburguesa.jpg" },
        ],
    },
    cena: {
        title: "Cena",
        phrase: "Comida hecha con el corazón",
        items: [
            { name: "Salmón a la plancha", price: "$12.000", image: "salmon.jpg" },
            { name: "Pasta Alfredo", price: "$9.500", image: "pasta-alfredo.jpg" },
            { name: "Filete de res", price: "$15.000", image: "filete-res.jpg" },
        ],
    },
    "bebidas-sin-alcohol": {
        title: "Bebidas sin Alcohol",
        phrase: "El acompañante perfecto para cada comida",
        items: [
            { name: "Jugo natural", price: "$2.500", image: "jugo-natural.jpg" },
            { name: "Refresco", price: "$2.000", image: "refresco.jpg" },
            { name: "Agua mineral", price: "$1.500", image: "agua-mineral.jpg" },
        ],
    },
    "bebidas-con-alcohol": {
        title: "Bebidas con Alcohol",
        phrase: "El acompañante perfecto para cada comida",
        items: [
            { name: "Cerveza", price: "$3.000", image: "cerveza.jpg" },
            { name: "Vino tinto", price: "$5.000", image: "vino-tinto.jpg" },
            { name: "Cóctel de la casa", price: "$4.500", image: "coctel.jpg" },
        ],
    },
    promociones: {
        title: "Promociones",
        phrase: "Descubre nuestra promoción especial",
        items: [
            { name: "Combo familiar", price: "$20.000", image: "combo-familiar.jpg" },
            { name: "2x1 en pizzas", price: "$15.000", image: "pizza.jpg" },
            { name: "Descuento del 20%", price: "Varía", image: "descuento.jpg" },
        ],
    },
};

// Función para mostrar la página seleccionada
function showPage(type) {
    // Cambiar la frase y el título según la opción seleccionada
    document.getElementById('header-text').textContent = menuData[type].phrase;
    document.getElementById('page-title').textContent = menuData[type].title;

    // Mostrar contenido dinámico
    document.getElementById('options-circle').style.display = "none";
    document.getElementById('dynamic-content').style.display = "block";

    // Generar los elementos de comida
    const foodItemsContainer = document.getElementById('food-items');
    foodItemsContainer.innerHTML = ''; // Limpiar contenido previo
    menuData[type].items.forEach(item => {
        const foodItemDiv = document.createElement('div');
        foodItemDiv.className = 'food-item';
        foodItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Precio: ${item.price}</p>
            <button onclick="agregar('${item.name}')">Agregar</button>
            <button onclick="quitar('${item.name}')">Quitar</button>
        `;
        foodItemsContainer.appendChild(foodItemDiv);
    });
}

// Función para volver al inicio
function goBack() {
    document.getElementById('dynamic-content').style.display = "none";
    document.getElementById('options-circle').style.display = "flex";
    document.getElementById('header-text').textContent = "Sabores que conquistan tus sentidos";
}


// Función para cambiar la frase dependiendo de la opción seleccionada
function changePhrase(type) {
    const headerText = document.getElementById('header-text');
    headerText.textContent = menuData[type].phrase;
}

// Funciones de agregar y quitar (puedes implementar la lógica según necesites)
function agregar(itemName) {
    alert(`Has agregado ${itemName} a tu pedido.`);
}

function quitar(itemName) {
    alert(`Has quitado ${itemName} de tu pedido.`);
}
