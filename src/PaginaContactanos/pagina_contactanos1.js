document.getElementById('formContactanos').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada
    
    // Obtener los valores de entrada
    var contactoNombre = document.getElementById('contactoNombre').value.trim();
    var contactoEmail = document.getElementById('contactoEmail').value.trim();
    var contactoTelefono = document.getElementById('contactoTelefono').value.trim();
    var contactoMensaje = document.getElementById('contactoMensaje').value.trim();
   
    // Validar el nombre completo para que solo contenga letras y espacios
    let letters = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (contactoNombre === '' || !contactoNombre.match(letters)) {
        mostrarAlerta('Por favor, introduce solo letras en el nombre.', 'error');
        return;
    }

    if (contactoEmail === '') {
        mostrarAlerta('Por favor, introduce tu correo electrónico.', 'error');
        return;
    }

    if (!validateEmail(contactoEmail)) {
        mostrarAlerta('Por favor, introduce un correo electrónico válido.', 'error');
        return;
    }

    if (contactoTelefono === '') {
        mostrarAlerta('Por favor, introduce tu teléfono de contacto.', 'error');
        return;
    }

    // Validar que el número de teléfono tenga exactamente 10 dígitos
    if (contactoTelefono.length !== 10) {
        mostrarAlerta('El número de teléfono debe contener exactamente 10 dígitos.', 'error');
        return;
    }

    if (!validarTelefono(contactoTelefono)) {
        mostrarAlerta('Por favor, introduce un número de teléfono válido.', 'error');
        return;
    }

    if (contactoMensaje === '') {
        mostrarAlerta('Por favor, introduce un comentario.', 'error');
        return;
    }

    // Si todas las validaciones pasan, se envía el formulario
    try {
        const formData = new FormData(this);
        const response = await fetch(this.action, {
            method: this.method,
            body: formData,
            headers: {
                "Accept": 'application/json'
            }
        });

        if (response.ok) {
            this.reset();
            mostrarAlerta('Gracias por contactarnos, te escribiremos pronto', 'success');
        } else {
            mostrarAlerta('Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.', 'error');
        }
    } catch (error) {
        console.error("Error al enviar el formulario:", error);
        mostrarAlerta('Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.', 'error');
    }
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Función para validar un número de teléfono de 10 dígitos
function validarTelefono(telefono) {
    // Expresión regular para validar un número de teléfono de 10 dígitos
    var regex = /^\d{10}$/;
    return regex.test(telefono);
}

// Función para mostrar alertas en el DOM
function mostrarAlerta(mensaje, tipo) {
    const alerta = document.createElement('div');
    alerta.classList.add('alert');
    alerta.classList.add(`alert-${tipo}`);
    alerta.textContent = mensaje;

    const formContainer = document.getElementById('centroContactanos');
    formContainer.insertBefore(alerta, formContainer.firstChild);

    // Desvanecer la alerta después de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 4000);
}

// Validar entrada del nombre para permitir solo letras y espacios en tiempo real
document.getElementById('contactoNombre').addEventListener('input', function(event) {
    let valor = this.value;
    let valorSoloLetras = valor.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
    this.value = valorSoloLetras;
});

// Validar entrada del teléfono para permitir solo números en tiempo real
var telefonoInput = document.getElementById('contactoTelefono');
telefonoInput.addEventListener('input', function(event) {
    // Obtener el valor actual del campo de teléfono
    var valor = telefonoInput.value;
    // Reemplazar cualquier caracter no numérico con una cadena vacía
    var valorNumerico = valor.replace(/\D/g, '');
    // Asignar el valor numérico nuevamente al campo de teléfono
    telefonoInput.value = valorNumerico;
});


