// // $(function() {
// //     var dbInstituicao = localStorage.getItem("dbInstituicao");
// //     dbInstituicao = JSON.parse(dbInstituicao); 
// //     if (dbInstituicao == null) 
// //       dbInstituicao = [];
// //   });
  
// //   function Adicionar() {
// //     var intituicao = JSON.stringify({
// //       Nome: $("nome").val(),
// //       Email: $("email").val(),
// //       CNPJ: $("CNPJ").val(),
// //       Telefone: $("telefone").val(),
// //       Senha: $("senha").val()
// //     },);
// //     dbInstituicao.push(instituicao);
// //     localStorage.setItem("dbInstituicao", JSON.stringify(tbInstituicao));
// //     alert("Registro adicionado.");
// //     return true;
// //   } 
// //   function validarDados() {
// //     var nome = document.getElementById("nome").value;
// //     var telefone = document.getElementById("telefone").value;
// //     var email = document.getElementById("email").value;
// //     var formacao = document.getElementById("senha").value;
  
// //     if (
// //       nome == "" ||
// //       telefone == "" ||
// //       data == "" ||
// //       email == "" ||
// //       formacao == ""
// //     ) {
// //       alert("Preencha os campos obrigatórios.");
// //     } else {
// //       enviar(), limpar();
// //     }
// //   }
// //   $(".box").on("submit",function(){
// //     return Adicionar();
// // // });





function cadastrar(){
  var objDados = localStorage.getItem ('dbInstituicao');
  instituicoes = JSON.parse(objDados);
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var cnpj = document.getElementById("cnpj").value;
  var telefone = document.getElementById("telefone").value;
  var senha = document.getElementById("senha").value;

  let novoUsuario = {
      nome : nome,
      email : email,
      cnpj : cnpj,
      telefone : telefone,
      senha  : senha
  }
  instituicoes = novoUsuario;
  instituicoes = localStorage.setItem('Instituições',JSON.stringify(dbInstituicao));
  
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



