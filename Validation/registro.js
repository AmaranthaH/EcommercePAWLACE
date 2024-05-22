const signupForm = document.querySelector('#formRegistro');
const passwordValidInput = document.querySelector('#passwordValid');

// Agregar un evento input para limpiar el mensaje de error cuando el usuario esté escribiendo de nuevo
passwordValidInput.addEventListener('input', () => {
    passwordValidInput.setCustomValidity('');
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#UserName').value;
    const nickname = document.querySelector('#nickName').value;
    const email = document.querySelector('#userEmail').value;
    const password = document.querySelector('#passwordUser').value;
    const passwordValid = passwordValidInput.value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);

    if (isUserRegistered) {
        return alert('El usuario ya está registrado');
    }

    if (password === passwordValid) {
        // Agregar el usuario y mostrar mensaje de éxito
        Users.push({ name: name, nickname: nickname,email: email, password: password });
        localStorage.setItem('users', JSON.stringify(Users));
        alert('¡Registro Exitoso!');
        // Redireccion al login si es necesario
    } else {
        // Establecer el mensaje de error si las constraseñas no coninciden y notifica
        passwordValidInput.setCustomValidity('Las contraseñas no coinciden');
        passwordValidInput.reportValidity();
    }
});
