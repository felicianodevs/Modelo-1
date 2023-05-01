const timestamp = (new Date()).getTime()
const publicKey = 'af1e0c8cfaeaf7a90fdd487e7b4ac87d'
const privateKey = 'ccdaee1c4e7f8e865ab1b5d093cdcdbcc3f3c801'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)
let saida = ''

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)


promise.then(response => {
    console.log(response) 

    response.json().then(res => {
        console.log(res)


        let heroi = document.getElementById("content")
        let dadosdocomics 

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
                        <ul>
                        <div><h2>Revistas</h2></div>
                            <li>${dadosdocomics} </li>
                            
                            
                    
                        </ul>
                    
                        <ul>
                            <h2>Series</h2>
                            ${element.series.items.length > 0?  `<li>${element.series.items[0].name} </li>` : ''}
                            ${element.series.items.length > 1? `<li>${element.series.items[1].name} </li>` : ''}
                        </ul>
                    </div>
                
                `
        })                                   
    })
})





