let io = require("../io")

let anosfumante // primeiro declaro os dados das variaveis // PRIEMEIRO AS LET'S
let cigarrosdia // primeiro declaro os dados das variaveis // NOME DAS VARIAEVIS QUE O COMPUTADOR IRA CALCULAR
let preço       // primeiro declaro os dados das variaveis

let totalcigarros = anosfumante * 365 * cigarrosdia

let total = (totalcigarros / 20) * preço

io.write("Informe o número de anos que você fuma")  // write aparece pro usuario escrever
anosfumante = io.readFloat() // o computador armazana o que o usuario escreveu// o FLOAT pega depois da virgula
io.write("informe quantos cigarros por dia fuma")   // write aparece pro usuario escrever
cigarrosdia = io.readFloat() // o computador armazana o que o usuario escreveu// o FLOAT pega depois da virgula
io.write("preço do cigarro")                        // write aparece pro usuario escrever
preço = io.readFloat()      // o computador armazana o que o usuario escreveu // o FLOAT pega depois da virgula

totalcigarros = anosfumante * 365 * cigarrosdia 
total = (totalcigarros / 20) * preço
io.write(`voce gastou um total de ${total}` )
















