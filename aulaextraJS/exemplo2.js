let io = require("../io")
let nomes = []

//o for recebe 3 parametros, primero executa uma unica vez antes do bloco de comando entre chaves "{}" 
//o segundo ele testa e se for verdadeiro ele execuca o bloco de comando entre "{}" 
// e o terceiro ele executa a pos o bloco de comando " variavel ++"
for (let n=0; n<=1; n++){
    io.write("escreva um nome")
    //atribua o que o usuario digitou para posiçao "N" de nomes
    nomes[n]=io.read()
     
}
// elemento que tiver dentro de vetor sempre inicia em "0"

    io.write(nomes[1]+ " " +nomes[0]) 
