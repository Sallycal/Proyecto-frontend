//EJERCICIO N1

//Programa una función que cuente el número de caracteres de una cadena de
//texto, ejmp: miFuncion("Hola Mundo") devolverá 10.

let data = prompt ("escribe una palabra");

function conteoCaracteres(palabra = ""){
    if (palabra === ""){
        console.log("escribe algo!! ")
    }else{
       console.log(`tu palabra es " ${palabra}" y tiene ${palabra.length} letras`);
  }
}
conteoCaracteres(data);

//EJERCICIO N2

//Programa una función que te devuelva el texto recortado según el número de
//caracteres indicados, ejmp: miFuncion("Hola Mundo", 4) devolverá "Hola".

function recortarTexto(texto, caracteres) {
 // Utilizamos el método slice para recortar el texto según el número de caracteres indicados
  return texto.slice(0, caracteres);

 }
console.log(recortarTexto("Hola Mundo", 4)); 

//EJERCICIO N3

//Programa una función que dada una String te devuelva un Array de textos
//separados por cierto carácter, ejmp: miFuncion('hola que tal', ' ') devolverá
//['hola', 'que', 'tal'].

function separarTexto (texto, caracter) {
  // Utilizamos el método split() para dividir el texto en un array utilizando el caracter como separador
let arrayTexto = texto.split(caracter);
return arrayTexto

}
let Texto= 'hola que tal';
let caracter = ' ';
let resultado = separarTexto(Texto, caracter);
console.log(resultado); 

//EJERCICIO N4
//Programa una función que repita un texto X veces, ejmp: miFuncion('Hola
//Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function repetirTexto (text, veces) {
    if (veces <= 0){
    return 'el numero de repeticiones debe ser mayor que 0.';
    }

    let resultado = '';
    for (let index = 0; index < veces; index++) {
        resultado += text;
        if (index !== veces - 1){
            resultado += ' ';
        }
    }
        return resultado;   
}
console.log(repetirTexto('Hola Mundo', 3)); 





