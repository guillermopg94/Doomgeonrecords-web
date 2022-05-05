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


$email = $_POST['email'];

$fp = fopen('file.txt', 'a');
fwrite($file, $email . PHP_EOL);
fclose($fp);

} else {
    echo "Captcha invalido";
    }
}
