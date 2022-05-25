$(document).ready(function ($) {
    $.noConflict();
  
if(localStorage.getItem("ubication")=="detalles-logged"){
    let arrayUsers = [];
    $("<h1 class='h1-home'>MODIFICA TUS CREDENCIALES</h1><div id='div-detalles-form'><form id='detalles-form'>"+
    "<input type='text' name='codigoUser' hidden /><br>"+
    "Nombre: <br><input type='text' name='nombreUser'/>"+
    "<br>Primer Apellido: <br><input type='text' name='primerapellido'/>"+
    "<br>Segundo Apellido: <br><input type='text' name='segundoapellido'/>"+
    "<br>User: <br><input type='text' name='user'/><br>Email:<br> "+
    "<input type='text' name='email' id='email'/><br>"+
    "<br>Password:<br><input type='text'name='pass' id='pass'/><br> Password:<br> "+
    "<input type='text' name='pass2' id='pass2'/><br/><br>"+
    "<button type='button' class='editarDetallesUser'>Editar</button><br/><br></form><div id='passstrength'></div></div>")
    .appendTo("#logged");
    $.ajax({
        type: "GET",
        url: "php/mostrarDetallesLogged.php",
        dataType: "json",
        success: function (resultado) {     
            localStorage.setItem("errormostrarDetallesLogged", resultado);
            for (var x of resultado) {
                JSON.stringify(x);
                
                arrayUsers.push({ user_nombre: x.nombre, id_usuario:x.id_usuario, email:x.email, pass:x.pass, primerApellido:x.primerapellido, segundoApellido:x.segundoapellido, user:x.user });
             
              }
          
              mostrarUsers (arrayUsers);
      
        
        },
        error: function (xhr) {
          localStorage.setItem("errormostrarDetallesLogged", xhr);
        },
      });
      function mostrarUsers(arrayUsers){
       
        arrayUsers.forEach(element => {
         
            $("input[name=codigoUser]").val(element.id_usuario);
            $("input[name=nombreUser]").val(element.user_nombre);
            $("input[name=primerapellido]").val(element.primerApellido);
            $("input[name=segundoapellido]").val(element.segundoApellido);
            $("input[name=user]").val(element.user);
            $("input[name=email]").val(element.email);
    

        });
        }
        $(".editarDetallesUser").on("click", function () {
           

            if (
                $("#pass").val() == $("#pass2").val() &&
                ($("#passstrength").html() == "Seguridad media <p>Su contraseña será más fuerte si incluye números, mayúsculas y minúsculas y un carácter especial.</p>" ||
                  $("#passstrength").html() == "Seguridad fuerte")
              ) {
                 if (
                  $("#email").val().indexOf("@", 0) == -1 ||
                  $("#email").val().indexOf(".", 0) == -1
                ) {
                  $("<div class='errorEmail' title='Error del correo'><p>El correo introducido no es correcto</p></div>").dialog();
                } else {
            var datos = $("#detalles-form").serialize();
            $.ajax({
              type: "POST",
              url: "php/editarUserLogged.php",
              data: datos,
              success: function (resultado) {
                $("input").val("");
         
                $(
                    "<div id='dialog-created-detalles' title='Datos modificados'><p>Se le ha enviado un mail confirmando sus cambios. Si desea modificar sus datos de nuevo, recargue la página</p></div>"
                  ).appendTo("main");
                  $("#dialog-created-detalles").dialog({
                    modal: true,
                    draggable: true,
                  });
             
                localStorage.setItem("errorSuccessEditarUserLogged", resultado);
               
              },
              error: function (xhr) {
                localStorage.setItem("errorEditandoUserLogged", xhr);
              },
            });
        }
        } else {
            $(
              "<div id='dialog-password' title='Error de contraseña'><p>La contraseña no coincide o es demasiado débil. O el correo no tiene el formato correcto.</p></div>"
            ).appendTo("main").dialog({
              modal: true,
              draggable: true,
            });
          }
          $("#pass").keyup(function (e) {
            var strongRegex = new RegExp(
              "^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
              "g"
            );
            var mediumRegex = new RegExp(
              "^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
              "g"
            );
            var enoughRegex = new RegExp("(?=.{6,}).*", "g");
        
            if (false == enoughRegex.test($(this).val())) {
              $("#passstrength").html(" <p>Su contraseña será más fuerte si incluye números, mayúsculas y minúsculas y un carácter especial.</p>").css("color", "red");
            } else if (strongRegex.test($(this).val())) {
              $("#passstrength").className = "ok";
              $("#passstrength").html("Seguridad fuerte").css("color", "green");
            } else if (mediumRegex.test($(this).val())) {
              $("#passstrength").className = "alert";
              $("#passstrength").html("Seguridad media <p>Su contraseña será más fuerte si incluye números, mayúsculas y minúsculas y un carácter especial.</p>").css("color", "green");
            } else {
              $("#passstrength").className = "error";
              $("#passstrength").html("Seguridad débil  <p>Su contraseña será más fuerte si incluye números, mayúsculas y minúsculas y un carácter especial.</p>").css("color", "red");
            }
            return true;
          });

        });

}
});