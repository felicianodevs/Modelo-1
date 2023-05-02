const universal = 'https://projeto-arnia.onrender.com'


const BtnCreate = document.querySelector("#create");
async function pegarvalor() {
  const documento = document.querySelector("#cpf");
  const name = document.querySelector("#nome");
  const data = document.querySelector("#datadenascimento");
  const email = document.querySelector("#email");
  const genero = document.querySelector("#sexo");
  const nacional = document.querySelector("#nacionalidade");
  const natural = document.querySelector("#naturalidade");
  const job = document.querySelector("#profissao");
  const school = document.querySelector("#escolaridade");
  const estatecivil = document.querySelector("#estadocivil");
  const mommy = document.querySelector("#mae");
  const daddy = document.querySelector("#pai");

  // aqui incia os objetos que pega o valor dos id's //
               
  const allValues = {
    id: "",
    cpf: documento.value, // aqui capitura o valor da constante acima
    nome: name.value,
    datadenascimento: data.value,
    email: email.value,
    sexo: genero.value,
    nacionalidade: nacional.value,
    naturalidade: natural.value,
    profissao: job.value,
    escolaridade: school.value,
    estadocivil: estatecivil.value,
    mae: mommy.value,
    pai: daddy.value,

    // Const é uma variavel que é constante que ela nao vareia. mesmo declarando um valor nao muda o valor da mesma //
  };
  console.log(allValues);

  // este await esta esperando a funçao da linha 51 ser executada para transformar o " allvalues " em firstoption //
  await inserirdadosApi(allValues);
}

// aqui inicia o codigo para iniciar o observador no botao a cada click no criar, e rodar a funçao acima do console.log. " escutar o clique" //

////////////////////////////////////////////////////////////////////

// dentro de parentese acontece o que eu mandar ele fazer, um click ou o scrol do mouse por ex.. //
// BtnCreate.addEventListener('click',pegarvalor)

async function inserirdadosApi(firstposition) {
  return fetch(universal+"/patients",{
    
    method: "POST", // metodo POST ele salva informaçoes no DB.JSON //
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    }, // stringify recebe os valores de fist position e transforma em strings//
    body: JSON.stringify(firstposition),
  });
}

async function showpatients() {
  const response = await fetch(universal+"/patients");
  const patientes = await response.json();
  const allpatients = document.getElementById("allpatients");
  console.log(allpatients)
  //foreach percorre todos os elementos
  patientes.forEach((patient) => {
    let html = ` 
      <tr>
        <th scope="row">${patient.id}</th>
        <td>${patient.nome}</td>
        <td>${patient.cpf}</td>
        
        
        <td class="text-center"> <button  type="button" class="btn p-0 border-0 border-0"><a href="/prontuario.html"><img  class="green " src="/icones/calendar-icon.svg" alt=""></a></button> 

        <button data-bs-toggle="modal" data-bs-target="#editpatient
        " onclick="editpatient(${patient.id})" type="button" class="btn p-0 border-0 border-0">

        <img class="blue" src="/icones/pen-edit.svg" alt=""></button> 

        <button onclick="deletepatient(${patient.id})" type="button" class="btn p-0 border-0 border-0"><img class="red" src="/icones/trash-icon.svg" alt=""></button></td>
      </tr>
      `;
    allpatients.innerHTML += html;
    
  });
}
showpatients();

async function paxedit(id, firstposition) {
  return fetch(universal+"/patients", {
    method: "PUT", // metodo Put edita dados do modal
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    }, // stringify recebe os valores de fist position e transforma em strings//
    body: JSON.stringify(firstposition),
  });
}

async function deletepatient(id) {
  await fetch(universal+`/patients/${id}`, {
    method: "DELETE",
  });
}

