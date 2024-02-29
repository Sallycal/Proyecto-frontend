//ejemplo 1

let nombres = ["juan", "maria", "pedro", "ana"];

for (let index = 0; index < nombres.length; index++) {
    const element = nombres [index];
    console.log(element);
}

//ejercicio 2

let palabras = ["hola ", "que ", "tal ", "estas "];
let cadenaConCatenada = palabras.join("");

console.log (cadenaConCatenada);

//ejercicio 3

let persona = [
    {nombre : "maria", edad: 23},
    {nombre : "andrea", edad: 26},
    {nombre: "julieta", edad: 30},
    {nombre: "lucas", edad: 35},
    {nombre: "diana", edad: 40},
];

for (let index = 0; index < persona.length; index++) {
    const element = persona[index];
    console.log(persona[index].nombre);
    
}

