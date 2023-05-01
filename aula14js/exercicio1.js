// 10 nomes pelo usuario, apos ele escreve pro usuario ao contrario

let io = require("../io")


let nomes = []

for (let i = 0; i < 3; i++){
        
    io.write("Digite um Nome")
    nomes[i] = io.read()
    
}

for(let i = 2; i >= 0 ; i--){//piemiroo executa uma unica vez, segundo verifica se é verdadeiro, terceiro executa após as duas executarem. sendo de traz pra frente ele coloca o ultimo em primeiro lugar. 

    console.log(nomes[i])
    
}










