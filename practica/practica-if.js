// Conversor de Temperatura:
// Solicita al usuario que ingrese una temperatura en grados Celsius mediante una ventana emergente. 
// Luego, convierte esta temperatura a grados Fahrenheit utilizando la fórmula (C * 9/5) + 32 
// y muestra el resultado en una ventana emergente.

let temp = prompt("ingrese la temperatura celsius: ");

temp = parseInt (temp);

let Fahr = (temp * 9/5) + 32;

document.write("la temperatura en grados fahrenheit es: " + Fahr)
