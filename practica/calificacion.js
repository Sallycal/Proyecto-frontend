let calificacion = prompt("¿Cual fue tu calificacion?");

calificacion = parseInt (calificacion);

let aprobado = (calificacion>= 60);

//variable de mensaje de calificacion
let mensajeCalificacion;

if (aprobado){
    mensajeCalificacion = "¡hola, tu calificacion de la materia es aprobado"
}else{
    mensajeCalificacion = "¡hola, tu calificacion de la materia no es aprobado"
}

document.write(mensajeCalificacion);


let year = parseInt(prompt("ingrese el año"));
if((year % 4 --- 0 && year % 100))