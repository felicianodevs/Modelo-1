let io=require("../io")
let numero1
let numero2

let total
io.write("digite um numero")
numero1=io.readInt()//INT serve para ler numeros inteiros
io.write("Digite outro numero") 
numero2=io.readInt()
total=numero1 + numero2
io.write(total)