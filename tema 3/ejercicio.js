//crea un programa en el cual se dijite una frase y este pueda contarme el numero total 
//de carapteres de la frase o palabra

let data = prompt("escribe una palabra");

function conteoCaracteres(palabra = ""){
    if (palabra === ""){
      console.log("escribe algo !!")
    }else{
    console.log(`tu frase o palabra es "${palabra}" y tiene ${palabra.length}`);
  }
}
conteoCaracteres(data);

//function calculadora (numeroUno, numeroDos, operador){
 //   if (operador === "suma"){
 //       return numeroUno

//    }
//}

//que validaciones deberia tener
//programacion orientada Objecto 