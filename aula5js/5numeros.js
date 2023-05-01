let io = require("../io")

let n1
let contador = 0
let guardar = 0


while(contador < 12)
{
    io.write("escreva um numero")
    n1=io.readInt()
    contador++
    guardar=guardar+n1 


}

let media = guardar/12
io.write( media)


