

let str = '';
for (let i = 0; i < dbCampanha.dados.length; i++) {
  let campanha = dbCampanha.dados[i];
  campanha.id = i.toString(); // Atribui um ID único para cada campanha

  str += `<div class="card" style="width: 40rem; margin-top: 10px;"  id="cardcampanha">
            <div class="card-body">
              <h5 class="card-title">${campanha.titulo}</h5>
              <p class="card-text">${campanha.descricao}</p>
              <a href="detalhes.html?id=${campanha.id}" class="btn" id="Saiba">Saiba Mais</a>
            </div>
          </div>`;
}

document.getElementById('cardcamp').innerHTML = str;
