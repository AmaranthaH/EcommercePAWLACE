// Precios por talla
const prices = {
    'XXCH': 100.00,
    'XCH': 100.00,
    'CH': 100.00,
    'M': 120.00,
    'G': 130.00,
    'XG': 130.00,
    'XXG': 150.0
};

// Cantidad actual de productos
let currentQuantity = 0;

// Talla seleccionada
let currentSize = 'M'; // Cambié la talla inicial a 'M' para que coincida con los precios definidos

// Función para cambiar la cantidad de productos
function changeNumber(amount) {
    currentQuantity += amount;
    if (currentQuantity < 0) {
        currentQuantity = 0;
    }
    document.getElementById('numberDisplay').innerText = currentQuantity;
    updatePrice();
}

// Función para seleccionar la talla
function selectSize(size) {
    currentSize = size;
    updatePrice();
}

// Función para actualizar el precio
function updatePrice() {
    const unitPrice = prices[currentSize];
    const totalPrice = (unitPrice * currentQuantity).toFixed(2);
    document.getElementById('itemPrice').innerText = `Precio: $${totalPrice}`;
}

// Actualizar el precio inicial
updatePrice();

// Color inicial del texto
let selectedColor = 'black'; 

// Función para seleccionar el color del texto
function selectColor(color) {
    selectedColor = color;
    updateTextStyle(); // Actualizar el estilo del texto con el nuevo color
}

// Función para actualizar el estilo del texto
function updateTextStyle() {
    const fontSelect = document.getElementById('fontSelect').value;
    const textInput = document.getElementById('textInput').value;
    const outputText = document.getElementById('outputText');

    outputText.style.fontFamily = fontSelect;
    outputText.style.color = selectedColor;
    outputText.textContent = textInput || 'Tu texto aparecerá aquí...';
}

// Actualizar el estilo de texto inicial
updateTextStyle();

function selectColor(color) {
    var outputDiv = document.getElementById("texto");
    var outputText = document.getElementById("outputText");
    
    if (color === 'white') {
        outputText.style.color = 'white'; // Cambiar el color del texto a blanco
        outputDiv.style.backgroundColor = 'black'; // Cambiar el color de fondo del div a negro
    } else {
        outputText.style.color = color; // Restaurar el color del texto al predeterminado
        outputDiv.style.backgroundColor = '#FFF7F0'; // Restaurar el color de fondo del div al predeterminado
    }
}


// Cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Recuperar el artículo seleccionado de localStorage
    const selectedItem = JSON.parse(localStorage.getItem('personalizedItem'));
    
    // Verificar si hay un artículo seleccionado almacenado en localStorage
    if (selectedItem) {
        // Mostrar los detalles del artículo seleccionado en la página de personalización
        document.getElementById('itemName').textContent = selectedItem.name;
        document.getElementById('itemPrice').textContent = selectedItem.price;

        // Mostrar la imagen del artículo seleccionado
        document.getElementById('itemImg').src = selectedItem.img;
    } 
});
