<?php


include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

$codigo = $_GET['idUsuario'];

$sqlUserExiste = $MySQL->query("SELECT id_usuario FROM compra WHERE id_usuario =$codigo");
$NumerodeColumnas=mysqli_num_rows($sqlUserExiste);

if($NumerodeColumnas==0)
{



$sql_delete = "DELETE FROM usuario WHERE id_usuario=$codigo";
$res = $MySQL->query($sql_delete);



$sql = "SELECT * FROM usuario";
$res = $MySQL->query($sql);
$jsonData = array();


while ($row = $res->fetch_array()) {
    $jsonData[] = $row;
}


echo json_encode($jsonData);

}else{
    echo "ese usuario tiene asignada una compra";
} 