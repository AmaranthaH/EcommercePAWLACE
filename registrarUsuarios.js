var nombre = [],
    nickname = [],
    email = [];
    password = [],
    passwordValid = [];
    telefono = [];

var elementoBotonRegistrar = document.querySelector('Bottom-enviar');

elementoBotonRegistrar.addEventListener('click',registraUsuario);

function registrarUsuario(){
        Pnombre = document.querySelector('#UserName').value;
        Pnickname = document.querySelector('#nickName').value;
        Pemail = document.querySelector('#userEmail').value;
        Ppassword = document.querySelector('#passwordUser').value;
        PpasswordValid = passwordValidInput.value;
        Ptelefono = telefonoInput.value.replace(/\D/g, ''); 

    nombre = push(Pnombre);
    nickname = push(Pnickname);
    email = push(Pemail);
    password = push(Ppassword);
    telefono = push(Ptelefono);






}