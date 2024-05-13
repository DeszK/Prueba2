//Validacion formulario

    $(document).ready(function(){
        // Ocultar los mensajes de error al cargar la página
        $(".errores").hide();

        $("#formulario").submit(function(event){
            var nombre = $("#itNombre");
            var apellido = $("#itApellido");
            var celular = $("#itCelular");
            var correo = $("#itEmail");
            var direccion = $("#itDireccion");
            var valido = true;

            // Verificar si los campos están vacíos y mostrar mensajes de error
            if(nombre.val().trim() === "") {
                $("#mensaje1").text("Por favor, escribe tu nombre").show();
                nombre.addClass("error-input");
                valido = false;
            } else {
                $("#mensaje1").hide();
                nombre.removeClass("error-input");
            }

            if(apellido.val().trim() === "") {
                $("#mensaje2").text("Por favor, escribe tu apellido").show();
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
            } else {
                $("#mensaje3").hide();
                celular.removeClass("error-input");
            }

            if(correo.val().trim() === "") {
                $("#mensaje4").text("Por favor, ingresa un correo electrónico válido").show();
                correo.addClass("error-input");
                valido = false;
            } else if (!correo.val().includes('@')) {
                $("#mensaje4").text("Por favor, ingresa un correo electrónico válido que contenga al menos un '@'").show();
                correo.addClass("error-input");
                valido = false;
            } else {
                $("#mensaje4").hide();
                correo.removeClass("error-input");
            }

            if(direccion.val().trim() === "") {
                $("#mensaje5").text("Por favor, ingresa tu direccion").show();
                celular.addClass("error-input");
                valido = false;
            } else {
                $("#mensaje5").hide();
                celular.removeClass("error-input");
            }

            // Si algún campo está vacío, detener el envío del formulario
            if(!valido) {
                event.preventDefault();
            }
        });
    });


