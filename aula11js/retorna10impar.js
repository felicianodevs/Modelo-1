let io = require("../io")

let numero = []


for(let i = 0; i < 10; i++){
    io.write("digite um numero")

    let j = io.readInt()

    numero.push(j)
}

for(let i = 0; i < 10; i++){

    for(j = 0; j < 10; j++){

        let aux

            if(numero[i] > numero[i+1]){

            aux = numero[i]

            numero[i] = numero[i+1]

            numero[i+1] = aux
        }

    }
        
}
io.write(numero)

    