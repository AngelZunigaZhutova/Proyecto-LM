//Validación del formulario

var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var password = document.getElementById("password");
var form = document.getElementById("formulario");
var parrafo = document.getElementById("advertencias");

form.addEventListener("submit", e=> {
    e.preventDefault()

    let mensajes_error= "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let entrar = false;

    if(nombre.value.length <6){
        mensajes_error += "El nombre introducido no es válido<br>";
        entrar = true;

    }
    console.log()
    if(!regexEmail.test(email.value)) {
        mensajes_error += "El email no es válido <br>"
        entrar = true;

    }
    if(password.value.length < 8){
        mensajes_error += "La contraseña es demasiado corta <br> "
        entrar = true

    }
    if(entrar){
        parrafo.innerHTML =  mensajes_error;
    }

  
})



