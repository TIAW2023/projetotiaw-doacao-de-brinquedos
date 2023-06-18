
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

const fotoInput = document.getElementById('picture__input');
const nomeInput = document.getElementById('nomeInput');
const senhaInput = document.getElementById('senhaInput');
const fotoUsuario = document.getElementById('foto');
const salvarButton = document.getElementById('salvarButton');
const selecionarFotoButton = document.getElementById('selecionarFotoButton');


function getDadosUsuario() {
  const usuarioAtual = localStorage.getItem('usuarioAtual');
  return usuarios[usuarioAtual] || {
    foto: 'usuario.png',
    nome: 'Usuário',
    senha: ''
  };
}

function salvarDadosUsuario(dados) {
  const usuarioAtual = localStorage.getItem('usuarioAtual');
  usuarios[usuarioAtual] = dados;
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}


const dadosUsuario = getDadosUsuario();
fotoUsuario.src = dadosUsuario.foto;
nomeInput.value = dadosUsuario.nome;
senhaInput.value = dadosUsuario.senha;


function exibirOcultarBotaoSelecionarFoto() {
  if (dadosUsuario.foto === 'usuario.png') {
    selecionarFotoButton.style.display = 'block';
  } else {
    selecionarFotoButton.style.display = 'none';
  }
}


window.addEventListener('DOMContentLoaded', () => {
  fotoUsuario.src = 'usuario.png';
});


fotoInput.addEventListener('change', () => {
  const fotoSelecionada = fotoInput.files[0];
  if (fotoSelecionada) {
    const fotoURL = URL.createObjectURL(fotoSelecionada);
    fotoUsuario.src = fotoURL;
 
    dadosUsuario.foto = fotoURL;
    salvarDadosUsuario(dadosUsuario);
    exibirOcultarBotaoSelecionarFoto();
  }
});


fotoUsuario.addEventListener('click', () => {
  fotoInput.click(); 
});


salvarButton.addEventListener('click', () => {

  const novoNome = nomeInput.value;
  const novaSenha = senhaInput.value;

 
  dadosUsuario.nome = novoNome;
  dadosUsuario.senha = novaSenha;
  salvarDadosUsuario(dadosUsuario);


  fotoInput.value = '';
  nomeInput.value = '';
  senhaInput.value = '';


  const nomeUsuario = document.getElementById('nomeUsuario');
  nomeUsuario.textContent = novoNome;


  console.log(dadosUsuario);
});


exibirOcultarBotaoSelecionarFoto();
