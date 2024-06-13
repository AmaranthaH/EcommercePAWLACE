document.addEventListener("DOMContentetLoaded", function (){
    // todo el codigo se encuentra en esta función, asegura que se cargue 
    //después del html está completamente cargado
    
    const form = document.getElementById ('formRecuperarContraeña');
    const cancelarBtn = document.getElementById ('cancelarRecuperacion');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        //interceptar evento submit y prevenir comportamiento por defecto del formulario
    
        const email = document.getElementById ('email-recuperarContraeña').value;
        //valor del campo de email del formulario
    
        //verificar que el campo de email no esté vacío
    
        if (email){
            //enviar datos del formulario usando Fetch API
            fetch ('https://formspree.io/f/mdoqjkkn', {
                method: 'POST',
                header: {
                    'Content-Type' : 'application/json'
            },
        body: JSON.stringify ({ email })
    
        //si el email está vació se envía una solucitud del endpoint en formato JSON
        })
    
        //Respuesta del Servidor
        //promesas devueltas por fetch
        .then (response => {
            if (response.ok){
                alert ('Correo de recuperación enviado. Revisa tu bandeja de entrada. ');
                form.reset();
            } else {
                alert ('Hubo un problema al enviar el correo de recuperación. Intenta de nuevo.');
    
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert ('Hubo un problema al enviar el correo de recuperación. Intenta de nuevo.');
        });
    
    } else {
        alert ('Por favor, ingresa tu correo electrónico o nombre de usuario. ');
    }
    
    } );
    
        cancelarBtn.addEventListener('click', function () {
            window.location.href = '../Validation/registro.html'
    
            //!!!esto lo tengo que cambiar a la rura
            } )
    
    }) ;
    
    document.getElementById('cancelar').addEventListener('click', function() {
        window.location.href = '../bienvenidaRregistro/welcome.html';
    });