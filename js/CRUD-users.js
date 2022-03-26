$(document).ready(function() {

  if(localStorage.getItem("ubication")=="usuarios"){

$.ajax({
    type: "GET",
    url: "php/mostrarUsuarios.php",
    dataType: "json",
    success: function (resultado) {
      var users = resultado;
      $(".confirmarUser").css("visibility", "hidden");
      for (var x of users) {
        pintarUsuarios(x);
      }
    },
    error: function (xhr) {
      localStorage.setItem("errorMostrandoUser", xhr);
    },
  });

  function pintarUsuarios(x){
    var id_usuario = JSON.stringify(x.id_usuario);
$(
"<div class='usuarios'>Nombre<p>" +
x.nombre +
"</p>Pimer Apellido<p>" +
x.primerapellido +
"</p>Segundo Apellido<p>" +
x.segundoapellido +
"</p>Nombre de Uusario<p>" +
x.user +
"</p>Email<p>" +
x.email +
"</p>Tipo<p>" +
x.tipo +
"</p><input type='button' class='eliminarUser' name=" +
id_usuario +
" value='eliminar'><input type='button' class='editarUser' name=" +
id_usuario +
" value='editar'><br><br></div>"
).appendTo("#contentAdmin"); 


   }

   $("#insertarUsuario").on("click", function () {
    if (
      $("input[name=nombreUser]").val() == "" ||
      $("input[name=primerapellido]").val() == "" ||
      $("input[name=segundoapellido]").val() == "" ||
      $("input[name=tipo]").val() == "" ||
      $("input[name=email]").val() == "" ||
      $("input[name=user]").val() == "" ||
      $("input[name=pass]").val() == "" ||
      $("input[name=pass2]").val() == ""
    ) {
      $(
        "<div id='dialog-fields-adding-user' title='Password Error'><p>Los campos no pueden estar vacíos</p></div>"
      ).appendTo("#contentAdmin");
      $("#dialog-fields-adding-user").dialog({
        modal: true,
        draggable: true,
      });
    } else if($("input[name=pass]").val() != $("input[name=pass2]").val() ){
      $(
        "<div id='dialog-password-adding-user' title='Password Error'><p>La contraseña no coincide</p></div>"
      ).appendTo("#contentAdmin");
      $("#dialog-password-adding-user").dialog({
        modal: true,
        draggable: true,
      });
    }else{
      var datos = $("#my_form2").serialize();
      $.ajax({
        type: "GET",
        url: "php/insertarUsuarioDesdeAdmin.php",
        data: datos,
        success: function () {
          $("input").val("");
      localStorage.setItem("ubication", "usuarios");
         location.reload();
        },
        error: function (xhr) {
          localStorage.setItem("errorInsertandoUser", xhr);
        },
      });
    }
  });
  $("body").on("click", "input.eliminarUser", function () {

    if (confirm("Desea eliminarlo?") == true) {
      var codigo = $(this)
        .parents("#contentAdmin .usuarios")
        .find(".eliminarUser")
        .attr("name");

      $.ajax({
        type: "GET",
        url: "php/eliminarUsuario.php?idUsuario=" + codigo,
        success: function (resultado) {
          if(resultado == "ese usuario tiene asignada una compra"){
            alert("ese usuario tiene asignada una compra");
          }else{
            localStorage.setItem("ubication", "usuarios");
            location.reload();
          }

        },
        error: function (xhr) {
          localStorage.setItem("errorEliminandoUser", xhr);
        
        },
      });
    }

  })


  $("body").on("click", "input.editarUser", function () {
    var codigo = $(this)
      .parents("#contentAdmin .usuarios")
      .find(".editarUser")
      .attr("name");
      $('html, body').animate({
        scrollTop: $("#container-form2").offset().top
        }, 800);
    var nombreUser = $(this).parents("#contentAdmin .usuarios").find("p:eq(0)").html();
    var primerapellido = $(this).parents("#contentAdmin .usuarios").find("p:eq(1)").html();
    var segundoapellido = $(this).parents("#contentAdmin .usuarios").find("p:eq(2)").html();
    var user = $(this).parents("#contentAdmin .usuarios").find("p:eq(3)").html();
    var email = $(this).parents("#contentAdmin .usuarios").find("p:eq(4)").html();
    var tipo = $(this).parents("#contentAdmin .usuarios").find("p:eq(5)").html();
   
    

    $("input[name=codigoUser]").val(codigo);
    $("input[name=nombreUser]").val(nombreUser);
    $("input[name=primerapellido]").val(primerapellido);
    $("input[name=segundoapellido]").val(segundoapellido);
    $("input[name=user]").val(user);
    $("input[name=email]").val(email);
    $("input[name=tipo]").val(tipo);

    $(".confirmarUser").css("visibility", "visible");
    $("#insertarUsuario").css("visibility", "hidden");

  })

  $("body").on("click", "button.confirmarUser", function () {
    if (confirm("Desea guardar los cambios?") == true) {
      var datos = $("#my_form2").serialize();
      $.ajax({
        type: "POST",
        url: "php/editarUser.php",
        data: datos,
        success: function (resultado) {
          $("input").val("");
          $(".confirmarUser").css("visibility", "hidden");
          localStorage.setItem("ubication", "usuarios");
          location.reload();
        },
        error: function (xhr) {
          localStorage.setItem("errorEditandoUser", xhr);
        },
      });
    }
  });

  }

});


