document.addEventListener('DOMContentLoaded', () => {
  const productForm = document.getElementById('productForm');

  productForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const productQuantity = parseInt(document.getElementById('productQuantity').value);
    const productImage = document.getElementById('productImage').files[0]; // File object

    // Crear objeto JSON con los datos del producto
    const productData = {
      name: productName,
      description: productDescription,
      price: productPrice,
      quantity: productQuantity,
      image: productImage.name // Solo se guarda el nombre de la imagen
    };

    console.log(productData); // Para verificar los datos en la consola (puedes enviar estos datos a un servidor)

    // Aquí puedes agregar la lógica para enviar los datos a tu servidor, almacenar en una base de datos, etc.
    // Puedes usar fetch u otra librería para realizar la solicitud.

    // Limpia el formulario después de enviar
    productForm.reset();
  });
});
