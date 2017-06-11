/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validacionFormularioRegistro() {
    
    var campoUsuario = document.getElementById("campoUsuario").value;
    var campoEmail = document.getElementById("campoEmail").value;
    var camposGenero = document.getElementsByName("genero");
    var campoContrasenia = document.getElementById("campoContrasenia").value;
    var campoContrasenia2 = document.getElementById("campoContrasenia2").value;
    var campoFechaNac= document.getElementById("campoFechaNac").value;
    var seleccionado = false;
    for(var i=0; i<camposGenero.length; i++) {    
        if(camposGenero[i].checked) {
        seleccionado = true;
        break;
        }
    }
    
    
    
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if( campoUsuario === null || campoUsuario.length === 0 || /^\s+$/.test(campoUsuario) || campoEmail === null || campoEmail.length === 0) {
        alert("no debe haber campos vacios");
        return false;
    }
    else if( !(emailRegex.test(campoEmail)) ) {
        alert("debe introcucir un email valido");
        return false;
    } else if(!seleccionado) {
        alert("seleccione genero");
        return false;
    }else if(campoFechaNac === null || campoFechaNac.length === 0){
        alert("debe ingresar fecha de nacimiento");
        return false;
    }
    var espacios = false;
    var cont = 0;
    
    
    while (!espacios && (cont < campoContrasenia.length)) {
        if (campoContrasenia.charAt(cont) === " ")
            espacios = true;
        cont++;
    }
 
    if (espacios) {
        alert ("La contraseña no puede contener espacios en blanco");
    return false;
    }
    
    if (campoContrasenia.length === 0 || campoContrasenia2.length === 0) {
        alert("Los campos de la password no pueden quedar vacios");
        return false;
    }
    
    if (campoContrasenia != campoContrasenia2) {
        alert("Las passwords deben de coincidir");
        return false;
    }
    
    if (campoContrasenia.length < 8 || campoContrasenia2.length < 8){
        alert("La contrasena debe ser tener almenos 8 caracteres");
        return false;
    }
   
    return true; 
   
}


