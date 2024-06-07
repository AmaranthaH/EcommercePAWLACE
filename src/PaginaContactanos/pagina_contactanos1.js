//Modificado
document.getElementById('formContactanos').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada
    
    // Obtener los valores de entrada
    var contactoNombre = document.getElementById('contactoNombre').value.trim();
    var contactoEmail = document.getElementById('contactoEmail').value.trim();
    var lada = document.getElementById('lada').value.trim();
    var contactoTelefono = document.getElementById('contactoTelefono').value.trim();
    var contactoMensaje = document.getElementById('contactoMensaje').value.trim();
   
    // Validar los tipos de entrada y realizar correcciones si es necesario
    if (contactoNombre === '') {
        alert('Por favor, introduce tu nombre.');
        return;
    }
    if (contactoEmail === '') {
        alert('Por favor, introduce tu correo electrónico.');
        return;
    }
  
    if (!validateEmail(contactoEmail)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }
    if (lada === '') {
        alert('Por favor, introduce la lada.');
        return;
    }

    if (contactoTelefono === '') {
        alert('Por favor, introduce tu teléfono de contacto.');
        return;
    }

    // Validar que el número de teléfono tenga exactamente 10 dígitos
    if (contactoTelefono.length !== 10) {
        alert('El número de teléfono debe contener exactamente 10 dígitos.');
        return;
    }

    if (!validarTelefono(contactoTelefono)) {
        alert('Por favor, introduce un número de teléfono válido.');
        return;
    }

    if (contactoMensaje === '') {
        alert('Por favor, introduce un comentario.');
        return;
    }

    // Si todas las validaciones pasan, se envía el formulario
    this.submit();
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

// Obtener el campo de teléfono
var telefonoInput = document.getElementById('contactoTelefono');

// Agregar un evento de escucha para validar la entrada y permitir solo números
telefonoInput.addEventListener('input', function(event) {
    // Obtener el valor actual del campo de teléfono
    var valor = telefonoInput.value;
    // Reemplazar cualquier caracter no numérico con una cadena vacía
    var valorNumerico = valor.replace(/\D/g, '');
    // Asignar el valor numérico nuevamente al campo de teléfono, respetando el formato original
    telefonoInput.value = valorNumerico;
});

const form1 = document.querySelector('#formContactanos'); // Corregido querySelector
form1.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    // Validar la longitud del número de teléfono nuevamente antes de enviar el formulario
    var contactoTelefono = document.getElementById('contactoTelefono').value.trim();
    if (contactoTelefono.length !== 10) {
        alert('Por favor, introduce un número de teléfono válido.');
        return;
    }

    const form2 = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form2,
        headers: {
            "Accept": 'application/json' // Corregido Accept
        }
    });

    if (response.ok) {
        const responseData = await response.json(); // Convertir respuesta a JSON
        form1.reset();
        alert("Gracias por contactarnos, te escribiremos pronto");
    }
}
