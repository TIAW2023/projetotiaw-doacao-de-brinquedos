// CAMPO DE CRIAÇÃO DE CAMPANHA
//$("#form").submit(function() {
  //  if($("#campo").val()== null || $("#campo").val() ==""){
    //   alert('campo vazio');      
      //  return false;
  // }
 // });

  
  // FILTRO
  
  // FILTRO 
  function criarCampanha() {
    var title = document.getElementById('title').value;
    var comment = document.getElementById('comment').value;
    var filtro = document.getElementById('filtro').value;
  
    var campanhas = JSON.parse(localStorage.getItem("CAMPANHAS")) || [];
  
    var novaCampanha = {
      title: title,
      comment: comment,
      filtro: filtro
    };
  
    campanhas.push(novaCampanha);
  
    localStorage.setItem("CAMPANHAS", JSON.stringify(campanhas));
  
    // Redireciona para a página de campanhas após a criação
    window.location.href = "campanhas.html";
  }
  