$(document).ready(function(){

    $("#formulario").submit(function(event){
        var nombre = $("#itNombre");
        var apellido = $("#itApellido");
        var celular = $("#itCelular");
        var email = $("#itEmail");
        var direccion = $("#itDireccion");
        var valido = true;

        // Verificar si los campos están vacíos y mostrar mensajes de error
        // Verificacion del nombre
        if(nombre.val().trim() === "") {
            $("#mensaje1").text("Por favor, escribe tu nombre").show();
            nombre.addClass("error-input");
            valido = false;
        } else {
            $("#mensaje1").hide();
            nombre.removeClass("error-input");
        }
        // Verificacion del apellido
        if(apellido.val().trim() === "") {
            $("#mensaje2").text("Por favor, ingresa tu apellido").show();
            apellido.addClass("error-input");
            valido = false;
        } else {
            $("#mensaje2").hide();
            apellido.removeClass("error-input");
        }

        if(celular.val().trim() === "") {
            $("#mensaje3").text("Por favor, ingresa tu número de celular").show();
            celular.addClass("error-input");
            valido = false;
        }else {
            $("#mensaje3").hide();
            celular.removeClass("error-input");
        }

        if(email.val().trim() === "") {
            $("#mensaje4").text("Por favor, ingresa un correo electrónico válido").show();
            email.addClass("error-input");
            valido = false;
        } else if (!email.val().includes('@')) {
            $("#mensaje4").text("Por favor, ingresa un correo electrónico válido que contenga al menos un '@'").show();
            email.addClass("error-input");
            valido = false;
        } else {
            $("#mensaje4").hide();
            email.removeClass("error-input");
        }

        if(direccion.val().trim() === "") {
            $("#mensaje5").text("Por favor, ingresa tu dirección").show();
            direccion.addClass("error-input");
            valido = false;
        } else {
            $("#mensaje5").hide();
            direccion.removeClass("error-input");
        }

        // Si algún campo está vacío, detener el envío del formulario
        if(!valido) {
            event.preventDefault();
        }
    });
});