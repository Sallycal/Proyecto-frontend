//Deben crear una función por cada operación aritmética, es decir, cada
//función debe ejecutar una operación matemática.

//funcion para suma
function suma (a, b = 20){
    return a + b;
}
const resultado1 = suma (5, 10)
console.log(resultado1);


//funcion para resta
function resta (a, b = 6){
    return a - b;
}
const resultado2 = resta(8, 5)
console.log(resultado2);


//funcion para multiplicacion
function multiplicacion (a = 4, b){
    return a * b;
}
const resultado3 = multiplicacion (20, 2)
console.log(resultado3);


//funcion para division
function division (a = 10, b){
    return a / b;
}
const resultado4 = division (20, 5)
console.log(resultado4);

