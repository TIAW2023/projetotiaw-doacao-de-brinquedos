// Verifica se a URL contém o parâmetro 'id' para obter o ID da campanha
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Obtém a lista de campanhas do localStorage
var campanhas = JSON.parse(localStorage.getItem("CAMPANHAS"));

//Função para redirecionar para a página de detalhes da campanha com o ID fornecido
function detalhes(id) {
  window.location.href = "detalhes.html?id=" + id;
}


// Função para renderizar os detalhes da campanha com o ID fornecido
function renderizarDetalhes(id) {
  var detalhesContainer = document.querySelector("#detalhes-container");

  // Verifica se a campanha com o ID fornecido existe
  if (!campanhas || !campanhas[id]) {
    detalhesContainer.innerHTML = "<h1>Campanha não encontrada</h1>";
    return;
  }

  // Obtém a campanha com o ID fornecido
  var campanha = campanhas[id];

  // Monta o HTML dos detalhes da campanha
  var html = `
    <div class="container center">
      <div class="row align-items-start">
        <div class="col-sm-12">
          <div id="detalhes-container">
            <div id="tela">
              <h5>Informações da campanha</h5>
              <br>
              <!-- IMAGEM -->
              <div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                  <img id="imagem" src="${campanha.img}" class="rounded mx-auto d-block" alt="Imagem da campanha" height="300">
                </div>
                <!-- FIM DE IMAGEM -->
                <div class="col-sm-6">
                  <!-- TÍTULO -->
                  <h5 id="titulo">${campanha.title}</h5>
                  <!-- TÍTULO -->
                  <hr>
                  <!-- Descrição -->
                  <p id="descricao">${campanha.comment}</p>
                  <!-- COMO FAZEMOS -->
                  <hr>
                  <!-- CONTATO -->
                  <h5>Contato:</h5>
                  <ul>
                    <li>Email: <span id="email">${campanha.email}</span></li>
                    <li>Telefone: <span id="telefone">${campanha.telefone}</span></li>
                    <li>Endereço: <span id="endereco" class="endereco"></span></li>
                  </ul>
                  <!-- CONTATO -->
                </div>
              </div>
              <hr>
              <!-- HISTÓRIA -->
              <div class="row">
                <div class="col-sm-12 mb-3 mb-sm-0">
                  <h5>História</h5>
                  <p id="historia">${campanha.história}</p>
                </div>
              </div>
              <!-- HISTÓRIA -->
            </div>
          </div>
        </div>
      </div>
    </div>`;

  detalhesContainer.innerHTML = html;

  // Chama a função CEP para buscar o endereço com base no CEP fornecido
  CEP(campanha.buscarcep);
}

// Chama a função para renderizar os detalhes da campanha com o ID fornecido
renderizarDetalhes(id);

// Função para buscar o endereço com base no CEP fornecido
function CEP(cep){
  
  fetch('https://viacep.com.br/ws/' + cep + '/json/')
    .then(response => response.json())
    .then(data => {
      var resultado = document.querySelector('.endereco');
      resultado.innerHTML = 'Endereço: ' + data.logradouro +
                            '<br>Bairro: ' + data.bairro +
                            '<br>Cidade: ' + data.localidade +
                            '<br>Estado: ' + data.uf;
    })
    .catch(error => {
      console.log(error);
    });
}


