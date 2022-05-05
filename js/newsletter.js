
$(document).ready(function () {

$("body").on("click", ".buton-subscribe", function () {
 
  if (
    $("#emailNewsletter").val().indexOf("@", 0) == -1 ||
    $("#emailNewsletter").val().indexOf(".", 0) == -1
  ){
    $("<div id='errorEmail' title='Error del correo'><p>El correo introducido no es correcto</p></div>").dialog();
  } else {
    localStorage.setItem("errorNewsletterEntraenIf", resultado);
    var datos = $(".subscribe").serialize();
    $.ajax({
      type: "POST",
      url: "php/newsletter.php",
      data: datos,
      success: function (resultado) {
    
        $("input").val("");
    
     
        localStorage.setItem("errorNewsletterSucces", resultado);
       location.reload();
    
      },
        error: function (xhr) {
          localStorage.setItem("errorNewsletter", xhr);
        }
        
      });
  }
  
    });   
  });   
          