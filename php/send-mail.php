<?php

if ($_POST['g-recaptcha-response'] == '') {
    echo "Captcha invalido";
    } else {
    $obj = new stdClass();
    $obj->secret = "6Lc9W5YfAAAAAF4WL5cD3LjltxsszyMH9Re1XPxq";
    $obj->response = $_POST['g-recaptcha-response'];
    $obj->remoteip = $_SERVER['REMOTE_ADDR'];
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    
    $options = array(
    'http' => array(
    'header' => "Content-type: application/x-www-form-urlencoded\r\n",
    'method' => 'POST',
    'content' => http_build_query($obj)
    )
    );
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    
    $validar = json_decode($result);
    
    /* FIN DE CAPTCHA */
    
    if ($validar->success) {

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];
$mensaje_completo = 'Mensaje de '. $nombre.' con email: '. $email .' dice: '. $mensaje.'';
mail('guillermopaton94@gmail.com', $asunto, $mensaje_completo);
} else {
    echo "Captcha invalido";
    }
}