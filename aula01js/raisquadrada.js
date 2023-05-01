let io = require("../io")


let numero   
let total 
io.write("digite o numero")
numero = io.readInt()
total = numero**(1/2)
io.write("total é: " + total)
