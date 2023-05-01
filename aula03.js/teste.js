
let io = require("../io")

let num;

// Atribuição de um valor para a variável usando o símbolo =
num = 0;

// Escrita do valor da variável no console usando write
io.write("O valor de num é: " + num);

// Leitura do valor da variável a partir da entrada do usuário usando readInt
let userNum = io.readInt("Digite um número: ");

// Comparação do valor lido com o valor da variável usando o operador ==
if (userNum == num) {
  // Se os valores forem iguais, escreva no console usando write
  io.write("Os valores são iguais.");
} else {
  // Se os valores forem diferentes, escreva no console usando write
  io.write("Os valores são diferentes.");
}

// Seleção de um elemento HTML usando o seletor #
const divElement = document.querySelector("#myDiv");

// Verificação se o elemento foi encontrado usando o operador !=
if (divElement != null) {
  // Se o elemento for encontrado, escreva no console usando write
  io.write("O elemento foi encontrado.");
} else {
  // Se o elemento não for encontrado, escreva no console usando write
  io.write("O elemento não foi encontrado.");
}