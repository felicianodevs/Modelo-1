let io = require("../io")

let ladomaior
let lado1
let lado2
let soma

io.write("escreva o maior numero")
ladomaior = io.readInt()
io.write("escreve um numero")
lado1 = io.readInt()
io.write("escreva o outro numero")
lado2 = io.readInt()

soma = lado1+lado2

if(soma<=ladomaior){
io.write("sua formula é um triangulo")
}
else{
    io.write("sua formaula nao é um triangulo")
}