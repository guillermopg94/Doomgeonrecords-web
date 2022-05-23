$(document).ready(function() {

    if(localStorage.getItem("ubication")=="cd"){

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
            localStorage.setItem("errorSelectArtistas", xhr);
        },
      });
    
        $.ajax({
            type: "GET",
            url: "php/mostrarCds.php",
            dataType: "json",
            success: function (resultado) {
              var users = resultado;
              localStorage.setItem("errorMostrandoCdSucces", resultado);
              $(".confirmarCd").css("visibility", "hidden");        
              for (var x of users) {
                pintarCds(x);
              }
            },
            error: function (xhr) {
              localStorage.setItem("errorMostrandoCd", xhr);
            },
          });
        
          function pintarCds(x){
            var id = JSON.stringify(x.id);
       
         
        $(
        "<div class='usuarios'>Nombre<p>" +
        x.nombre +
        "</p>Imagen<p>" +
        x.imagen_cd +
        "</p>Artista<p>" +
        x.nombre_artista +
        "</p>"+
        "<div class='div-img-crud'><img src='assets/cds/"+ x.imagen_cd +"' alt='La imagen correspondiente al cd "+x.nombre+"'  class='img-crud'></div>"+
        "<br><br><input type='button' class='eliminarCd' name=" +
        x.nombre +
        " value='eliminar'><input type='button' class='editarCd' name=" +
        id +
        " value='editar'><br><br></div>"
        ).appendTo("#contentAdmin"); 
        
           }
        
           $("#insertarCd").on("click", function () {
            if (
              $("input[name=nombre_cd]").val() == "" ||
              $("input[name=img_cd]").val() == ""
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
              var datos = $("#my_form5").serialize();

              $.ajax({
                type: "GET",
                url: "php/insertarCd.php",
                data: datos,
                success: function (resultado) {

                  $("input").val("");

               
                  localStorage.setItem("errorInsertandoCDSucces", resultado);

                  if (resultado == "existe") {
                    $(
                      "<div id='dialog-exist' title='Alerta'><p>Ese cd ya está registrado.</p></div>"
                    ).appendTo("#contentAdmin");
                    $("#dialog-exist").dialog({
                      modal: true,
                      draggable: true,
                    });
                  } else {
                 
                 localStorage.setItem("ubication", "cd");
                 location.reload();
          
                  }
                },
                error: function (xhr) {
                  localStorage.setItem("errorInsertandocd", xhr);
                },
              });
            }
          });
          $("body").on("click", "input.eliminarCd", function () {
        
            if (confirm("Desea eliminarlo?") == true) {
              var codigo = $(this)
                .parents("#contentAdmin .usuarios")
                .find(".eliminarCd")
                .attr("name");

        
              $.ajax({
                type: "GET",
                url: "php/eliminarCd.php?idUsuario=" + codigo,
                success: function () {
                 
                    localStorage.setItem("ubication", "cd");          
                
                    location.reload();
              
                
                },
                error: function (xhr) {
                  localStorage.setItem("errorEliminandoCd", xhr);
                },
              });
            }
        
          })
        
          $("body").on("click", "input.editarCd", function () {


            var codigo = $(this)
            .parents("#contentAdmin .usuarios")
            .find(".editarCd")
            .attr("name");
     
              $('html, body').animate({
                scrollTop: $("#container-form5").offset().top
                }, 800);


            var nombreCd = $(this).parents("#contentAdmin .usuarios").find("p:eq(0)").html();
            var imagenCd = $(this).parents("#contentAdmin .usuarios").find("p:eq(1)").html();
            $("input[name=codigoCd]").val(codigo);
            $("input[name=nombre_cd]").val(nombreCd);
            $("input[name=img_cd]").val(imagenCd);

            $(".confirmarCd").css("visibility", "visible");
            $("#insertarCd").css("visibility", "hidden");
        
          })
        
          $("body").on("click", "button.confirmarCd", function () {
            if (confirm("Desea guardar los cambios?") == true) {
              $("input[name=codigoArtista]").val(localStorage.getItem('select')); 
              var datos = $("#my_form5").serialize();
              $.ajax({
                type: "POST",
                url: "php/editarCd.php",
                data: datos,
                success: function (resultado) {
                  $("input").val("");
                  $(".confirmarCd").css("visibility", "hidden");
                  localStorage.setItem("ubication", "cd");
                  localStorage.setItem("errorSuccessEditarCd", resultado);
                  location.reload();
                },
                error: function (xhr) {
                  localStorage.setItem("errorEditandoCd", xhr);
                },
              });
            }
          });
    
    }
    
    });