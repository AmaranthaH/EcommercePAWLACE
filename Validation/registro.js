const signupForm = document.querySelector('#formRegistro');
const passwordValidInput = document.querySelector('#passwordValid');
const telefonoInput = document.querySelector('#contactoTelefono');

// Agregar un evento input para limpiar el mensaje de error cuando el usuario esté escribiendo de nuevo
passwordValidInput.addEventListener('input', () => {
    passwordValidInput.setCustomValidity('');
});

// Validar y formatear el campo de teléfono en tiempo real
telefonoInput.addEventListener('input', (e) => {
    // Eliminar caracteres no numéricos
    let value = e.target.value.replace(/\D/g, '');

    // Limitar a 10 dígitos
    if (value.length > 10) {
        value = value.slice(0, 10);
    }

    // Formatear el número
    const formattedValue = value.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3').trim();
    e.target.value = formattedValue;

    // Limpiar el mensaje de error cuando el usuario está corrigiendo
    telefonoInput.setCustomValidity('');
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#UserName').value;
    const nickname = document.querySelector('#nickName').value;
    const email = document.querySelector('#userEmail').value;
    const password = document.querySelector('#passwordUser').value;
    const passwordValid = passwordValidInput.value;
    const telefono = telefonoInput.value.replace(/\D/g, ''); // Eliminar formateo para almacenar solo dígitos


    if (telefono.length !== 10) {
        telefonoInput.setCustomValidity('El número de teléfono debe tener exactamente 10 dígitos.');
        telefonoInput.reportValidity();
        return;
    }

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);

    if (isUserRegistered) {
        return alert('El usuario ya está registrado');
    }

    if (password === passwordValid) {
        // Agregar el usuario y mostrar mensaje de éxito
        Users.push({ name: name, nickname: nickname,email: email, password: password, telefono: telefono });
        localStorage.setItem('users', JSON.stringify(Users));
        alert('¡Registro Exitoso!');
        // Redireccion al login si es necesario
    } else {
        // Establecer el mensaje de error si las constraseñas no coninciden y notifica
        passwordValidInput.setCustomValidity('Las contraseñas no coinciden');
        passwordValidInput.reportValidity();
    }
});