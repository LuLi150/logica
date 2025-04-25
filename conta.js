const readline = require("readline-sync")

let numeros=[]
let numero=null;

while(numero !== 0){
    numero=parseInt(readline.question("digite um numero: "));

    if(numero !== 0) numeros.push(numero);
}

//metodo reduce soma todos os numeros do array
//acc é o acumulador(soma parcial), val é cada numeros do array
let soma = numeros.reduce((acc, val)=> acc + val, 0);

console.log("soma total: ", soma);