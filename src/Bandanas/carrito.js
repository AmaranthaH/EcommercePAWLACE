class Carrito {
    constructor () {}

    agregarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')) {
           const producto = e.target.parentElement.parentElement;
           this.leerDatoProducto(producto)
           //console.log(producto);
        }
    }

    leerDatoProducto(producto){
        const infoProducto ={
            imagen : producto.querySelector('.imagen-bandana').src,
            //precio : producto.querySelector('#priceDisplay').textC,
            id: producto.querySelector('a').getAttribute('data-id'),
            cantida: 1
        }
        this.agregarCarrito(infoProducto);
    }
    agregarCarrito(producto){
        const row =document.createElement('tr');
        row.innerHTML= `
        <td>
            <img src= "${producto.imagen}" width =100>
        </td>
        <td>
        <a href = "#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
        </td>
        
 
        `;
        listaProductos.appendChild(row);
    }

    
}

     

