function comprovaUsuari(){

    var exists = getGaleta("user");
    if(exists == ""){
        location.href = "index.html";
    }else{
        document.getElementById("user").innerHTML = exists;
    }
}

function tancaSessio(){
    document.cookie = 'user=;expires=Thue, 01 Jan 1970 00:00:01 GMT';
    location.href = "index.html";
}
