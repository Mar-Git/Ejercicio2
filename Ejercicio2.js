window.onload=inicializaEventos;
function inicializaEventos(){
    document.getElementById("btnApellido").addEventListener("click",mostrarApellidos,false);
}
function mostrarApellidos(){
    //aqui metemos Ajax
    var miLlamada=new XMLHttpRequest();
    miLlamada.open("GET","https://crudpersonasuiaspmar.azurewebsites.net/api/Personas");
    miLlamada.onreadystatechange=function(){
        //alert(miLlamada.readyState);
        if(miLlamada.readyState==4 && miLlamada.status==200){
            //alert(miLlamada.readyState);
            var response = JSON.parse(miLlamada.responseText);
            document.getElementById("divApellido").innerHTML=response[0]['apellidos'];
            //console.log(response[0]['apellidos']);

        }
    }
    miLlamada.send();
}