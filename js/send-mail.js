$(document).ready(function() {

    $("body").on("click", "input#enviar-mensaje-contacto", function () {

        if (
            $("#email-contact").val().indexOf("@", 0) == -1 ||
            $("#email-contact").val().indexOf(".", 0) == -1
          ) {
            $("<div class='errorEmail' title='Error del correo'><p>El correo introducido no es correcto</p></div>").dialog();
          } else {
        var datos = $("#send-mail").serialize();
        $.ajax({
          type: "POST",
          url: "php/send-mail.php",
          data: datos,
          success: function (resultado) {
            $("input").val("");
     
            localStorage.setItem("errorSuccess-send-mail-check", resultado);
            location.reload();
          },
          error: function (xhr) {
            localStorage.setItem("errorSendMail", xhr);
          },
        });

    }

    })



})