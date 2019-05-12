function cambiarDatosById(IdPlaca,tiempo,subtotal){  
    document.getElementById(IdPlaca).getElementsByClassName("tiempoTranscurrido").item(0).innerHTML=tiempo;
    document.getElementById(IdPlaca).getElementsByClassName("subtotal").item(0).innerHTML=subtotal;
}

function addCarta(placa, numeroIdentificacion,tiempoTranscurrido,valorSubtotal) {
    //genera el html necesario para agregar una tarjeta    
    const html = `  
    <div class="tarjeta" id=${placa}>
        <ul>
            <li class="placa">${placa}</li>
            <li class="numeroId">Código: <b class="numeroIdentificacion">${numeroIdentificacion}</b></li>
            <li class="tiempo">Tiempo: <b class="tiempoTranscurrido">${tiempoTranscurrido}</b></li>
            <li class="subtotal">Subtotal <b class="valorSubtotal">$${valorSubtotal}</b></li>
        </ul>
    </div>`;
    document.getElementsByClassName("tarjeta-veiculo").item(0).innerHTML+=html;
}
var placa = "rog524";
var numeroIdentificacion = "15";
var tiempoTranscurrido = "02:05:15";
var valorSubtotal = 19000;


