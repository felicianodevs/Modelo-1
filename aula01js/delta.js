let io =require("../io")
let a 
let b
let c
let delta
let x1
let x2
io .write("digite um valor para a")
a=io .readInt()
io .write("digite uma valor para b")
b=io .readInt()
io .write("digite um valor para c")
c=io .readInt()
delta=b**2-4*a*c 
io .write("o valor de delta é"+delta)
x1=(-b+delta**0.5)/(2*a)
io .write("o valor de x1 é "+x1)
x2=(-b-delta**0.5)/(2*a)
io .write("o valor de x2 é "+x2)