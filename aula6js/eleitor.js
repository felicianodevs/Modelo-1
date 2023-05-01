// Escreva um programa de computador para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.//

let io = require("../io")

let brancos = 0
let nulos = 0
let validos = 0
let total = 0

let percvalidos = 0
let percnulos = 0
let percbrancos = 0

io.write("Informe o total de votos ")
total = io.readFloat()


io.write("Informe os votos brancos")
brancos = io.readFloat()


io.write("Informe os votos nulos")
nulos = io.readFloat()


validos = total - nulos - brancos


percnulos = (nulos / total) * 100 // em parentese resolve primeiro depois fora
percbrancos = (brancos / total) * 100
percvalidos = (validos / total) * 100

io.write("o percentual de votos validos é "+ percvalidos+"%")

io.write("O percentual de votos brancos" + percbrancos+"%")

io.write("o percentual de votos nulos é "+ percnulos+"%")















