<?php 
//include("conexion.php");
session_start();


if (!($_SESSION["Usuario"])) {
    echo "no";
}else{
    echo $_SESSION["Usuario"];
}