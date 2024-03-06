//Programa una función que invierta las palabras de una cadena de texto, pe.
//miFuncion("Hola Mundo") devolverá "odnuM aloH".

//function invertirTexto (texto){
    //let caracteres = texto.split('');
    //let textoInvertido =  '';

    //for (let index = caracteres.length -1;index>= 0;index--){
      //  textoInvertido +=caracteres[index];
  //  }
    //return textoInvertido;

//}

//let texto = "hola mundo";
//console.log("el texto original es: ", texto);

//let textoIntertido = invertirTexto(texto);
//console.log("el texto invertido es: ", textoIntertido)

//Programa una función para contar el número de veces que se repite una palabra
//en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2

// let texto = "hola mundo adios mundo"; // Definición de la variable fuera de la función
// function contarPalabra (texto, palabra){
    
//     let palabras = texto.split(/\s+|\b/);
//     let coteoPalabras = 0;

//     for (let index = 0; index < palabras.length; index++) {
//         if (palabras[index] === palabraABuscar) {
//             contador++;

//         }
//     }
    //return contador; 

    //let palabraABuscar = "mundo";
    //let contador = contarPalabra(texto, palabraABuscar);
  //  console.log(`La palabra "${palabraABuscar}" aparece ${contador} veces en el texto.`);

//}


//function esPalindromo(palabra) {
    // Eliminamos los espacios en blanco y convertimos a minúsculas
    //palabra = palabra.toLowerCase().replace(/ /g, '');

    // Obtenemos la palabra invertida
   // let palabraInvertida = palabra.split('').reverse().join('');

    // Comparamos la palabra original con la palabra invertida
 //   return palabra === palabraInvertida;
//}

// Ejemplo de uso
//console.log(esPalindromo("Salas")); // Devuelve true


//Vamos a crear una clase llamada RedSocial para modelar una red social básica. Esta
//clase tendrá los siguientes atributos y métodos:

class RedSocial {
    constructor (nombre){
        this.nombre = nombre;
        this.usuario = [ ];
        this.publicaciones = [ ];
    }
     registrarusuario(nombreUsuario){
        this.usuario.push(nombreUsuario)
        return `${nombreUsuario} Usuario registrado`;
}

}
const redSocial = new RedSocial("instagram");

redSocial.registrarusuario("sally");

main.innerHTML = JSON.stringify(redSocial);

console.log (redSocial.registrarusuario("sally"));