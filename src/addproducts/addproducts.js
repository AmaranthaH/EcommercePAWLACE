document.addEventListener("DOMContentLoaded", function() {
  const catalog = document.getElementById('catalog');
  const productForm = document.getElementById('productForm');

  function loadProducts() {
      const products = JSON.parse(localStorage.getItem('products')) || [];
      const categories = [...new Set(products.map(item => item.category))];

      catalog.innerHTML = '';

      categories.forEach(category => {
          const categoryDiv = document.createElement('div');
          categoryDiv.className = 'category-section';
          categoryDiv.innerHTML = `<h2>${category}</h2>`;

          const row = document.createElement('div');
          row.className = 'row';

          products.filter(item => item.category === category).forEach(item => {
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
  }

  productForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const formData = new FormData(productForm);

      // Validar campos obligatorios
      const requiredFields = ['productName', 'category', 'productDescription', 'productPrice', 'productQuantity', 'sizes', 'productImage'];
      for (const field of requiredFields) {
          if (!formData.get(field)) {
              alert(`Por favor complete el campo: ${field}`);
              return;
          }
      }

      const productData = {
          id: Date.now(),
          name: formData.get('productName'),
          category: formData.get('category'),
          description: formData.get('productDescription'),
          price: parseFloat(formData.get('productPrice')),
          stock: parseInt(formData.get('productQuantity'), 10),
          sizes: formData.getAll('sizes'),
          img: URL.createObjectURL(formData.get('productImage'))
      };

      const products = JSON.parse(localStorage.getItem('products')) || [];
      products.push(productData);
      localStorage.setItem('products', JSON.stringify(products));

      productForm.reset();

      loadProducts();
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

  loadProducts();
});

