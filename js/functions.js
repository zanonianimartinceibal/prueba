var carrito = [];
carrito["acustica"] = 0;
carrito["electrica"] = 0;
carrito["electroacustica"] = 0;

$( "#guardar" ).click(function() {
    console.log("entra a guardar");
    if ($( "#tipo" ).val()=="1"){
        carrito["acustica"]=carrito["acustica"]+($("#cantidad").val()*1500);
        $( "#ventasAcusticas" ).html("$"+carrito["acustica"]);

    }
    else if ($( "#tipo" ).val()=="2"){
        carrito["electrica"]=carrito["electrica"]+($("#cantidad").val()*1500);
        $( "#ventasElectricas" ).html("$"+carrito["electrica"]);
    }
    else if ($( "#tipo" ).val()=="3"){
        carrito["electroacustica"]=carrito["electroacustica"]+($("#cantidad").val()*1500);
        $( "#ventasElectrocusticas" ).html("$"+carrito["electroacustica"]);
    }

});
//impide el envio del formulario
$('#formulario').submit(function () {
    return false;
   });