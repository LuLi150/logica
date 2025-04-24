const readline = require("readline-sync")

const numeros=[]
let resultado=[]

for(let i=1;i<=3;i++){

let numero=Number(readline.question("digite um numero " ))
numeros.push(numero)

}

for(let i=0;i<numeros.length;i++){
   
    let numero=numeros[i]*numeros[i]

    resultado.push(numero)
    console.log(resultado)
}
