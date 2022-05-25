
var cookieConsentOptions = {
	// Cookie usage prevention text
	textPopup: 'Utilizamos cookies para garantizar que tenga la mejor experiencia en nuestro sitio. Si continúa utilizando nuestro sitio, asumiremos que está de acuerdo con su uso. Para obtener más información, consulte nuestra <a href="politica-privacidad.html" target="_blank">política de privacidad</a>.',
	// The text of the accept button
	textButtonAccept : 'Aceptar todo',
	// The text of the configure my options button
	textButtonConfigure : 'Configurar elección',
	// The text of the save my options button
	textButtonSave : 'Guardar cambios',
	// The text of the first parameter that the user can define in the "configuration" section.
	authorization: [
		{
			textAuthorization: 'Permitir el acceso a los datos de geolocalización.',
			nameCookieAuthorization: 'autoriseGeolocation'
		},
		{
			textAuthorization: 'Permitir anuncios y contenido personalizados, medición de anuncios y análisis de audiencia.',
			nameCookieAuthorization: 'targetedAdvertising'
		},
		{
			textAuthorization: 'Almacenamiento y/o acceso a información en un dispositivo.',
			nameCookieAuthorization: 'cookieConsent'
		}
	]
}


function popupConsent(cookieConsentOptions) {
  // On compte le nombre d'autorisations :
  let nbrAuth = cookieConsentOptions.authorization.length;

  // On insère la base de notre popup
  document.body.insertAdjacentHTML('beforeEnd','<div class="popup" id="popupConsent"><section id="contentPopupConsent"><p>'+cookieConsentOptions["textPopup"]+'</p></section><section id="configureSection"><table></table></section><div class="choice-container-buttons"><button class="c-button" id="accept"><div class="c-ripple js-ripple"><span class="c-ripple-circle-accept"></span></div>'+cookieConsentOptions["textButtonAccept"]+'</button><button class="c-button" id="configure"><div class="c-ripple js-ripple"><span class="c-ripple-circle-configure"></span></div>'+cookieConsentOptions["textButtonConfigure"]+'</button><button class="c-button" id="enregistre"><div class="c-ripple js-ripple"><span class="c-ripple-circle-enregistre"></span></div>'+cookieConsentOptions["textButtonSave"]+'</button></div></div><div id="backgroundPopup"></div>');

  // On insère les champs personnalisés un à un
  let i = 0;
  while(i < nbrAuth){
    $('#configureSection table').append('<tr><th><div class="switch checked" id="'+cookieConsentOptions.authorization[i].nameCookieAuthorization+'"><div class="circle" id="'+cookieConsentOptions.authorization[i].nameCookieAuthorization+'Circle"></div></div></th><th class="text-switch">'+cookieConsentOptions.authorization[i].textAuthorization+'</th></tr>');
    i++;
  }

  //--------------Switch button-----------------
  $(".switch").click(function(){
    let idSwitch = "#" + $(this).attr('id');
    let idCircleSwitch = idSwitch + "Circle";

    if($(idSwitch).hasClass('checked')){
      $(idCircleSwitch).removeClass("move-circle-right").addClass("move-circle-left");
      $(idSwitch).removeClass("checked");
    }
    else{
      $(idCircleSwitch).removeClass("move-circle-left").addClass("move-circle-right");
      $(idSwitch).addClass("checked");
    }
  });
  // -------------Button ripple---------------
  ;(function($, window, document, undefined) {
    'use strict';
    var $ripple = $('.js-ripple');
    $ripple.on('click.ui.ripple', function(e) {

      let idButton = $(this).parents().attr('id');
      var $this = $(this);
      var $offset = $this.parent().offset();
      var $circle = $this.find('.c-ripple-circle-'+idButton);
      var x = e.pageX - $offset.left;
      var y = e.pageY - $offset.top;

      $circle.css({
        top: y + 'px',
        left: x + 'px'
      });
      $this.addClass('is-active');
    });
    $ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(e) {
      $(this).removeClass('is-active');
    });
  })(jQuery, window, document);
  // -------------Popup---------------
  $(document).ready(function() {

    let date = new Date(Date.now() + 31536000000); //31536000000 = 365 jour
    date = date.toUTCString();

    let popupConsent = $('#popupConsent');
    let acceptButton = $( "#accept" );
    let configureButton = $( "#configure" );
    let enregistreButton = $( "#enregistre" );
    let configureSection = $('#configureSection');
    let contentPopupConsent = $('#contentPopupConsent');


    function getCookieValue(name) {
      let result = document.cookie.match("(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)")
      return result ? result.pop() : ""
    }

    if(!getCookieValue("cookieConsent")){
      $(popupConsent).show(200);
      document.getElementById("backgroundPopup").classList.add('background-popup');
    }

    // On configure le bouton "Accepter"
    $(acceptButton).click(function() {
      $(popupConsent).fadeOut(1000);
      i = 0;
      while(i < nbrAuth){
        document.cookie = cookieConsentOptions.authorization[i].nameCookieAuthorization+'=true; path=/; expires=' + date;
        i++;
      }
      document.getElementById("backgroundPopup").classList.remove('background-popup');
      document.cookie = 'popupConsent=true; path=/; expires=' + date;
      localStorage.setItem("ubication","home-no-logged"); 
      location.reload();
    });

    $(configureButton).click(function() {
      $(configureButton).fadeOut(0);
      $(enregistreButton).fadeIn(0);
      $(contentPopupConsent).fadeOut(0);
      $(configureSection).fadeIn(1000);
    });

    $(enregistreButton).click(function() {
      $(popupConsent).fadeOut(1000);
      i = 0;
      while(i < nbrAuth){
        if($('#'+cookieConsentOptions.authorization[i].nameCookieAuthorization).hasClass('checked')){
          document.cookie = cookieConsentOptions.authorization[i].nameCookieAuthorization+'=true; path=/; expires=' + date;
        } else {
          document.cookie = cookieConsentOptions.authorization[i].nameCookieAuthorization+'=false; path=/; expires=' + date;
        }
        i++;
      }
      document.getElementById("backgroundPopup").classList.remove('background-popup');
      document.cookie = 'popupConsent=true; path=/; expires=' + date;
      localStorage.setItem("ubication","home-no-logged"); 
      location.reload();
    });
  });
}
popupConsent(cookieConsentOptions);