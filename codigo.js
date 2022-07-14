//creamos nuestra plantilla de humanos

class Humano {
    constructor(nombre = " ", apellido = " ", edad = 1, peso = 1) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.peso = peso
    }
}

//creamos las 3 funciones que usaremos al final

function buscarNombre(humanos) {
    let nombreHumano = prompt("Ingrese el nombre de su humano")

    let nombreBuscado = humanos.find(humanosCreados => humanosCreados.nombre == nombreHumano)

    if(nombreBuscado == undefined) {
        alert("Humano no encontrado")
    } 

    else {
        console.log(nombreBuscado)
    }
}

function buscarApellido(humanos) {
    let apellidoHumano = prompt("Ingrese el apellido de su humano")

    let apellidoBuscado = humanos.find(humanosCreados => humanosCreados.apellido == apellidoHumano)

    if(apellidoBuscado == undefined) {
        alert("Humano no encontrado")
    } 

    else {
        console.log(apellidoBuscado)
    }
}

function ordenarHumanos(humanos) {

    let metodoOrdenar = parseInt(prompt("Ingrese 1 para ordenar de menor a mayor, 2 para ordenar de mayor a menor"))

    if(metodoOrdenar === 1 ) {
        console.log(humanos.sort((a,b) => a.edad - b.edad))
    } 
    else if (metodoOrdenar === 2) {
        console.log(humanos.sort((a,b) => b.edad - a.edad))
    }

}

//creamos un array vacio para que el usuario lo llene con datos

const humanos = []

//creamos las variables que las rellenaremos despues

let nombre, apellido, edad, peso, continua, respuesta

//creamos ciclos donde el usuario ingresara datos

do {

    do {
        alert(`Bienvenido al cielo :)
        - cree humanos con las caracteristicas solicitadas
        - cree 2 o mas humanos para poder usar las funciones correctamente
        `)

        nombre = prompt("Ingrese el nombre de su humano").toLowerCase()
        apellido = prompt("Ingrese el apellido de su humano").toLowerCase()
    } while((nombre.length == 0 || apellido.length == 0))

    do {
        edad = parseInt(prompt("Ingrese la edad de su humano"))
        peso = parseInt(prompt("Ingrese el peso de su humano, en KG"))
    } while ((isNaN(edad) || isNaN(peso) || (edad <= 0 || peso <= 0)))
    
    const humanosCreados = new Humano(nombre, apellido, edad, peso)
    humanos.push(humanosCreados)

    continua = prompt(`¿Quiere crear otro humano? "si" o "no"`).toLowerCase()

} while (continua != "no")

console.log(humanos)

//creamos otras interacciones donde implementamos las funciones con los metodos

do {
    respuesta = parseInt(prompt(`Ingrese 1 para:
    1- Buscar por nombre
    2- Buscar por apellido
    3- Ordenar de menor a mayor (edad)
    `))
} while(respuesta <1 || respuesta >3)

switch(respuesta) {
    case 1:
        buscarNombre(humanos)
        break
    case 2:
        buscarApellido(humanos)
        break
    case 3:
        ordenarHumanos(humanos)
        break
    default:
        alert("Algo salio mal :(")
}