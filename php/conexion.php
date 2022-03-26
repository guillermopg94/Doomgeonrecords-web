<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class ConnectionDB
{
    private $servidor = "localhost";
    private $usuario = "guillermopg";
    private $password = "140315pgueliconu";
    private $bd = "doomgeonrecords";

    public function getDBConnection()
    {
        return new mysqli(
            $this->servidor,
            $this->usuario,
            $this->password,
            $this->bd
        );
    }


    
}