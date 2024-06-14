// Obtener los campos
const ciudadInput = document.getElementById('ciudad');
const municipioInput = document.getElementById('municipio');
const calleNumeroInput = document.getElementById('calleNumero');
const callesAlrededorInput = document.getElementById('callesAlrededor');
const codigoPostalInput = document.getElementById('codigoPostal');
const estadoSelect = document.getElementById('estado');
const formaPagoSelect = document.getElementById('formaPago');
const numeroTarjetaInput = document.getElementById('numeroTarjeta');
const fechaTarjetaInput = document.getElementById('fechaTarjeta');
const cvInput = document.getElementById('cv');


// Obtener el botón de envío
const submitButton = document.getElementById('BottomPago');

// Función para validar el formulario y habilitar el botón de envío si todos los campos tienen datos
function validateForm() {
  // Verificar si todos los campos no están vacíos
  const ciudadValue = ciudadInput.value.trim();
  const municipioValue = municipioInput.value.trim();
  const calleNumeroValue = calleNumeroInput.value.trim();
  const callesAlrededorValue = callesAlrededorInput.value.trim();
  const codigoPostalValue = codigoPostalInput.value.trim();
  const estadoValue = estadoSelect.value;
  const formaPagoValue = formaPagoSelect.value;
  const numeroTarjetaValue = numeroTarjetaInput.value.trim();
  const fechaTarjetaValue = fechaTarjetaInput.value.trim();
  const cvValue = cvInput.value.trim();

}

// Añadir eventos de entrada a los campos para validar el formulario en tiempo real
ciudadInput.addEventListener('input', validateForm);
municipioInput.addEventListener('input', validateForm);
calleNumeroInput.addEventListener('input', validateForm);
callesAlrededorInput.addEventListener('input', validateForm);
codigoPostalInput.addEventListener('input', validateForm);
estadoSelect.addEventListener('change', validateForm); // Agregar evento de cambio para el select de estado
formaPagoSelect.addEventListener('change', validateForm); // Agregar evento de cambio para el select de forma de pago
fechaTarjetaInput.addEventListener('input', validateForm);
cvInput.addEventListener('input', validateForm);


///////////////////////////Validacion Codigo Postal//////////////////////////////////////
// Añadir evento de entrada al campo de código postal para validar la entrada
codigoPostalInput.addEventListener('input', function() {
    // Obtener el valor ingresado y eliminar espacios en blanco
    let codigoPostalValue = codigoPostalInput.value.trim();
    
    // Quitar cualquier carácter que no sea un número
    codigoPostalValue = codigoPostalValue.replace(/\D/g, '');

    // Limitar la longitud del valor a 5 dígitos
    codigoPostalValue = codigoPostalValue.slice(0, 5);

    // Actualizar el valor en el campo de código postal
    codigoPostalInput.value = codigoPostalValue;

    // Si el valor ingresado no es un número de 5 dígitos, mostrar un mensaje de error
    if (codigoPostalValue.length !== 5 || isNaN(codigoPostalValue)) {
        document.getElementById('messageCodigoPostal').textContent = 'El código postal debe contener exactamente 5 dígitos numéricos.';
    } else {
        // Si el valor es válido, eliminar cualquier mensaje de error
        document.getElementById('messageCodigoPostal').textContent = '';
    }
});
/////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////Forma de pago/////////////////////////////////////////////
// Deshabilitar el campo de número de tarjeta inicialmente
numeroTarjetaInput.disabled = true;
fechaTarjetaInput.disabled = true;
cvInput.disabled = true;

// Función para habilitar o deshabilitar el campo de número de tarjeta según la opción de forma de pago seleccionada
function handleFormaPagoChange() {
    const formaPagoValue = formaPagoSelect.value;

    numeroTarjetaInput.disabled = !(formaPagoValue === "Tarjeta de Crédito" || formaPagoValue === "Tarjeta de Débito"|| formaPagoValue === "PayPal");
    fechaTarjetaInput.disabled = !(formaPagoValue === "Tarjeta de Crédito" || formaPagoValue === "Tarjeta de Débito"|| formaPagoValue === "PayPal");
    cvInput.disabled = !(formaPagoValue === "Tarjeta de Crédito" || formaPagoValue === "Tarjeta de Débito"|| formaPagoValue === "PayPal");
}

// Agregar un evento de cambio al campo de forma de pago para manejar la selección de opciones
formaPagoSelect.addEventListener('change', handleFormaPagoChange);



