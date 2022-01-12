const botao = document.getElementById('botao');

function calcular() {
  const area = document.getElementById('area').value;
  const quantidade = area.length;
  const tela = document.getElementById('resultado');
  tela.innerText = `Aqui possui ${quantidade} caracteres.`;
}

botao.addEventListener('click', calcular);