// const Logado = JSON.parse(localStorage.getItem("dbLogado"));
// const instituicao = JSON.parse(localStorage.getItem("dbInstituicao"));
// const pessoa = JSON.parse(localStorage.getItem("dbpessoa"));

// function login() {
//   var email = document.getElementById("email").value;
//   var senha = document.getElementById("senha").value;

//   for (var i = 0; i < instituicao.length; i++) { 
//     if (email === instituicao[i].email && senha === instituicao[i].senha) {
//       alert('Usuário Logado');
//       window.location.href = "pagina-inicial2.html";
//       return localStorage.setItem('dbLogado',JSON.stringify(instituicao[i])); 
//     }
//   }

//   for (var i = 0; i < pessoa.length; i++) { 
//     if (email === pessoa[i].email && senha === pessoa[i].senha) {
//       alert('Usuário Logado');
//       window.location.href = "pagina-inicial2.html";
//       return localStorage.setItem('dbLogado',JSON.stringify(pessoa[i]));
//     }
//   }
// }


function login() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (email === "") {
    alert("Por favor, preencha o email");
    return;
  }
  if (senha === "") {
    alert("Por favor, preencha a senha");
    return;
  }

  var dbPessoa = JSON.parse(localStorage.getItem("dbpessoa"));
  var dbInstituicao = JSON.parse(localStorage.getItem("dbInstituicao"));

  var usuarioEncontrado = false;
  var usuario;

  if (dbPessoa) {
    for (var i = 0; i < dbPessoa.length; i++) {
      if (dbPessoa[i].email === email && dbPessoa[i].senha === senha) {
        usuarioEncontrado = true;
        usuario = dbPessoa[i];
        break;
      }
    }
  }

  if (!usuarioEncontrado && dbInstituicao) {
    for (var i = 0; i < dbInstituicao.length; i++) {
      if (
        dbInstituicao[i].email === email &&
        dbInstituicao[i].senha === senha
      ) {
        usuarioEncontrado = true;
        usuario = dbInstituicao[i];
        break;
      }
    }
  }

  if (usuarioEncontrado) {
    alert("Login bem-sucedido!");

  } else {
    alert("Credenciais inválidas. Por favor, verifique seu email e senha.");
  }
}