// Agregar estilo con javascript
// const primerTopping = document.querySelector('.topping');
// primerTopping.style.cursor = "pointer";
// primerTopping.style.backgroupColor = "blue";
// primerTopping.style.textTransform = "uppercase";
// console.log(primerTopping.style);

// MANIFESTACION TEXTO DE DOM
// const listaToppings = document.getElementById('lista-topping');
// const title = document.getElementById('titleTopping');

// console.log("innerText->");
// console.log("listaToppings.innerText");

// console.log("textContent ->");
// console.log(listaToppings.textoContent);

// console.log("innerHTML ->");
// console.log(listaToppings.innerHTML);

title.innerText = "Mis Toppings de pizza";

// ATRIBUTOS CON JAVASCRIPT
// const enlace = document.getElementsByTagName('a');

// console.log(enlace[0].getAttribute('href')); //lo que hacemos es acceder al atributo href
// console.log(enlace[0].getAttribute('target')); 

// console.log(enlace[0].removeAttribute('href')); //remueve los atributos
// console.log(enlace[0].removeAttribute('target'));

// console.log(enlace[0]. setAttribute('href', 'https://www.google.com/?hl=')); //modifica los atributos


// console.log(enlace[0]); //referencia

//MODIFICAR CLASES CON JAVASCRIPT

// const primerTopping = document.querySelector('.topping');

// console.log(primerTopping.classList.add('mi-clase'));
// console.log(primerTopping.classList.contains('mi-clase'));
// console.log(primerTopping.classList.remove('mi-clase', 'text-white', 'text-2xl'));

// console.log(primerTopping.classList);

//CREAR ELEMENTOS HTML
// const contains = document.getElementById('contenedor');
// const newTitle = document.createElement('h2');

// newTitle.innerText = "Manipulando el DOM";
// newTitle.classList.add('text-4x1', 'fint-bold', 'text-center');
// container.append(newTitle);

const listaToppings = document.getElementById('lista-toppings');
const newList = document.createElement('li');

newList.classList.add('text-2xl', 'text-white', 'bg-sky-700', 'p-4', 'rounded');
newList.innerText = "PiÃ±a";
listaToppings.append(newList);