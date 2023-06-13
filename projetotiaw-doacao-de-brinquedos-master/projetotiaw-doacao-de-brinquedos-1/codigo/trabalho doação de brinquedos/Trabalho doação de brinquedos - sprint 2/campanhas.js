
fetch('caminho/para/campanhas.json')
  .then(res => res.json())
  .then(data => {
    let str = '';
    for (let i = 0; i < data.length; i++) {
      let campanha = data[i];

      str += `<div class="card" style="width: 40rem;"  id="cardcampanha">
                <div class="card-body">
                  <h5 class="card-title">${campanha.title}</h5>
                  <p class="card-text">${campanha.description}</p>
                  <a href="acessar_cam1.html" class="btn" id="Saiba">Saiba Mais</a>
                </div>
              </div>`;
    }

    // Inserir as campanhas no elemento desejado no HTML
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = str;
  })
  .catch(error => {
    console.error('Erro:', error);
  });

 
  const saibaMaisButtons = document.querySelectorAll('.btn#Saiba');

// Adicionar event listener para cada botão
saibaMaisButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Impedir o comportamento padrão do link

    const cardBody = this.parentNode; // Obter o elemento pai do botão (div.card-body)
    const cardText = cardBody.querySelector('.card-text'); // Obter o elemento de texto da campanha

    // Alternar a visibilidade do texto da campanha
    cardText.classList.toggle('show-full-text');

    // Atualizar o texto do botão "Saiba Mais"
    if (cardText.classList.contains('show-full-text')) {
      this.textContent = 'Mostrar Menos';
    } else {
      this.textContent = 'Saiba Mais';
    }
  });
});

