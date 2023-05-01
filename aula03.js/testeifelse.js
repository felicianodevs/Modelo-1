let io = require("../io")

let numero

io.write ("Digite um Numero")
numero=io.readInt()

if  (numero<5){
    io.write("O numero é MENOR que 5")

}

else {
    io.write( "O numero é MAIOR que 5")

}