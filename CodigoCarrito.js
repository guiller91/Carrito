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
var sumaPrecio;
var sumaTotal = 0 ;
var errorTitular;
var errorTarjeta;
var errorCvv;
var nombreTarjeta;
var numTarjeta;
var cvv;
 
function validarArticulo(){
    
    let validarPrecio = /^\d+([,.]\d{1,2})?$/;
    var error = 0;
    if (nombre.value==""){
        errorNombre.innerHTML= "Falta artículo";
        nombre.focus();
        error++;
    }
    if(!validarPrecio.test(precio.value)){
        errorPrecio.innerHTML= "introduzca un precio valido";
        precio.focus();
        error++;
    }
    if(precio.value == ""){
        errorPrecio.innerHTML= "Falta precio";
        precio.focus();
        error++;
    }
    if(error==0){
        añadirCompra();
    }
        
}

function validarPago(){
    
    let validarNumero = /^\d{16}$/;
    let validarCvv = /^\d{3}$/;
    var error = 0;

    if(pago.value=="Seleccione"){
        alert("Porfavor eliga un metodo de pago");
        error++;
    }
    if(pago.value=="tarjeta"){
        if(nombreTarjeta.value == ""){
            errorTitular.innerHTML = "Introduca un nombre";
            error++;
        }else{
            errorTitular.innerHTML = "";
        }
        if(numTarjeta.value ==""){
            errorTarjeta.innerHTML ="introduzca numero";
            error++;
        }else{
            errorTarjeta.innerHTML = "";
        }
        if(!validarNumero.test(numTarjeta.value)){
            errorTarjeta.innerHTML = "introduzca numero valido";
            error++;
        }else{
            errorTarjeta.innerHTML = "";
        }
        if(cvv.value =="" ){
            errorCvv.innerHTML = "Introduzca un codigo";
            error++;
        }else{
            errorCvv.innerHTML = "";
        }
        if(!validarCvv.test(cvv.value)){
            errorCvv.innerHTML = "Introduzca un codigo valido";
            error++;
        }else{
            errorCvv.innerHTML = "";
        }
    }
    if (error==0){
        imprimirPago();
    }
}

function imprimirPago(){
    alert("Los articulos del carrito son: " + articulosCarrito.value);
}

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

function añadirCompra(){
    if(articulosCarrito.value ==""){
        articulosCarrito.value = nombre.value;
    }else{
        articulosCarrito.value=articulosCarrito.value.concat(", ",nombre.value);
    }    
    sumaPrecio = precio.value * unidades.value;
    sumaTotal+=sumaPrecio;
    precioTotal.value = sumaTotal; 
    nombre.value = "";
    precio.value = "";
    unidades.value = 1;
       
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
    errorTitular = document.getElementById("errorTitular");
    errorTarjeta = document.getElementById("errorTarjeta");
    errorCvv = document.getElementById("errorCvv");
    nombreTarjeta = document.getElementById("nombreTarjeta");
    numTarjeta = document.getElementById("numTarjeta");
    cvv = document.getElementById("cvv");
    
    aceptarPago.style.display="block";
    pagoEfectivo.style.display="none";
    pagoTarjeta.style.display="none";

    nombre.focus();
    imprimir.disabled = true;   
}

function activadorCondiciones(){
    if(condiciones.checked == true){
        imprimir.disabled = false;
    }else{
        imprimir.disabled = true;
    }
}

function manejadorEventos(){
    pago.addEventListener("change", cargarPago);
    botonAñadir.addEventListener("click",validarArticulo);
    condiciones.addEventListener("change",activadorCondiciones);
    imprimir.addEventListener("click", validarPago);
}
window.onload = function(){
    inicializar();
    manejadorEventos();
}