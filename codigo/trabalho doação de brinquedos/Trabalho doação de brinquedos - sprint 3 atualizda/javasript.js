const bancoDeDados =   [ { 
    filtro: 1,
    id: 1,
    "title": "Campanha meu cantinho feliz",
    "resumo": "Campanha sobre trazer felicidade para as criançãs carentes",
    "categoria": "brinquedos",
    
  },
{  
    filtro: 1,
    id: 2,
    "title": "Doe um Binquedo e faça uma criança sorrir",
    "resumo": "Os brinquedos arrecadados serão entregues para crianças carentes da cidades metropolitanas de bh, Participe!!!",
    "categoria":"brinquedos",
  },

  {
    filtro: 2,
    id: 3,
    "title": "Campanha de doação de alimentos",
    "resumo": "Doe aqui um alimento",
    "categoria": "alimentos",
  },
  {
    filtro: 3,
    id: 4,
    "title": "Doação de Roupas",
    "resumo": "Cada roupa doada tem o tamanho certo: o de seu coração",
    "categoria": "roupas",
  },

  {
    filtro: 3,
    id: 5,
    "title": "Campanha Raio de Luz",
    "resumo": "Recolhemos doação de roupas",
    "categoria": "roupas",
   
  },
]

const filtro = 
[  
  {filtro: 1, categoria: 'brinquedos'},
  {filtro: 2, categoria: 'brinquedos'},
  {filtro: 3, categoria: 'alimentos'},
  {filtro: 4, categoria:  'roupas '},
  {filtro: 5, categoria: 'roupas'},

 ]

 
   
function exibirdados () {
    let str = ''
    for (let i = 0; i < bancoDeDados.length; i++) {
        let data = bancoDeDados[i]
       // if(!filtropesquisa || data.filtro == filtropesquisa) {
          str += ` <div class="card"  id="cardcampanha">
          <div class="card-body" id="dataList">
            <h5 class="card-title" id="title">${data.title}</h5>
            <p class="card-text" id="resumo">${data.resumo}</p>
            <p class="card-text" id="resumo">${data.categoria}</p>
              <a href="acessar_cam1.html" class="btn" id="Saiba">Saiba Mais</a>
          </div>
        </div>
        <br>`

      ///  }
        
  
    
    }
    document.querySelector('#tela').innerHTML= str
}


let filtropesquisa = 0


document.body.onload = () => {
    exibirdados();

   let filtro = document.querySelector('#filtro')
   filtro.addEventListener ('change',  () => 
     {
      filtropesquisa = filtro.value
      exibirdados();
    })

    
}
 
