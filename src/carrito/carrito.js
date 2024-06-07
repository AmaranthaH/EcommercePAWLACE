document.addEventListener('DOMContentLoaded', () => {
    const cartItemsElement = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart:', cart);
    let total = 0;
    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100px; height: 100px;">
            <h4>${item.name}</h4>
            
            <p>Texto: ${item.text}</p>
            <p>Color: <span style="color:${item.color};">${item.color}</span></p>
            <p>Fuente de letra: ${item.font}</p>
            <p>Precio: $${item.price} x ${item.quantity}</p>
            <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
        `;
        cartItemsElement.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    totalPriceElement.textContent = total.toFixed(2);
    //vaciar carrito
    document.getElementById('emptyCartButton').addEventListener('click', emptyCart);
});

function emptyCart() {
    localStorage.removeItem('cart');
    alert('El carrito ha sido vaciado');
    document.getElementById('cartItems').innerHTML = '';
    document.getElementById('totalPrice').textContent = '0.00';
}

// Función para generar un id único usando Date.now y Math.random
function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}

// Carrito de Compras 1
// Carrito de Compras 1
document.querySelectorAll('.agregar-carrito').forEach(button => {
    button.addEventListener('click', () => {
        const productName = document.getElementById('itemName').textContent;
        const productPrice = parseFloat(document.getElementById('itemPrice').textContent.replace('Precio: $', '').replace(' MXN', ''));
        const productQuantity = parseInt(document.getElementById('numberDisplay').textContent);
        const productImage = document.getElementById('itemImg').src;
        
        const productText = document.getElementById('outputText').textContent; // Obtener el texto personalizado
        const productColor = document.getElementById('outputText').style.color; // Obtener el color del texto
        const productFont = document.getElementById('outputText').style.fontFamily; // Obtener la fuente de letra del texto

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Verificar si el producto ya está en el carrito
        const existingProductIndex = cart.findIndex(item => item.name === productName  && item.text === productText && item.color === productColor && item.font === productFont);

        if (existingProductIndex !== -1) {
            // Si el producto ya está en el carrito, actualizar la cantidad
            cart[existingProductIndex].quantity += productQuantity;
        } else {
            // Si el producto no está en el carrito, agregarlo
            const productId = generateUniqueId();
            cart.push({ id: productId, name: productName, price: productPrice, quantity: productQuantity, image: productImage, text: productText, color: productColor, font: productFont });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Producto agregado al carrito');
    });
});
