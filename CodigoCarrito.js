var nombre;
var precio;
var unidades;
var botonAñadir;
var articulosCarrito;
var precioTotal;
var pago;
var pagoTarjeta;
var pagoEfectivo;
var condiciones;
var imprimir;
var restablecer;
var aceptarPago;




    

function cargarPago(){
    if(pago.value == "Seleccione"){
        pagoEfectivo.style.display="none";
        pagoTarjeta.style.display="none";
    }else if(pago.value =="tarjeta"){
        pagoEfectivo.style.display="none";
        pagoTarjeta.style.display="block";
    }else{
        pagoEfectivo.style.display="block";
        pagoTarjeta.style.display="none";
    }
}



function inicializar(){
    nombre = document.getElementById("nombre");
    errorNombre = document.getElementById("errorNombre");
    precio = document.getElementById("precio");
    errorPrecio = document.getElementById("errorPrecio");
    unidades = document.getElementById("unidades");
    botonAñadir = document.getElementById("botonAñadir");
    articulosCarrito = document.getElementById("articulosCarrito");
    precioTotal = document.getElementById("precioTotal");
    pago = document.getElementById("pago");
    condiciones = document.getElementById("condiciones");
    imprimir = document.getElementById("imprimir");
    restablecer = document.getElementById("restablecer");
    
    pagoTarjeta = document.getElementById("pagoTarjeta");
    pagoEfectivo = document.getElementById("pagoEfectivo");
    aceptarPago = document.getElementById("aceptarPago");
    
    aceptarPago.style.display="block";
    pagoEfectivo.style.display="none";
    pagoTarjeta.style.display="none";
}

function manejadorEventos(){
    pago.addEventListener("change", cargarPago);
}
window.onload = function(){
    inicializar();
    manejadorEventos();
}