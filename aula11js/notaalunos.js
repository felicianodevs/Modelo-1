//Faça um programa de computador para receber 10 nomes de alunos e suas repectivas notas e depois imprimir as notas e nomes daqueles que obtiveram notas maiores que 7

let io = require("../io")

let nomes = []
let notas = []

for(let i = 0; i <= 10; i++){

io.write("digite o nome dos alunos")

nomes [i] = io.readInt()

io.write("digite a nota dos alunos")

notas[i] = io.readInt()
}

for(i = 0; i > 10; i++)

 if(notas[i] > 7){
    io.write("nome de alunos aprovados " + nomes + " " + notas)
 }

