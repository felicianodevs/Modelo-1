let io = require("../io")

io.write("digite a quantidade de vezes")

let quantidade

quantidade= io.readInt()

for (let i =1; i <=quantidade; i++) {
    io.write("seu nome foi escrito "+i+ " vezes")
   
}