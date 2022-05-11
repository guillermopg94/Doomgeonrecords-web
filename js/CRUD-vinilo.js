$(document).ready(function() {

    if(localStorage.getItem("ubication")=="vinilo"){

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
            url: "php/mostrarVinilos.php",
            dataType: "json",
            success: function (resultado) {
              var users = resultado;
              localStorage.setItem("errorMostrandoViniloSucces", resultado);
              $(".confirmarVinilo").css("visibility", "hidden");        
              for (var x of users) {
                pintarVinilos(x);
              }
            },
            error: function (xhr) {
              localStorage.setItem("errorMostrandoVinilo", xhr);
            },
          });
        
          function pintarVinilos(x){
            var id = JSON.stringify(x.id);
       
         
        $(
        "<div class='usuarios'>Nombre<p>" +
        x.nombre +
        "</p>Imagen<p>" +
        x.imagen_vinilo +
        "</p>Artista<p>" +
        x.nombre_artista +
        "</p>"+
        "<img src='assets/"+ x.imagen_vinilo +"' alt='La imagen correspondiente al cd "+x.nombre+"' width='80%' height='80%' >"+
        "<br><br><input type='button' class='eliminarVinilo' name=" +
        x.nombre +
        " value='eliminar'><input type='button' class='editarVinilo' name=" +
        id +
        " value='editar'><br><br></div>"
        ).appendTo("#contentAdmin"); 
        
           }
        
           $("#insertarVinilo").on("click", function () {
            if (
              $("input[name=nombre_vinilo]").val() == "" ||
              $("input[name=img_vinilo]").val() == ""
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
              var datos = $("#my_form7").serialize();

              $.ajax({
                type: "GET",
                url: "php/insertarVinilo.php",
                data: datos,
                success: function (resultado) {

                  $("input").val("");

               
                  localStorage.setItem("errorInsertandoViniloSucces", resultado);

                  if (resultado == "existe") {
                    $(
                      "<div id='dialog-exist' title='Alerta'><p>Ese vinilo ya está registrado.</p></div>"
                    ).appendTo("#contentAdmin");
                    $("#dialog-exist").dialog({
                      modal: true,
                      draggable: true,
                    });
                  } else {
                 
                 localStorage.setItem("ubication", "vinilo");
                 location.reload();
          
                  }
                },
                error: function (xhr) {
                  localStorage.setItem("errorInsertandoVinilo", xhr);
                },
              });
            }
          });
          $("body").on("click", "input.eliminarVinilo", function () {
        
            if (confirm("Desea eliminarlo?") == true) {
              var codigo = $(this)
                .parents("#contentAdmin .usuarios")
                .find(".eliminarVinilo")
                .attr("name");

        
              $.ajax({
                type: "GET",
                url: "php/eliminarVinilo.php?idUsuario=" + codigo,
                success: function () {
                 
                    localStorage.setItem("ubication", "vinilo");          
                
                    location.reload();
              
                
                },
                error: function (xhr) {
                  localStorage.setItem("errorEliminandoVinilo", xhr);
                },
              });
            }
        
          })
        
          $("body").on("click", "input.editarVinilo", function () {


            var codigo = $(this)
            .parents("#contentAdmin .usuarios")
            .find(".editarVinilo")
            .attr("name");
     
              $('html, body').animate({
                scrollTop: $("#container-form7").offset().top
                }, 800);


            var nombreVinilo = $(this).parents("#contentAdmin .usuarios").find("p:eq(0)").html();
            var imagenVinilo = $(this).parents("#contentAdmin .usuarios").find("p:eq(1)").html();
            $("input[name=codigoVinilo]").val(codigo);
            $("input[name=nombre_vinilo]").val(nombreVinilo);
            $("input[name=img_vinilo]").val(imagenVinilo);

            $(".confirmarVinilo").css("visibility", "visible");
            $("#insertarVinilo").css("visibility", "hidden");
        
          })
        
          $("body").on("click", "button.confirmarVinilo", function () {
            if (confirm("Desea guardar los cambios?") == true) {
              $("input[name=codigoArtista]").val(localStorage.getItem('select')); 
              var datos = $("#my_form7").serialize();
              $.ajax({
                type: "POST",
                url: "php/editarVinilo.php",
                data: datos,
                success: function (resultado) {
                  $("input").val("");
                  $(".confirmarVinilo").css("visibility", "hidden");
                  localStorage.setItem("ubication", "vinilo");
                  localStorage.setItem("errorSuccessEditarVinilo", resultado);
                  location.reload();
                },
                error: function (xhr) {
                  localStorage.setItem("errorEditandoVinilo", xhr);
                },
              });
            }
          });
    
    }
    
    });