let io = require("../io")

let numero // primeiro declaro todas os dados (VARIAVEIS)
let total 
io.write ("digite um numero") // mesma coisa que cosole.log //manda pro usuario escrever um numero
numero = io.readInt()  //le o que o usuario escreveu e armazena na variavel numero
total = numero **(1/2)

io.write(`A raiz quadrada de ${numero} é ${total}`)





