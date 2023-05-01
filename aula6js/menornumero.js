let io = require("../io")

let numeroinf
let menorNumero = 999

for(let i = 0; i <= 10; i++){

  io.write("digite um numero")
  numeroinf = io.readInt()

  if(numeroinf < menorNumero){
    menorNumero = numeroinf
  }

}

io.write("o menor numero é " + menorNumero) 