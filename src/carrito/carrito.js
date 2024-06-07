// Función para añadir al carrito
function addToCart() {
    // Obtener datos del producto
    var productName = "Bandana Personalizada"; // Nombre del producto
    var productPrice = 10; // Precio del producto

    // Crear objeto de producto
    var product = {
        name: productName,
        price: productPrice
    };

    // Obtener carrito actual desde localStorage o inicializar si no existe
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Agregar producto al carrito
    cart.push(product);

    // Guardar carrito en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Asociar la función addToCart al evento click del botón
document.getElementById('addToCartBtn').addEventListener('click', addToCart);
