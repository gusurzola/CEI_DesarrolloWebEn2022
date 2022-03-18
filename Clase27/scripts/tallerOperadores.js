/**
 * 4 numeros
 * 
 * resultado 1= sumar todos los numeros
 * resultado 2= sumar 2 numeros y multiplicar por la suma de los otros 2
 * resultado 3= sumar 3 numeros y lo dividen por el otro
 * 
 * SI resultado 1 es mayor que resultado 2
 * SI resultado 2 es menor que resultado 3
 * 
 * Si resultado 1 es mayor o igual a la suma de resultado 2 + resultado 3
 * 
 * Si la suma de resultado 1 + resultado 2 es mayor a la multiplicación de resultado 3 * resultado 2 && resultado 3 es igual a resultado 1
 * 
 * Si resultado 1 es estricamente igual a la suma de resultado 2 + resultado3 || resultado3 < resultado 2
 * 
 * Todos los resultados deben ir en console.log usando template strings
 * 8 Mensajes console.log
 * 
 */

let num1 = 10
let num2 = 2
let num3 = 3
let num4 = 5
/*Operadores*/
let result1= num1 + num2 + num3 + num4
let result2 = (num1 + num2)*(num3 + num4)
let result3 = (num1 + num2 + num3)/num4
/*Comparación*/
let comp1 = result1 > result2
let comp2 = result2 < result3
let comp3 = result1 >= (result2 + result3)
/*Lógicos*/
let logic1 = ( (result1 + result2) > (result3 * result2) ) && (result3 == result1)
let logic2 = (result1 === (result2 + result3)) || (result3 < result2)
/*Mensajes*/
console.log(result1)
console.log(result2)
console.log(result3)
console.log(comp1)
console.log(comp2)
console.log(comp3)
console.log(logic1)
console.log(logic2)