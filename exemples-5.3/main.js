const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


//1. Copie esse arquivo e edite apenas ele;

//2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;

function oneClick(event) {
  let techClass = document.querySelector('.tech');
  techClass.classList.remove('tech');
  event.target.classList.add('tech');
}

//2.1. Deve existir apenas uvocêm elemento com a classe 'tech'. Como você faz isso?
// Adicionando EventListener nas div a baixo:
firstDiv.addEventListener('click', oneClick);
secondDiv.addEventListener('click', oneClick);
thirdDiv.addEventListener('click', oneClick);

//3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';


function texto (event) {
  let texto = document.querySelector('#input');
  
}

input.addEventListener('change', texto);

//4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;

//4.1. Que tal redirecionar para seu portifólio?

//5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

//Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Duplo Click';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
secondDiv.addEventListener('dblclick', resetText);
thirdDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
