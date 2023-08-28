// this is a js file
// Gustavo Gonçalves da Rosa
// exercicio 1
const bool1 = true
const bool2 = false
const bool3 = !bool2  /false/

let resultado = bool1 && bool2
console.log("a. ", resultado)  /* false*/

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) /* false*/

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado) /* verdadeiro */

console.log("d. ", typeof resultado) /* boolean*/

// exercicio 2
let primeiroNumero = Number(prompt("Digite um numero!")) /seria impresso 55 em vez de 10 na soma de 5+5/
let segundoNumero = Number(prompt("Digite outro numero!"))/* aonde vai colocar o numero, esta para ser em string entao ele nao ira somar tem que mudar para number*/

const soma = primeiroNumero + segundoNumero

console.log(soma)




// exercicio 1

let ida = Number( prompt("sua idade é?"))
let idad = Number( prompt("qual a idade do(a) seu melhor amigo(a)?"))

console.log(ida, idad)

maior = ida > idad
console.log(maior)

// exercicio 2
let par = Number(prompt("insira um número par"))

console.log(par % 2) /*todos os números pares dao 0 */  /*se inserir um número impar vai aparecer no console em vez do 0 o número 1 */

// exercicio 3

let anos = prompt("quantos anos voce tem?")

console.log(anos * 12)
console.log(anos * 30)
console.log(anos * 24)

// exercicio 4

let umNumero = Number(prompt("insira um número"))
let umNumero2 = Number(prompt("insira outro número"))

console.log(umNumero > umNumero2)
console.log(umNumero === umNumero2)
console.log(Boolean(umNumero % umNumero2));
console.log(Boolean(umNumero2 % umNumero))

console.log("desafiossssssssssssssssssssssss")
// desafios

let calculo = ((77 - 32) * (5/9) + 273.15)
console.log("em Kelvin", calculo)


let calculo2 = ((80) * (9/5) + 32)
console.log("em fahrenheit", calculo2  )

let calculo3 = ((30) * (1.8) + 32)
let calculo33 = (30 + 273.15 )
console.log("fahrenheit", calculo3,"Kelvin", calculo33)

let escolha = Number (prompt("escolha um número em graus celsios"))

let calculo4 = ((escolha) * (1.8) + 32)
let calculo44 = (escolha + 273.15 )
console.log("para fahrenheit", calculo4,"para Kelvin", calculo44)


// 2

let quilowatts = 0.05
let residencia = 14

console.log(quilowatts * 280)
console.log(residencia / 100 * 15)

// 3

let calculoo = (20 * 0.45359237)
console.log("de libras para kg", calculoo)

let calculoo2 = (10.5 * 0.0283495)
console.log("de onça para kg", calculoo2)

let calculoo3 = (100 *  1.609)
console.log("de milha para metros", calculoo3)

let calculoo4 = (50 *  0.3048)
console.log("de pes para metros", calculoo4)

let calculoo5 = (103.56 * 4.4)
console.log("de galao para litros", calculoo5)

let calculoo6 = (450 * 0.24)
console.log("de xicara para litros", calculoo6)

let calculoo7 = (50 *  0.3048)
console.log("de pes para metros", calculoo7)

let medir = Number (prompt("coloque uma medida em pés"))
let resul = (medir *  0.3048)
console.log("sua escolha de pes para metros ", resul)
