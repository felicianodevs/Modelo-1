const timestamp = (new Date()).getTime()
const publicKey = 'af1e0c8cfaeaf7a90fdd487e7b4ac87d'
const privateKey = 'ccdaee1c4e7f8e865ab1b5d093cdcdbcc3f3c801'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)
let saida = ''

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)

let vetorherois = [] 

promise.then(response => {
    console.log(response) 

    response.json().then(res => {
        console.log(res)


        let heroi = document.getElementById("content")
        let dadosdocomics 
        vetorherois = res.data.results

        res.data.results.forEach(element => {
            let comics = element.comics.items
            dadosdocomics = ''
            for( let i = 0; i < comics.length; i++){
                console.log(comics[i].name)
                dadosdocomics = dadosdocomics + comics[i].name 

            }
            
            heroi.innerHTML = heroi.innerHTML + 

                `
                
                    <div class="heroi">
                    
                        <img class="foto" src=" ${element.thumbnail.path}.${element.thumbnail.extension}">
                        
                    
                            <div class="nome"><h2>${element.name}</h2></div>
                            <button onclick="AbrirModal(${element.id})">Detalhes</button>

                            
                        
                    </div>
                
                `
        })                                   
    })

    
})

function FecharModal() { //O método querySelector é um método da API do DOM (Document Object Model) que permite selecionar um elemento específico na página HTML usando um seletor CSS. Ele retorna o primeiro elemento encontrado que corresponde ao seletor fornecido.
    document.querySelector(".modalpai").style.display = "none"

}


function AbrirModal(id) {
    document.querySelector(".modalpai").style.display = "flex"
    let conteudomodal = document.querySelector(".lista")

    
    for (let i = 0; i < vetorherois.length; i++) {
        if (id == vetorherois[i].id){
            conteudomodal.innerHTML = 
            
            `   <h2>${vetorherois[i].name}</h2>
                    <div class="sidebyside">
                        <ul> Comics
                            ${vetorherois[i].comics.items[i].name}
                        </ul>

                        <ul> Stories
                            <h2>${vetorherois[i].stories.items[i]}</h2>
                            ${vetorherois[i].stories.comics}
                        </ul>

                        
                    </div>
                                                
            `
            
            

        }
        
        
    }

}

function comics (vetorcomics) {

    let conteudo = ""
    
}






