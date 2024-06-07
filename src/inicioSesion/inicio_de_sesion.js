document.addEventListener('DOMContentLoaded', function() {
   

    document.getElementById('formInicioSesion').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        // Obtener valores de los campos
        const email = document.getElementById('email').value;
        const password = document.getElementById('Contraseña').value;

        // Verificar las credenciales de administrador
        if (email === 'pawlacemx@gmail.com' && password === 'Pawlace1234.') {
            alert('Inicio de sesión de administrador exitoso');
            // Guardar el estado de inicio de sesión en Local Storage
            localStorage.setItem('isLoggedIn', 'true');
            // Redireccionar a la página de administrador
            window.location.href = '../addproducts/addproducts.html';
        } else {
            // Obtener información de usuario almacenada en el registro
            const storedEmail = localStorage.getItem('userEmail');
            const storedPassword = localStorage.getItem('userPassword');

            // Validar los campos para usuarios normales
            if (email === storedEmail && password === storedPassword) {
                alert('Inicio de sesión exitoso');
                // Guardar el estado de inicio de sesión en Local Storage
                localStorage.setItem('isLoggedIn', 'true');
                // Redireccionar a la página de usuario o panel de control
                window.location.href = '../catalogo/catalogo.html';
            } else {
                alert('Correo electrónico o contraseña incorrectos');
            }
        }
    });
});
