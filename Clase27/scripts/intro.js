//Declarar
let num1
let num2
let suma
let resta
let multi
let divi
//Inicializar
num1 = 5
num2 = 4

/*Operadores Aritméticos*/
//SUMA
suma = (num1 + num2)
console.log('La suma de',num1,'+',num2,'es igual a:',suma)
//RESTA
resta = (num1 - num2)
console.log('La resta de',num1,'-',num2,'es igual a:',resta)
//MULTIPLICAR
multi = (num1 * num2)
console.log('La multiplicación de',num1,'*',num2,'es igual a:',multi)
//DIVISIÓN
divi = (num1 / num2)
console.log('La división de',num1,'/',num2,'es igual a:',divi)

//CONCATENACIÓN

let Nombre = "Gustavo"
let apellido = "Urzola"
let edad = 34
let nombreCompleto

nombreCompleto = Nombre + " " + apellido  + " tiene " +  edad + " años"

console.log(nombreCompleto)

//Template String
let miNombre = `Mi nombre es ${Nombre} y mi apellido es ${apellido} y tengo ${edad} años`
console.log(typeof miNombre,miNombre)

/*           OPERADORES DE COMPARACIÓN       */
let valor1 = 10
let valor2 = "10"
let result
let resultEs
let resultDif
let restultEsDif
//Es igual ==
result = valor1 == valor2
console.log("es igual",result)
//Estrictamente igual ===
resultEs = valor1 === valor2
console.log("es estrictamente igual",resultEs)
//Diferente !=
resultDif = valor1 != valor2
console.log("es diferente",resultDif)
//Estrictamente Diferente !==
restultEsDif = valor1 !== valor2
console.log("es estrictamente diferente",restultEsDif)

/*           OPERADORES DE COMPARACIÓN ....      */

let numA = 20
let numB = 20
//Mayor que >
let mayor = numA > numB
console.log("es mayor que",mayor)
// Menor que <
let menor = numA < numB
console.log("es menor que",menor)
//Mayor o Igual que >=
let mayorigual = numA >= numB
console.log("es mayor o igual que",mayorigual)
//Menor o Igual que <=
let menorigual = numA <= numB
console.log("es menor o igual que",menorigual)


/*           OPERADORES LÓGICOS ....      */

let a = 20
let b = 10
let c = 30

//Saber si a es mayor que b Y b es mayor que c
//                  AND &&

let respD = (a > b) && (b > c)
console.log(`¿${a} es mayor que ${b} Y ${b} es mayor que ${c}?`,respD)
//Saber si a es mayor que b O b es mayor que c
//                   OR ||
let respOr = (a > b) || (b > c)
console.log(`¿${a} es mayor que ${b} O ${b} es mayor que ${c}?`,respOr)

let texto1= "Juan"
let texto2 = "Juan"
let textoIgual = texto1 == texto2
console.log(textoIgual)



