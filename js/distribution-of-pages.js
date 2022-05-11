$(document).ready(function() {

   
    var arrayArtista = [];
    var arrayCds = [];
    var arrayCasetes = [];
    var arrayCamisetas = [];
    var arrayVinilos = [];
 





    $.ajax({
        type: "GET",
        url: "php/mostrarArtistas.php",
        dataType: "json",
        success: function (resultado) {
           
          for (var x of resultado) {
            JSON.stringify(x);
        
            arrayArtista.push({ name: x.nombre_artista, src: x.imagen_artista, facebook: x.facebook, instagram:x.instagram, bandcamp:x.bandcamp});
         
          }
      
          artistas (arrayArtista);
        
        },
        error: function (xhr) {
          localStorage.setItem("errorMostrandoArtista", xhr);
        },
      });
    
      $.ajax({
        type: "GET",
        url: "php/mostrarCds.php",
        dataType: "json",
        success: function (resultado) {
         
          for (var x of resultado) {
            JSON.stringify(x);
        
            arrayCds.push({ cd_nombre: x.nombre, id_artista:x.id_artista, img_cd:x.imagen_cd });
         
          }
      
          mostrarCDs (arrayCds);
        
        },
        error: function (xhr) {
          localStorage.setItem("errorMostrandoCD", xhr);
        },
      });
      $.ajax({
        type: "GET",
        url: "php/mostrarCasetes.php",
        dataType: "json",
        success: function (resultado) {
         
          for (var x of resultado) {
            JSON.stringify(x);
        
            arrayCasetes.push({ casete_nombre: x.nombre, id_artista:x.id_artista, img_casete:x.imagen_casete  });
         
          }
      
          mostrarCasetes (arrayCasetes);
        
        },
        error: function (xhr) {
          localStorage.setItem("errorMostrandoCasete", xhr);
        },
      });
      $.ajax({
        type: "GET",
        url: "php/mostrarCamisetas.php",
        dataType: "json",
        success: function (resultado) {
         
          for (var x of resultado) {
            JSON.stringify(x);
        
            arrayCamisetas.push({ camiseta_nombre: x.nombre, id_artista:x.id_artista, img_camiseta:x.imagen_camiseta });
         
          }
      
          mostrarCamisetas (arrayCamisetas);
        
        },
        error: function (xhr) {
          localStorage.setItem("errorMostrandoCamisetas", xhr);
        },
      });
      $.ajax({
        type: "GET",
        url: "php/mostrarVinilos.php",
        dataType: "json",
        success: function (resultado) {
         
          for (var x of resultado) {
            JSON.stringify(x);
        
            arrayVinilos.push({ vinilo_nombre: x.nombre, id_artista:x.id_artista, img_cd:x.imagen_cd, img_vinilo:x.imagen_vinilo });
         
          }
      
          mostrarVinilos (arrayVinilos);
        
        },
        error: function (xhr) {
          localStorage.setItem("errorMostrandoVinilos", xhr);
        },
      });

      
  
  

// ARTISTS //

if(localStorage.getItem("ubication") == "Double Horse"){
    function artistas(arrayArtista){

$("</br></br><h1>Artistas relacionados:</h1>").appendTo(".content-extension");


        arrayArtista.forEach(element => {
            if(element.name == "Double Horse"){
                $("<div class='imagen-en-artista'><img src='assets/"+element.src+"' alt='"+element.name+"' ></div><h1>"+element.name+"</h1><div class='texto-artist'><p>&nbsp; &nbsp; &nbsp; &nbsp; Double Horse es una banda de Doom Metal valenciana que"+
                  " se forma a finales de 2016 y lanza su primer trabajo,"+
                  " una grabación de cinco canciones, en enero de 2017. Este EP, con el título homónimo del grupo se edita en una edición limitada de cintas producidas por la propia banda."+
                  " En febrero de 2018 el grupo lanza el single “All of them”, que después se incluirá a modo de bonus track"+
                  " en el primer largo del grupo: “The great old ones”, un compendio de seis canciones inspiradas en el la mitología Lovecraftiana y el cine de Terror en general."+
                  " Este trabajo ve la luz el 21 de octubre de 2019 y es editado en vinilo gracias a la colaboración de cinco sellos nacionales,"+
                  " estos son: Domestic System, Catabasis Records, Violence in Veins, Fuzz T-shirts y Doomgeon Records."+
                  " El 6 de junio de 2020 lanzan otro single, “Highlands” inspirado en la pelicula"+
                  " “Valhala Rising” de Nicolas Winding. Actualmente preparan un segundo disco de larga duración."+
                  " A lo largo de su trayectoria han compartido escenario con bandas nacionales como Udol, Grajo,"+
                  " Santo Rostro, Electric Monolith, Traidor, Rosy Finch, Saturna, Domo y muchas más. Así como con bandas internacionales como WitchThroat Serpent y Belzebong."+
                  "</br></br></div><i class='fa-brands fa-bandcamp'></i><a href='"+element.bandcamp+"' target='_blank'>Bandcamp de "+element.name+"</a><br><i class='fa-brands fa-facebook'></i><a href='"+element.facebook+"' target='_blank'>Facebook de "+element.name+"</a><br><i class='fa-brands fa-instagram-square'></i><a href='"+element.instagram+"' target='_blank'> Instagram de "+element.name+" </a> </p>"+
                  "</div><div class='video-youtube'><iframe width='560' height='315' title='Youtube video of Double Horse'"+
                  "src='https://www.youtube.com/embed/zaXxjvTJ684' frameborder='0' allow='ccelerometer; autoplay; clipboard-write;"+
                  " encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div><iframe style='order-radius:12px'"+
                  " src='https://open.spotify.com/embed/artist/57fCZk5tMzdPTvee0IXe9n?utm_source=generator&theme=0' width='90%' height='380' class='iframe-spotify'"+
                  "frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'></iframe>"
                )
                .appendTo("main")
            }else{
                $("<div class='div-artistas-relacionados'><img src='assets/"+element.src+"' alt='"+element.name+" image of the band' title='"+element.name+"' class='img-artistas-relacionados'><div class='name-band'> <b> "+element.name+"</b></div></div>")
              .appendTo(".content-extension");
              $(".img-artistas-relacionados").mouseenter(function(){ 
                $(this).animate({ width: "105%", height: "105%"}, 500, "linear");
               });
               $(".img-artistas-relacionados").mouseleave(function(){ 
                   $(this).stop(true);
                   $(this).animate({ width: "100%", height: "100%"}, 500, "linear");
               });
            }        
    })
}
    function mostrarCDs(arrayMerch){

        arrayMerch.forEach(element => {
            if(element.id_artista == 5){
                $("<div class='contenedor-producto' id='cd-dh'><div class='div-productos-relacionados'><img src='assets/"+element.img_cd+"' alt='"+element.cd_nombre+"' class='img-artistas-relacionados'></div><div class='name-product'> <p> "+element.cd_nombre+"</p></div></div>"
                ).appendTo("main");
            }
    })
    $(".img-artistas-relacionados").mouseenter(function(){ 
        $(this).animate({ width: "105%", height: "105%"}, 500, "linear");
       });
       $(".img-artistas-relacionados").mouseleave(function(){ 
           $(this).stop(true);
           $(this).animate({ width: "100%", height: "100%"}, 500, "linear");
       });
}
function mostrarCasetes(arrayMerch){

    arrayMerch.forEach(element => {
        if(element.id_artista == 5){
            $("<div class='contenedor-producto' id='casete-dh'><div class='div-productos-relacionados'><img src='assets/"+element.img_casete+"' alt='"+element.casete_nombre+"' class='img-artistas-relacionados'></div><div class='name-product'> <p> "+element.casete_nombre+"</p></div></div>"
            ).appendTo("main");
        }
})
$(".img-artistas-relacionados").mouseenter(function(){ 
    $(this).animate({ width: "105%", height: "105%"}, 500, "linear");
   });
   $(".img-artistas-relacionados").mouseleave(function(){ 
       $(this).stop(true);
       $(this).animate({ width: "100%", height: "100%"}, 500, "linear");
   });
}
function mostrarVinilos(arrayMerch){

    arrayMerch.forEach(element => {
        if(element.id_artista == 5){
            $("<div class='contenedor-producto' id='vinilo-dh'><div class='div-productos-relacionados'><img src='assets/"+element.img_vinilo+"' alt='"+element.vinilo_nombre+"' class='img-artistas-relacionados'></div><div class='name-product'> <p> "+element.vinilo_nombre+"</p></div></div>"
            ).appendTo("main");
        }
})
$(".img-artistas-relacionados").mouseenter(function(){ 
    $(this).animate({ width: "105%", height: "105%"}, 500, "linear");
   });
   $(".img-artistas-relacionados").mouseleave(function(){ 
       $(this).stop(true);
       $(this).animate({ width: "100%", height: "100%"}, 500, "linear");
   });
}
function mostrarCamisetas(arrayMerch){

    arrayMerch.forEach(element => {
        if(element.id_artista == 5){
            $("<div class='contenedor-producto' id='camiseta-dh'><div class='div-productos-relacionados'><img src='assets/"+element.img_camiseta+"' alt='"+element.camiseta_nombre+"'  class='img-artistas-relacionados'></div><div class='name-product'> <p> "+element.camiseta_nombre+"</p></div></div>"
            ).appendTo("main");
        }
})
$(".img-artistas-relacionados").mouseenter(function(){ 
    $(this).animate({ width: "105%", height: "105%"}, 500, "linear");
   });
   $(".img-artistas-relacionados").mouseleave(function(){ 
       $(this).stop(true);
       $(this).animate({ width: "100%", height: "100%"}, 500, "linear");
   });
}
}else 
if(localStorage.getItem("ubication") == "Bloody Crom"){
    function artistas(arrayArtista){
        $("</br></br><h1>Artistas relacionados:</h1>").appendTo(".content-extension");
        arrayArtista.forEach(element => {
            if(element.name == "Bloody Crom"){
                $("<div class='imagen-en-artista'><img src='assets/"+element.src+"' alt='"+element.name+"' ></div><h1>"+element.name+"</h1><div class='texto-artist'><p>&nbsp; &nbsp; &nbsp; &nbsp; Bloody Crom es un grupo valenciano que fusiona el sonido del Heavy Metal"+
                " con el del Punk Rock. Sus letras giran entorno a temáticas de fantasía basadas en el autor de 'El Señor de los Anillos' J. R. R Tolkien."+
                " Este grupo se crea a principios de 2019 y lanza, ese mismo año, un EP con el mismo nombre de la banda que incluye cuatro canciones."+
                " En 2020 lanzan otro EP llamado 'High Quest', el cual está formado por 6 canciones, una de ellas de una duración aproximada de unos veinte minutos ya que se trata de un pequeño EP"+
                " de Dungeon Synth compuesto por el batería e incrustado en la cara B de la cinta (pues ambos EP son editados en formato cassete). En su trayectoria destacan sus conciertos por toda España presentando esta original mezcla de sonidos agresivos que no dejan indiferente a nadie que lo escuche."+
                "</br></br><i class='fa-brands fa-bandcamp'></i><a href='"+element.bandcamp+"' target='_blank'>Bandcamp de "+element.name+"</a><br><i class='fa-brands fa-facebook'></i><a href='"+element.facebook+"' target='_blank'>Facebook de "+element.name+"</a><br><i class='fa-brands fa-instagram-square'></i><a href='"+element.instagram+"' target='_blank'>Instagram de "+element.name+" </a></p></div>"+
                "<div class='video-youtube'><iframe width='560' height='315'  title='Youtube video of Bloody Crom' src='https://www.youtube.com/embed/Jf3fBl2Hgsw' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>")
                .appendTo("main");
            }else{
                $("<div class='div-artistas-relacionados'><img src='assets/"+element.src+"' alt='"+element.name+" image of the band' title='"+element.name+"' class='img-artistas-relacionados'>"+element.name+"<div class='name-band'> <b> "+element.name+"</b></div></div>")
              .appendTo(".content-extension");

              $(".img-artistas-relacionados").mouseenter(function(){ 
                $(this).animate({ width: "105%", height: "105%"}, 500, "linear");
               });
               $(".img-artistas-relacionados").mouseleave(function(){ 
                   $(this).stop(true);
                   $(this).animate({ width: "100%", height: "100%"}, 500, "linear");
               });
            }
        });
    }

  
function mostrarCasetes(arrayMerch){

    arrayMerch.forEach(element => {
        if(element.id_artista == 7){
            $("<div class='contenedor-producto' id='casete-bc'><div class='div-productos-relacionados'><img src='assets/"+element.img_casete+"' alt='"+element.casete_nombre+"' class='img-artistas-relacionados'></div><div class='name-product'> <p> "+element.casete_nombre+"</p></div></div>"
            ).appendTo("main");
        }
})
$(".img-artistas-relacionados").mouseenter(function(){ 
    $(this).animate({ width: "105%", height: "105%"}, 500, "linear");
   });
   $(".img-artistas-relacionados").mouseleave(function(){ 
       $(this).stop(true);
       $(this).animate({ width: "100%", height: "100%"}, 500, "linear");
   });
}
function mostrarCamisetas(arrayMerch){

    arrayMerch.forEach(element => {
        if(element.id_artista == 7){
            $("<div class='contenedor-producto' id='camiseta-bc'><div class='div-productos-relacionados'><img src='assets/"+element.img_camiseta+"' alt='"+element.camiseta_nombre+"'  class='img-artistas-relacionados'></div><div class='name-product'> <p> "+element.camiseta_nombre+"</p></div></div>"
            ).appendTo("main");
        }
})
$(".img-artistas-relacionados").mouseenter(function(){ 
    $(this).animate({ width: "105%", height: "105%"}, 500, "linear");
   });
   $(".img-artistas-relacionados").mouseleave(function(){ 
       $(this).stop(true);
       $(this).animate({ width: "100%", height: "100%"}, 500, "linear");
   });
}

} else
if(localStorage.getItem("ubication") == "Here the captain speaking, the captain is dead"){
    function artistas(arrayArtista){
        $("</br></br><h1>Artistas relacionados:</h1>").appendTo(".content-extension");
        arrayArtista.forEach(element => {
            if(element.name == "Here the captain speaking, the captain is dead"){
                $("<div class='imagen-en-artista'><img src='assets/"+element.src+"' alt='"+element.name+"' ></div><h1>"+element.name+"</h1>"+
                "<div class='texto-artist'><p>&nbsp; &nbsp; &nbsp; &nbsp; Here the captain speaking, the captain is dead son un grupo valenciano con un sonido característico"+
                " basado en improvisaciones cósmicas; una expedición sacudida por las turbulencias de los ritmos motorik que atraviesa los insondables"+
                " paisajes del Space Rock en busca de las partículas elementales del Krautrock; un ejercicio psicodélico instrumental donde las consignas"+
                " galácticas emanan de los sintetizadores, mientras las guitarras se sumergen en crescendos infinitos auspiciadas por la hipnótica estela de la batería y"+
                " el bajo. Todo un universo de sonidos intensos bajo el cual subyace la influencia de las melodías experimentales de NEU!, los"+
                " delirios eléctricos de Amon Düül II, la acidez cósmica de Ash Ra Tempel y los derroteros espaciales de Hawkwind, a los cuales"+
                " homenajean en un guiño encubierto en el mismo nombre de la banda."+
                " La formación nace en Valencia en 2018, cuando Lucas (batería) decide formar un proyecto musical para cristalizar"+
                " sus inquietudes por el Space Rock junto a Adrián (guitarra) y Dela (bajo). El trío grabará su álbum debut lanzándolo en formato"+
                " cassette, un trabajo homónimo en el que una atmósfera rebosante de sonidos psicodélicos recorre historias de ciencia ficción."+
                " Mientras tanto, la banda experimentará un cambio de formación, primero Dela y, posteriormente, Adrián acabarán bajándose"+
                " de la nave. Los nuevos tripulantes en embarcar serán Josu (bajo) y Xavi (guitarra, voz). Meses más tarde, Ethan (sintetizadores)"+
                " será la última incorporación en llegar, gestándose así la alineación actual de la banda en forma de cuarteto y tomando un"+
                " rumbo más cósmico si cabe. Precisamente ya como cuarteto ficharán por el sello discográfico alemán Tonzonen en 2019, con"+
                " quién publicarán su álbum debut en formato vinilo."+
                " A lo largo de su carrera, Here the captain speaking, the captain is dead han compartido escenario con artistas del"+
                " panorama independiente americano tales como Thalia Zedeck, los franceses PoiL, o, en un registro más próximo al rock"+
                " psicodélico, con los japoneses Acid Mother Temple y Minami Deutsch. Además, han formado parte del cartel del Festival"+
                " <a href='https://sonicblastfestival.com/' target='_blank'>SonicBlast Moledo</a>(Portugal), especializado en sonidos psych, doom y stoner, y, más recientemente, han realizado un ejercicio"+
                " de música programática interpretando en directo una serie de temas inéditos compuestos para la proyección de la película de" +
                " culto La planète sauvage (1973) de René Laloux."+
                " En la actualidad se encuentran ultimando los detalles de su segundo disco, bajo el nombre de 'Flux Capacitor', que será publicado a finales del presente año."+
                " Sin duda, una banda para flotar en el espacio. <br><br><i class='fa-brands fa-bandcamp'></i><a href='"+element.bandcamp+"' target='_blank'>Bandcamp de "+element.name+"</a><br><i class='fa-brands fa-facebook'></i><a href='"+element.facebook+"' target='_blank'>Facebook de "+element.name+"</a><br><i class='fa-brands fa-instagram-square'></i>a href='"+element.instagram+"' target='_blank'>Instagram de"+element.name+" </a></p>"+
                  "</div><div class='video-youtube'><iframe width='560' height='315'  src='https://www.youtube.com/embed/b28yz6238Gg' title='YouTube video of Here the captain speaking, the captain is dead' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div><iframe style='border-radius:12px' class='iframe-spotify' src='https://open.spotify.com/embed/artist/7FEb9l4s0mC6K3dwXh7DQM?utm_source=generator&theme=0' width='90%' height='380' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'></iframe>")
                .appendTo("main");
            }else{
                $("<div class='div-artistas-relacionados'><img src='assets/"+element.src+"' alt='"+element.name+" image of the band' title='"+element.name+"' class='img-artistas-relacionados'>"+element.name+"<div class='name-band'> <b> "+element.name+"</b></div></div>")
              .appendTo(".content-extension");
              $(".img-artistas-relacionados").mouseenter(function(){ 
                $(this).animate({ width: "105%", height: "105%"}, 500, "linear");
               });
               $(".img-artistas-relacionados").mouseleave(function(){ 
                   $(this).stop(true);
                   $(this).animate({ width: "100%", height: "100%"}, 500, "linear");
               });
            }
        });
    }
 
function mostrarCasetes(arrayMerch){

    arrayMerch.forEach(element => {
        if(element.id_artista == 8){
            $("<div class='contenedor-producto' id='casete-captain'><div class='div-productos-relacionados'><img src='assets/"+element.img_casete+"' alt='"+element.casete_nombre+"' class='img-artistas-relacionados'></div><div class='name-product'> <p> "+element.casete_nombre+"</p></div></div>"
            ).appendTo("main");
        }
})
$(".img-artistas-relacionados").mouseenter(function(){ 
    $(this).animate({ width: "105%", height: "105%"}, 500, "linear");
   });
   $(".img-artistas-relacionados").mouseleave(function(){ 
       $(this).stop(true);
       $(this).animate({ width: "100%", height: "100%"}, 500, "linear");
   });
}
function mostrarVinilos(arrayMerch){

    arrayMerch.forEach(element => {
        if(element.id_artista == 8){
            $("<div class='contenedor-producto' id='vinilo-captain'><div class='div-productos-relacionados'><img src='assets/"+element.img_vinilo+"' alt='"+element.vinilo_nombre+"' class='img-artistas-relacionados'></div><div class='name-product'> <p> "+element.vinilo_nombre+"</p></div></div>"
            ).appendTo("main");
        }
})
$(".img-artistas-relacionados").mouseenter(function(){ 
    $(this).animate({ width: "105%", height: "105%"}, 500, "linear");
   });
   $(".img-artistas-relacionados").mouseleave(function(){ 
       $(this).stop(true);
       $(this).animate({ width: "100%", height: "100%"}, 500, "linear");
   });
}
function mostrarCamisetas(arrayMerch){

    arrayMerch.forEach(element => {
        if(element.id_artista == 8){
            $("<div class='contenedor-producto' id='camiseta-captain'><div class='div-productos-relacionados'><img src='assets/"+element.img_camiseta+"' alt='"+element.camiseta_nombre+"'  class='img-artistas-relacionados'></div><div class='name-product'> <p> "+element.camiseta_nombre+"</p></div></div>"
            ).appendTo("main");
        }
})
$(".img-artistas-relacionados").mouseenter(function(){ 
    $(this).animate({ width: "105%", height: "105%"}, 500, "linear");
   });
   $(".img-artistas-relacionados").mouseleave(function(){ 
       $(this).stop(true);
       $(this).animate({ width: "100%", height: "100%"}, 500, "linear");
   });
}

}


// /ARTISTS //



// WEB VIEW NO LOGGED //


  

else if(localStorage.getItem("ubication")=="login"){

    $("<div id='register-div'><form id='login'><p>Nombre de usuario</p><input type='text' name='user' placeholder='Username' required='required'/>"+
    "<p>Contraseña</p><input type='password' name='pass' placeholder='Password' required='required' /><br><br><button class='boton' id='btn-login'>"+
    "Acceder</button><br></form><p class='p-login-register'>¿No tienes una cuenta creada? Puedes crearla &nbsp; <a href='' class='register'>aquí</a><p></div>").appendTo("main");
}
else if (localStorage.getItem("ubication")=="register"){
   $("<div id='login-div'><form id='registro'><p>Nombre de usuario</p>"+
    "<input type='text' name='user' placeholder='Nombre de usuario' required='required'>"+
    "<p>Nombre</p><input type='text' name='nombre' placeholder='Nombre' required='required'>"+
    "<p>Primer Apellido</p><input type='text' name='primerapellido' placeholder='Primer Apellido' required='required'>"+
    "<p>Segundo apellido</p><input type='text' name='segundoapellido' placeholder='Segundo Apellido' required='required'>"+
    "<p>Email</p><input type='text' name='email' id='email' placeholder='Email' required='required'>"+
    "<p>Contraseña</p><input type='password' name='pass' id='pass' placeholder='Contraseña' required='required'/>"+
    "<p> Repite contraseña</p><input type='password' name='passAgain' id='passAgain' placeholder='Repite la contraseña' required='required' />"+
    "<div id='passstrength'></div><br><br><button class='boton'id='btn-create'>Crear Cuenta</button><br>"+
    "</form><p class='p-login-register'>¿Ya tienes una cuenta creada? Puedes iniciar sesión &nbsp; <a href='' class='a-login'>aquí</a></p></div>").appendTo("main");
}

else if(localStorage.getItem("ubication")=="contact-no-logged"){
    $("<div class='container-contact'><h1>CONTACTA CON NOSOTROS</h1><hr size='2px' color='black' /><div class='contact-form'><form id='send-mail' ><input type='text' name='nombre' placeholder='Tu Nombre' required='required'><input type='email' name='email' required='required' id='email-contact' placeholder='Tu Email'>"+
    "<input type='text' name='asunto' required='required' placeholder='Asunto'><input type='text-area' name='mensaje' placeholder='Mensaje'><div class='g-recaptcha' data-sitekey='6Lc9W5YfAAAAAKGuAVi7XR0dHR0vpjsRZorXj0ol'></div><input type='button' id='enviar-mensaje-contacto' value='Enviar Mensaje'></form></div>"+
    "<div class='div-iframe-contact'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6163.706932235603!2d-0.4234726723776185!3d39.427437905252845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604e5c5d63bf9f%3A0x1082e832842f1655!2s46200%20Paiporta%2C%20Valencia!5e0!3m2!1ses!2ses!4v1649618259845!5m2!1ses!2ses' width='100%' height='600' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe></div></div>")
    .appendTo("main");
}

else if(localStorage.getItem("ubication")=="home-no-logged"){

   function artistas(artista){
    $("<h1 class='h1-home'>Doomgeon Records</h1><div class='slider'></div><p>Esta es la página web oficial de Doomgeon Records, un sello discográfico que se fundó en Valencia (España) "+
    "en 2019 con la intención de editar y promocionar bandas locales de Rock Progresivo y otros estilos más duros "+
    "como el Doom Metal o el Punk. La mirada del sello está puesta en bandas locales del género underground donde podemos "+
    "encontrar sonidos potentes y transgresores. Actualmente ha editado ya a grupos como Double Horse, Bloody Crom y Here the "+
    "Captain Speaking, the Captain is Dead, aunque pronto se unirán otros grupos a su lista.<br>En esta web encontrás la <a href='https://santich.com.es/es/' target='_blank'>tienda oficial</a> del sello, la cual está enfocada a la venta de los productos de merchandising y también a los discos de las bandas que componen el sello de Doomgeon Records. Aquí podrás encontrar una gama de productos compuesta por cds, casetes, vinilos y camisetas. Con la venta de estos productos estarás apoyando a nuestras bandas y a ayudarás a mantener una rica cultura musical local y underground.</p>")
    .appendTo("main");
    artista.sort(()=> Math.random() - 0.5);

        artista.forEach(element => {
            $( "<div class='slider-div'><img src='assets/"+element.src+"' alt='"+element.name+" imagen' class='slider-img'></div>")
            .appendTo(".slider");
         });
         $('.slider').bxSlider({
            adaptiveHeight:false,
            responsive:true,
            mode:'fade',
            auto: true,
            keyboardEnabled:true,
            speed: 50,
            autoStart:true
         });
    }
  

}
else if(localStorage.getItem("ubication")=="shop-no-logged"){
    $("")
    .appendTo("#content");
}

else if(localStorage.getItem("ubication")=="artists-no-logged"){
       

    function artistas(artista){
        artista.forEach(element => {
            $("<div class='band'><img src=assets/"+element.src+" alt='"+element.name+" image of the band' class='band-artists-img' title='"+element.name+"'><div class='name-band'> <b> "+element.name+"</b></div></div>")
            .appendTo("main");           
           });
           $(".band-artists-img").mouseenter(function(){ 
            $(this).animate({ width: "105%", height: "105%"}, 500, "linear");
           });
           $(".band-artists-img").mouseleave(function(){ 
               $(this).stop(true);
               $(this).animate({ width: "100%", height: "100%"}, 500, "linear");
           });
    }
    
       

}
// WEB VIEW LOGGED //

else   if(localStorage.getItem("ubication")=="contact-logged"){
        $("<div class='container-contact'><h1>CONTACTA CON NOSOTROS</h1><hr size='2px' color='black' /><div class='contact-form'><form id='send-mail' ><input type='text' name='nombre' placeholder='Tu Nombre' required='required'><input type='email' name='email' required='required' id='email-contact' placeholder='Tu Email'>"+
        "<input type='text' name='asunto' required='required' placeholder='Asunto'><input type='text-area' name='mensaje' placeholder='Mensaje'><div class='g-recaptcha' data-sitekey='6Lc9W5YfAAAAAKGuAVi7XR0dHR0vpjsRZorXj0ol'></div><input type='button' id='enviar-mensaje-contacto' value='Enviar Mensaje'></form></div>"+
        "<div class='div-iframe-contact'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6163.706932235603!2d-0.4234726723776185!3d39.427437905252845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604e5c5d63bf9f%3A0x1082e832842f1655!2s46200%20Paiporta%2C%20Valencia!5e0!3m2!1ses!2ses!4v1649618259845!5m2!1ses!2ses' width='100%' height='600' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe></div><p>Doomgeon Records <br> <br> España <br> <br> (+36) 649 189 619 </p><br><br></div>")
        .appendTo("main");
    }
    
    else   if(localStorage.getItem("ubication")=="home-logged"){
        function artistas(artista){
            $("<div class='slider'></div>")
            .appendTo("main");
            artista.sort(()=> Math.random() - 0.5);
        
                artista.forEach(element => {
                    $( "<div><img src='assets/"+element.src+"' alt='"+element.name+" image band'  width='100%' height='100%'> <h1> "+element.name+"</h1></div>")
                    .appendTo(".slider");
                 });
                 $('.slider').bxSlider();
            }
    }
    else  if(localStorage.getItem("ubication")=="shop-logged"){
        $("")
        .appendTo("main");
    }
    
    else  if(localStorage.getItem("ubication")=="artists-logged"){
        function artistas(artista){
        artista.forEach(element => {
            $("<div class='band'><img src=assets/"+element.src+" alt='"+element.name+" image of the band' class='band-artists-img'><div class='name-band'> <b> "+element.name+"</b></div></div>")
            .appendTo("main");
    });
    }
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
    "<button type='button' class='confirmarArtist'>Editar</button><br/><br></form></div>")
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


else if(localStorage.getItem("ubication")=="album"){

    if(localStorage.getItem("footer")=="true"){
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
            }, 800);
    }


    $("<h1 class='h1PrincipalEnAdmin'>ALBUMS</h1><div id='container-form4'><br>Artista<br><div id='select-form4'></div><form id='my_form4' >"+
    "<input type='text' name='codigoArtista' hidden /><br>"+
    "<input type='text' name='codigoAlbum' hidden /><br>"+
    "Nombre: <br><input type='text' name='nombreAlbum'/>"+
    "<br>Imagen: <br><input type='text' name='imagenAlbum'/>"+
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
    "<button type='button' class='confirmarCd'>Editar</button><br/><br></form></div>")
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
    "<button type='button' class='confirmarCasete'>Editar</button><br/><br></form></div>")
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
    "<button type='button' class='confirmarVinilo'>Editar</button><br/><br></form></div>")
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
    "<br/><br><button type='button' id='insertarCamiseta'>Insertar</button><br/><br/>"+
    "<button type='button' class='confirmarCamiseta'>Editar</button><br/><br></form></div>")
    .appendTo("#contentAdmin");
    $("<select class='nombreEnSelect'></select>")
    .appendTo("#select-form8")
    .change(function () {
      var seleccionado = $(this).val();
      localStorage.setItem("select", seleccionado);
    });
}
else if(localStorage.getItem("ubication")=="imagenes"){
    $("<h1 class='h1PrincipalEnAdmin'>IMAGENES</h1><div id='container-imagenes'><form action='php/subirImagen.php' method='post' enctype='multipart/form-data'> <input type='file' name='foto' id='fitxer'> <br> <input type='submit' name='submit' id='guardarImg' value='Guardar'></form></div>")
    .appendTo("#contentAdmin");
}

// /ADMIN SITE //

})