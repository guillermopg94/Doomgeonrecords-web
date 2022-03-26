$(document).ready(function() {

if(localStorage.getItem("ubication")=="artistas"){

    $.ajax({
        type: "GET",
        url: "php/mostrarArtistas.php",
        dataType: "json",
        success: function (resultado) {
          var users = resultado;
          $(".confirmarArtist").css("visibility", "hidden");
          for (var x of users) {
            pintarArtistas(x);
          }
        },
        error: function (xhr) {
          localStorage.setItem("errorMostrandoArtista", xhr);
        },
      });
    
      function pintarArtistas(x){
        var id_artista = JSON.stringify(x.id_artista);
    $(
    "<div class='usuarios'>Nombre<p>" +
    x.nombre_artista +
    "</p>Imagen<p>" +
    x.imagen_artista +
    "</p>"+
    "<img src='assets/"+ x.imagen_artista +"' alt='La imagen correspondiente al artista' width='80%' height='80%' >"+
    "<br><br><input type='button' class='eliminarArtist' name=" +
    id_artista +
    " value='eliminar'><input type='button' class='editarArtist' name=" +
    id_artista +
    " value='editar'><br><br></div>"
    ).appendTo("#contentAdmin");
    
       }
    
       $("#insertarArtist").on("click", function () {
        if (
          $("input[name=nombreArtist]").val() == "" ||
          $("input[name=imagenArtist]").val() == ""
        ) {
          $(
            "<div id='dialog-fields-adding-user' title='Fields Error'><p>Los campos no pueden estar vacíos</p></div>"
          ).appendTo("#contentAdmin");
          $("#dialog-fields-adding-user").dialog({
            modal: true,
            draggable: true,
          });
        }else{
          var datos = $("#my_form3").serialize();
          $.ajax({
            type: "GET",
            url: "php/insertarArtista.php",
            data: datos,
            success: function (resultado) {
              $("input").val("");

              if (resultado == "existe") {
                $(
                  "<div id='dialog-exist' title='Artist Error'><p>Ese artista ya está registrado.</p></div>"
                ).appendTo("#contentAdmin");
                $("#dialog-exist").dialog({
                  modal: true,
                  draggable: true,
                });
              } else {

              localStorage.setItem("ubication", "artistas");
    
             location.reload();
              }
            },
            error: function (xhr) {
              localStorage.setItem("errorInsertandoArtista", xhr );
              
            },
          });
        }
      });
      $("body").on("click", "input.eliminarArtist", function () {
    
        if (confirm("Desea eliminarlo?") == true) {
          var codigo = $(this)
            .parents("#contentAdmin .usuarios")
            .find(".eliminarArtist")
            .attr("name");
    
          $.ajax({
            type: "GET",
            url: "php/eliminarArtista.php?idUsuario=" + codigo,
            success: function (resultado) {
              if(resultado == "ese usuario tiene asignada una compra"){
                alert("ese usuario tiene asignada una compra");
              }else{
                localStorage.setItem("ubication", "artistas");
                location.reload();
              }
    
            },
            error: function (xhr) {
              localStorage.setItem("errorEliminandoArtista", xhr);

            },
          });
        }
    
      })
    
    
      $("body").on("click", "input.editarArtist", function () {
        var codigo = $(this)
          .parents("#contentAdmin .usuarios")
          .find(".editarArtist")
          .attr("name");

          $('html, body').animate({
            scrollTop: $("#container-form3").offset().top
            }, 800);
    
        var nombreArtist = $(this).parents("#contentAdmin .usuarios").find("p:eq(0)").html();
        var imagenArtist = $(this).parents("#contentAdmin .usuarios").find("p:eq(1)").html();
    
        $("input[name=codigoArtist]").val(codigo);
        $("input[name=nombreArtist]").val(nombreArtist);
        $("input[name=imagenArtist]").val(imagenArtist);
    
        $(".confirmarArtist").css("visibility", "visible");
        $("#insertarArtist").css("visibility", "hidden");
    
      })
    
      $("body").on("click", "button.confirmarArtist", function () {
        if (confirm("Desea guardar los cambios?") == true) {
          var datos = $("#my_form3").serialize();
          $.ajax({
            type: "POST",
            url: "php/editarArtist.php",
            data: datos,
            success: function () {
              $("input").val("");
              $(".confirmarArtist").css("visibility", "hidden");
              localStorage.setItem("ubication", "artistas");
              location.reload();
            },
            error: function (xhr) {
              localStorage.setItem("ErrorEditandoArtista", xhr);
            },
          });
        }
      });
    
    







}

});