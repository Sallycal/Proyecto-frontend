//Declarar la funcion
function miPrimeraFuncion(nombre = "desconocido", edad = 0){

    console.log("uno");
    return edad;
    console.log("dos");
    console.log("tres");
    console.log(`mi nombre es $(nombre") y tengo $(edad) años`)
    return "mensaje dos - mi nombre es $(nombre) y tengo $(edad)"
}

//Invocar
let variablePrueba = miPrimeraFuncion("jose", 20);
console.log(variablePrueba);

//Funcion declarativa
//soyUnaFuncionDeclarativa();

function soyUnaFuncionDeclarativa(){
    console.log(`funcion declarativa puede ser utilizada en varias parte del programa`)
}

soyUnaFuncionDeclarativa();

//Funciones ananimas o expresivas
//soyUnaFuncionAnonima();
const soyUnaFuncionAnonima = () => {
    console.log(`estas se utilizan cuando se necesita crear una funcion que no sera utilizada e tra parte del programa o cuando la tarea sea muy simple `)
}

function resta (a = 0, b = 0){
    for (let index = 1; index < b; index++) {
        const element = `1 - ${index} = ${1 - index}`;
        return 1 - 1
        console.log + (resta(10))
    }
}