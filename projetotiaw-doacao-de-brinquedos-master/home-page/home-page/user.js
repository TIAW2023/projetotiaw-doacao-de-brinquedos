
var nomeInput = document.getElementById("nomeInput");
var senhaInput = document.getElementById("senhaInput");


var Pessoa = JSON.parse(localStorage.getItem('dbpessoa'));


var indiceUsuarioAtual = 0; 


function preencherPerfil() {
  var usuarioAtual = Pessoa[indiceUsuarioAtual];
  nomeInput.value = usuarioAtual.nome;
  senhaInput.value = usuarioAtual.senha;
}


function salvarAlteracoes() {
  var usuarioAtual = Pessoa[indiceUsuarioAtual];
  usuarioAtual.nome = nomeInput.value;
  usuarioAtual.senha = senhaInput.value;
  localStorage.setItem('dbpessoa', JSON.stringify(Pessoa));
  alert("Alterações salvas com sucesso!");
}


var salvarButton = document.getElementById("salvarButton");
salvarButton.addEventListener("click", salvarAlteracoes);

window.addEventListener("load", preencherPerfil);




function exibirFotoSelecionada(event) {
  var foto = document.getElementById("foto");
  var fotoSelecionada = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    foto.src = e.target.result;
  };

  reader.readAsDataURL(fotoSelecionada);
}


function preencherPerfil() {
  var usuarioAtual = Pessoa[indiceUsuarioAtual];
  nomeInput.value = usuarioAtual.nome;
  senhaInput.value = usuarioAtual.senha;
  foto.src = usuarioAtual.foto || "usuario.png"; // Exibe a foto do usuário ou a imagem padrão
}


function salvarAlteracoes() {
  var usuarioAtual = Pessoa[indiceUsuarioAtual];
  usuarioAtual.nome = nomeInput.value;
  usuarioAtual.senha = senhaInput.value;

  // Verifica se uma nova foto foi selecionada
  var fotoSelecionada = document.getElementById("picture__input").files[0];
  if (fotoSelecionada) {
    var reader = new FileReader();
    reader.onload = function(e) {
      usuarioAtual.foto = e.target.result;
      localStorage.setItem('dbpessoa', JSON.stringify(Pessoa));
      foto.src = usuarioAtual.foto;
      alert("Alterações salvas com sucesso!");
    };
    reader.readAsDataURL(fotoSelecionada);
  } else {
    localStorage.setItem('dbpessoa', JSON.stringify(Pessoa));
    alert("Alterações salvas com sucesso!");
  }
}

