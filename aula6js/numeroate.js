let io = require("../io")

let n

io.write("digite um numero")
n=io.readInt()

for(let i=1; i<=n; i++) {
    io.write(i)
}