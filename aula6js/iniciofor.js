let io = require("../io")

let total=0

for (let count = 0; count <= 10; count++) {
io.write("O total" + total + "mais" + count)

total = total + count

}
io.write(total)

// o que tiver antes do igual "=" nao tem valor apenas apos a soma do que vier somar apos o "="