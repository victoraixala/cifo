/*
* @name: setGaleta
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: Crea una galeta per a la gestió de la sessió de login
* @date: 19/12/19
* @params:  nomGaleta(nom de la galeta)
            valorGaleta(valor de la galeta)
            diesExpira(temps d'expiració de la galeta)
* @return: none
*/
function setGaleta(nomGaleta, valorGaleta, diesExpira){
    // instacia la variable "d" al objecte "Date"
    var d = new Date();
    // suma els dies recollits per paràmetre a la data actual
    d.setTime(d.getTime() + (exDays*24*60*60*1000));
    // es concatena la cadena de text com a UTC per a crear la galeta
    var expires = "expires=" + d.toUTCString();
    // crea la galeta
    document.cookie = nomGaleta + "=" + valorGaleta + "; " + expires;
}
// -----------------------------------------------------------------------
/*
* @name: getGaleta
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: Llegeix una galeta per a la gestió de la sessió de login
* @date: 19/12/19
* @params:  nomGaleta(nom de la galeta)
* @return: none
*/
function getGaleta(nomGaleta){

    var nom = nomGaleta + "=";
    var arrayGaleta = document.cookie.split(";");

    for (var i = 0; i < arrayGaleta.length; i++) {
        var c = arrayGaleta[i];
        while (c.charAt(0)== " ") {
            c = c.substring(1);
        }
        if(c.indexOf(nom) == 0){
            return c.substring(nom.length, c.length);
        }
    }
    return "";
}
