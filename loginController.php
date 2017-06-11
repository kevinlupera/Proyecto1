<?php
//leer parametros
$option=filter_input(INPUT_GET,"op");
$ca=filter_input(INPUT_GET,"ca");
//Ver el estado de la variable
if(!isset($option) || empty($option))
{
    header("Location:login.php");
    exit;
}
if($option==1){
    //Leer parametros
    $usuario=  filter_input(INPUT_POST, "usuario");
    $clave=  filter_input(INPUT_POST, "clave");
    if(!empty($usuario) && !empty($clave))
    {
        //validar las credenciales
        if(strcmp($usuario,"admin")==0 && strcmp($clave,"12345")==0){
            $_SESSION[$usuario];
            header("Location:index.php");
            exit;
        }
        else{
            header("Location:login.php");
            exit;
        }
    }
    else{
        header("Location:login.php");
        exit;
    }
    
}

    
    


