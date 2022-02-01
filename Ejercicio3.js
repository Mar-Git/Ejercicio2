window.onload=inicializaEventos;
function inicializaEventos(){
    document.getElementById("btnBorrar").addEventListener("click",borrarPersona,false);
}
function borrarPersona(){
    //aqui metemos Ajax
    var miLlamada=new XMLHttpRequest();
    var id=document.getElementById("idPersona").value;
    miLlamada.open("DELETE","https://crudpersonasuiaspmar.azurewebsites.net/api/Personas/"+id);
    miLlamada.onreadystatechange=function(){
        //alert(miLlamada.readyState);
        if(miLlamada.readyState==4 && miLlamada.status==200){
            //alert(miLlamada.readyState);
            //document.getElementById("idPersona").innerHTML="";
            document.getElementById("divRespuesta").innerHTML="Persona eliminada";
        }else if(miLlamada.status==401){
            document.getElementById("divRespuesta").innerHTML="No se tiene autorización para acceder al recurso solicitado";
        }
        else if(miLlamada.status==500){
            document.getElementById("divRespuesta").innerHTML="Error interno del servidor";
        }
    }
    miLlamada.send();
}