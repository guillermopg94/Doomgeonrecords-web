
$(document).ready(function ($) {
  $.noConflict();
    
      $("input#buton-subscribe").on("click", function (event) {
      event.preventDefault();
  if (
    $("#emailNewsletter").val().indexOf("@", 0) == -1 ||
    $("#emailNewsletter").val().indexOf(".", 0) == -1
  ){
    $("<div class='errorEmail' title='Error del correo'><p>El correo introducido no es correcto</p></div>").appendTo("main").dialog();
  } else {
 
    var datos = $("#subscribe").serialize();
    $.ajax({
      type: "POST",
      url: "php/newsletter.php",
      data: datos,
      success: function (resultado) {
    
        $("input").val("");
        location.reload();
        $("<div id='okNewsletter' title='Suscrito'><p>Gracias por subscribirte!</p></div>").appendTo("main").dialog();
        localStorage.setItem("errorNewsletterSucces",resultado);
    
    
      },
        error: function (xhr) {
          localStorage.setItem("errorNewsletter", xhr);
        }
        
      });
  }
  
    });   
  });   
          