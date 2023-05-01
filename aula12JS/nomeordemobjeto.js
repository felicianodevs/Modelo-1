//Faça um programa para receber nome e idade de 10 pessoas e depois imprimir em ordem de nome. 

let io = require("../io")

/* class pessoa{

    nome
    idade


   constructor(nome, idade){
            this.nome
            this.idade
        
        }
        }

        let pessoa = []

   for (let i = 0; i < 10; i++) {
    
    io.write("digite um nome")
    nome=io.read()

    io.write("digite a idade")
    idade=io.read()
    
    }
        if (pessoa < pessoa.length)
              
        pessoa-1

        let pessoa = new pessoa(idade, nome)
   
        pessoa.push(pessoa) */


        





        itens = []
class Pessoas{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

for(let i = 0; i <=4; i++){
    let pessoa = new Pessoas
    io.write("Digite o nome da pessoa")
    pessoa.nome = io.read()
    io.write("Digite a idade desta pessoa")
    pessoa.idade = io.readFloat()
    itens [i] = pessoa
}

function ordemAlfabetica(itens){
    for(let i = 0; i < itens.length; i++){
        for(let j = 0; j < itens.length-1; j++){
            
            if(itens[j] > itens[j+i]){

                let aux = itens[j]
                itens[j] = itens[j+i]
                itens[j+i] = aux
            }
        }
    }
    return itens
}
io.write()
