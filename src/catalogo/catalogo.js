document.addEventListener("DOMContentLoaded", function() {
    const catalog = document.getElementById('catalog');

    const items = [
        { name: "Bandana Rombos", price: "120.00 MXN", img: "../catalogo/assets/Abstract.jpg", category: "Abstract" },
        { name: "Bandana Triangulos", price: "120.00 MXN", img: "../catalogo/assets/Abstract1.jpg", category: "Abstract" },
        { name: "Bandana Corazones", price: "120.00 MXN", img: "../catalogo/assets/Abstract2.jpg", category: "Abstract" },
        { name: "Bandana Cebra", price: "120.00 MXN", img: "../catalogo/assets/Abstract3.jpg", category: "Abstract" },
        { name: "Bandana Ojitos", price: "120.00 MXN", img: "../catalogo/assets/Abstract4.jpg", category: "Abstract" },
        { name: "Bandana Suerte", price: "120.00 MXN", img: "../catalogo/assets/Abstract5.jpg", category: "Abstract" },
        { name: "Bandana Dinosaurios", price: "120.00 MXN", img: "../catalogo/assets/dinos.jpg", category: "Abstract" },
        { name: "Bandana Flamingos", price: "120.00 MXN", img: "../catalogo/assets/flamingo.jpg", category: "Abstract" },
        { name: "Bandana Flores", price: "120.00 MXN", img: "../catalogo/assets/daisies.jpg", category: "Holidays" },
        { name: "Bandana Love", price: "120.00 MXN", img: "../catalogo/assets/heart.jpg", category: "Holidays" },
        { name: "Bandana Comida Mexicana", price: "120.00 MXN", img: "../catalogo/assets/mexican1.jpg", category: "Holidays" },
        { name: "Bandana Día de Muertos", price: "120.00 MXN", img: "../catalogo/assets/mexican2.jpg", category: "Holidays" },
        { name: "Bandana Dulces", price: "120.00 MXN", img: "../catalogo/assets/mexican3.jpg", category: "Holidays" },
        { name: "Bandana Xmas Galleta", price: "120.00 MXN", img: "../catalogo/assets/mexican4.jpg", category: "Holidays" },
        { name: "Bandana Xmas Luz", price: "120.00 MXN", img: "../catalogo/assets/xmas1.jpg", category: "Holidays" },
        { name: "Bandana Xmas Regalos", price: "120.00 MXN", img: "../catalogo/assets/xmas2.jpg", category: "Holidays" },
        { name: "Bandana Papel", price: "120.00 MXN", img: "../catalogo/assets/papelpicado.jpg", category: "Holidays" },
        { name: "Bandana Kiwi", price: "120.00 MXN", img: "../catalogo/assets/Kiwi.jpg", category: "Foodie" },
        { name: "Bandana Watermelon", price: "120.00 MXN", img: "../catalogo/assets/watermelon.jpg", category: "Foodie" },
        { name: "Bandana Strawberries", price: "120.00 MXN", img: "../catalogo/assets/strawberries.jpg", category: "Foodie" },
        { name: "Bandana Orange", price: "120.00 MXN", img: "../catalogo/assets/orange.jpg", category: "Foodie" },
        { name: "Bandana Carrots", price: "120.00 MXN", img: "../catalogo/assets/carrots.jpg", category: "Foodie" },
        { name: "Bandana Colorfull", price: "120.00 MXN", img: "../catalogo/assets/pride2.jpg", category: "Colorfull" }
        
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
                        <button class="personaliza-btn" data-name="${item.name}" data-price="${item.price}">Personaliza</button>
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
            const itemName = button.getAttribute('data-name');
            const itemPrice = button.getAttribute('data-price');
            console.log(`Personalizar: ${itemName} - ${itemPrice}`);

            // Guardar el nombre y precio en localStorage
            const personalizedItem = { name: itemName, price: itemPrice};
            localStorage.setItem('personalizedItem', JSON.stringify(personalizedItem));
            /**
             * Cuando se hace clic en el botón "Personalizar", creamos un objeto con el nombre y el precio del artículo y se guarda en el localStorage usando localStorage.setItem(). El objeto se convierte en una cadena JSON antes de ser guardado, y esto se hace con JSON.stringify(personalizedItem). Esto asegura que los datos se guarden correctamente en el localStorage y así :3 :D
             */


            //Momento de redirigir a la página de personalización:
            window.location.href = '/EcommercePAWLACE/src/Bandanas/bandanas.html';

            console.log(`Personalizar ${itemName} - ${itemPrice}`);

        }
    });
});
