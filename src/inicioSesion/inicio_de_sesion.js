document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formInicioSesion').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        // Obtener valores de los campos
        const email = document.getElementById('email').value;
        const password = document.getElementById('Contraseña').value;

        // Verificar las credenciales de administrador
        if (email === 'pawlacemx@gmail.com' && password === 'Pawlace1234.') {
            // Mostrar mensaje de éxito
            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';
            successMessage.innerText = 'Inicio de sesión de administrador exitoso';

            // Guardar el estado de inicio de sesión en Local Storage
            localStorage.setItem('isLoggedIn', 'true');

            // Redireccionar a la página de administrador después de un corto retraso
            setTimeout(() => {
                window.location.href = '../addproducts/addproducts.html';
            }, 2000);
        } else {
            // Obtener información de usuario almacenada en el registro
            const storedEmail = localStorage.getItem('userEmail');
            const storedPassword = localStorage.getItem('userPassword');

            // Validar los campos para usuarios normales
            if (email === storedEmail && password === storedPassword) {
                // Mostrar mensaje de éxito
                const successMessage = document.getElementById('successMessage');
                successMessage.style.display = 'block';
                successMessage.innerText = 'Inicio de sesión exitoso';

                // Guardar el estado de inicio de sesión en Local Storage
                localStorage.setItem('isLoggedIn', 'true');

                // Redireccionar a la página de usuario o panel de control después de un corto retraso
                setTimeout(() => {
                    window.location.href = '../catalogo/index.html';
                }, 2000);
            } else {
                // Mostrar el mensaje de error
                const errorMessage = document.getElementById('errorMessage');
                errorMessage.style.display = 'block';
                errorMessage.innerText = 'Correo electrónico o contraseña incorrectos';
                // Ocultar el mensaje de error después de 3 segundos
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 3000);
            }
        }
    });
});