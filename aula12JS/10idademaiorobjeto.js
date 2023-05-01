let io = require("../io")

class Pessoa  {
            
        nome;
        idade;

    constructor(nome,idade){

        this.idade = idade //
        this.nome = nome
    }
       
        }
    

    let pessoa1 = []

    for (let i = 0; i < 3; i++) {
            io.write("digite o nome da pessoa")
            let nome=io.read()
            io.write("digite a idade da pessoa")
            let idade = io.readInt()
        
            let pessoa = new Pessoa(nome, idade) 
            pessoa1.push(pessoa)
        }
            
            let maioridade = pessoa1.filter((pessoa) => pessoa.idade >= 18); // filter retorna 

            io.write(maioridade)
    
 



    