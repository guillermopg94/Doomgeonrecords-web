$(document).ready(function () {
  let arrayArtista = [];
  $.ajax({
    type: "GET",
    url: "php/mostrarArtistas.php",
    dataType: "json",
    success: function (resultado) {
      for (var x of resultado) {
        JSON.stringify(x);

        arrayArtista.push({
          name: x.nombre_artista,
          src: x.imagen_artista,
          facebook: x.facebook,
          instagram: x.instagram,
          bandcamp: x.bandcamp,
          genero: x.genero,
          propias: x.propias,
        });
      }

      artistas(arrayArtista);
    },
    error: function (xhr) {
      localStorage.setItem("errorMostrandoArtista", xhr);
    },
  });

  if (localStorage.getItem("ubication") == "Double Horse") {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    function artistas(arrayArtista) {
      $(
        "</br></br><h1>Artistas relacionados:</h1><div class='no-local'></div>"
      ).appendTo(".content-extension");
      $(
        "</br></br><h1>Artistas locales:</h1><div class='locales'></div>"
      ).appendTo(".content-extension");

      arrayArtista.forEach((element) => {
        if (element.name == "Double Horse") {
          $(
            "<div class='imagen-en-artista'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              "' >" +
              "</div><h1>" +
              element.name +
              "</h1><div class='texto-artist'>" +
              "<p>&nbsp; &nbsp; &nbsp; &nbsp; Double Horse es una banda de Doom Metal valenciana que" +
              " se forma a finales de 2016 y lanza su primer trabajo," +
              " una grabación de cinco canciones, en enero de 2017. Este EP, con el título homónimo del grupo se edita en una edición limitada de cintas" +
              " producidas por la propia banda. En febrero de 2018 el grupo lanza el single “All of them”, que después se incluirá a modo de bonus track" +
              " en el primer largo del grupo: “The great old ones”, un compendio de seis canciones inspiradas en el la mitología Lovecraftiana y el cine de" +
              " Terror en general. Este trabajo ve la luz el 21 de octubre de 2019 y es editado en vinilo gracias a la colaboración de cinco sellos nacionales," +
              " estos son: Domestic System, Catabasis Records, Violence in Veins, Fuzz T-shirts y Doomgeon Records." +
              " El 6 de junio de 2020 lanzan otro single, “Highlands” inspirado en la pelicula" +
              " “Valhala Rising” de Nicolas Winding. Actualmente preparan un segundo disco de larga duración." +
              " A lo largo de su trayectoria han compartido escenario con bandas nacionales como Udol, Grajo," +
              " Santo Rostro, Electric Monolith, Traidor, Rosy Finch, Saturna, Domo y muchas más. Así como con" +
              " bandas internacionales como WitchThroat Serpent y Belzebong." +
              "</br></br></div><i class='fa-brands fa-bandcamp'></i><a href='" +
              element.bandcamp +
              "' target='_blank'>Bandcamp de " +
              element.name +
              " </a><br>" +
              "<i class='fa-brands fa-facebook'></i><a href='Facebook de " +
              element.facebook +
              " ' target='_blank'>Facebook de " +
              element.name +
              "</a><br><i class='fa-brands fa-instagram-square'>" +
              "</i><a href='" +
              element.instagram +
              "' target='_blank'>Instagram de " +
              element.name +
              " </a> </p>" +
              "</div><div class='video-youtube'><iframe width='560' height='315' title='Youtube video of Double Horse'" +
              "src='https://www.youtube.com/embed/zaXxjvTJ684' frameborder='0' allow='ccelerometer; autoplay; clipboard-write;" +
              " encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div><iframe style='order-radius:12px'" +
              " src='https://open.spotify.com/embed/artist/57fCZk5tMzdPTvee0IXe9n?utm_source=generator&theme=0' width='90%' height='"+
              "380' class='iframe-spotify'" +
              "frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'>"+
              "</iframe><div class='products'></div>"
          ).appendTo("main");
        } else if (element.genero == "doom metal") {
          $(
            "<div class='div-artistas-relacionados'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              " image of the band' title='" +
              element.name +
              "' class='img-artistas-relacionados'><div class='name-band'> <b> " +
              element.name +
              "</b></div></div><br><br>"
          ).appendTo(".no-local");
          $(".img-artistas-relacionados").mouseenter(function () {
            $(this).animate({ width: "105%", height: "105%" }, 500, "linear");
          });
          $(".img-artistas-relacionados").mouseleave(function () {
            $(this).stop(true);
            $(this).animate({ width: "100%", height: "100%" }, 500, "linear");
          });
        } else if (element.propias == "si") {
          $(
            "<div class='div-artistas-relacionados'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              " image of the band' title='" +
              element.name +
              "' class='img-artistas-relacionados'><div class='name-band'> <b> " +
              element.name +
              "</b></div></div>"
          ).appendTo(".locales");
          $(".img-artistas-relacionados").mouseenter(function () {
            $(this).animate({ width: "105%", height: "105%" }, 500, "linear");
          });
          $(".img-artistas-relacionados").mouseleave(function () {
            $(this).stop(true);
            $(this).animate({ width: "100%", height: "100%" }, 500, "linear");
          });
        }
      });
    }
   
  } else if (localStorage.getItem("ubication") == "Bloody Crom") {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    function artistas(arrayArtista) {
      $(
        "</br></br><h1>Artistas relacionados:</h1><div class='no-local'></div>"
      ).appendTo(".content-extension");
      $(
        "</br></br><h1>Artistas locales:</h1><div class='locales'></div>"
      ).appendTo(".content-extension");
      arrayArtista.forEach((element) => {
        if (element.name == "Bloody Crom") {
          $(
            "<div class='imagen-en-artista'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              "' ></div><h1>" +
              element.name +
              "</h1><div class='texto-artist'><p>&nbsp; &nbsp; &nbsp; &nbsp; Bloody Crom es un grupo valenciano que fusiona el sonido del Heavy Metal" +
              " con el del Punk Rock. Sus letras giran entorno a temáticas de fantasía basadas en el autor de 'El Señor de los Anillos' J. R. R Tolkien." +
              " Este grupo se crea a principios de 2019 y lanza, ese mismo año, un EP con el mismo nombre de la banda que incluye cuatro canciones." +
              " En 2020 lanzan otro EP llamado 'High Quest', el cual está formado por 6 canciones, una de ellas de una duración aproximada de unos veinte" +
              " minutos ya que se trata de un pequeño EP" +
              " de Dungeon Synth compuesto por el batería e incrustado en la cara B de la cinta (pues ambos EP son editados en formato cassete). En su" +
              " trayectoria destacan sus conciertos por toda España presentando esta original mezcla de sonidos agresivos que no dejan indiferente a nadie que lo escuche." +
              "</br></br><i class='fa-brands fa-bandcamp'></i><a href='" +
              element.bandcamp +
              "' target='_blank'>Bandcamp de " +
              element.name +
              "</a><br><i class='fa-brands fa-facebook'></i><a href='" +
              element.facebook +
              "' target='_blank'>Facebook de " +
              element.name +
              "</a><br><i class='fa-brands fa-instagram-square'></i><a href='" +
              element.instagram +
              "' target='_blank'>Instagram de " +
              element.name +
              " </a></p></div>" +
              "<div class='video-youtube'><iframe width='560' height='315'  title='Youtube video of Bloody Crom' src='https://www.youtube.com/embed/Jf3fBl2Hgsw'" +
              " frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>" +
              " <div class='products'></div>"
          ).appendTo("main");
        } else if (element.genero == "punk") {
          $(
            "<div class='div-artistas-relacionados'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              " image of the band' title='" +
              element.name +
              "' class='img-artistas-relacionados'>" +
              element.name +
              "<div class='name-band'> <b> " +
              element.name +
              "</b></div></div>"
          ).appendTo(".no-local");

          $(".img-artistas-relacionados").mouseenter(function () {
            $(this).animate({ width: "105%", height: "105%" }, 500, "linear");
          });
          $(".img-artistas-relacionados").mouseleave(function () {
            $(this).stop(true);
            $(this).animate({ width: "100%", height: "100%" }, 500, "linear");
          });
        } else if (element.propias == "si") {
          $(
            "<div class='div-artistas-relacionados'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              " image of the band' title='" +
              element.name +
              "' class='img-artistas-relacionados'><div class='name-band'> <b> " +
              element.name +
              "</b></div></div>"
          ).appendTo(".locales");
          $(".img-artistas-relacionados").mouseenter(function () {
            $(this).animate({ width: "105%", height: "105%" }, 500, "linear");
          });
          $(".img-artistas-relacionados").mouseleave(function () {
            $(this).stop(true);
            $(this).animate({ width: "100%", height: "100%" }, 500, "linear");
          });
        }
      });
    }
  } else if (
    localStorage.getItem("ubication") ==
    "Here the captain speaking, the captain is dead"
  ) {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    function artistas(arrayArtista) {
      $(
        "</br></br><h1>Artistas relacionados:</h1><div class='no-local'></div>"
      ).appendTo(".content-extension");
      $(
        "</br></br><h1>Artistas locales:</h1><div class='locales'></div>"
      ).appendTo(".content-extension");

      arrayArtista.forEach((element) => {
        if (element.name == "Here the captain speaking, the captain is dead") {
          $(
            "<div class='imagen-en-artista'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              "' ></div><h1>" +
              element.name +
              "</h1>" +
              "<div class='texto-artist'><p>&nbsp; &nbsp; &nbsp; &nbsp; Here the captain speaking, the captain is dead son un grupo valenciano con un sonido característico" +
              " basado en improvisaciones cósmicas; una expedición sacudida por las turbulencias de los ritmos motorik que atraviesa los insondables" +
              " paisajes del Space Rock en busca de las partículas elementales del Krautrock; un ejercicio psicodélico instrumental donde las consignas" +
              " galácticas emanan de los sintetizadores, mientras las guitarras se sumergen en crescendos infinitos auspiciadas por la hipnótica estela de la batería y" +
              " el bajo. Todo un universo de sonidos intensos bajo el cual subyace la influencia de las melodías experimentales de NEU!, los" +
              " delirios eléctricos de Amon Düül II, la acidez cósmica de Ash Ra Tempel y los derroteros espaciales de Hawkwind, a los cuales" +
              " homenajean en un guiño encubierto en el mismo nombre de la banda." +
              " La formación nace en Valencia en 2018, cuando Lucas (batería) decide formar un proyecto musical para cristalizar" +
              " sus inquietudes por el Space Rock junto a Adrián (guitarra) y Dela (bajo). El trío grabará su álbum debut lanzándolo en formato" +
              " cassette, un trabajo homónimo en el que una atmósfera rebosante de sonidos psicodélicos recorre historias de ciencia ficción." +
              " Mientras tanto, la banda experimentará un cambio de formación, primero Dela y, posteriormente, Adrián acabarán bajándose" +
              " de la nave. Los nuevos tripulantes en embarcar serán Josu (bajo) y Xavi (guitarra, voz). Meses más tarde, Ethan (sintetizadores)" +
              " será la última incorporación en llegar, gestándose así la alineación actual de la banda en forma de cuarteto y tomando un" +
              " rumbo más cósmico si cabe. Precisamente ya como cuarteto ficharán por el sello discográfico alemán Tonzonen en 2019, con" +
              " quién publicarán su álbum debut en formato vinilo." +
              " A lo largo de su carrera, Here the captain speaking, the captain is dead han compartido escenario con artistas del" +
              " panorama independiente americano tales como Thalia Zedeck, los franceses PoiL, o, en un registro más próximo al rock" +
              " psicodélico, con los japoneses Acid Mother Temple y Minami Deutsch. Además, han formado parte del cartel del Festival" +
              " <a href='https://sonicblastfestival.com/' target='_blank'>SonicBlast Moledo</a>(Portugal), especializado en sonidos psych,"+
              " doom y stoner, y, más recientemente, han realizado un ejercicio" +
              " de música programática interpretando en directo una serie de temas inéditos compuestos para la proyección de la película de" +
              " culto La planète sauvage (1973) de René Laloux." +
              " En la actualidad se encuentran ultimando los detalles de su segundo disco, bajo el nombre de 'Flux Capacitor', que será publicado"+
              " a finales del presente año." +
              " Sin duda, una banda para flotar en el espacio. <br><br><i class='fa-brands fa-bandcamp'></i><a href='" +
              element.bandcamp +
              "' target='_blank'>Bandcamp de " +
              element.name +
              "</a><br><i class='fa-brands fa-facebook'></i><a href='" +
              element.facebook +
              "' target='_blank'>Facebook de " +
              element.name +
              "</a><br><i class='fa-brands fa-instagram-square'></i><a href='" +
              element.instagram +
              "' target='_blank'>Instagram de " +
              element.name +
              " </a></p>" +
              "</div><div class='video-youtube'><iframe width='560' height='315'  src='https://www.youtube.com/embed/b28yz6238Gg'"+
              " title='YouTube video of Here the captain speaking, the captain is dead' frameborder='0' allow='accelerometer; autoplay;"+
              " clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div><iframe style='border-radius:12px'"+
              " class='iframe-spotify' src='https://open.spotify.com/embed/artist/7FEb9l4s0mC6K3dwXh7DQM?utm_source=generator&theme=0' width='90%'"+
              " height='380' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'>"+
              " </iframe><div class='products'></div>"
          ).appendTo("main");
        } else if (element.genero == "space rock") {
          $(
            "<div class='div-artistas-relacionados'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              " image of the band' title='" +
              element.name +
              "' class='img-artistas-relacionados'>" +
              element.name +
              "<div class='name-band'> <b> " +
              element.name +
              "</b></div></div>"
          ).appendTo(".no-local");
          $(".img-artistas-relacionados").mouseenter(function () {
            $(this).animate({ width: "105%", height: "105%" }, 500, "linear");
          });
          $(".img-artistas-relacionados").mouseleave(function () {
            $(this).stop(true);
            $(this).animate({ width: "100%", height: "100%" }, 500, "linear");
          });
        } else if (element.propias == "si") {
          $(
            "<div class='div-artistas-relacionados'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              " image of the band' title='" +
              element.name +
              "' class='img-artistas-relacionados'><div class='name-band'> <b> " +
              element.name +
              "</b></div></div>"
          ).appendTo(".locales");
          $(".img-artistas-relacionados").mouseenter(function () {
            $(this).animate({ width: "105%", height: "105%" }, 500, "linear");
          });
          $(".img-artistas-relacionados").mouseleave(function () {
            $(this).stop(true);
            $(this).animate({ width: "100%", height: "100%" }, 500, "linear");
          });
        }
      });
    }
  } else if (localStorage.getItem("ubication") == "Hawkwind") {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    function artistas(arrayArtista) {
      $(
        "</br></br><h1>Artistas relacionados:</h1><div class='no-local'></div>"
      ).appendTo(".content-extension");
      $(
        "</br></br><h1>Artistas locales:</h1><div class='locales'></div>"
      ).appendTo(".content-extension");
      arrayArtista.forEach((element) => {
        if (element.name == "Hawkwind") {
          $(
            "<div class='imagen-en-artista'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              "' ></div><h1>" +
              element.name +
              "</h1>" +
              "<div class='texto-artist'><p>&nbsp; &nbsp; &nbsp; &nbsp; Hawkwind es una banda inglesa de space"+
              " rock formada a finales de los años sesenta, en Ladbroke Grove, Londres. Fue una de las bandas pioneras"+
              " de dicho género. Sus letras contienen temáticas acerca de lo urbano y la ciencia ficción; de hecho, el escritor"+
              " Michael Moorcock ha colaborado en las letras de algunos temas." +
              "<br><br><i class='fa-brands fa-bandcamp'></i><a href='" +
              element.bandcamp +
              "' target='_blank'>Bandcamp de " +
              element.name +
              "</a><br><i class='fa-brands fa-facebook'></i><a href='" +
              element.facebook +
              "' target='_blank'>Facebook de " +
              element.name +
              "</a><br><i class='fa-brands fa-instagram-square'></i><a href='" +
              element.instagram +
              "' target='_blank'>Instagram de " +
              element.name +
              " </a></p>" +
              "</div><div class='video-youtube'><iframe width='560' height='315' src='https://www.youtube.com/embed/X3W7ch0oLeA'"+
              " title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"+
              " picture-in-picture' allowfullscreen></iframe></div>"
          ).appendTo("main");
        } else if (element.genero == "space rock") {
          $(
            "<div class='div-artistas-relacionados'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              " image of the band' title='" +
              element.name +
              "' class='img-artistas-relacionados'>" +
              element.name +
              "<div class='name-band'> <b> " +
              element.name +
              "</b></div></div>"
          ).appendTo(".no-local");
          $(".img-artistas-relacionados").mouseenter(function () {
            $(this).animate({ width: "105%", height: "105%" }, 500, "linear");
          });
          $(".img-artistas-relacionados").mouseleave(function () {
            $(this).stop(true);
            $(this).animate({ width: "100%", height: "100%" }, 500, "linear");
          });
        } else if (element.propias == "si") {
          $(
            "<div class='div-artistas-relacionados'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              " image of the band' title='" +
              element.name +
              "' class='img-artistas-relacionados'><div class='name-band'> <b> " +
              element.name +
              "</b></div></div>"
          ).appendTo(".locales");
          $(".img-artistas-relacionados").mouseenter(function () {
            $(this).animate({ width: "105%", height: "105%" }, 500, "linear");
          });
          $(".img-artistas-relacionados").mouseleave(function () {
            $(this).stop(true);
            $(this).animate({ width: "100%", height: "100%" }, 500, "linear");
          });
        }
      });
    }
  } else if (localStorage.getItem("ubication") == "Zig Zags") {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    function artistas(arrayArtista) {
      $(
        "</br></br><h1>Artistas relacionados:</h1><div class='no-local'></div>"
      ).appendTo(".content-extension");
      $(
        "</br></br><h1>Artistas locales:</h1><div class='locales'></div>"
      ).appendTo(".content-extension");
      arrayArtista.forEach((element) => {
        if (element.name == "Zig Zags") {
          $(
            "<div class='imagen-en-artista'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              "' ></div><h1>" +
              element.name +
              "</h1>" +
              "<div class='texto-artist'><p>&nbsp; &nbsp; &nbsp; &nbsp; Zig Zags es un trío de heavy metal/punk"+
              " con sede en Los Ángeles. La banda está formada por el cantante y guitarrista Jed Maheu, el baterista"+
              " Dane Arnold y el bajista Sean Hoffman. Clash ha descrito su música como un 'diagrama de Venn que conecta"+
              " Black Sabbath, Black Flag y Motörhead'." +
              "<br><br><i class='fa-brands fa-bandcamp'></i><a href='" +
              element.bandcamp +
              "' target='_blank'>Bandcamp de " +
              element.name +
              "</a><br><i class='fa-brands fa-facebook'></i><a href='" +
              element.facebook +
              "' target='_blank'>Facebook de " +
              element.name +
              "</a><br><i class='fa-brands fa-instagram-square'></i><a href='" +
              element.instagram +
              "' target='_blank'>Instagram de " +
              element.name +
              " </a></p>" +
              "</div><div class='video-youtube'><iframe width='560' height='315' src='https://www.youtube.com/embed/aO84h1ujzvE'"+
              " title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"+
              " picture-in-picture' allowfullscreen></iframe></div>"
          ).appendTo("main");
        } else if (element.genero == "punk") {
          $(
            "<div class='div-artistas-relacionados'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              " image of the band' title='" +
              element.name +
              "' class='img-artistas-relacionados'>" +
              element.name +
              "<div class='name-band'> <b> " +
              element.name +
              "</b></div></div>"
          ).appendTo(".no-local");
          $(".img-artistas-relacionados").mouseenter(function () {
            $(this).animate({ width: "105%", height: "105%" }, 500, "linear");
          });
          $(".img-artistas-relacionados").mouseleave(function () {
            $(this).stop(true);
            $(this).animate({ width: "100%", height: "100%" }, 500, "linear");
          });
        } else if (element.propias == "si") {
          $(
            "<div class='div-artistas-relacionados'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              " image of the band' title='" +
              element.name +
              "' class='img-artistas-relacionados'><div class='name-band'> <b> " +
              element.name +
              "</b></div></div>"
          ).appendTo(".locales");
          $(".img-artistas-relacionados").mouseenter(function () {
            $(this).animate({ width: "105%", height: "105%" }, 500, "linear");
          });
          $(".img-artistas-relacionados").mouseleave(function () {
            $(this).stop(true);
            $(this).animate({ width: "100%", height: "100%" }, 500, "linear");
          });
        }
      });
    }
  } else if (localStorage.getItem("ubication") == "Electric Wizard") {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    function artistas(arrayArtista) {
      $(
        "</br></br><h1>Artistas relacionados:</h1><div class='no-local'></div>"
      ).appendTo(".content-extension");
      $(
        "</br></br><h1>Artistas locales:</h1><div class='locales'></div>"
      ).appendTo(".content-extension");
      arrayArtista.forEach((element) => {
        if (element.name == "Electric Wizard") {
          $(
            "<div class='imagen-en-artista'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              "' ></div><h1>" +
              element.name +
              "</h1>" +
              "<div class='texto-artist'><p>&nbsp; &nbsp; &nbsp; &nbsp; Electric Wizard es una banda inglesa"+
              " de doom metal de Dorset . La banda se formó en 1993 y ha grabado nueve álbumes de estudio, dos"+
              " de los cuales han sido considerados hitos del género: Come My Fanatics… (1997) y Dopetrone (2000)."+
              " La marca de doom metal de Electric Wizard incorpora rasgos de stoner y sludge , con letras que se "+
              "centran en el ocultismo , la brujería , HP Lovecraft , películas de terror y cannabis . En 2014 formaron"+
              " Witchfinder Records, un sello de Spinefarm Records , en el que planean lanzar todos los álbumes futuros." +
              "<br><br><i class='fa-brands fa-bandcamp'></i><a href='" +
              element.bandcamp +
              "' target='_blank'>Bandcamp de " +
              element.name +
              "</a><br><i class='fa-brands fa-facebook'></i><a href='" +
              element.facebook +
              "' target='_blank'>Facebook de " +
              element.name +
              "</a><br><i class='fa-brands fa-instagram-square'></i><a href='" +
              element.instagram +
              "' target='_blank'>Instagram de " +
              element.name +
              " </a></p>" +
              "</div><div class='video-youtube'><iframe width='560' height='315' src='https://www.youtube.com/embed/XX1530GNc6U'"+
              " title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"+
              " picture-in-picture' allowfullscreen></iframe></div>"
          ).appendTo("main");
        } else if (element.genero == "doom metal") {
          $(
            "<div class='div-artistas-relacionados'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              " image of the band' title='" +
              element.name +
              "' class='img-artistas-relacionados'>" +
              element.name +
              "<div class='name-band'> <b> " +
              element.name +
              "</b></div></div>"
          ).appendTo(".no-local");
          $(".img-artistas-relacionados").mouseenter(function () {
            $(this).animate({ width: "105%", height: "105%" }, 500, "linear");
          });
          $(".img-artistas-relacionados").mouseleave(function () {
            $(this).stop(true);
            $(this).animate({ width: "100%", height: "100%" }, 500, "linear");
          });
        } else if (element.propias == "si") {
          $(
            "<div class='div-artistas-relacionados'><img src='assets/artistas/" +
              element.src +
              "' alt='" +
              element.name +
              " image of the band' title='" +
              element.name +
              "' class='img-artistas-relacionados'><div class='name-band'> <b> " +
              element.name +
              "</b></div></div>"
          ).appendTo(".locales");
          $(".img-artistas-relacionados").mouseenter(function () {
            $(this).animate({ width: "105%", height: "105%" }, 500, "linear");
          });
          $(".img-artistas-relacionados").mouseleave(function () {
            $(this).stop(true);
            $(this).animate({ width: "100%", height: "100%" }, 500, "linear");
          });
        }
      });
    }
  }
});