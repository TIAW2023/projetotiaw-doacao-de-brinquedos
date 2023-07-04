
let str = '';
for (let i = 0; i < dbCampanha.dados.length; i++) {
  let campanha = dbCampanha.dados[i];
  campanha.id = i.toString(); // Atribui um ID único para cada campanha

  str += `<div class="card" style="width: 40rem; margin-top: 10px;"  id="cardcampanha">
            <div class="card-body"></div>
              <h5 class="card-title">${campanha.titulo}</h5>
              <p class="card-text">${campanha.descricao}</p>
              <a href="detalhes.html?id=${campanha.id}" class="btn" id="Saiba">Saiba Mais</a>
              <ul id="listaCampanhas"></ul>
            </div>
          </div>`;
}

document.getElementById('cardcamp').innerHTML = str;

// FILTRO 
function exibirCampanhas() {
  var filtroExibicao = document.getElementById("filtroExibicao").value;
  var campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];
  var listaCampanhas = document.getElementById("listaCampanhas");
  listaCampanhas.innerHTML = "";

  for (var i = 0; i < campanhas.length; i++) {
    if (filtroExibicao === "todos" || campanhas[i].filtro === filtroExibicao) {
      var li = document.createElement("li");
      li.textContent = "tipo da campanha: " + campanhas[i].filtro;
      listaCampanhas.appendChild(li);
    }
  }
}
// FILTRO 