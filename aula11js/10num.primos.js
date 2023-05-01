//Faça um programa de computador para receber 10 números e depois imprimir os primos.

let io = require("../io")

let num                //Nessas linhas, estamos declarando duas variáveis num e div. 
                        //A primeira irá armazenar o número que o usuário irá digitar 
                        //para verificar se é primo ou não, e a segunda irá armazenar a quantidade de divisores do número.
let divisores = 0;




io.write('Digite um número para verificar se ele é primo:')
  num = io.readInt();
//Nessas linhas, estamos utilizando o objeto io para exibir uma mensagem para o usuário solicitando que ele digite um número para verificar se é primo ou não. Em seguida, estamos armazenando o número digitado pelo usuário na variável num.


for(let i = 1 ; i <= 10; i++)
   if(num % i == 0){
   	divisores++;
   }

  if(divisores===2){
   io.write("É primo");
  }
  else{
  	io.write("Não é primo");
  }

    //Claro! Quando dizemos que um número a é divisível por um número b, queremos dizer que a divisão de a por b tem resto igual a zero. Por exemplo, se a = 15 e b = 3, temos que a é divisível por b, pois 15 ÷ 3 = 5 e o resto da divisão é zero.

    //No código que você postou, estamos verificando se o número num é divisível pelo número i. Ou seja, estamos verificando se num dividido por i tem resto igual a zero. Se o resto da divisão for zero, significa que num é divisível por i.
  
    //Por exemplo, imagine que o usuário tenha digitado o número 12. O loop for irá verificar se 12 é divisível pelos números de 1 a 10. Na primeira iteração, i é igual a 1, então o código verifica se 12 ÷ 1 tem resto igual a zero. Como isso é verdadeiro, a variável div é incrementada em 1. Na segunda iteração, i é igual a 2, então o código verifica se 12 ÷ 2 tem resto igual a zero. Como isso é verdadeiro, a variável div é incrementada em 1 novamente. E assim por diante, até que o loop seja finalizado.
  
    //No final do loop, a variável div irá armazenar a quantidade de divisores que o número digitado pelo usuário possui. Se essa quantidade for igual a 2, significa que o número é primo. Caso contrário, significa que ele não é primo.
  
  
  
  
  
  





