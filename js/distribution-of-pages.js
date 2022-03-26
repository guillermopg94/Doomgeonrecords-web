$(document).ready(function() {


// WEB VIEW NO LOGGED //


  

if(localStorage.getItem("ubication")=="login"){
    $("<div id='login-div'><form id='registro'><p>User name</p>"+
    "<input type='text' name='user' placeholder='Nombre de usuario' required='required'>"+
    "<p>Name</p><input type='text' name='nombre' placeholder='Nombre' required='required'>"+
    "<p>Surname</p><input type='text' name='primerapellido' placeholder='Primer Apellido' required='required'>"+
    "<p>Second Surname</p><input type='text' name='segundoapellido' placeholder='Segundo Apellido' required='required'>"+
    "<p>Email</p><input type='text' name='email' id='email' placeholder='Email' required='required'>"+
    "<p>Password</p><input type='password' name='pass' id='pass' placeholder='Contraseña' required='required'/>"+
    "<p> Password Again</p><input type='password' name='passAgain' id='passAgain' placeholder='Repite la contraseña' required='required' />"+
    "<div id='passstrength'></div><br><br><button class='boton'id='btn-create'>Create Acount</button><br>"+
    "</form></div><div id='register-div'><form id='login'><p>User name</p><input type='text' name='user' placeholder='Username' required='required'/>"+
    "<p>Password</p><input type='password' name='pass' placeholder='Password' required='required' /><br><br><button class='boton' id='btn-login'>Login</button><br></form></div>")
    .appendTo("#content");
}

else if(localStorage.getItem("ubication")=="contact-no-logged"){
    $("<h1>CONTACT</h1><hr size='2px' color='black' /><p>Doomgeon Records <br> Spain <br> Telephone: (+36) 649 189 619 <br>Email: doomgeonrecords@gmail.com</p><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6163.706932235603!2d-0.42347267237759306!3d39.427437905252845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604e5c5d63bf9f%3A0x1082e832842f1655!2s46200%20Paiporta%2C%20Valencia!5e0!3m2!1ses!2ses!4v1647092672549!5m2!1ses!2ses' width='400' height='300' style='border:0;' allowfullscreen='' loading='lazy'></iframe>")
    .appendTo("#content");
}

else if(localStorage.getItem("ubication")=="home-no-logged"){
    $("")
    .appendTo("#content");
}
else if(localStorage.getItem("ubication")=="shop-no-logged"){
    $("")
    .appendTo("#content");
}

else if(localStorage.getItem("ubication")=="artists-no-logged"){
    $("")
    .appendTo("#content");
}




// WEB VIEW LOGGED //

else   if(localStorage.getItem("ubication")=="contact-logged"){
        $("<h1>CONTACT</h1><hr size='2px' color='black' /><p>Doomgeon Records <br> Spain <br> Telephone: (+36) 649 189 619 <br>Email: doomgeonrecords@gmail.com</p><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6163.706932235603!2d-0.42347267237759306!3d39.427437905252845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604e5c5d63bf9f%3A0x1082e832842f1655!2s46200%20Paiporta%2C%20Valencia!5e0!3m2!1ses!2ses!4v1647092672549!5m2!1ses!2ses' width='400' height='300' style='border:0;' allowfullscreen='' loading='lazy'></iframe> ")
        .appendTo("#content");
    }
    
    else   if(localStorage.getItem("ubication")=="home-logged"){
        $("")
        .appendTo("#content");
    }
    else  if(localStorage.getItem("ubication")=="shop-logged"){
        $("")
        .appendTo("#content");
    }
    
    else  if(localStorage.getItem("ubication")=="artists-logged"){
        $("")
        .appendTo("#content");
    }


// ADMIN SITE //

else if(localStorage.getItem("ubication")=="usuarios"){


    
    if(localStorage.getItem("footer")=="true"){
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
            }, 800);
    }

    $("<h1 class='h1PrincipalEnAdmin'>USUARIOS</h1><div id='container-form2'><form id='my_form2'>"+
    "<input type='text' name='codigoUser' hidden /><br>"+
    "Nombre: <br><input type='text' style='text-align:center;' name='nombreUser'/>"+
    "<br>Primer Apellido: <br><input type='text' style='text-align:center;' name='primerapellido'/>"+
    "<br>Segundo Apellido: <br><input type='text' style='text-align:center;' name='segundoapellido'/>"+
    "<br>User: <br><input type='text' style='text-align:center;' name='user'/><br>Email:<br> "+
    "<input type='text' style='text-align:center;' name='email'/><br>Tipo:<br><input type='text' style='text-align:center;' name='tipo'/>"+
    "<br>Password:<br><input type='text' style='text-align:center;' name='pass' /><br> Password:<br> "+
    "<input type='text' style='text-align:center;' name='pass2'/><br/><br><button type='button' id='insertarUsuario'>Insertar</button><br/><br/>"+
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
    "<input type='text' style='text-align:center;' name='codigoArtist' hidden /><br>"+
    "Nombre: <br><input type='text' style='text-align:center;' name='nombreArtist'/>"+
    "<br>Imagen: <br><input type='text' style='text-align:center;' name='imagenArtist'/>"+
    "<br/><br><button type='button' id='insertarArtist'>Insertar</button><br/><br/>"+
    "<button type='button' class='confirmarArtist'>Editar</button><br/><br></form></div>")
    .appendTo("#contentAdmin");
}
else if(localStorage.getItem("ubication")=="album"){

    if(localStorage.getItem("footer")=="true"){
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
            }, 800);
    }


    $("<h1 class='h1PrincipalEnAdmin'>ALBUMS</h1><div id='container-form4'><br>Artista<br><div id='select-form4'></div><form id='my_form4' >"+
    "<input type='text' style='text-align:center;' name='codigoArtista' hidden /><br>"+
    "<input type='text' style='text-align:center;' name='codigoAlbum' hidden /><br>"+
    "Nombre: <br><input type='text' style='text-align:center;' name='nombreAlbum'/>"+
    "<br>Imagen: <br><input type='text' style='text-align:center;' name='imagenAlbum'/>"+
    "<br/><br><button type='button' id='insertarAlbum'>Insertar</button><br/><br/>"+
    "<button type='button' class='confirmarAlbum'>Editar</button><br/><br></form></div>")
    .appendTo("#contentAdmin");

    $("<select class='nombreEnSelect'></select>")
    .appendTo("#select-form4")
    .change(function () {
      var seleccionado = $(this).val();
      localStorage.setItem("select", seleccionado);
    });
}
else if(localStorage.getItem("ubication")=="productos"){

    if(localStorage.getItem("footer")=="true"){
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
            }, 800);
    }


    $("<h1 class='h1PrincipalEnAdmin'>PRODUCTOS</h1><div id='container-form5'><br>Artista<br><div id='select-form5'></div><form id='my_form5' >"+
    "<input type='text' style='text-align:center;' name='codigoProducto' hidden /><br>"+
    "<input type='text' style='text-align:center;' name='codigoArtista' hidden /><br>"+
    "CD: <br><input type='text' style='text-align:center;' name='nombreCD'/> <br>"+
    "Cantidad CD: <br><input type='number' style='text-align:center;' name='cantidadCD'/><br>"+
    "CD imagen: <br><input type='text' style='text-align:center;' name='imagenCD'/><br>"+
    "<br>Casete: <br><input type='text' style='text-align:center;' name='nombreCasete'/>"+
    "<br>Cantidad Casete: <br><input type='number' style='text-align:center;' name='cantidadCasete'/><br>"+
    "Casete imagen: <br><input type='text' style='text-align:center;' name='imagenCasete'/><br>"+
    "<br>Vinilo: <br><input type='text' style='text-align:center;' name='nombreVinilo'/>"+
    "<br>Cantidad Vinilo: <br><input type='number' style='text-align:center;' name='cantidadVinilo'/><br>"+
    "Vinilo imagen: <br><input type='text' style='text-align:center;' name='imagenVinilo'/><br>"+
    "<br>Camiseta: <br><input type='text' style='text-align:center;' name='nombreCamiseta'/>"+
    "<br>Camiseta imagen: <br><input type='text' style='text-align:center;' name='imagenCamiseta'/><br>"+
    "Cantidad Camiseta: <br><input type='number' style='text-align:center;' name='cantidadCamiseta'/><br>"+
    "Talla XXL: <br><input type='number' style='text-align:center;' name='tallaXXL'/><br>"+
    "Talla XL: <br><input type='number' style='text-align:center;' name='tallaXL'/><br>"+
    "Talla L: <br><input type='number' style='text-align:center;' name='tallaL'/><br>"+
    "Talla M: <br><input type='number' style='text-align:center;' name='tallaM'/><br>"+
    "Talla S: <br><input type='number' style='text-align:center;' name='tallaS'/><br>"+
    "<br/><br><button type='button' id='insertarProducto'>Insertar</button><br/><br/>"+
    "<button type='button' class='confirmarProducto'>Editar</button><br/><br></form></div>")
    .appendTo("#contentAdmin");

    $("<select class='nombreEnSelect'></select>")
    .appendTo("#select-form5")
    .change(function () {
      var seleccionado = $(this).val();
      localStorage.setItem("select", seleccionado);
    });
}
else if(localStorage.getItem("ubication")=="compras"){


    if(localStorage.getItem("footer")=="true"){
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
            }, 800);
    }

    $("")
    .appendTo("#contentAdmin");
}
else if(localStorage.getItem("ubication")=="imagenes"){
    $("<h1 class='h1PrincipalEnAdmin'>IMAGENES</h1><div id='container-imagenes'><form action='php/subirImagen.php' method='post' enctype='multipart/form-data'> <input type='file' name='foto' id='fitxer'> <br> <input type='submit' name='submit' id='guardarImg' value='Guardar'></form></div>")
    .appendTo("#contentAdmin");
}

// /ADMIN SITE //

})