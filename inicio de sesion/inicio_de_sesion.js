const loginForm = document.querySelector('#formInicioSesion');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#Contraseña').value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const user = Users.find(user => user.email === email);

    if (!user) {
        return alert('El usuario no está registrado');
    }

    if (user.password === password) {
        alert('¡Inicio de sesión exitoso!');
        // Redirigir al usuario a la página principal o a su perfil
        window.location.href = 'home.html'; // Cambia 'home.html' a la página deseada
    } else {
        alert('Correo o contraseña incorrectos');
    }
});
