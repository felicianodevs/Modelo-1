let io = require("../io")


let ano
let resto

io.write("digite o ano")
ano= io.readInt()

resto=ano % 4 //PERCENTUAL É O RESULTADO DE UMA DIVISAO// quando sera feito uma divisao entreo o numero do read e um resto


if (resto==0){ // divisao que da quebrada sera resto, sendo diferente de zero, a divisao sera quebrada
    io.write("seu ano é bisexto")

}
else{
    
    io.write("seu ano nao é bisexto")
}


