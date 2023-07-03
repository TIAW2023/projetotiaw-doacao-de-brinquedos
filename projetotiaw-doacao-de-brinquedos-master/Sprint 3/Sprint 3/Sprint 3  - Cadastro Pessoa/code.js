// $(function() {
//   var dbPessoa = localStorage.getItem("dbPessoa");
//   dbPessoa = JSON.parse(dbPessoa); 
//   if (dbPessoa == null) 
//     dbPessoa = [];
// });

// function Adicionar() {
//   var Pessoa = JSON.stringify({
//     Nome: $("#nome").val(),
//     Email: $("#email").val(),
//     CNPJ: $("#CNPJ").val(),
//     Telefone: $("#telefone").val(),
//     Senha: $("#senha").val()
//   },);
//   dbPessoa.push(Pessoa);
//   localStorage.setItem("dbPessoa", JSON.stringify(tbPessoa));
//   alert("Registro adicionado.");
//   return true;
// } 
// function validarDados() {
//     var nome = document.getElementById("#nome").value;
//     var telefone = document.getElementById("#telefone").value;
//     var email = document.getElementById("#email").value;
//     var formacao = document.getElementById("#senha").value;
  
//     if (
//       nome == "" ||
//       telefone == "" ||
//       data == "" ||
//       email == "" ||
//       formacao == ""
//     ) {
//       alert("Preencha os campos obrigatórios.");
//     } else {
//       enviar(), limpar();
//     }
//   }

//   $(".box").on("submit",function(){
// 		return Adicionar();
// });
  



function cadastrar(){
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  let novoUsuario = {
      "nome" : nome,
      "email" : email,
      "senha"  : senha
  }
  pessoa.push(novoUsuario);
  localStorage.setItem("Usuarios", JSON.stringify(pessoa));
}

function validar(){
  'use strict'

var form = document.querySelector('#formCadastro')
var valid = true;

if (!form.checkValidity()) {
  valid = false;
}
form.classList.add('was-validated')

if(valid)
  cadastrar();



}
