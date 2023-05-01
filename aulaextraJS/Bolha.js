let io = require("../io")

let array = [5, 4 , 2, 1, 7, 8]




for(let j = 0; j < array.length; j++){ // este for por fora do for principal, repete o for de dentro
    for(let i = 0 ; i < array.length; i++){

        let aux

        if(array[i] > array[i+1] ){ //se a posiçao i for maior que a proxima posiçao do i

            aux  = array[i] // o aux recebe arrey i

            array[i] = array[i+1]

            array[i+1] = aux
        }

    }
}console.log(array)
