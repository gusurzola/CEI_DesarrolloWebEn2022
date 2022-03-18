console.log('Hola mundo Javascript')
alert("Hola Mundo Alert desde file")
let x=3
let y=2
let resultado = x+y
console.log('El resultado de', x ,'+',y,'es =',resultado)

// Comentario de Línea

/* Comentario de Bloque
multinea */

/**
 * Funcion para sumar
 * con variables X y Y
 */

/*Tipos de Datos*/

//Number (Cualquier numero positivo o negativo, decimal)
let numero = 10
console.log( "Esto es de tipo", typeof numero , numero )

// String (Cadenas de Texto)

let nombre = "Gustavo"
console.log( "Esto es de tipo", typeof nombre , nombre )

// Boolean (True - False) 0 - 1

let asistencia = false
console.log( "Esto es de tipo", typeof asistencia , asistencia )

//Undefined (Cuando el tipo no esta definido)

let unde = undefined
console.log( "Esto es de tipo", typeof unde , unde )

//Null (Cuando el dato no existe o es nulo)
let nulo = null
console.log( "Esto es de tipo", typeof nulo , null )

//Grupos de Datos

//Array(Arreglos)

let estudiantes = ["Aitana", "Ruben", "Daniel", "Laura","Lisandra"]
let edades = [20,21,23,24,18]

console.log( "Esto es de tipo", typeof estudiantes , estudiantes )

console.log( "Esto es de tipo", typeof edades , edades )

//Acceder al array
console.log(estudiantes[0])
console.log(estudiantes.length)

//Objeto

let alumnosWeb =[ 
    {   
        nombre: "Juan",
        edad: 20,
        correo: "juanperez@gmail.com",
        movil: "603160580",
        asistencia: true
    },
    {   
        nombre: "Pedro",
        edad: 22,
        correo: "pedroperez@gmail.com",
        movil: "603169880",
        asistencia: true
    }
]

console.log( "Esto es de tipo", typeof alumnosWeb , alumnosWeb )
console.log(alumnosWeb[1].movil)

// cs*/

//TIPO DE VARIABLES

//var
var edad

//Const variables constantes que no cambia - variable fija

const moduloWeb = "Lunes a Jueves"
const horario = "19:00 - 22:00"


//Let son variables que pueden llegar a modificar su valor

let name = "Juan"
let age = 20 

//Declarar Variable

let clase
let duracion

//Inicializar Variable
edad = 10
anio = "2022"
clase = "Diseño Web"
duracion = 45
let tiempo = "soleado"
/*Las constantes se deben inicializar desde su creación*/
const escuelas = "CEI"
const anio = "2022"

//Reasignar Variable
duracion = 46
anio = "2023"

/**
 * Diseñar el sistema de una tienda de lo que sea
 * 
 * Declarar 7 variables
 * 2 const - 4 let - 1 var
 * const (array = 5), string
 * let (objeto (array = 5)5 variables), number , boolean , string
 * var = tipo que quieran
 * *Todas las van a declarar y despues inicializar
 * Imprimir en consola uno o mas mensajes que me muestren todas las variable
 * 
 * console.log('El resultado de', x ,' ',y,'es =',resultado)
 */





