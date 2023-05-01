//Faça uma função que receba do usuário 3 segmentos de reta e retorne se esses segmentos podem ou não formar um triângulo.
let io = require("../io")

let reta1 = 3;
let reta2 = 10;
let reta3 = 5;


function verificaTriangulo(reta1, reta2, reta3){

    if(reta1 <= (reta2 + reta3) ){
        
        io.write("Esta soma forma um triangulo")
    }
    else if(reta2 <= (reta3 + reta1) ){
        io.write("Estas retas forma um triangulo")
    }    

    else if(reta3<= (reta2 + reta1)){
        io.write("Estas retas forma um triangulo")
    }
    
    else {
        io.write("Estas retas nao formam um triangulo")
    }
        
}
verificaTriangulo(reta1,reta2,reta3)

    
  
    