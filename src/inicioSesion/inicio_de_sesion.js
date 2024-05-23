document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el usuario ya ha iniciado sesión
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn === 'true') {
        alert('Ya has iniciado sesión');
        // Aquí podrías redireccionar a otra página, por ejemplo, el panel de usuario
        // window.location.href = '/dashboard.html';
    }
    
    document.getElementById('formInicioSesion').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario
        
        // Obtener valores de los campos
        const email = document.getElementById('email').value;
        const password = document.getElementById('contraseña').value;
        
        // Validar los campos (aquí se puede agregar una validación más compleja si es necesario)
        if (email === 'admin@example.com' && password === '1234') {
            alert('Inicio de sesión exitoso');
            // Guardar el estado de inicio de sesión en Local Storage
            localStorage.setItem('isLoggedIn', 'true');
            // Aquí podrías redireccionar a otra página, por ejemplo, el panel de usuario
            // window.location.href = '/dashboard.html';
        } else {
            alert('Correo electrónico o contraseña incorrectos');
        }
    });
});