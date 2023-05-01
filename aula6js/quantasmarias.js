let io = require("../io")
let nome

let quantidade=0

for(let count = 0; count <=10; count++ ) {
    io.write("Escreva um Nome")
    nome=io.read()

    if(nome=="maria"){
        
        quantidade++
    }
    
    }
    io.write("o nome maria foi digitado" + +quantidade)

