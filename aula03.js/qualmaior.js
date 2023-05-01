let io = require("../io")

let numero
let outronumero
io.write("escreva um numero")
numero = io.readInt()
io.write("escreva o segundo numero")
outronumero = io.readInt()
if(numero>outronumero ){
    io.write("o numero é menor que ")
}
else{
    io.write("o numero nao é MENOR")
}
