document.addEventListener("DOMContentLoaded", function() {
    const catalog = document.getElementById('catalog');

    const items = [
        { name: "Bandana comic", price: "10.00 MXN", img: "../catalogo/assets/bandana-comic.png" },
        { name: "Bandana Azul", price: "12.00 MXN", img: "bandana-azul.jpg" },
        { name: "Bandana Verde", price: "8.00 MXN", img: "bandana-verde.jpg" },
        { name: "Bandana Amarilla", price: "15.00 MXN", img: "bandana-amarilla.jpg" },
        { name: "Bandana Rosa", price: "9.00 MXN", img: "bandana-rosa.jpg" },
        { name: "Bandana Negra", price: "11.00 MXN", img: "bandana-negra.jpg" },
        { name: "Bandana Blanca", price: "7.00 MXN", img: "bandana-blanca.jpg" },
        { name: "Bandana Naranja", price: "13.00 MXN", img: "bandana-naranja.jpg" },
        { name: "Bandana Púrpura", price: "13.00 MXN", img: "bandana-purpura.jpg" },
        { name: "Bandana Multicolor", price: "16.00 MXN", img: "bandana-multicolor.jpg" },
        { name: "Bandana Gris", price: "10.00 MXN", img: "bandana-gris.jpg" },
        { name: "Bandana Marrón", price: "12.00 MXN", img: "bandana-marron.jpg" },
        { name: "Bandana Celeste", price: "8.00 MXN", img: "bandana-celeste.jpg" },
        { name: "Bandana Violeta", price: "15.00 MXN", img: "bandana-violeta.jpg" },
        { name: "Bandana Plateada", price: "9.00 MXN", img: "bandana-plateada.jpg" },
        { name: "Bandana Dorada", price: "11.00 MXN", img: "bandana-dorada.jpg" },
        { name: "Bandana Turquesa", price: "7.00 MXN", img: "bandana-turquesa.jpg" },
        { name: "Bandana Caqui", price: "13.00 MXN", img: "bandana-caqui.jpg" },
        { name: "Bandana Lavanda", price: "14.00 MXN", img: "bandana-lavanda.jpg" },
        { name: "Bandana Coral", price: "16.00 MXN", img: "bandana-coral.jpg" },
        { name: "Bandana Fucsia", price: "10.00 MXN", img: "bandana-fucsia.jpg" },
        { name: "Bandana Lila", price: "12.00 MXN", img: "bandana-lila.jpg" },
        { name: "Bandana Salmón", price: "8.00 MXN", img: "bandana-salmon.jpg" },
        { name: "Bandana Oliva", price: "15.00 MXN", img: "bandana-oliva.jpg" }
    ];

    items.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-3 mb-4';
        col.innerHTML = `
            <div class="card">
                <img src="${item.img}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">$${item.price}</p>
                    <button class="add-to-cart-btn" data-name="${item.name}" data-price="${item.price}">
                        <img src="../assets/shopping_cart_24dp.svg" alt="Agregar al carrito" class="add-to-cart-img">
                    </button>
                </div>
            </div>
        `;
        catalog.appendChild(col);
    });

    catalog.addEventListener('click', function(event) {
        if (event.target.closest('.add-to-cart-btn')) {
            const button = event.target.closest('.add-to-cart-btn');
            const itemName = button.getAttribute('data-name');
            const itemPrice = button.getAttribute('data-price');
            console.log(`Agregado al carrito: ${itemName} - $${itemPrice}`);
        }
    });
});
