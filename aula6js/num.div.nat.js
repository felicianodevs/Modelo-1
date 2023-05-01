//Programa de computador para contar o número de divisores que um número natural possui. Este número deverá ser fornecido pelo usuário//





let io = require("../io")

let numero
let quantidadedivisores = 0

io.write("digite um numero para saber a numquantidadenum de divisores")

numero= io.readInt()

for(let i=1; i<=numero; i++) {
    
    
    
    if(numero % i=== 0){ // se o resto da divisao for igual 0 ele executa a funçao abaixo;

        quantidadedivisores = quantidadedivisores + 1 // neste caso pode ser usado a variavel e ++ no final em uma só quantidadnum++"
    }
}
io.write("o numero " + quantidadedivisores)

