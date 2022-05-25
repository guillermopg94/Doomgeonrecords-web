$(document).ready(function() {


 if(localStorage.getItem("ubication")=="usuarios"){


    
    if(localStorage.getItem("footer")=="true"){
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
            }, 800);
    }

    $("<h1 class='h1PrincipalEnAdmin'>USUARIOS</h1><div id='container-form2'><form id='my_form2'>"+
    "<input type='text' name='codigoUser' hidden /><br>"+
    "Nombre: <br><input type='text' name='nombreUser'/>"+
    "<br>Primer Apellido: <br><input type='text' name='primerapellido'/>"+
    "<br>Segundo Apellido: <br><input type='text' name='segundoapellido'/>"+
    "<br>User: <br><input type='text' name='user'/><br>Email:<br> "+
    "<input type='text' name='email'/><br>Tipo:<br><input type='text' style='text-align:center;' name='tipo'/>"+
    "<br>Password:<br><input type='text'name='pass' /><br> Password:<br> "+
    "<input type='text' name='pass2'/><br/><br><button type='button' id='insertarUsuario'>Insertar</button><br/><br/>"+
    "<button type='button' class='confirmarUser'>Editar</button><br/><br></form></div>")
    .appendTo("#contentAdmin");


    
}
else if(localStorage.getItem("ubication")=="artistas"){


    if(localStorage.getItem("footer")=="true"){
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
            }, 800);
    }

    $("<h1 class='h1PrincipalEnAdmin'>ARTISTAS</h1><div id='container-form3'><form id='my_form3'>"+
    "<input type='text' name='codigoArtist' hidden /><br>"+
    "<input type='text' name='codigoAlbum' hidden /><br>"+
    "<input type='text' name='codigoProducto' hidden /><br>"+
    "Nombre: <br><input type='text' name='nombreArtist'/>"+
    "<br>Imagen: <br><input type='text' name='imagenArtist'/>"+
    "<br>Bandcamp: <br><input type='text' name='bandcamp'/>"+
    "<br>Facebook: <br><input type='text' name='facebook'/>"+
    "<br>Instagram: <br><input type='text' name='instagram'/>"+
    "<br/><br><button type='button' id='insertarArtist'>Insertar</button><br/><br/>"+
    "<button type='button' class='confirmarArtist'>Editar</button><br/><br></form></div>"+
    "<div id='container-imagenes'><form action='php/subirImagenArtista.php' method='post' enctype='multipart/form-data'> "+
    "<input type='file' name='foto' id='fitxer'> <br> <input type='submit' name='submit' id='guardarImg' value='Guardar'></form></div> ")
    .appendTo("#contentAdmin");


    $("<select class='selectAlbum'></select>")
    .appendTo("#select-form3")
    .change(function () {
      var seleccionado = $(this).val();
      localStorage.setItem("selectAlbum", seleccionado);
    });
    $("<select class='selectProducto'></select>")
    .appendTo("#select-form33")
    .change(function () {
      var seleccionado = $(this).val();
      localStorage.setItem("selectProducto", seleccionado);
    });

}

