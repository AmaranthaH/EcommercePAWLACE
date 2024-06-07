document.addEventListener("DOMContentLoaded", function () {
    //permite que todo el código se cargue hasta que todo el HTML se cargue
    const form = document.getElementById('formNuevaContraseña');
//aquí estamos seleccionando el formulario con el ID 
    form.addEventListener('submit', function (event) {
        //Evento de cuando el formulario se envía
        event.preventDefault();
        // este método evita que el formulario recargue la página cuando se envía
        const nuevaContraseña = document.querySelector('input[name="nuevaContraseña"]').value;
        const confirmarContraseña = document.querySelector('input[name="contraseña"]').value;
//se obtienen los valores de los campos de entrada para la nueva contraseña
//y confirmación de contraseña

//asegura que los campos no estén vacíos y que las contraseñas coincidan 
        if (nuevaContraseña && confirmarContraseña && nuevaContraseña === confirmarContraseña) {
            fetch('https://formspree.io/f/mdoqjkkn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nuevaContraseña })
            })

            //verificamos la respuesta del servidor
            .then(response => {
                if (response.ok) {
                    alert('Contraseña cambiada exitosamente. Ahora puedes iniciar sesión.');
                    //reiniciamos el formulario
                    form.reset();
                    //redireccionamos al usuario a la página de inicio
                    window.location.href = '../inicio de sesion/Inicio_de_sesion.html';
                } else {
                    alert('Hubo un problema al cambiar la contraseña. Intenta de nuevo.');
                }
            })
            .catch(error => {
                //capturamos y mostramos cualuier error que ocurra
                console.error('Error:', error);
                alert('Hubo un problema al cambiar la contraseña. Intenta de nuevo.');
            });
        } else {
            //si las contraseñas no coinciden o algún campo está vacío, mostramos una alerta
            alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        }
    });
});