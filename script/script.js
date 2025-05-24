 const contentData = {
            desayuno: {
                title: "Comida hecha con el corazón",
                subtitle: "Desayuno",
                products: [
                    { name: "Calentado de frijoles", price: "$15.000", image: "script/Calentado-1.jpg" },
                    { name: "Panqueques", price: "$12.000", image: "script/pank-1.jpg" }
                ]
            },
            almuerzo: {
                title: "Comida hecha con el corazón",
                subtitle: "Almuerzo",
                products: [
                    { name: "Sopa de lentejas", price: "$18.000", image: "script/lentejas-1.jpg" },
                    { name: "Pollo asado", price: "$25.000", image: "script/polloasado-1.jpg" }
                ]
            },
            cena: {
                title: "Comida hecha con el corazón",
                subtitle: "Cena",
                products: [
                    { name: "Ensalada César", price: "$12.000", image: "script/ensaladacesar-1.jpg" },
                    { name: "Pizza Hawaiana", price: "$20.000", image: "script/pizzahawaiana-1.jpg" }
                ]
            },
            "bebidas-alcohol": {
                title: "El acompañante perfecto para cada comida",
                subtitle: "Bebidas con Alcohol",
                products: [
                    { name: "Vino tinto", price: "$30.000", image: "script/vinotinto-1.jpg" },
                    { name: "Cerveza artesanal", price: "$10.000", image: "script/cervezaartesanal-1.jpg" }
                ]
            },
            "bebidas-no-alcohol": {
                title: "El acompañante perfecto para cada comida",
                subtitle: "Bebidas sin Alcohol",
                products: [
                    { name: "Limonada natural", price: "$7.000", image: "script/limonada-1.jpg" },
                    { name: "Coca-cola personal", price: "$4.000", image: "script/cocacola-1.jpg" }
                ]
            },
            promociones: {
                title: "Descubre nuestra promoción especial",
                subtitle: "Promociones",
                products: [
                    { name: "Promo 1: dos pizzas", price: "$30.000", image: "script/promo-1.jpg" },
                    { name: "Promo 2: pollo asado + 3 coca-cola", price: "30.000", image: "script/polloasado-1.jpg" }
                ]
            }
        };

    function loadContent(section) {
    const content = contentData[section];
    const dynamicContent = document.getElementById("dynamic-content");
    dynamicContent.innerHTML = `
        <header class="header">
            <h1>${content.title}</h1>
        </header>
        <main class="main">
            <h2>${content.subtitle}</h2>
            <div class="product-grid">
                ${content.products
                    .map(
                        (product) => `
                    <div class="product">
                        <img src="${product.image}" alt="${product.name}">
                        <p>${product.name}</p>
                        <p>Precio: ${product.price}</p>
                        <div class="buttons">
                            <button onclick="addProduct('${product.name}')">Agregar</button>
                            <button class="remove" onclick="removeProduct('${product.name}')">Quitar</button>
                            <span id="counter-${product.name}" class="counter">(0)</span>
                        </div>
                    </div>
                `
                    )
                    .join("")}
            </div>
        </main>
    `;
    
    document.querySelector(".circle-options").style.display = "none";
    document.getElementById("back-to-menu").style.display = "block";
}


const productCounts = {};


function addProduct(productName) {
    if (!productCounts[productName]) {
        productCounts[productName] = 0;
    }
    productCounts[productName]++;
    document.getElementById(`counter-${productName}`).textContent = `(${productCounts[productName]})`;
}


function removeProduct(productName) {
    if (productCounts[productName] > 0) {
        productCounts[productName]--;
        document.getElementById(`counter-${productName}`).textContent = `(${productCounts[productName]})`;
    }
}

function showMenu() {
    
    document.querySelector(".circle-options").style.display = "grid";
    
    
    document.getElementById("dynamic-content").innerHTML = "";

    document.getElementById("back-to-menu").style.display = "none";
}