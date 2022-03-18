/**
 * Diseñar el sistema de una tienda de lo que sea
 * 
 * Declarar 7 variables
 * 2 const - 4 let - 1 var
 * const (array = 5), string
 * let (objeto (array = 5)5 variables), number , boolean , string
 * var = tipo que quieran
 * *Todas las van a declarar y despues inicializar
 * Imprimir en consola uno o mas mensajes que me muestren todas las variables
 * 
 * console.log('El resultado de', x ,' ',y,'es =',resultado)
 */

//Declarar Variables

let clientes
let promo
let apertura
let mensaje
var clima

//Inicializar Variables

const nombreTienda = "Mascotas de tu Esquina"
const servicios =["peluqueria","comida","veterinaria","guarderia","paseo"]

promo = 1
apertura = true
mensaje = "la promoción de este mes es de los paseos"
clima = "soleado"
clientes =[ 
    {   
        nombre: "Lassie",
        edad: 2,
        dueño: "Juan Perez",
        contacto: "465789456",
        vacunas: true
    },
    {   
        nombre: "Doki",
        edad: 3,
        dueño: "Pablo Perez",
        contacto: "465789456",
        vacunas: true
    },
    {   
        nombre: "Roxie",
        edad: 4,
        dueño: "Richard Perez",
        contacto: "465789456",
        vacunas: false
    },
    {   
        nombre: "Jerox",
        edad: 1,
        dueño: "Andres Perez",
        contacto: "465789456",
        vacunas: true
    },
    {   
        nombre: "Lulu",
        edad: 1,
        dueño: "Juan Lopez",
        contacto: "34545654",
        vacunas: true
    },

]


//Mensajes en Consola

console.log("Ven a tu nueva tienda:",nombreTienda," ", "Donde tenemos los siguientes servicios para ti:",servicios[0],servicios[1],servicios[2],servicios[3],servicios[4])
console.log(mensaje,"y tiene un costo de:",promo, "ahora estamos abiertos",apertura,"y el cima esta",clima)
console.log("El ganador de un servicio gratis es:",clientes[3].nombre, "de edad",clientes[3].edad,"años")
