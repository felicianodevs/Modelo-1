let io = require("../io")

let quantidade
let i

io.write("quantos produtos exibir")
quantidade= io.readInt()
i=1
while (i<= quantidade) {
    io.write("estou imprimindo o produto" + i)
    i++
}