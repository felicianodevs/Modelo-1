// ler o salário atual do usuário
let io = require("../io")


let salarioAtual = 0;
while (isNaN(salarioAtual)) {
  salarioAtual = io.readFloat(prompt("Digite o salário mensal atual: "));
}

// ler o percentual de reajuste do usuário
let percentualReajuste = NaN;
while (isNaN(percentualReajuste)) {
  percentualReajuste = io.readFloat(prompt("Digite o percentual de reajuste: "));
}

// calcular o novo salário
let novoSalario = salarioAtual * (1 + percentualReajuste/100);

// imprimir o resultado na tela
console.log("O novo salário é R$ " + novoSalario.toFixed(2));