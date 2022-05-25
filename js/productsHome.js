$(document).ready(function () {
 

    if (localStorage.getItem("ubication") == "home-no-logged" || localStorage.getItem("ubication") == "home-logged" ) {

let arrayCds = [];
let arrayCasetes = [];
let arrayCamisetas = [];
let arrayVinilos = [];

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

$.ajax({
  type: "GET",
  url: "php/mostrarCds.php",
  dataType: "json",
  success: function (resultado) {
    for (var x of resultado) {
      JSON.stringify(x);

      arrayCds.push({
        cd_nombre: x.nombre,
        id_artista: x.id_artista,
        img_cd: x.imagen_cd,
      });
    }

    mostrarCDs(arrayCds);
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

      arrayCasetes.push({
        casete_nombre: x.nombre,
        id_artista: x.id_artista,
        img_casete: x.imagen_casete,
      });
    }

    mostrarCasetes(arrayCasetes);
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

      arrayCamisetas.push({
        camiseta_nombre: x.nombre,
        id_artista: x.id_artista,
        img_camiseta: x.imagen_camiseta,
      });
    }

    mostrarCamisetas(arrayCamisetas);
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

      arrayVinilos.push({
        vinilo_nombre: x.nombre,
        id_artista: x.id_artista,
        img_cd: x.imagen_cd,
        img_vinilo: x.imagen_vinilo,
      });
    }

    mostrarVinilos(arrayVinilos);
  },
  error: function (xhr) {
    localStorage.setItem("errorMostrandoVinilos", xhr);
  },
});




function mostrarCDs(arrayMerch) {
    arrayMerch.forEach((element) => {
  
        $(
          "<div class='contenedor-producto' id='cd'><div class='div-productos-relacionados'><img src='assets/cds/" +
            element.img_cd +
            "' alt='" +
            element.cd_nombre +
            "' class='img-artistas-relacionados'></div><div class='name-product'> <p> " +
            element.cd_nombre +
            "</p></div></div>"
        ).appendTo("main");
      
    });
    $(".img-artistas-relacionados").mouseenter(function () {
      $(this).animate({ width: "105%", height: "105%" }, 500, "linear");
    });
    $(".img-artistas-relacionados").mouseleave(function () {
      $(this).stop(true);
      $(this).animate({ width: "100%", height: "100%" }, 500, "linear");
    });
  }
  function mostrarCasetes(arrayMerch) {
    arrayMerch.forEach((element) => {
      
        $(
          "<div class='contenedor-producto' id='casete'><div class='div-productos-relacionados'>" +
            "<img src='assets/casetes/" +
            element.img_casete +
            "' alt='" +
            element.casete_nombre +
            "' class='img-artistas-relacionados'></div><div class='name-product'>" +
            " <p> " +
            element.casete_nombre +
            "</p></div></div>"
        ).appendTo("main");
      
    });
    $(".img-artistas-relacionados").mouseenter(function () {
      $(this).animate({ width: "105%", height: "105%" }, 500, "linear");
    });
    $(".img-artistas-relacionados").mouseleave(function () {
      $(this).stop(true);
      $(this).animate({ width: "100%", height: "100%" }, 500, "linear");
    });
  }
  function mostrarVinilos(arrayMerch) {
    arrayMerch.forEach((element) => {

        $(
          "<div class='contenedor-producto' id='vinilo'><div class='div-productos-relacionados'><img src='assets/vinilos/" +
            element.img_vinilo +
            "' alt='" +
            element.vinilo_nombre +
            "' class='img-artistas-relacionados'></div><div class='name-product'> <p> " +
            element.vinilo_nombre +
            "</p></div></div>"
        ).appendTo("main");
      
    });
    $(".img-artistas-relacionados").mouseenter(function () {
      $(this).animate({ width: "105%", height: "105%" }, 500, "linear");
    });
    $(".img-artistas-relacionados").mouseleave(function () {
      $(this).stop(true);
      $(this).animate({ width: "100%", height: "100%" }, 500, "linear");
    });
  }
  function mostrarCamisetas(arrayMerch) {
    arrayMerch.forEach((element) => {
    
        $(
          "<div class='contenedor-producto' id='camiseta'><div class='div-productos-relacionados'><img src='assets/camisetas/" +
            element.img_camiseta +
            "' alt='" +
            element.camiseta_nombre +
            "'  class='img-artistas-relacionados'></div><div class='name-product'> <p> " +
            element.camiseta_nombre +
            "</p></div></div>"
        ).appendTo("main");
      
    });
    $(".img-artistas-relacionados").mouseenter(function () {
      $(this).animate({ width: "105%", height: "105%" }, 500, "linear");
    });
    $(".img-artistas-relacionados").mouseleave(function () {
      $(this).stop(true);
      $(this).animate({ width: "100%", height: "100%" }, 500, "linear");
    });
  }
}
});