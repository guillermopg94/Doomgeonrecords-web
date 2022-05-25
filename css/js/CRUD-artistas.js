$(document).ready(function() {

if(localStorage.getItem("ubication")=="artistas"){


  $.ajax({
    url: "php/selectAlbum.php",
    dataType: "json",
    success: function (resultado) {
      var users = resultado;

      for (var x of users) {
        $(
          "<option value='" + x.id_album + "' selected >" + x.nombre_album + "</option>"
        ).appendTo(".selectAlbum");
      }
    },
    error: function () {
  
    },
  });

  $.ajax({
    url: "php/selectProducto.php",
    dataType: "json",
    success: function (resultado) {
      var users = resultado;

      for (var x of users) {
        $(
          "<option value='" + x.id_producto + "' selected >" + x.nombre_producto + "</option>"
        ).appendTo(".selectProducto");
      }
    },
    error: function () {
  
    },
  });

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
    "Bandcamp<p>" +
    x.bandcamp +
    "</p>"+
    "Facebook<p>" +
    x.facebook +
    "</p>"+
    "Instagram<p>" +
    x.instagram +
    "</p>"+
    "<div class='div-img-crud'><img src='assets/artistas/"+ x.imagen_artista +"' alt='La imagen correspondiente al artista' class='img-crud'></div>"+
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
          $("input[name=codigoProducto]").val(localStorage.getItem('selectProducto')); 
          $("input[name=codigoAlbum]").val(localStorage.getItem('selectAlbum')); 
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
                localStorage.setItem("errorInsertandoArtistaSuuces", resultado);
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
             
                localStorage.setItem("ubication", "artistas");
                location.reload();
              
    
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
        var bandcamp = $(this).parents("#contentAdmin .usuarios").find("p:eq(2)").html();
        var facebook = $(this).parents("#contentAdmin .usuarios").find("p:eq(3)").html();
        var instagram = $(this).parents("#contentAdmin .usuarios").find("p:eq(4)").html();
    
        $("input[name=codigoArtist]").val(codigo);
        $("input[name=nombreArtist]").val(nombreArtist);
        $("input[name=imagenArtist]").val(imagenArtist);
        $("input[name=bandcamp]").val(bandcamp);
        $("input[name=facebook]").val(facebook);
        $("input[name=instagram]").val(instagram);

    
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