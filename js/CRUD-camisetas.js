$(document).ready(function() {

    if(localStorage.getItem("ubication")=="camiseta"){

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
            localStorage.setItem("errorSelectVinilo", xhr);
        },
      });
    
        $.ajax({
            type: "GET",
            url: "php/mostrarCamisetas.php",
            dataType: "json",
            success: function (resultado) {
              var users = resultado;
              localStorage.setItem("errorMostrandoCamisetasSucces", resultado);
              $(".confirmarCamiseta").css("visibility", "hidden");        
              for (var x of users) {
                pintarVinilos(x);
              }
            },
            error: function (xhr) {
              localStorage.setItem("errorMostrandoCamisetas", xhr);
            },
          });
        
          function pintarVinilos(x){
            var id = JSON.stringify(x.id);
       
         
        $(
        "<div class='usuarios'>Nombre<p>" +
        x.nombre +
        "</p>Imagen<p>" +
        x.imagen_camiseta +
        "</p>Artista<p>" +
        x.nombre_artista +
        "</p>"+
        "<img src='assets/"+ x.imagen_camiseta +"' alt='La imagen correspondiente al cd "+x.nombre+"' width='80%' height='80%' >"+
        "<br><br><input type='button' class='eliminarCamiseta' name=" +
        x.nombre +
        " value='eliminar'><input type='button' class='editarCamiseta' name=" +
        id +
        " value='editar'><br><br></div>"
        ).appendTo("#contentAdmin"); 
        
           }
        
           $("#insertarCamiseta").on("click", function () {
            if (
              $("input[name=nombre_camiseta]").val() == "" ||
              $("input[name=img_camiseta]").val() == ""
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
              var datos = $("#my_form8").serialize();

              $.ajax({
                type: "GET",
                url: "php/insertarCamiseta.php",
                data: datos,
                success: function (resultado) {

                  $("input").val("");

               
                  localStorage.setItem("errorInsertandoCamisetaSucces", resultado);

                  if (resultado == "existe") {
                    $(
                      "<div id='dialog-exist' title='Alerta'><p>Esa camiseta ya está registrada.</p></div>"
                    ).appendTo("#contentAdmin");
                    $("#dialog-exist").dialog({
                      modal: true,
                      draggable: true,
                    });
                  } else {
                 
                 localStorage.setItem("ubication", "camiseta");
                 location.reload();
          
                  }
                },
                error: function (xhr) {
                  localStorage.setItem("errorInsertandoCamiseta", xhr);
                },
              });
            }
          });
          $("body").on("click", "input.eliminarCamiseta", function () {
        
            if (confirm("Desea eliminarlo?") == true) {
              var codigo = $(this)
                .parents("#contentAdmin .usuarios")
                .find(".eliminarCamiseta")
                .attr("name");

        
              $.ajax({
                type: "GET",
                url: "php/eliminarCamiseta.php?idUsuario=" + codigo,
                success: function () {
                 
                    localStorage.setItem("ubication", "camiseta");          
                
                    location.reload();
              
                
                },
                error: function (xhr) {
                  localStorage.setItem("errorEliminandoCamiseta", xhr);
                },
              });
            }
        
          })
        
          $("body").on("click", "input.editarCamiseta", function () {


            var codigo = $(this)
            .parents("#contentAdmin .usuarios")
            .find(".editarCamiseta")
            .attr("name");
     
              $('html, body').animate({
                scrollTop: $("#container-form8").offset().top
                }, 800);


            var nombreCamiseta = $(this).parents("#contentAdmin .usuarios").find("p:eq(0)").html();
            var imagenVinilo = $(this).parents("#contentAdmin .usuarios").find("p:eq(1)").html();
            $("input[name=codigoCamiseta]").val(codigo);
            $("input[name=nombre_camiseta]").val(nombreCamiseta);
            $("input[name=img_camiseta]").val(imagenVinilo);

            $(".confirmarCamiseta").css("visibility", "visible");
            $("#insertarCamiseta").css("visibility", "hidden");
        
          })
        
          $("body").on("click", "button.confirmarCamiseta", function () {
            if (confirm("Desea guardar los cambios?") == true) {
              $("input[name=codigoArtista]").val(localStorage.getItem('select')); 
              var datos = $("#my_form8").serialize();
              $.ajax({
                type: "POST",
                url: "php/editarCamiseta.php",
                data: datos,
                success: function (resultado) {
                  $("input").val("");
                  $(".confirmarCamiseta").css("visibility", "hidden");
                  localStorage.setItem("ubication", "camiseta");
                  localStorage.setItem("errorSuccessEditarCamiseta", resultado);
                  location.reload();
                },
                error: function (xhr) {
                  localStorage.setItem("errorEditandoCamiseta", xhr);
                },
              });
            }
          });
    
    }
    
    });