let io = require("../io")

let numero
io.write("digite um numero")
numero=io.readInt()


for(let i=0; i<=numero; i=i+2){
    io.write(i)
}