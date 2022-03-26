$(document).ready(function () {
  $(".social-media-every-icon")
    .mouseenter(function () {
      $(this).animate({ width: "27px" }, 500, "linear");
    })
    .mouseleave(function () {
      $(this).stop(true);
      $(this).animate({ width: "23px" }, 500, "linear");
    });

  $("#facebook-icon").on("click", function () {
    window.open(
      "https://www.facebook.com/Doomgeon-Records-106158955356121",
      "_blank"
    );
  });
  $(document).on("click", "#instagram-icon", function () {
    window.open("https://www.instagram.com/doomgeon_records/", "_blank");
  });

  $("#doomgeon-record-logo").on("click", function () {
    localStorage.setItem("ubication", "home");
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
  $("#shop-no-logged").on("click", function () {
    localStorage.setItem("ubication", "shop-no-logged");
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

  $("#productos").on("click", function () {
    localStorage.setItem("ubication", "productos");
    location.reload();
  });

  $("#compras").on("click", function () {
    localStorage.setItem("ubication", "compras");
    location.reload();
  });
  $("#logo-logout").on("click", function () {
    $.ajax({
      url: "php/cerrarSesion.php",
      success: function () {
        localStorage.setItem("ubication","home");
        window.location.href = "index.html";
      },
      error: function (xhr) {
        $("#mensaje1").append(xhr.statusText + xhr.responseText);
      },
    });
    });

});
