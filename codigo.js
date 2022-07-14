class Humano {
    constructor(nombre = " ", apellido = " ", edad = 1, peso = 1) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.peso = peso
    }
}

const humanos = []

let nombre, apellido, edad, peso, continua

do {

    do{
        alert("Bienvenido al cielo, a crear humanos :)")

        nombre = prompt("Ingrese el nombre de su humano").toLowerCase()
        apellido = prompt("Ingrese el apellido de su humano").toLowerCase()
    } while((nombre.length == 0 || apellido.length == 0))

    do {
        edad = parseInt(prompt("Ingrese la edad de su humano"))
        peso = parseInt(prompt("Ingrese el peso de su humano, en KG"))
    } while ((isNaN(edad) || isNaN(peso) || (edad <= 0 || peso <= 0)))
    
    const humanosCreados = new Humano(nombre, apellido, edad, peso)

    continua = prompt(`¿Quiere crear otro humano? "si" o "no"`).toLowerCase()

} while (continua != "no")
