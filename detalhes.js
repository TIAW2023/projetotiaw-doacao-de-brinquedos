function exibeCamp(id) {
  let idx = dbCampanha.dados.findIndex(elem => elem.id == id);
  if (idx !== -1) {
    let campanha = dbCampanha.dados[idx];
    document.querySelector('#titulo').textContent = campanha.titulo;
    document.querySelector('#descricao').textContent = campanha.descricao;
    document.querySelector('#email').textContent = campanha.email;
    document.querySelector('#telefone').textContent = campanha.telefone;
    document.querySelector('#endereco').textContent = campanha.endereco;
    document.querySelector('#historia').textContent = campanha.historia;
  } else {
    document.querySelector('#tela').innerHTML = '<h1 style="text-align: center;">Campanha não encontrada</h1>';
  }
}

var dbCampanha = {
  dados: [
    {
      id: '0',
      imagem: '',
      titulo: 'Teste 1',
      descricao: 'Campanha 1',
      email: 'email1@gmail.com',
      telefone: '11111111',
      endereco: 'Rua 1',
      historia: 'Um'
    },
    {
      id: '1',
      imagem: '',
      titulo: 'Teste 2',
      descricao: 'Campanha 2',
      email: 'email2@gmail.com',
      telefone: '22222222',
      endereco: 'Rua 2',
      historia: 'Dois'
    },
    {
      id: '2',
      imagem: '',
      titulo: 'Teste 3',
      descricao: 'Campanha 3',
      email: 'email3@gmail.com',
      telefone: '33333333',
      endereco: 'Rua 3',
      historia: 'Três'
    },
    {
      id: '3',
      imagem: '',
      titulo: 'Teste 4',
      descricao: 'Campanha 4',
      email: 'email4@gmail.com',
      telefone: '44444444',
      endereco: 'Rua 4',
      historia: 'Quatro'
    },
    {
      id: '4',
      imagem: '',
      titulo: 'Teste 5',
      descricao: 'Campanha 5',
      email: 'email5@gmail.com',
      telefone: '55555555',
      endereco: 'Rua 5',
      historia: 'Cinco'
    }
  ]
};

  