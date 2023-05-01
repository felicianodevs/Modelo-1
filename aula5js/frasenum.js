let io = require("../io")

let numero
let frase
let i
i=1

io.write("escreva um numero")
numero= io.readInt()


io.write("escreva uma frase")
frase=io.read()


while(i<=numero) {
    io.write( frase +" "+ i +   " vezes ")

     i++
}