let io=require("../io")
let media, numero, soma=0, lista=[],acimamedia=[]

    for(let i=0;i<3; i++){
        io.write("Digite preços aleatórios.")
        numero=io.readFloat()
        lista.push(numero)
        soma += lista[i]
    }
    
    media=soma/lista.length
    
    console.log("A média é "+media)

    for(let j=0;j<3;j++){

       if(lista[j] > media){
        acimamedia.push(lista[j]);
          
       }

    }