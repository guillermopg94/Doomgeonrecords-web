<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

$nombre = $_GET['nombre_camiseta'];
$img= $_GET['img_camiseta'];
$codigo_artista= $_GET['codigoArtista']; 
$foto= $_GET['foto']; 

$sqlUserExiste = $MySQL->query("SELECT nombre FROM camiseta WHERE nombre='$nombre'");
$NumerodeColumnas=mysqli_num_rows($sqlUserExiste);


if($NumerodeColumnas==0)
{

$sql_insert = "INSERT INTO camiseta (nombre, imagen_camiseta, id_artista) VALUES ('$nombre','$img',$codigo_artista)";

$res = $MySQL->query($sql_insert);


$jsonData = array();


while ($row = mysqli_fetch_assoc($res)) {
    $jsonData[] = $row;
}


echo json_encode($jsonData);
}else{
    echo "existe";
}


if ($_FILES["$foto"]["error"] > 0) {
    echo "Error: " . $_FILES["$foto"]["name"] . "<br>";
} else {
    echo $_FILES["$foto"]["name"];
  
}
if (file_exists("../assets/" . $_FILES["$foto"]["name"])) {

} else {
    move_uploaded_file(
        $_FILES["$foto"]["tmp_name"],
        "../assets/" . $_FILES["$foto"]["name"]
    );
    chmod("../assets/" . $_FILES["$foto"]["name"], 0777);

}