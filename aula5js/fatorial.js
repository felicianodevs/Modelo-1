let io = require("../io")

let entrada
let fatoracao
let guardar // É O VALOR INICIAO DA EQUAÇAO DE ENTRADA DO USUARIO

io.write("digite um numero")
entrada= io.readInt()

fatoracao= 5 //é o numero a ser iniciado
guardar=entrada

while(guardar>=1) {
        fatoracao = fatoracao*guardar
        guardar--
}
io.write(fatoracao)
