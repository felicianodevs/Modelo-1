//Faça um programa de computador para receber preços de 10 produtos e depois imprimir os preços que estão acima da média.




let precos = []
let soma = 0
let media = 0
let acimamedia = []

for(let i = 0; i < 10; i++){

        io.write("Preço do Produto")
    
        precos[i] = io.readFloat() // os valores digitados no "write" sao armazenados no vetor conrrespondente.

        //-------------------------------------

        // some um por um no *=
        soma = soma + precos[i] //  ele acumula a soma dos preços atuais na variavel soma, fazendo outro loop até a quantidade 10, somando da o valor da variavel da esquerda com valor da expressao a direita.
}
  media = soma / 10 

    for(let i = 0; i < 10; i++ ){
        
        //valor  que estao acima da media
        if(precos[i] > media ){ // este if verifica se o preço do produto na posiçao"i, é maior que a media

           // "push" armazena
            acimamedia.push(precos[i]); // sendo verdadeira executa o "if" e armazena os valores que tao acima do resoultado da media dentro da variavel " acimamedia",  NESTE CASO O VALOR SÓ SERA ARMAZENADO APOS O RESULTADO DA MEDIA, OU SEJA SE A MEDIA FOR ex: 5,78 OS VALORES ACIMA DISSO SERAO ARMAZENADOS NA VARIAVEL " ACIMA MEDIA"
        }       
    } 
    io.write("produtos acima de media " + acimamedia )





   