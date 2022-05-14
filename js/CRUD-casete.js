$(document).ready(function() {

    if(localStorage.getItem("ubication")=="casete"){

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
        error: function (xhr) {
            localStorage.setItem("errorSelectCasete", xhr);
        },
      });
    
        $.ajax({
            type: "GET",
            url: "php/mostrarCasetes.php",
            dataType: "json",
            success: function (resultado) {
              var users = resultado;
              localStorage.setItem("errorMostrandoCaseteSucces", resultado);
              $(".confirmarCasete").css("visibility", "hidden");        
              for (var x of users) {
                pintarCasetes(x);
              }
            },
            error: function (xhr) {
              localStorage.setItem("errorMostrandoCasete", xhr);
            },
          });
        
          function pintarCasetes(x){
            var id = JSON.stringify(x.id);
       
         
        $(
        "<div class='usuarios'>Nombre<p>" +
        x.nombre +
        "</p>Imagen<p>" +
        x.imagen_casete +
        "</p>Artista<p>" +
        x.nombre_artista +
        "</p>"+
        "<div class='div-img-crud'><img src='assets/"+ x.imagen_casete +"' alt='La imagen correspondiente al cd "+x.nombre+"' class='img-crud'></div>"+
        "<br><br><input type='button' class='eliminarCasete' name=" +
        x.nombre +
        " value='eliminar'><input type='button' class='editarCasete' name=" +
        id +
        " value='editar'><br><br></div>"
        ).appendTo("#contentAdmin"); 
        
           }
        
           $("#insertarCasete").on("click", function () {
            if (
              $("input[name=nombre_casete]").val() == "" ||
              $("input[name=img_casete]").val() == ""
            ) {
              $(
                "<div id='dialog-fields-adding-user' title='Error'><p>Los campos no pueden estar vacíos</p></div>"
              ).appendTo("#contentAdmin");
              $("#dialog-fields-adding-user").dialog({
                modal: true,
                draggable: true,
              });
            }else{
                
              $("input[name=codigoArtista]").val(localStorage.getItem('select')); 
              var datos = $("#my_form6").serialize();

              $.ajax({
                type: "GET",
                url: "php/insertarCasete.php",
                data: datos,
                success: function (resultado) {

                  $("input").val("");

               
                  localStorage.setItem("errorInsertandoCasteSucces", resultado);

                  if (resultado == "existe") {
                    $(
                      "<div id='dialog-exist' title='Alerta'><p>Ese casete ya está registrado.</p></div>"
                    ).appendTo("#contentAdmin");
                    $("#dialog-exist").dialog({
                      modal: true,
                      draggable: true,
                    });
                  } else {
                 
                 localStorage.setItem("ubication", "casete");
                 location.reload();
          
                  }
                },
                error: function (xhr) {
                  localStorage.setItem("errorInsertandocasete", xhr);
                },
              });
            }
          });
          $("body").on("click", "input.eliminarCasete", function () {
        
            if (confirm("Desea eliminarlo?") == true) {
              var codigo = $(this)
                .parents("#contentAdmin .usuarios")
                .find(".eliminarCasete")
                .attr("name");

        
              $.ajax({
                type: "GET",
                url: "php/eliminarCasete.php?idUsuario=" + codigo,
                success: function () {
                 
                    localStorage.setItem("ubication", "casete");          
                
                    location.reload();
              
                
                },
                error: function (xhr) {
                  localStorage.setItem("errorEliminandoCasete", xhr);
                },
              });
            }
        
          })
        
          $("body").on("click", "input.editarCasete", function () {


            var codigo = $(this)
            .parents("#contentAdmin .usuarios")
            .find(".editarCasete")
            .attr("name");
     
              $('html, body').animate({
                scrollTop: $("#container-form6").offset().top
                }, 800);


            var nombreCasete = $(this).parents("#contentAdmin .usuarios").find("p:eq(0)").html();
            var imagenCasete = $(this).parents("#contentAdmin .usuarios").find("p:eq(1)").html();
            $("input[name=codigoCasete]").val(codigo);
            $("input[name=nombre_casete]").val(nombreCasete);
            $("input[name=img_casete]").val(imagenCasete);

            $(".confirmarCasete").css("visibility", "visible");
            $("#insertarCasete").css("visibility", "hidden");
        
          })
        
          $("body").on("click", "button.confirmarCasete", function () {
            if (confirm("Desea guardar los cambios?") == true) {
              $("input[name=codigoArtista]").val(localStorage.getItem('select')); 
              var datos = $("#my_form6").serialize();
              $.ajax({
                type: "POST",
                url: "php/editarCasete.php",
                data: datos,
                success: function (resultado) {
                  $("input").val("");
                  $(".confirmarCasete").css("visibility", "hidden");
                  localStorage.setItem("ubication", "casete");
                  localStorage.setItem("errorSuccessEditarCasete", resultado);
                  location.reload();
                },
                error: function (xhr) {
                  localStorage.setItem("errorEditandoCasete", xhr);
                },
              });
            }
          });
    
    }
    
    });