//Faça um programa de computador que recebe do usuário 10 números e depois imprime os pares e depois os ímpares

let io = require("../io")

let numeros = []
let par = []
let impar = []


for (let i = 0; i < 10; i++){

    io.write("digite um numero")
    numeros [i] = io.readInt()


    if (numeros  % 2 === 0 ){
        par.push(numeros[i])
    }
        else{
            impar.push(numeros[i])
        }
    }
    io.write(" numero par " + par)
    io.write(" numero impar " + impar)



         
    