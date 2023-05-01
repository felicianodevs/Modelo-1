let io = require("../io")

let numero
let numeros = []

for ( let i = 0; i < 10 ; i++){

    io.write("digite um numero")
    numero = io.readInt()

    numeros.push(numero)
}

for (let i = 0 ; i < numeros.length; i ++){
    console.log('teste')
    numeros[i] = numeros[i] + 1
}
io.write(numero)
io.write(`Sucessores: ${numeros}`)

//-------------------------------------------------------
let numeros = []
let numero
let somatorio = 0
let media = 0


for (let k = 0; k < 3; k++) {
    io.write("Digite um numero")
    numero = io.readInt() 
    somatorio = somatorio + numero
    numeros.push(numero)
}

media = somatorio / numeros.length
console.log("A media é " + media)

for(let j=0;j<numeros.length;j++){
    if(numeros[j] < media){
        console.log(numeros[j])
    }
}'