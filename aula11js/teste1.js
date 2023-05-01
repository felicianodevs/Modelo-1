    let io = require("../io")   
    
    // Array de números
    let numeros = [10, 5, 15, 20, 25];

    // Variável para armazenar a soma dos números
    let soma = 0;
    
    // Loop for para percorrer o array e somar os números
    for (let i = 0; i < numeros.length; i++) {
      let numero = numeros[i]; // a variavel numero recebe um de cada vez, acumulando eles sem soma.
      // a soma só acontece na linha abaixo.
      
      soma += numero; // Adiciona o valor da Array somando os número atuais à variável "soma"
    }
    
    // Calcula a média dos números
    let media = soma / numeros.length;
    
    
    console.log("A média dos números é:", media);