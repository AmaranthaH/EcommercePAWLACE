document.addEventListener("DOMContentLoaded", function() {
    const catalog = document.getElementById('catalog');

    const items = [
        { id: 1, name: "Bandana Rombos", price: "120.00 MXN", img: "../catalogo/assets/Abstract.jpg", category: "Abstract" },
        { id: 2, name: "Bandana Triangulos", price: "120.00 MXN", img: "../catalogo/assets/Abstract1.jpg", category: "Abstract" },
        { id: 3, name: "Bandana Corazones", price: "120.00 MXN", img: "../catalogo/assets/Abstract2.jpg", category: "Abstract" },
        { id: 4, name: "Bandana Cebra", price: "120.00 MXN", img: "../catalogo/assets/Abstract3.jpg", category: "Abstract" },
        { id: 5, name: "Bandana Ojitos", price: "120.00 MXN", img: "../catalogo/assets/Abstract4.jpg", category: "Abstract" },
        { id: 6, name: "Bandana Suerte", price: "120.00 MXN", img: "../catalogo/assets/Abstract5.jpg", category: "Abstract" },
        { id: 7, name: "Bandana Dinosaurios", price: "120.00 MXN", img: "../catalogo/assets/dinos.jpg", category: "Abstract" },
        { id: 8, name: "Bandana Flamingos", price: "120.00 MXN", img: "../catalogo/assets/flamingo.jpg", category: "Abstract" },
        { id: 9, name: "Bandana Flores", price: "120.00 MXN", img: "../catalogo/assets/daisies.jpg", category: "Holidays" },
        { id: 10, name: "Bandana Love", price: "120.00 MXN", img: "../catalogo/assets/heart.jpg", category: "Holidays" },
        { id: 11, name: "Bandana Comida Mexicana", price: "120.00 MXN", img: "../catalogo/assets/mexican1.jpg", category: "Holidays" },
        { id: 12, name: "Bandana Día de Muertos", price: "120.00 MXN", img: "../catalogo/assets/mexican2.jpg", category: "Holidays" },
        { id: 13, name: "Bandana Dulces", price: "120.00 MXN", img: "../catalogo/assets/mexican3.jpg", category: "Holidays" },
        { id: 14, name: "Bandana Xmas Galleta", price: "120.00 MXN", img: "../catalogo/assets/mexican4.jpg", category: "Holidays" },
        { id: 15, name: "Bandana Xmas Luz", price: "120.00 MXN", img: "../catalogo/assets/xmas1.jpg", category: "Holidays" },
        { id: 16, name: "Bandana Xmas Regalos", price: "120.00 MXN", img: "../catalogo/assets/xmas2.jpg", category: "Holidays" },
        { id: 17, name: "Bandana Papel", price: "120.00 MXN", img: "../catalogo/assets/papelpicado.jpg", category: "Holidays" },
        { id: 18, name: "Bandana Kiwi", price: "120.00 MXN", img: "../catalogo/assets/Kiwi.jpg", category: "Foodie" },
        { id: 19, name: "Bandana Watermelon", price: "120.00 MXN", img: "../catalogo/assets/watermelon.jpg", category: "Foodie" },
        { id: 20, name: "Bandana Strawberries", price: "120.00 MXN", img: "../catalogo/assets/strawberries.jpg", category: "Foodie" },
        { id: 21, name: "Bandana Orange", price: "120.00 MXN", img: "../catalogo/assets/orange.jpg", category: "Foodie" },
        { id: 22, name: "Bandana Carrots", price: "120.00 MXN", img: "../catalogo/assets/carrots.jpg", category: "Foodie" },
        { id: 23, name: "Bandana Colorfull", price: "120.00 MXN", img: "../catalogo/assets/pride2.jpg", category: "Colorfull" },
        { id: 24, name: "Bandana Arcos", price: "120.00 MXN", img: "../catalogo/assets/pride.jpg", category: "Colorfull" }
    ];

    // Obtener categorías únicas
    const categories = [...new Set(items.map(item => item.category))];

    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category-section';
        categoryDiv.innerHTML = `<h2>${category}</h2>`;

        const row = document.createElement('div');
        row.className = 'row';

        items.filter(item => item.category === category).forEach(item => {
            const col = document.createElement('div');
            col.className = 'col-md-3 mb-4';
            col.innerHTML = `
                <div class="card">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.price}</p>
                        <button class="personaliza-btn" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">Personaliza</button>
                    </div>
                </div>
            `;
            row.appendChild(col);
        });

        categoryDiv.appendChild(row);
        catalog.appendChild(categoryDiv);
    });

    catalog.addEventListener('click', function(event) {
        if (event.target.classList.contains('personaliza-btn')) {
            const button = event.target;
            const itemId = button.getAttribute('data-id');
            const itemName = button.getAttribute('data-name');
            const itemPrice = button.getAttribute('data-price');
            console.log(`Personalizar: ${itemId} - ${itemName} - ${itemPrice}`);
        }
    });
});
