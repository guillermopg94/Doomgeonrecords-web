$(document).ready(function ($) {
  $.noConflict();

  $("#btn-create").on("click", function (event) {
    event.preventDefault();
    if (
      $("#pass").val() == $("#passAgain").val() &&
      ($("#passstrength").html() == "Seguridad media <p>Su contraseña será más fuerte si incluye números, mayúsculas y minúsculas y un carácter especial.</p>" ||
        $("#passstrength").html() == "Seguridad fuerte")
    ) {
       if (
        $("#email").val().indexOf("@", 0) == -1 ||
        $("#email").val().indexOf(".", 0) == -1
      ) {
        $("<div class='errorEmail' title='Error del correo'><p>El correo introducido no es correcto</p></div>").dialog();
      } else {
 
        var datos = $("#registro").serialize();
      
        $.ajax({
          type: "GET",
          url: "php/insertarUsuario.php",
          data: datos,
          success: function (resultado) {
            localStorage.setItem("ErrorCreandoUsuarioSuccesantesif", resultado);
            if (resultado == "existe") {
              localStorage.setItem("ErrorCreandoUsuarioSucces", resultado);
              $(
                "<div id='dialog-exist' title='User Error'><p>Ese nombre no está disponible.</p></div>"
              ).appendTo("main");
              $("#dialog-exist").dialog({
                modal: true,
                draggable: true,
              });
            } else {
              localStorage.setItem("ErrorCreandoUsuarioSuccess", resultado);
              $("input").val("");
             
             
              $(
                "<div id='dialog-created' title='Usuario creado'><p>Tu usuario se ha creado correctamente. Gracias.</p></div>"
              ).appendTo("main");
              $("#dialog-created").dialog();
            }
          },
          error: function (xhr) {
            localStorage.setItem("ErrorCreandoUsuario", xhr);
          },
        });
      }
    } else {
      $(
        "<div id='dialog-password' title='Error de contraseña'><p>La contraseña no coincide o es demasiado débil.</p></div>"
      ).appendTo("main").dialog({
        modal: true,
        draggable: true,
      });
    }
  });

  $("#btn-login").on("click", function (event) {
localStorage.setItem("clicado", "clicado");
  
    event.preventDefault();

        
    var datos = $("#login").serialize();

    $.ajax({
      type: "POST",
      url: "php/login.php",
      data: datos,

      success: function (resultado) {
        console.log(resultado);
        if (resultado == "entra") {

          localStorage.setItem("ubication", "home-logged");
          window.location.href = "logged.html";
         
        } else if (resultado == "mal") {

          localStorage.setItem("ubication", "login");
          window.location.href = "index.html";

        } else if (resultado == "admin") {

          localStorage.setItem("ubication","usuarios");
          window.location.href = "admin.html";
        }
      },
      error: function (xhr) {
   localStorage.setItem("Error en login");
      },
    });
      

  
  
  
  });

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
