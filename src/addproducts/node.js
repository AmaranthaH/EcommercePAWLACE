const express = require('express');
const path = require('path');
const app = express();

// Middleware para bloquear acceso a una ruta específica
app.use('/src/addproducts/addproducts.html', (req, res, next) => {
    res.status(403).sendFile(path.join(__dirname, '/src/addproducts/pagina403.html'));  // Corregir la ruta del archivo
});

// Resto de rutas y configuraciones

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});