////////////////////////////////////Validacion de numeros de tarjeta/////////////////////////////////////////////
numeroTarjetaInput.addEventListener('input', function() {
  // Obtener el valor ingresado y eliminar espacios en blanco
  let numeroTarjetaValue = numeroTarjetaInput.value.trim();
  
  // Quitar cualquier carácter que no sea un número
  numeroTarjetaValue = numeroTarjetaValue.replace(/\D/g, '');

  // Formatear el número de tarjeta con guiones después de cada cuatro dígitos
  numeroTarjetaValue = numeroTarjetaValue.replace(/(\d{4})/g, '$1-');

  // Limitar la longitud del valor a 19 caracteres
  numeroTarjetaValue = numeroTarjetaValue.slice(0, 19);

  // Actualizar el valor en el campo de número de tarjeta
  numeroTarjetaInput.value = numeroTarjetaValue;

  // Si el valor ingresado no tiene el formato correcto, mostrar un mensaje de error
  if (numeroTarjetaValue.length < 18 || isNaN(numeroTarjetaValue.replace(/-/g, ''))) {
      document.getElementById('messagenumeroTarjeta').textContent = 'El número de tarjeta debe tener el formato correcto.';
  } else {
      // Si el valor es válido, eliminar cualquier mensaje de error
      document.getElementById('messagenumeroTarjeta').textContent = '';
  }
});
///////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////Validacion de fecha de tarjeta/////////////////////////////////////////////
fechaTarjetaInput.addEventListener('input', function() {
  // Obtener el valor ingresado y eliminar espacios en blanco
  let fechaTarjetaValue = fechaTarjetaInput.value.trim();
  
  // Quitar cualquier carácter que no sea un número
  fechaTarjetaValue = fechaTarjetaValue.replace(/\D/g, '');

  // Insertar una barra después de los primeros dos dígitos (MM)
  if (fechaTarjetaValue.length > 2) {
      fechaTarjetaValue = fechaTarjetaValue.slice(0, 2) + '/' + fechaTarjetaValue.slice(2);
  }

  // Limitar la longitud del valor a 5 caracteres (MM/AA)
  fechaTarjetaValue = fechaTarjetaValue.slice(0, 5);

  // Actualizar el valor en el campo de número de tarjeta
  fechaTarjetaInput.value = fechaTarjetaValue;

  // Si el valor ingresado no tiene el formato correcto, mostrar un mensaje de error
  if (fechaTarjetaValue.length !== 5 || isNaN(fechaTarjetaValue.replace(/\//g, ''))) {
      document.getElementById('messagefechaTarjeta').textContent = 'La fecha de tarjeta debe tener el formato MM/AA.';
  } else {
      // Si el valor es válido, eliminar cualquier mensaje de error
      document.getElementById('messagefechaTarjeta').textContent = '';
  }
});

///////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////Validacion de CV/////////////////////////////////////////////
cvInput.addEventListener('input', function() {
  // Obtener el valor ingresado y eliminar espacios en blanco
  let cvValue = cvInput.value.trim();
  
  // Quitar cualquier carácter que no sea un número
  cvValue = cvValue.replace(/\D/g, '');

  cvValue = cvValue.slice(0, 3);

  // Actualizar el valor en el campo de número de tarjeta
  cvInput.value = cvValue;

  // Si el valor ingresado no tiene el formato correcto, mostrar un mensaje de error
  if (cvValue.length !== 3 || isNaN(cvValue)) {
      document.getElementById('messageCV').textContent = 'CV de tarjeta debe tener el formato.';
  } else {
      // Si el valor es válido, eliminar cualquier mensaje de error
      document.getElementById('messageCV').textContent = '';
  }
});

///////////////////////////////////////////////////////////////////////////////////////


// Función para manejar el evento de clic en el botón de envío
submitButton.addEventListener('click', function() {
    // Verificar si todos los campos están llenos antes de realizar el pago
    if (ciudadInput.value.trim() && municipioInput.value.trim() && calleNumeroInput.value.trim() && callesAlrededorInput.value.trim()&&codigoPostalInput.value.trim() && estadoSelect.value && numeroTarjetaInput.value.trim() && fechaTarjetaInput.value.trim()&&cvInput.value.trim()) {

        pago();

        // Vaciar el carrito después de realizar el pago
        emptyCart();

    } else {
        // Mostrar un mensaje de error o tomar alguna otra acción si los campos no están llenos
        const messageContainer = document.getElementById('messageContainer'); // Obtener el contenedor del mensaje
        messageContainer.innerHTML = '<p class="success-message">Por favor complete todos los campos antes de enviar.</p>'; // Agregar el mensaje al contenedor
        messageContainer.classList.remove('hidden'); // Mostrar el contenedor del mensaje

        // Hacer que el mensaje desaparezca después de 3 segundos
        setTimeout(() => {
            messageContainer.innerHTML = ''; // Limpiar el contenido del contenedor de mensajes
            messageContainer.classList.add('hidden'); // Ocultar el contenedor del mensaje nuevamente
        }, 1500); // 3000 milisegundos = 3 segundos
    }
});

// Función para manejar el evento de clic en el botón de envío
function pago() {
        const messageContainer = document.getElementById('messageContainerAceptacion'); 
        messageContainer.innerHTML = '<p class="success-message">Completo Enviado</p>'; 
        messageContainer.classList.remove('hidden'); 

        setTimeout(() => {
            messageContainer.innerHTML = ''; 
            messageContainer.classList.add('hidden'); 
        }, 2000); 

    window.location.href = "../catalogo/index.html";
}
