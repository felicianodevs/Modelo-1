/* Programa que peça ao  
usuário um número natural e imprima seus divisores*/

let io = require("../io")

let numero
io.write("digite um numero para saber todos os divisores")
numero=io.readInt()

//O operador % representa o módulo da divisão e retorna o resto da divisão de numero por i. Se o resultado for igual a zero, significa que numero é divisível por i, pois não sobra nenhum resto na divisão. Nesse caso, a expressão numero % i === 0 será avaliada como verdadeira e o bloco de código dentro do if será executado//



for(let i=1; i<=numero; i++ ){
// sinal de porcentagem realiza divisao, porem pega o resto dessa divisao

    if (numero % i ==0 ){
    io.write(i)
}

}