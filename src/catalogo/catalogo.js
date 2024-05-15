document.addEventListener("DOMContentLoaded", function() {
    const catalog = document.getElementById('catalog');

    const items = [
        { name: "Bandana Roja", price: "10.00", img: "bandana-roja.jpg" },
        { name: "Bandana Azul", price: "12.00", img: "bandana-azul.jpg" },
        { name: "Bandana Verde", price: "8.00", img: "bandana-verde.jpg" },
        { name: "Bandana Amarilla", price: "15.00", img: "bandana-amarilla.jpg" },
        { name: "Bandana Rosa", price: "9.00", img: "bandana-rosa.jpg" },
        { name: "Bandana Negra", price: "11.00", img: "bandana-negra.jpg" },
        { name: "Bandana Blanca", price: "7.00", img: "bandana-blanca.jpg" },
        { name: "Bandana Naranja", price: "13.00", img: "bandana-naranja.jpg" },
        { name: "Bandana Púrpura", price: "14.00", img: "bandana-purpura.jpg" },
        { name: "Bandana Multicolor", price: "16.00", img: "bandana-multicolor.jpg" }
    ];

    items.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-3';
        col.innerHTML = `
            <div class="card">
                <img src="${item.img}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">$${item.price}</p>
                </div>
            </div>
        `;
        catalog.appendChild(col);
    });
});
