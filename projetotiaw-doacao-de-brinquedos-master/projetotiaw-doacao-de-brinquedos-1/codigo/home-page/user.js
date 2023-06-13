const fotoInput = document.getElementById('picture__input');
const nomeInput = document.getElementById('nomeInput');
const senhaInput = document.getElementById('senhaInput');
const fotoUsuario = document.getElementById('foto');
const salvarButton = document.getElementById('salvarButton');

// Preencher os campos com as informações do perfil do usuário
fotoUsuario.src = localStorage.getItem('foto');
nomeInput.value = localStorage.getItem('nome');
senhaInput.value = localStorage.getItem('senha');

// Adicionar evento de clique no botão "Salvar Alterações"
salvarButton.addEventListener('click', () => {
    // Atualizar a foto de perfil
    const fotoSelecionada = fotoInput.files[0];
    if (fotoSelecionada) {
        const fotoURL = URL.createObjectURL(fotoSelecionada);
        fotoUsuario.src = fotoURL;
        // Armazenar a nova foto no LocalStorage
        localStorage.setItem('foto', fotoURL);
    }

    // Atualizar o nome e senha do usuário
    const novoNome = nomeInput.value;
    const novaSenha = senhaInput.value;
  

    // Atualizar as informações no LocalStorage
    localStorage.setItem('nome', novoNome);
    localStorage.setItem('senha', novaSenha);

    // Limpar os campos de entrada
    fotoInput.value = '';
    nomeInput.value = '';
    senhaInput.value = '';
});



 /* var id = JSON.parse(localStorage.getItem("logado"))
  var campanhas = JSON.parse(localStorage.getItem("campanhas"))

  if(id == campanhas[i].pessoa){
onclick = "excluir(${i})"
  }

  function excluir(id){
    campanhas.splice(id,1)
  } */
