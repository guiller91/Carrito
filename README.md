# Carrito de la compra

### Miembros del grupo:

- [Iván Gaitán Muñoz](https://github.com/IGaitanM)
- [Miguel Pérez Larren](https://github.com/miguelperezlarren)
- [Guillermo Pérez Arias](https://github.com/guiller91)

### Objetivos

Crear una página web dinámica usando JavaScript que implemente las siguientes especificaciones:

- Añade objetos a un carrito, añadiendo el articulo, su precio y las unidades.
- Cuando se añaden, se volverá al articulo y se reseteara las cajas a su valor por defecto.
- Solo se podrán añadir al carrito si cumplen las condiciones propuestas y de no cumplirlas, informárselo al usuario:
    - Nombre articulo no este vacío
    - Precio sea valido y no este vacío
    - Si algún parámetro falla, se haga focus a dicho parámetro
- Dos formas de pago, mostrándose solo la sección cuando es seleccionada
- El botón de imprimir solo se mostrara activo si se aceptan las condiciones de compra
- Cuando se pulsa el botón imprimir habrá dos posibilidades:
    - Pago correcto: saldrá una alerta indicándonos los artículos, su precio y la forma de pago.
    - Forma de pago no seleccionada: saldrá una alerta indicándonos que tenemos que elegir forma de pago.
    
    ## Extras añadidos
    
- Validar todos los campos del documento

```jsx
function validarPago(){
    
    let validarNumero = /^\d{16}$/;
    let validarCvv = /^\d{3}$/;
    var error = 0;

    if(precioTotal.value==0){
        alert("No hay nada en el carrito");
    }else{
        if(pago.value=="Seleccione"){
            alert("Por favor eliga un metodo de pago");
            error++;
        }
        if(pago.value=="tarjeta"){
            if(!validarNombre.test(nombreTarjeta.value)){
                errorTitular.innerHTML = "Introduca un nombre valido";
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
        if(pago.value=="efectivo"){
             
            if(importeEfectivo.value == ""){
                errorEfectivo.innerHTML = "Introduzca cantidad";
                error++;
            }else{
                errorEfectivo.innerHTML = "";
            }
            if(!validarPrecio.test(importeEfectivo.value)){
                errorEfectivo.innerHTML = "Introduzca cantidad valida";
                error++;
            }else{
                errorEfectivo.innerHTML = "";
            }
        }
        if (error==0){
            imprimirPago();
        }

    }    
}
```

- Validar que el nombre solo acepte Letras y espacios, con el siguiente patrón y que minimo tenga 2 letras

```jsx
let validarNombre = /^[a-zA-Z\s]{2,254}?$/;
```

- Ofrecer al usuario más información a la hora de pagar

```jsx
function imprimirPago(){
    if(pago.value=="efectivo"){
        if(precioTotal.value>importeEfectivo.value){
            
            alert("Le faltan "+(precioTotal.value-importeEfectivo.value)+"€ para llegar al total");
        }else{
            alert("Los articulos del carrito son: " + articulosCarrito.value +"\nEl precio total es: "
            + precioTotal.value +"€" + "\nForma de pago: "+ pago.value+"\nCambio: " +(importeEfectivo.value-precioTotal.value)+"€");
        }
    }else{
        alert("Los articulos del carrito son: " + articulosCarrito.value +"\nEl precio total es: "
        + precioTotal.value +"€" + "\nForma de pago: "+ pago.value);
    }    
}
```

- Añadir pequeñas animaciones mediante css y una biblioteca

```html
<form id="formulario" class="animate__animated animate__zoomInUp">
```

## REPOSITORIO

[GitHub - guiller91/Carrito: Ejercicio de desarrollo de interfaces, en el que hay que crear un carrito de la compra con alguna funcionalidad en js.](https://github.com/guiller91/Carrito)