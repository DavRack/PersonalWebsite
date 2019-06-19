function actualizarEncriptar(){
    clear();
    var texto = document.getElementById("text-in").value;
    var k = parseInt(document.getElementById("k-in").value);
    var salida = encriptar(texto,k);
    document.getElementsByClassName("salida-unica").item(0).innerHTML+=`<p>"${salida}"</p>`;
}
function actualizarDecriptar(){
    clear();
    var texto = document.getElementById("text-in").value;
    var k = parseInt(document.getElementById("k-in").value);
    var salida = decriptar(texto,k);
    if (k == 0){decriptarBF(texto)}
    else{document.getElementsByClassName("salida-unica").item(0).innerHTML+=`<p>"${salida}"</p>`}
}
function encriptar(texto,k){
    clear();
    var output = "";
    var index = 0;
    for (var i = 0; i < texto.length; i++) {
        index = caracteres.indexOf(texto.charAt(i));
        if (index+k < caracteres.length){index = index+k;}
        else{index = index+k-caracteres.length;}
        output += caracteres[index];
    }
    return output;
}
function decriptar(texto,k){
    var output = "";
    var index = 0;
    for (var i = 0; i < texto.length; i++) {
        index = caracteres.indexOf(texto.charAt(i));
        if (index-k >= 0){index = index-k;}
        else{index = caracteres.length+index-k;}
        output += caracteres[index];
    }
    return output;

}
function decriptarBF(texto){
    var test=""
    for (var k = 1;k<=caracteres.length-1;k++){
        test=decriptar(texto,k);
        for (const articulo of articulos){
            if (test.split(" ").includes(articulo)){
                document.getElementsByClassName("resultado").item(0).innerHTML+=`<h4>"${test}"    k=${k}</h4>`;
                break;
            }
        }
    }
}
function clear(){

    document.getElementsByClassName("resultado").item(0).innerHTML='<h4 class="salida-unica"></h4>';

}
var caracteres = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z',' '];
var articulos = ["el", "la", "los", "las"]

