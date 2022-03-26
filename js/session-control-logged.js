$(document).ready(function () {
  
    $.ajax({
    url: "php/mantenerSesion.php",
    success: function (resultado) {
        
      if (resultado == "no") {
        localStorage.setItem("ubication", "home-no-logged");
        window.location.href = "index.html";
         
      } else {

        var d = new Date();
        let diaHoy = d.getDay();
        const dias = [
          "domingo","lunes","martes","miércoles","jueves","viernes","sábado",
        ];
        let mesHoy = d.getMonth();
        const meses = [
          "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",
        ];
        $(
          "<h1>Feliz " + dias[diaHoy] +" " +d.getDate() +" de " +meses[mesHoy] +" " +resultado +" </h1>"
        ).appendTo("#salutation");
        
    
      }
    },
    error: function (xhr) {
      alert("Atencion: se ha producido un error");
      $("#content").append(xhr.statusText + xhr.responseText);
    },
  });
});