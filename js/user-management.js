$(document).ready(function () {
  $("#btn-create").on("click", function (event) {
    if (
      $("#pass").val() == $("#passAgain").val() &&
      ($("#passstrength").html() == "Seguridad media" ||
        $("#passstrength").html() == "Seguridad fuerte")
    ) {
      if (
        $("#email").val().indexOf("@", 0) == -1 ||
        $("#email").val().indexOf(".", 0) == -1
      ) {
        alert("El correo introducido no es correcto");
      } else {
        var datos = $("#registro").serialize();
        event.preventDefault();
        $.ajax({
          type: "GET",
          url: "php/insertarUsuario.php",
          data: datos,
          success: function (resultado) {
            if (resultado == "existe") {
              $(
                "<div id='dialog-exist' title='User Error'><p>Ese nombre no está disponible.</p></div>"
              ).appendTo("#content");
              $("#dialog-exist").dialog({
                modal: true,
                draggable: true,
              });
            } else {
              $("input[name=codigo]").val("");
              $("input[name=user]").val("");
              $("input[name=nombre]").val("");
              $("input[name=img]").val("");
              $("input[name=primerapellido]").val("");
              $("input[name=segundoapellido]").val("");
              $("input[name=email]").val("");
              $("input[name=pass]").val("");
              $("input[name=passAgain]").val("");
              $(
                "<div id='dialog-created' title='User created'><p>Hola, tu usuario se ha creado correctamente, ya puedes loguearte. Gracias.</p></div>"
              ).appendTo("#content");
              $("#dialog-created").dialog({
                modal: true,
                draggable: true,
              });
            }
          },
          error: function (xhr) {
            console.log("Error "+xhr+" insertando usuario.");
          },
        });
      }
    } else {
      $(
        "<div id='dialog-password' title='Password Error'><p>La contraseña no coincide o es demasiado débil.</p></div>"
      ).appendTo("#content");
      $("#dialog-password").dialog({
        modal: true,
        draggable: true,
      });
    }
  });

  $("#btn-login").on("click", function (event) {
  
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
        $("#mensaje1").append(xhr.statusText + xhr.responseText);
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
      $("#passstrength").html("Más caracteres.").css("color", "red");
    } else if (strongRegex.test($(this).val())) {
      $("#passstrength").className = "ok";
      $("#passstrength").html("Seguridad fuerte").css("color", "green");
    } else if (mediumRegex.test($(this).val())) {
      $("#passstrength").className = "alert";
      $("#passstrength").html("Seguridad media").css("color", "green");
    } else {
      $("#passstrength").className = "error";
      $("#passstrength").html("Seguridad débil").css("color", "red");
    }
    return true;
  });
});