let pacienteid = null
async function editpatient(id) {
  const response = await fetch(universal+`/patients/${id}`);
  const pacienteresponse = await response.json();
  
  document.querySelector("#editnome").value = pacienteresponse.nome
  document.querySelector("#editcpf").value = pacienteresponse.cpf
  document.querySelector("#editdatadenascimento").value = pacienteresponse.datadenascimento
  document.querySelector("#editemail").value = pacienteresponse.email
  document.querySelector("#editsexo").value = pacienteresponse.sexo
  document.querySelector("#editnacionalidade").value = pacienteresponse.nacionalidade
  document.querySelector("#editnaturalidade").value = pacienteresponse.naturalidade
  document.querySelector("#editprofissao").value = pacienteresponse.profissao
  document.querySelector("#editescolaridade").value = pacienteresponse.escolaridade
  document.querySelector("#editestadocivil").value = pacienteresponse.estadocivil
  document.querySelector("#editmae").value = pacienteresponse.mae
  document.querySelector("#editpai").value = pacienteresponse.pai

  // este id pega o codigo id que o usuario deseja editar//
  pacienteid  = id  

  console.log(id);
  const editar = `<div class=" col-4 ">
//   <label for="cpf" class="form-label">CPF</label>
//   <input type="text" class="form-control" id="cpf" placeholder="CPF" =''>
// </div>


// <!-- <div class="mb-3">
//                       <label for="formGroupExampleInput" class="form-label">Example label</label>
//                               <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
//                       </div> -->


// <div class="col-4 ">
//   <label for="nome" class="form-label">Nome</label>
//   <input type="text" class="form-control" id="nome" placeholder="nome">
// </div>


// <div class=" col-4 ">
//   <label for="DatadeNascimento" class="form-label">Data de Nascimento</label>
//   <input type="date" class="form-control" id="datadenascimento" placeholder="Data de Nascimento">
// </div>


// </div>



// <div class="row modal-body input-container ">

// <div class=" col-4 ">
//   <label for="email" class="form-label">Email</label>
//   <input type="text" class="form-control" id="email" placeholder="Email">
// </div>





// <div class=" col-4 ">
//   <label for="sexo" class="form-label">Sexo/Gênero</label>
//   <select class="form-select" aria-label="Default select example" id="sexo">
//     <option selected="">Sexo</option>
//     <option value="Masculino">Masculino</option>
//     <option value="Feminino">Feminino</option>
//     <option value="Outro">Outro</option>
//   </select>

// </div>





// <div class=" col-4 ">
//   <label for="nacionalidade" class="form-label">Nacionalidade</label>
//   <select class="form-select" aria-label="Default select example " id="nacionalidade">
//     <option selected="">Digite</option>
//     <option value="Brasileira">Brasileira</option>
//     <option value="Estrangeira">Estrangeira</option>

//   </select>

// </div>


// </div>

// <!-- aqui começa terceira linha de imputs -->

// <div class="row modal-body input-container ">

// <div class=" col-4 ">
//   <label for="naturalidade" class="form-label">Naturalidade</label>
//   <input type="text" class="form-control" id="naturalidade" placeholder="Naturalidade">
// </div>





// <div class=" col-4 ">
//   <label for="profissao" class="form-label">Profissão</label>
//   <input type="text" class="form-control" id="profissao" placeholder="Profissão">
// </div>





// <div class=" col-4 ">
//   <label for="Escolaridade" class="form-label">Escolaridade</label>
//   <input type="text" class="form-control" id="escolaridade" placeholder="Escolaridade">
// </div>


// </div>


// <!-- aqui começa quarta linha de imputs -->

// <div class="row modal-body input-container ">

// <div class=" col-4 ">
//   <label for="estadocivil" class="form-label">Estado Civil</label>
//   <select id="estadocivil" class="form-select" aria-label="estadocivil">
//     <option selected="">Digite</option>
//     <option value="Solteiro">Solteiro (a)</option>
//     <option value="Casado">Casado (a)</option>
//     <option value="Divorciado">Divorciado (a)</option>
//     <option value="Viuvo">Viuvo (a)</option>

//   </select>

// </div>





// <div class=" col-4 ">
//   <label for="mae" class="form-label">Mãe</label>
//   <input type="text" class="form-control" id="mae" placeholder="Mãe">
// </div>





// <div class=" col-4 ">
//   <label for="pai" class="form-label">Pai</label>
//   <input type="text" class="form-control" id="pai" placeholder="Pai">
// </div>


// </div>
// <!-- aqui começa finaliza linha de imputs do Modal-->



// <!-- aqui começa o row do botao criar na parte debaixo do modal cadastro -->

// <div id="paciente" class="container text-center">
// <div class="row d-flex justify-content-between border-top">
//   <div class="col-3 p-3 mb-3">
//     <p>*Campos Obrigatórios</p>
//   </div>

//   <div class="col-9 d-flex justify-content-end p-3 mb-3 ">
//     <p style="margin-right: 20px;">Cancelar</p>
//     <button onclick="testemodal()" id="editarpacientes" type="button" class="btn btn-success">Salvar
//       Informações</button>
//   </div>
// </div>
// </div>
// <!-- aqui começa o row do botao criar na parte debaixo do modal cadastro -->

// <!-- ////////////////////////////////////////////////////////// -->

// <!-- aqui finaliza o row do botao criar na parte debaixo do modal cadastro -->



// </div>`;
}

