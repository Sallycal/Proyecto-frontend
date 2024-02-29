class Animal {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    obtenerInformacion(){
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`)
    }

    cumpioAnio(){
        return this.edad + 1;
    }
}
const mini = new Animal("mini", 100);
const scooby = new Animal("scooby Doo", 200);

console.log(scooby.obtenerInformacion())
console.log(scooby.cumpioAnio())

class Gato extends Animal {
    constructor(nombre, edad, raza, colorPelo, genero){
        super(nombre, edad);
        this.raza = raza;
        this.colorPelo = colorPelo;
        this.genero = genero;
    }

    maullar(){
        return `mi gato $(this.nombres) esta maullando.`;
    }

    cazar(){
        return `mi gato $(this.raza) le dicen el exterminador.`;
    }
}
const animal = new Animal("tigre", 3);
const gato = new Gato("Lulu", 4, "chichi", "cafe", "hembre");

console.log(animal);
console.log(gato.obtenerInformacion());


class Carro extends Carro {
    constructor(color, kilometro, marca){
        super(color = color);
        this.kilometro = kilometro;
        this.marca = marca;
    }
    obtenerInformacion(){
        return `la marca del carro es ${this.marca} y es de color ${this.color}`
    }
}
const carro = new Carro("negro", "120", "mercedes");
console.log(carro.obtenerInformacion());

