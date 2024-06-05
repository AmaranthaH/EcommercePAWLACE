document.getElementById('formContactanos').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada
    
    // Obtener los valores de entrada
    var contactoNombre = document.getElementById('contactoNombre').value.trim();
    var contactoEmail = document.getElementById('contactoEmail').value.trim();
    var  lada = document.getElementById('lada').value.trim();
    var contactoTelefono = document.getElementById('contactoTelefono').value.trim();
    var  contactoMensaje = document.getElementById('contactoMensaje').value.trim();
   
    // Validar los tipos de entrada y realizar correcciones si es necesario
    if (contactoNombre === '') {
        alert('Por favor, introduce tu nombre.');
        return;
    }
    if (contactoEmail === '') {
        alert('Por favor, introduce tu correo electronico.');
        return;
    }
  
    if (!validateEmail(contactoEmail)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }
    if (lada === '') {
        alert('Por favor, introduce la lada');
        return;
    }

   if (contactoTelefono === '') {
        alert('Por favor, introduce tu telefono de contacto.');
        return;
    }
    if (!validarTelefono(contactoTelefono)) {
        alert('Por favor, introduce un número de teléfono válido.');
        return;
    }
    if (contactoMensaje === '') {
        alert('Por favor, introduce un comentario');
        return;
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

const form1 = document.querySelector('#formContactanos'); // Corregido querySelector
form1.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

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

