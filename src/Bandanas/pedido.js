
const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const verCarritoBtn= document.querySelector('#ver-carrito');


console.log(productos);
cargarEventos();
function cargarEventos(){
    productos.addEventListener('click', (e)=>{carro.agregarProducto(e)});
    // Agregar evento click al botón "Ver Carrito"
    verCarritoBtn.addEventListener('click', function() {
        // Redirigir a la página de destino (otra_pagina.html)
        window.location.href = 'prueba.html';
    });

}