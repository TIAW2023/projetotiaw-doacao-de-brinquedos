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



var Pessoa = JSON.parse(localStorage.getItem('dbpessoa'));

if(!Pessoa){
  Pessoa=[]
}

function cadastrar() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var foto = "usuario.png";

  if (nome === "") {
    alert("Por favor, preencha o nome de usuário");
    return;
  }
  if (email === "") {
    alert("Por favor, preencha o email de usuário");
    return;
  }
  if (senha === "") {
    alert("Por favor, preencha a senha de usuário");
    return;
  }

  let novoUsuario = {
    nome: nome,
    email: email,
    senha: senha,
    foto: foto
  }

  Pessoa.push(novoUsuario);

  localStorage.setItem('dbpessoa', JSON.stringify(Pessoa));

  window.location.href = "login.html";

}
   


    

// function validar(){
//   'use strict'

// var form = document.querySelector('#formCadastro')
// var valid = true;

// if (!form.checkValidity()) {
//   valid = false;
// }
// form.classList.add('was-validated')

// if(valid)
//   cadastrar();



// }
// function criar(){
//   var objDados = localStorage.getItem ('dbInstituicao');
//   instituicao = JSON.parse(objDados);
// // var intituicao = localStorage.getItem("instituicao");
// var instituicaoArray =  [];
// instituicaoArray.push({ nome: nome, email: email, cnpj: cnpj, telefone: telefone, senha: senha});
// localStorage.setItem("instituicao", JSON.stringify(instituicaoArray));
// }
  
