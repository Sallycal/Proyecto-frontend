let nombre = prompt ("por favor, ingrese el nombre");
let edad = prompt ("por favor, ingrese la edad");

//convertir la entrada de edad a un numero entero
edad = parseInt (edad);

//determinar si el usuario es mayor de edad
let esMayorEdad = (edad >= 18);

//mensaje de saludo 
let mensajeSaludo;

// Mostrar un mensaje de saludo personalizado en función de si el usuario es mayor de edad o no
if (esMayorEdad){
    mensajeSaludo = "¡hola, " + nombre + " bienvenido! Eres mayor de edad.";

}else{
mensajeSaludo = "¡hola, " + nombre + " bienvenido! Eres menor de edad.";
}

//mostrar el mensaje de saludo en la consola del navegador
console.log (mensajeSaludo)




