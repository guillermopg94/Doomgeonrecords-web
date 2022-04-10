$(document).ready(function () {
  if (localStorage.getItem("ubication") == "productos") {
    $.ajax({
      url: "php/select.php",
      dataType: "json",
      success: function (resultado) {
        var users = resultado;
        for (var x of users) {
          $(
            "<option value='" +
              x.id_artista +
              "' selected >" +
              x.nombre_artista +
              "</option>"
          ).appendTo(".nombreEnSelect");
        }
      },
      error: function () {},
    });

    $.ajax({
      type: "GET",
      url: "php/mostrarProductos.php",
      dataType: "json",
      success: function (resultado) {
        var users = resultado;

        $(".confirmarProducto").css("visibility", "hidden");
        for (var x of users) {
          pintarProductos(x);
        }
      },
      error: function () {},
    });

    function pintarProductos(x) {
      var id_producto = JSON.stringify(x.id_producto);

      $(
        "<div class='usuarios'>Nombre Merch<p>"+
        x.nombre_producto +
        "</p>Artista<p>" +
          x.nombre_artista +
          "</p>CD<p>" +
          x.cd_nombre +
          "</p>Imagen CD<p>" +
          x.cd_imagen +
          "</p><img src='assets/" +
          x.cd_imagen +
          "' alt='La imagen correspondiente al producto' width='80%' height='80%' ><br><br>" +
          "Cantidad CD<p>" +
          x.cd_cantidad +
          "</p>Casete<p>" +
          x.casete_nombre +
          "</p>Imagen Casete<p>" +
          x.casete_imagen +
          "</p><img src='assets/" +
          x.casete_imagen +
          "' alt='La imagen correspondiente al producto' width='80%' height='80%' ><br><br>" +
          "Cantidad Casete<p>" +
          x.casete_cantidad +
          "</p>Vinilo<p>" +
          x.vinilo_nombre +
          "</p>Imagen Vinilo<p>" +
          x.vinilo_imagen +
          "</p><img src='assets/" +
          x.vinilo_imagen +
          "' alt='La imagen correspondiente al producto' width='80%' height='80%' ><br><br>" +
          "Cantidad Vinilo<p>" +
          x.vinilo_cantidad +
          "</p>Camiseta<p>" +
          x.camiseta_nombre +
          "</p>Imagen Camiseta<p>" +
          x.camiseta_imagen +
          "</p><img src='assets/" +
          x.camiseta_imagen +
          "' alt='La imagen correspondiente al producto' width='80%' height='80%' ><br><br>" +
          "Cantidad Camiseta<br><p>" +
          x.camiseta_cantidad+
          "</p><br>Talla XXL<br><p>" +
          x.tallaXXL +
          "</p>"+
          "Talla XL<br><p>" +
          x.tallaXL +
          "</p>"+
          "Talla L<br><p>" +
          x.tallaL +
          "</p>"+
          "Talla M<br><p>" +
          x.tallaM +
          "</p>"+
          "Talla S<br><p>" +
          x.tallaS +
          "</p>"+
          "<br><br><input type='button' class='eliminarProducto' name=" +
          id_producto +
          " value='eliminar'><input type='button' class='editarProducto' name=" +
          id_producto +
          " value='editar'><br><br></div>"
      )
        .appendTo("#contentAdmin")
      
    }

    $("#insertarProducto").on("click", function () {
      $("input[name=codigoArtista]").val(localStorage.getItem("select"));
      var datos = $("#my_form5").serialize();

      $.ajax({
        type: "GET",
        url: "php/insertarProducto.php",
        data: datos,
        success: function (resultado) {
          $("input").val("");
          if (resultado == "existe") {
            $(
              "<div id='dialog-exist' title='Product Error'><p>Ese Merch ya está registrado.</p></div>"
            ).appendTo("#contentAdmin");
            $("#dialog-exist").dialog({
              modal: true,
              draggable: true,
            });
          } else {
            localStorage.setItem("errorInsertandoMerchSucces", resultado);
            localStorage.setItem("ubication", "productos");
            location.reload();
          }
        },
        error: function (xhr) {
          localStorage.setItem("errorMerch", xhr);
        },
      });
    });
    $("body").on("click", "input.eliminarProducto", function () {
      if (confirm("Desea eliminarlo?") == true) {
        var codigo = $(this)
          .parents("#contentAdmin .usuarios")
          .find(".eliminarProducto")
          .attr("name");

        $.ajax({
          type: "GET",
          url: "php/eliminarProducto.php?idUsuario=" + codigo,
          success: function (resultado) {
            localStorage.setItem("error", resultado);
            localStorage.setItem("ubication", "productos");
            location.reload();
          },
          error: function () {
            alert("Error eliminando.");
          },
        });
      }
    });

    $("body").on("click", "input.editarProducto", function () {

      $("html, body").animate(
        {
          scrollTop: $("#container-form5").offset().top,
        },
        800
      );
      
      var codigo = $(this)
      .parents("#contentAdmin .usuarios")
      .find(".eliminarProducto")
      .attr("name");
      var nombre_producto = $(this)
      .parents("#contentAdmin .usuarios")
      .find("p:eq(0)")
      .html();
      var nombreCD = $(this)
        .parents("#contentAdmin .usuarios")
        .find("p:eq(2)")
        .html();
      var imagenCD = $(this)
        .parents("#contentAdmin .usuarios")
        .find("p:eq(3)")
        .html();
        var cd_cantidad = $(this)
        .parents("#contentAdmin .usuarios")
        .find("p:eq(4)")
        .html();
        var nombreCasete = $(this)
        .parents("#contentAdmin .usuarios")
        .find("p:eq(5)")
        .html();
        var imagenCasete = $(this)
        .parents("#contentAdmin .usuarios")
        .find("p:eq(6)")
        .html();
        var casete_cantidad = $(this)
        .parents("#contentAdmin .usuarios")
        .find("p:eq(7)")
        .html();
        var nombreVinilo = $(this)
        .parents("#contentAdmin .usuarios")
        .find("p:eq(8)")
        .html();
        var imagenVinilo = $(this)
        .parents("#contentAdmin .usuarios")
        .find("p:eq(9)")
        .html();
        var vinilo_cantidad = $(this)
        .parents("#contentAdmin .usuarios")
        .find("p:eq(10)")
        .html();
        var nombreCamiseta = $(this)
        .parents("#contentAdmin .usuarios")
        .find("p:eq(11)")
        .html();
        var imagenCamiseta = $(this)
        .parents("#contentAdmin .usuarios")
        .find("p:eq(12)")
        .html();
        var camiseta_cantidad = $(this)
        .parents("#contentAdmin .usuarios")
        .find("p:eq(13)")
        .html();
        var tallaXXL = $(this)
        .parents("#contentAdmin .usuarios")
        .find("p:eq(14)")
        .html();

        var tallaXL = $(this)
        .parents("#contentAdmin .usuarios")
        .find("p:eq(15)")
        .html();
        var tallaL = $(this)
        .parents("#contentAdmin .usuarios")
        .find("p:eq(16)")
        .html();
        var tallaM = $(this)
        .parents("#contentAdmin .usuarios")
        .find("p:eq(17)")
        .html();
        var tallaS = $(this)
        .parents("#contentAdmin .usuarios")
        .find("p:eq(18)")
        .html();
      $("input[name=codigoProducto]").val(codigo);
      $("input[name=codigoArtista]").val(localStorage.getItem("select"));
      $("input[name=nombreProducto]").val(nombre_producto);
      $("input[name=nombreCD]").val(nombreCD);
      $("input[name=cantidadCD]").val(cd_cantidad);
      $("input[name=imagenCD]").val(imagenCD);
      $("input[name=nombreCasete]").val(nombreCasete);
      $("input[name=cantidadCasete]").val(casete_cantidad);
      $("input[name=imagenCasete]").val(imagenCasete);
      $("input[name=nombreVinilo]").val(nombreVinilo);
      $("input[name=cantidadVinilo]").val(vinilo_cantidad);
      $("input[name=imagenVinilo]").val(imagenVinilo);
      $("input[name=nombreCamiseta]").val(nombreCamiseta);
      $("input[name=imagenCamiseta]").val(imagenCamiseta);
      $("input[name=cantidadCamiseta]").val(camiseta_cantidad);
      $("input[name=tallaXXL]").val(tallaXXL);
      $("input[name=tallaXL]").val(tallaXL);
      $("input[name=tallaL]").val(tallaL);
      $("input[name=tallaM]").val(tallaM);
      $("input[name=tallaS]").val(tallaS);

      $(".confirmarProducto").css("visibility", "visible");
      $("#insertarProducto").css("visibility", "hidden");
    });

    $("body").on("click", "button.confirmarProducto", function () {
      if (confirm("Desea guardar los cambios?") == true) {
        $("input[name=codigoArtista]").val(localStorage.getItem("select"));
        var datos = $("#my_form5").serialize();
        $.ajax({
          type: "POST",
          url: "php/editarProducto.php",
          data: datos,
          success: function (resultado) {
            $("input").val("");
            $(".confirmarProducto").css("visibility", "hidden");
            localStorage.setItem("ubication", "productos");
            localStorage.setItem("errorSucces", resultado);
            location.reload();
          },
          error: function (xhr) {
            localStorage.setItem("erroreDITANDOp", xhr);
          },
        });
      }
    });
  }
});