async function salvarpaciente(id) {
  //esta funçao pega o paciente por id que esta sendo editado no momento e armazena em um objeto//
  const response = await fetch(universal+`/patients/${id}`);
  const pacienteresponse = await response.json();
  console.log(pacienteresponse)

  const editar = { 
  "nome": document.querySelector("#editnome").value,
  "cpf": document.querySelector("#editcpf").value,
  "datadenascimento": document.querySelector("#editdatadenascimento").value,
  "email": document.querySelector("#editemail").value,
  "sexo": document.querySelector("#editsexo").value,
  "nacionalidade": document.querySelector("#editnacionalidade").value,
  "naturalidade": document.querySelector("#editnaturalidade").value,
  "profissao": document.querySelector("#editprofissao").value,
  "escolaridade": document.querySelector("#editescolaridade").value,
  "estadocivil": document.querySelector("#editestadocivil").value,
  "mae": document.querySelector("#editmae").value,
  "pai": document.querySelector("#editpai").value
  } 
  // este await aguarda rodar a funçao abaixo, funçao CALLBACK //
  await saveedit(pacienteid, editar) 
}
 // esta funçao funciona para atualizar os dasdos do paciente qu estao sendo atualizados no momento //
async function saveedit(id, editar) {
  await fetch(universal+`/patients/${id}`, {
    method: "PUT", // metodo Put edita dados do modal
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    }, // stringify recebe os valores de fist position e transforma em strings//
    body: JSON.stringify(editar),
  });
}


//   async function get_filterPacient(nome){
//   const res_fetch = await fetch('http://localhost:3000/patients?q='+ nome)
//   const reg_patients = await res_fetch.json()
// }

document.getElementById('formPesquisar').addEventListener('submit', async (evento) =>{
  evento.preventDefault()

  const  palavrachave = document.getElementById('border-start').value.trim();
  if(palavrachave !== ''){
    // const pesquisa = await fetch(`http://localhost:3000/patients?nome_like=${palavrachave}`); 
    const pesquisa = await fetch(universal+`/patients?nome_like=${palavrachave}`);
    const pesquisaJSON = await pesquisa.json();

    document.getElementById('allpatients').innerHTML = "";
    pesquisaJSON.forEach(paciente => {
      imprimirCadaPaciente(paciente);
    })
    
  }
  console.log()
})

function imprimirCadaPaciente(valorPaciente) {
    document.getElementById('allpatients').innerHTML = document.getElementById('allpatients').innerHTML +
    ` 
    <tr>
      <th scope="row">${valorPaciente.id}</th>
      <td>${valorPaciente.nome}</td>
      <td>${valorPaciente.cpf}</td>
      
      
      <td class="text-center"> <button  type="button" class="btn p-0 border-0 border-0"><a href="/prontuario.html"><img  class="green " src="/icones/calendar-icon.svg" alt=""></a></button> 

      <button data-bs-toggle="modal" data-bs-target="#editpatient
      " onclick="editpatient(${valorPaciente.id})" type="button" class="btn p-0 border-0 border-0">

      <img class="blue" src="/icones/pen-edit.svg" alt=""></button> 

      <button onclick="deletepatient(${valorPaciente.id})" type="button" class="btn p-0 border-0 border-0"><img class="red" src="/icones/trash-icon.svg" alt=""></button></td>
    </tr>
    ` 
}
