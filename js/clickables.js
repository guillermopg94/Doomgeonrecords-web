$(document).ready(function () {


  $("#facebook-icon").on("click", function () {
    window.open(
      "https://www.facebook.com/Doomgeon-Records-106158955356121",
      "_blank"
    );
  });
  $(document).on("click", "#instagram-icon", function () {
    window.open("https://www.instagram.com/doomgeon_records/", "_blank");
  });

  $("body").on("click", ".register", function () {

localStorage.setItem("ubication", "register");
location.reload();
  });

  $("body").on("click", ".a-login", function () {

    localStorage.setItem("ubication", "login");
    location.reload();
      });

      $("body").on("click", "#cd", function () {
        window.open("https://santich.com.es/es/6-cds", "_blank");
      });
      $("body").on("click", "#casete", function () {
        window.open("https://santich.com.es/es/8-casetes", "_blank");
      });
      $("body").on("click", "#vinilo", function () {
        window.open("https://santich.com.es/es/7-vinilos", "_blank");

      });
      $("body").on("click", "#camiseta", function () {
        window.open("https://santich.com.es/es/5-camisetas", "_blank");
      });
  
  $("#logo-en-no-logged").on("click", function () {
    localStorage.setItem("ubication", "home-no-logged");
    location.reload();
  });
  $("#logo-logged").on("click", function () {
    localStorage.setItem("ubication", "home-logged");
    location.reload();
  });
  $("#logo-admin").on("click", function () {
    localStorage.setItem("ubication", "usuarios");
    location.reload();
  });

  $("#logo-login").on("click", function () {
    localStorage.setItem("ubication", "login");
    location.reload();
  });

  $("#contact-no-logged").on("click", function () {
    localStorage.setItem("ubication", "contact-no-logged");
    location.reload();
  });

  $("#home-no-logged").on("click", function () {
    localStorage.setItem("ubication", "home-no-logged");
    location.reload();
  });
  $("#artists-no-logged").on("click", function () {
    localStorage.setItem("ubication", "artists-no-logged");
    location.reload();
  });
  $("#conciertos-no-logged").on("click", function () {
    localStorage.setItem("ubication", "conciertos-no-logged");
    location.reload();
  });
  $("#contact-logged").on("click", function () {
    localStorage.setItem("ubication", "contact-logged");
    location.reload();
  });

  $("#home-logged").on("click", function () {
    localStorage.setItem("ubication", "home-logged");
    location.reload();
  });
  $("#artists-logged").on("click", function () {
    localStorage.setItem("ubication", "artists-logged");
    location.reload();
  });
  $("#shop-logged").on("click", function () {
    localStorage.setItem("ubication", "shop-logged");
    location.reload();
  });
  $("#detalles-logged").on("click", function () {
    localStorage.setItem("ubication", "detalles-logged");
    location.reload();
  });
  $("#conciertos-logged").on("click", function () {
    localStorage.setItem("ubication", "conciertos-logged");
    location.reload();
  });
  
  // ADMIN SITE //

  $("#usuarios").on("click", function () {
    localStorage.setItem("ubication", "usuarios");
    location.reload();
  });
  $("#imagenes").on("click", function () {
    localStorage.setItem("ubication", "imagenes");
    location.reload();
  });
  $("#artistas").on("click", function () {
    localStorage.setItem("ubication", "artistas");
    location.reload();
  });
  $("#album").on("click", function () {
    localStorage.setItem("ubication", "album");
    location.reload();
  });

  $("#cd").on("click", function () {
    localStorage.setItem("ubication", "cd");
    location.reload();
  });

  $("#casete").on("click", function () {
    localStorage.setItem("ubication", "casete");
    location.reload();
  });
  $("#vinilo").on("click", function () {
    localStorage.setItem("ubication", "vinilo");
    location.reload();
  });
  $("#camiseta").on("click", function () {
    localStorage.setItem("ubication", "camiseta");
    location.reload();
  });
  $("#logo-logout").on("click", function () {
    $.ajax({
      url: "php/cerrarSesion.php",
      success: function () {
        localStorage.setItem("ubication","home-no-logged");
        window.location.href = "index.html";
      },
      error: function (xhr) {
        $("#mensaje1").append(xhr.statusText + xhr.responseText);
      },
    });
    });

    $("body").on("click", ".band", function () {
      var band = $(this)
      .find(".band-artists-img")
      .attr("title");
    localStorage.setItem("ubication", band);
    location.reload();
    });
    $("body").on("click", ".div-artistas-relacionados", function () {
      var band = $(this)
      .find(".img-artistas-relacionados")
      .attr("title");
    if(band=="Double Horse"){
      localStorage.setItem("ubication", band);
  
      location.reload(true);

    }else if (band =="Bloody Crom"){
      localStorage.setItem("ubication", band);
      location.reload(true);
    }else{
      localStorage.setItem("ubication", band);
      location.reload(true);
  
    }
});
});
