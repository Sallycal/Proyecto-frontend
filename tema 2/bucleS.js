//estructura de control de flujo BUCLES

let counter = 0;

//while
while (counter < 10){
    console.log("while" + counter);
    counter++;

    do {
        console.log("do while" + counter);
        counter++;
    }while(counter < 10);
}

//ciclo for
// 1 2 3 4 5 6 7
// 0 1 2 3 4 5 6 
let numero = [10, 20, 30, 40, 50, 60, 70 ];

for (let i = 0; i < 10; i++) {
    console.log("for " + i);

}
    let semana = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
for (let index = 0; index < semana.length; index++) {
    const element = semana[index];
    console.log(element); 
}