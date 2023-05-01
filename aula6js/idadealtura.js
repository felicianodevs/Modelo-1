let io = require("../io")

let maioridade=0
let somaalturas=0
let mediaaltura

for(let i=1;  i<= 5; i++){
    io.write("digite a idade da pessoa")
    let idade=io.readInt()

    io.write("digite a altura da pessoa")

    somaalturas = somaalturas + io.readFloat() 
    if (idade > maioridade) {
        maioridade = idade

    }

    }
    mediaaltura=somaalturas/5
    io.write("a media das alturas é "+mediaaltura + " e a maior idade é " + maioridade   )