else if(localStorage.getItem("ubication")=="cd"){

    if(localStorage.getItem("footer")=="true"){
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
            }, 800);
    }


    $("<h1 class='h1PrincipalEnAdmin'>CD</h1><div id='container-form5'><br>Artista<br><div id='select-form5'></div><form id='my_form5' >"+
    "<input type='text' name='codigoCd' hidden /><br>"+
    "<input type='text' name='codigoArtista' hidden /><br>"+
    "Nombre: <br><input type='text' name='nombre_cd'/> <br>"+
    "CD imagen: <br><input type='text' name='img_cd'/><br>"+
    "<br/><br><button type='button' id='insertarCd'>Insertar</button><br/><br/>"+
    "<button type='button' class='confirmarCd'>Editar</button><br/><br></form></div>"+
    "<div id='container-imagenes'><form action='php/subirImagenCd.php' method='post' enctype='multipart/form-data'> "+
    "<input type='file' name='foto' id='fitxer'> <br> <input type='submit' name='submit' id='guardarImg' value='Guardar'></form></div> ")
    .appendTo("#contentAdmin");

    $("<select class='nombreEnSelect'></select>")
    .appendTo("#select-form5")
    .change(function () {
      var seleccionado = $(this).val();
      localStorage.setItem("select", seleccionado);
    });
}
else if(localStorage.getItem("ubication")=="casete"){


    if(localStorage.getItem("footer")=="true"){
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
            }, 800);
    }

    $("<h1 class='h1PrincipalEnAdmin'>CASETE</h1><div id='container-form6'><br>Artista<br><div id='select-form6'></div><form id='my_form6' >"+
    "<input type='text' name='codigoCasete' hidden /><br>"+
    "<input type='text' name='codigoArtista' hidden /><br>"+
    "Casete: <br><input type='text' name='nombre_casete'/><br>"+
    "Casete imagen: <br><input type='text' name='img_casete'/><br>"+
    "<br/><br><button type='button' id='insertarCasete'>Insertar</button><br/><br/>"+
    "<button type='button' class='confirmarCasete'>Editar</button><br/><br></form></div>"+
    "<div id='container-imagenes'><form action='php/subirImagenCasete.php' method='post' enctype='multipart/form-data'> "+
    "<input type='file' name='foto' id='fitxer'> <br> <input type='submit' name='submit' id='guardarImg' value='Guardar'></form></div> ")
    .appendTo("#contentAdmin");

    $("<select class='nombreEnSelect'></select>")
    .appendTo("#select-form6")
    .change(function () {
      var seleccionado = $(this).val();
      localStorage.setItem("select", seleccionado);
    });

}
else if(localStorage.getItem("ubication")=="vinilo"){


    if(localStorage.getItem("footer")=="true"){
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
            }, 800);
    }

    $("<h1 class='h1PrincipalEnAdmin'>VINILO</h1><div id='container-form7'><br>Artista<br><div id='select-form7'></div><form id='my_form7' >"+
    "<input type='text' name='codigoVinilo' hidden /><br>"+
    "<input type='text' name='codigoArtista' hidden /><br>"+
    "<br>Vinilo: <br><input type='text' name='nombre_vinilo'/>"+
    "<br>Vinilo imagen: <br><input type='text' name='img_vinilo'/><br>"+
    "<br/><br><button type='button' id='insertarVinilo'>Insertar</button><br/><br/>"+
    "<button type='button' class='confirmarVinilo'>Editar</button><br/><br></form></div>"+
    "<div id='container-imagenes'><form action='php/subirImagenVinilo.php' method='post' enctype='multipart/form-data'> "+
    "<input type='file' name='foto' id='fitxer'> <br> <input type='submit' name='submit' id='guardarImg' value='Guardar'></form></div> ")
    .appendTo("#contentAdmin");
    $("<select class='nombreEnSelect'></select>")
    .appendTo("#select-form7")
    .change(function () {
      var seleccionado = $(this).val();
      localStorage.setItem("select", seleccionado);
    });
}
else if(localStorage.getItem("ubication")=="camiseta"){


    if(localStorage.getItem("footer")=="true"){
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
            }, 800);
    }

    $("<h1 class='h1PrincipalEnAdmin'>CAMISETA</h1><div id='container-form8'><br>Artista<br><div id='select-form8'></div><form id='my_form8' >"+
    "<input type='text' name='codigoCamiseta' hidden /><br>"+
    "<input type='text' name='codigoArtista' hidden /><br>"+
    "<br>Camiseta: <br><input type='text' name='nombre_camiseta'/>"+
    "<br>Camiseta imagen: <br><input type='text' name='img_camiseta'/><br>"+
    "<input type='file' name='foto' id='fitxer'></input><br/><br>"+
    "<br/><br><button type='button' id='insertarCamiseta'>Insertar</button><br/><br/>"+
    "<button type='button' class='confirmarCamiseta'>Editar</button><br/><br></form></div>"+
    "<div id='container-imagenes'><form action='php/subirImagenCamiseta.php' method='post' enctype='multipart/form-data'> "+
    "<input type='file' name='foto' id='fitxer'> <br> <input type='submit' name='submit' id='guardarImg' value='Guardar'></form></div> ")
    .appendTo("#contentAdmin");
    $("<select class='nombreEnSelect'></select>")
    .appendTo("#select-form8")
    .change(function () {
      var seleccionado = $(this).val();
      localStorage.setItem("select", seleccionado);
    });
}

})