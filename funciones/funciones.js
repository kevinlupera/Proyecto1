/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Función que permite solo Números
function validaSoloNumeros() {
 if ((event.keyCode < 48) || (event.keyCode > 57)) 
  event.returnValue = false;
}
function validaSoloLetras() {
 if ((event.keyCode !== 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122))
    event.returnValue = false;
}
function validaLetrasNumeros() {
{
    if (event.keyCode < 65 && event.keyCode > 90){
        //los numeros son codigos ASCII
        event.returnValue = false;
    }
}
function validacionFormularioRegistro() {
    var campoUsuario = document.getElementById("campoUsuario").value;
    var campoEmail = document.getElementById("campoEmail").value;
    var camposGenero = document.getElementsByName("genero");
    var campoContrasenia = document.getElementById("campoContrasenia").value;
    var campoContrasenia2 = document.getElementById("campoContrasenia2").value;
    var campoFechaNac= document.getElementById("campoFechaNac").value;
    var campoCedula= document.getElementById("campoCedula").value;
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
    var tamCedula=10;
    
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
        alert("La contrasena debe ser tener al menos 8 caracteres");
        return false;
    }
    if(campoCedula.length < 10){
        alert("La cedula tiene 10 numeros");
        return false;
    }
        
    return true; 
   
}
var contadord=0;
var contadorm=0;
var contadora=0;
function adicionarRepor(x) {
    var nodoP=document.createElement("p");
    var nodoDiv;
    var texto;
    switch(x){
        case 1:
            contadord=contadord+1;
            nodoDiv=document.getElementById("cntReporte"+"Dia");
            texto="Producto del"+ " dia #"+(contadord);
            break;
        case 2:
            contadorm=contadorm+1;
            nodoDiv=document.getElementById("cntReporte"+"Mes");
            texto="Producto del"+ " mes #"+(contadorm);
            break;
        case 3:
            contadora=contadora+1;
            nodoDiv=document.getElementById("cntReporte"+"Año");
            texto="Producto del"+ " año #"+(contadora);
            break;
        default :
            break;
    }
    var nodoTexto=document.createTextNode(texto);
    nodoP.appendChild(nodoTexto);
    nodoDiv.appendChild(nodoP);
}
function aparecerRepor(x){
    var nodoDiv;
    
    switch(x){
        case 1:
            nodoDiv=document.getElementById("cntReporte"+"Dia");
            nodoDiv.style.display = 'block';
            break;
        case 2:
            nodoDiv=document.getElementById("cntReporte"+"Mes");
            nodoDiv.style.display = 'block';
            break;
        case 3:
            nodoDiv=document.getElementById("cntReporte"+"Año");
            nodoDiv.style.display = 'block';
            break;
        default :
            break;
    }
}
function ocultarRepor(x){
    var nodoDiv;
    
    switch(x){
        case 1:
            nodoDiv=document.getElementById("cntReporte"+"Dia");
            nodoDiv.style.display = 'none';
            break;
        case 2:
            nodoDiv=document.getElementById("cntReporte"+"Mes");
            nodoDiv.style.display = 'none';
            break;
        case 3:
            nodoDiv=document.getElementById("cntReporte"+"Año");
            nodoDiv.style.display = 'none';
            break;
        default :
            break;
    }
}
function resetRepor(x){
    var nodoDiv;
    var i=0;
    switch(x){
        case 1:
            nodoDiv=document.getElementById("cntReporte"+"Dia");
            while (nodoDiv.hasChildNodes()) {   
                nodoDiv.removeChild(nodoDiv.firstChild);
            }
            contadord=0;
            break;
        case 2:
            nodoDiv=document.getElementById("cntReporte"+"Mes");
            while (nodoDiv.hasChildNodes()) {   
                nodoDiv.removeChild(nodoDiv.firstChild);
            }
            contadorm=0;
            break;
        case 3:
            nodoDiv=document.getElementById("cntReporte"+"Año");
            while (nodoDiv.hasChildNodes()) {   
                nodoDiv.removeChild(nodoDiv.firstChild);
            }
            contadora=0;
            break;
        default :
            break;
    }
}
function quitarRepor(x){
    var nodoDiv;
    switch(x){
        case 1:
            if(contadord > 0)
                contadord=contadord-1;
            nodoDiv=document.getElementById("cntReporte"+"Dia");
            if(nodoDiv.childElementCount>0){
                nodoDiv.removeChild(nodoDiv.lastElementChild);
            }
            break;
        case 2:
            if(contadorm > 0)
                contadorm=contadorm-1;
            nodoDiv=document.getElementById("cntReporte"+"Mes");
            if(nodoDiv.childElementCount>0){
                nodoDiv.removeChild(nodoDiv.lastElementChild);
            }
            break;
        case 3:
            if(contadora > 0)
                contadora=contadora-1;
            nodoDiv=document.getElementById("cntReporte"+"Año");
            if(nodoDiv.childElementCount>0){
                nodoDiv.removeChild(nodoDiv.lastElementChild);
            }
            break;
        default :
            break;
    }
}
