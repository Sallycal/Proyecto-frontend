//pide al usuario que ingrese el valor del producto, si el usuario es mayor  de 18 años se le
 //aplica un descuento de 10%; de los contrario, no se aplica ningun descuento.
 
 //valorProducto = $100
 //edad > 18

 //que operacion tenemos que hacer para determinar el descuento?
 //descuento = 100.000 * 0.10
 //precioConDescuento * valorProducto = descuento

 let valorProducto = parseInt (prompt("ingresa el valor de 100"))
 let edad = parseInt (prompt("ingresa su edad"))

 if(edad >=18){
    let descuento = valorProducto * 0.10;
    let precioConDescuento = valorProducto - descuento;
    console.log ("se le aplica el descuento $(precioConDescuento")
 }else{
    console.log ("no se le aplica el descuento.");
 }

