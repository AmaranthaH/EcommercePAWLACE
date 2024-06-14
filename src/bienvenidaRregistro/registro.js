const signupForm = document.querySelector('#formRegistro');
const passwordValidInput = document.querySelector('#passwordValid');
const telefonoInput = document.querySelector('#telefono'); 
const nombreInput = document.querySelector('#UserName'); 

// Agregar un evento input para limpiar el mensaje de error cuando el usuario esté escribiendo de nuevo
passwordValidInput.addEventListener('input', () => {
    passwordValidInput.setCustomValidity('');
});

// Validar y formatear el campo de teléfono en tiempo real
telefonoInput.addEventListener('input', (e) => {
    // Eliminar caracteres no numéricos
    let value = e.target.value.replace(/\D/g, '');

    // Limitar a 12 dígitos
    if (value.length > 12) {
        value = value.slice(0, 12);
    }

    // Formatear el número
    const formattedValue = value.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '($1) $2-$3-$4').trim(); // Modificado el formato del número
    e.target.value = formattedValue;

    // Limpiar el mensaje de error cuando el usuario está corrigiendo
    telefonoInput.setCustomValidity('');

    // Validar la longitud del número de teléfono en tiempo real
    if (value.length !== 12) {
        telefonoInput.setCustomValidity('El número de teléfono debe tener exactamente 12 dígitos.');
        telefonoInput.reportValidity();
    }
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nombreInput.value.trim(); // Modificado para eliminar espacios en blanco al inicio y al final
    const nickname = document.querySelector('#nickName').value.trim();
    const email = document.querySelector('#userEmail').value.trim();
    const password = document.querySelector('#passwordUser').value.trim();
    const passwordValid = passwordValidInput.value.trim();
    const telefono = telefonoInput.value.replace(/\D/g, ''); // Eliminar formateo para almacenar solo dígitos

    // Validar que el nombre no esté vacío antes de enviar el formulario
    if (name === '') {
        nombreInput.setCustomValidity('Por favor, ingrese su nombre completo.');
        nombreInput.reportValidity();
        return;
    }

    // Validar la longitud del número de teléfono antes de enviar el formulario
    if (telefono.length !== 12) {
        telefonoInput.setCustomValidity('El número de teléfono debe tener exactamente 12 dígitos.');
        telefonoInput.reportValidity();
        return;
    }

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);

    if (isUserRegistered) {
        // Mostrar el mensaje de error
        const errorMessage1 = document.getElementById('errorMessage1');
        errorMessage1.style.display = 'block';
        errorMessage1.innerText = 'El usuario ya esta registrado';
        // Ocultar el mensaje de error después de 3 segundos
        setTimeout(() => {
            errorMessage1.style.display = 'none';
        }, 3000);
        return;
    }

    if (password === passwordValid) {
        // Agregar el usuario y mostrar mensaje de éxito
        Users.push({ name: name, nickname: nickname, email: email, password: password, telefono: telefono });
        localStorage.setItem('users', JSON.stringify(Users));
       
    
        // Redireccion al login si es necesario
    } else {
        // Establecer el mensaje de error si las contraseñas no coinciden y notificar
        passwordValidInput.setCustomValidity('Las contraseñas no coinciden');
        passwordValidInput.reportValidity();
    }
});

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
           // Mostrar el mensaje de error
                const errorMessage = document.getElementById('errorMessage');
                errorMessage.style.display = 'block';
                errorMessage.innerText = 'Las contraseñas no coinciden';
                // Ocultar el mensaje de error después de 3 segundos
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 3000);
            return;
        }

        // Guardar la información del usuario en Local Storage
        localStorage.setItem('userNombreCompleto', nombreCompleto);
        localStorage.setItem('userNombreUsuario', nombreUsuario);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userTelefono', telefono);
        localStorage.setItem('userPassword', password);

        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
        successMessage.innerText = 'Registro exitoso';
        
        // Redireccionar a la página de inicio de sesión después de 3 segundos
        setTimeout(() => {
            window.location.href = '../inicioSesion/inicio_de_sesion.html';
        }, 2000);
        
    });
});
