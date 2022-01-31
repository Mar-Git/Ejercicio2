window.onload=inicializaEventos;
function inicializaEventos(){
    document.getElementById("btnSaludo").addEventListener("click",saludo,false);
}
function saludo(){
    //aqui metemos Ajax
    var miLlamada=new XMLHttpRequest();
    miLlamada.open("GET","https://crudpersonasuiaspmar.azurewebsites.net/api/personas/1");
    miLlamada.onreadystatechange=function(){
        //alert(miLlamada.readyState);
        if(miLlamada.readyState==4 && miLlamada.status==200){
            alert(miLlamada.readyState);
            document.getElementById("divSaludo").innerHTML=miLlamada.responseText;
        }
    }//
    miLlamada.send();
}