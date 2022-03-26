$(document).ready(function() {

    if(localStorage.getItem("ubication")=="album"){

      $.ajax({
        url: "php/select.php",
        dataType: "json",
        success: function (resultado) {
          var users = resultado;

          for (var x of users) {
            $(
              "<option value='" + x.id_artista + "' selected >" + x.nombre_artista + "</option>"
            ).appendTo(".nombreEnSelect");
          }
        },
        error: function () {
      
        },
      });
    
        $.ajax({
            type: "GET",
            url: "php/mostrarAlbum.php",
            dataType: "json",
            success: function (resultado) {
              var users = resultado;
              $(".confirmarAlbum").css("visibility", "hidden");
              for (var x of users) {
                pintarAlbumes(x);
              }
            },
            error: function (xhr) {
              localStorage.setItem("errorMostrandoAlbum", xhr);
            },
          });
        
          function pintarAlbumes(x){
            var id_album = JSON.stringify(x.id_album);
       
        $(
        "<div class='usuarios'>Nombre<p>" +
        x.nombre_album +
        "</p>Imagen<p>" +
        x.imagen_album +
        "</p>Artista<p>" +
        x.nombre_artista +
        "</p>"+
        "<img src='assets/"+ x.imagen_album +"' alt='La imagen correspondiente al album' width='80%' height='80%' >"+
        "<br><br><input type='button' class='eliminarAlbum' name=" +
        id_album +
        " value='eliminar'><input type='button' class='editarAlbum' name=" +
        id_album +
        " value='editar'><br><br></div>"
        ).appendTo("#contentAdmin"); 
        
           }
        
           $("#insertarAlbum").on("click", function () {
            if (
              $("input[name=nombreAlbum]").val() == "" ||
              $("input[name=imagenAlbum]").val() == ""
            ) {
              $(
                "<div id='dialog-fields-adding-user' title='Fields Error'><p>Los campos no pueden estar vacíos</p></div>"
              ).appendTo("#contentAdmin");
              $("#dialog-fields-adding-user").dialog({
                modal: true,
                draggable: true,
              });
            }else{
                
              $("input[name=codigoArtista]").val(localStorage.getItem('select')); 
              var datos = $("#my_form4").serialize();

              $.ajax({
                type: "GET",
                url: "php/insertarAlbum.php",
                data: datos,
                success: function (resultado) {

                  $("input").val("");

               
                  localStorage.setItem("error", resultado);

                  if (resultado == "existe") {
                    $(
                      "<div id='dialog-exist' title='Album Error'><p>Ese album ya está registrado.</p></div>"
                    ).appendTo("#contentAdmin");
                    $("#dialog-exist").dialog({
                      modal: true,
                      draggable: true,
                    });
                  } else {
                 
                 localStorage.setItem("ubication", "album");
                 location.reload();
          
                  }
                },
                error: function (xhr) {
                  localStorage.setItem("errorInsertandoAlbum", xhr);
                },
              });
            }
          });
          $("body").on("click", "input.eliminarAlbum", function () {
        
            if (confirm("Desea eliminarlo?") == true) {
              var codigo = $(this)
                .parents("#contentAdmin .usuarios")
                .find(".eliminarAlbum")
                .attr("name");

        
              $.ajax({
                type: "GET",
                url: "php/eliminarAlbum.php?idUsuario=" + codigo,
                success: function () {
                 
                    localStorage.setItem("ubication", "album");          
                    localStorage.setItem("footer", "true");
                    location.reload();
               
                
                },
                error: function (xhr) {
                  localStorage.setItem("errorEliminandoAlbum", xhr);
                },
              });
            }
        
          })
        
          $("body").on("click", "input.editarAlbum", function () {
            var codigo = $(this)
              .parents("#contentAdmin .usuarios")
              .find(".eliminarAlbum")
              .attr("name");

              $('html, body').animate({
                scrollTop: $("#container-form4").offset().top
                }, 800);


            var nombreAlbum = $(this).parents("#contentAdmin .usuarios").find("p:eq(0)").html();
            var imagenAlbum = $(this).parents("#contentAdmin .usuarios").find("p:eq(1)").html();
        
            $("input[name=codigoAlbum]").val(codigo);
            $("input[name=nombreAlbum]").val(nombreAlbum);
            $("input[name=imagenAlbum]").val(imagenAlbum);

            $(".confirmarAlbum").css("visibility", "visible");
            $("#insertarAlbum").css("visibility", "hidden");
        
          })
        
          $("body").on("click", "button.confirmarAlbum", function () {
            if (confirm("Desea guardar los cambios?") == true) {
              $("input[name=codigoArtista]").val(localStorage.getItem('select')); 
              var datos = $("#my_form4").serialize();
              $.ajax({
                type: "POST",
                url: "php/editarAlbum.php",
                data: datos,
                success: function (resultado) {
                  $("input").val("");
                  $(".confirmarAlbum").css("visibility", "hidden");
                  localStorage.setItem("ubication", "album");
                  localStorage.setItem("errorSuccessEditarAlbum", resultado);
                  location.reload();
                },
                error: function (xhr) {
                  localStorage.setItem("errorEditandoAlbum", xhr);
                },
              });
            }
          });
    
    }
    
    });