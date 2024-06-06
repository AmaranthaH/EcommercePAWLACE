document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formRegistro').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        // Obtener valores de los campos
        const nombreCompleto = document.getElementById('UserName').value;
        const nombreUsuario = document.getElementById('nickName').value;
        const email = document.getElementById('userEmail').value;
        const telefono = document.getElementById('telefono').value;
        const password = document.getElementById('passwordUser').value;
        const passwordValid = document.getElementById('passwordValid').value;

        // Validar que las contraseñas coincidan
        if (password !== passwordValid) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Guardar la información del usuario en Local Storage
        localStorage.setItem('userNombreCompleto', nombreCompleto);
        localStorage.setItem('userNombreUsuario', nombreUsuario);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userTelefono', telefono);
        localStorage.setItem('userPassword', password);

        alert('Registro exitoso');
        // Redireccionar a la página de inicio de sesión
        window.location.href = '../inicioSesion/inicio_de_sesion.html';
    });
});

