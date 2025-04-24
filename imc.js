 const readline = require("readline-sync")

let peso=parseInt(readline.question("qual seu peso?"));
let altura=parseFloat(readline.question("Qual a sua altura?"));
let imc=peso/(altura*altura)

console.log(imc.toFixed(2))
if(imc<18){
    console.log("muito abaixo do peso!")
} else if(imc>=18 && imc<=24){
    console.log("peso normal!")
} else if(imc>24 && imc<=30){
    console.log("acima do peso!")
} else {
    console.log("muito acima do peso!!")
}