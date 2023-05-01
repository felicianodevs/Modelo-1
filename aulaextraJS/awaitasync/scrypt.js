// const timestamp = (new Date()).getTime()
// const publicKey = 'af1e0c8cfaeaf7a90fdd487e7b4ac87d'
// const privateKey = 'ccdaee1c4e7f8e865ab1b5d093cdcdbcc3f3c801'
// const hash = timestamp + privateKey + publicKey
// const hashMd5 = MD5.generate(hash)
// let saida = ''

async function loadphotos() {
  const promise = await fetch(`https://jsonplaceholder.typicode.com/photos`);

  const resposta = await promise.json();

  let img = document.getElementById("photos");
}
console.log(resposta);

loadphotos();
