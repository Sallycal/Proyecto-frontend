// invertir array

function invertirArray(array){

    let arrayInvertido = [];

    for (let index = array.length -1;index>=0;index--){
        arrayInvertido.push(array[index]);
    }

    return arrayInvertido

}

let miArray =[1,2,3,4,5,6,7,8,9,10,11,12];
document.write("el array original es: ", miArray);

let arrayInvertido = invertirArray(miArray);
document.write("<br>el array invertido es: ", arrayInvertido);