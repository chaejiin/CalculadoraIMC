function calcular() {
  const personagemOriginal = './image/eu.png';
  const formulario = document.getElementById("formulario");
  const peso = parseFloat(formulario.peso.value);
  const altura = parseFloat(formulario.altura.value);

  if (!peso || !altura) {
    alert("Por favor, preencha peso e altura corretamente.");
    return;
  }

  const imc = peso / (altura * altura);
  const resultado = document.getElementById("resultado");
  const resultado_texto = document.getElementById("resultado_texto");

  resultado.innerHTML = imc.toFixed(2);
  formulario.imc.value = imc.toFixed(2);

  let texto = '';
  let cor = '';

  if (imc < 18.5) {
    texto = 'Abaixo do peso';
    cor = '#8B0000';
  } else if (imc <= 24.9) {
    texto = 'Peso normal - SAUDÁVEL';
    cor = '#006400';
  } else if (imc <= 29.9) {
    texto = 'Sobrepeso';
    cor = '#FFA500';
  } else if (imc <= 34.9) {
    texto = 'Obesidade grau I';
    cor = '#FF4500';
  } else if (imc <= 39.9) {
    texto = 'Obesidade grau II';
    cor = '#FF0000';
  } else {
    texto = 'Obesidade grau III - MÓRBIDA';
    cor = '#8B0000';
  }

  resultado_texto.innerHTML = texto;
  resultado_texto.style.backgroundColor = cor;
  resultado_texto.style.color = '#FFFFFF';
}

function resetar() {
  const resultado = document.getElementById("resultado");
  const resultado_texto = document.getElementById("resultado_texto");
  resultado.innerHTML = '--';
  resultado_texto.innerHTML = 'Classificação aparecerá aqui';
  resultado_texto.style.backgroundColor = '';
  resultado_texto.style.color = '';
  personagem.src = personagemOriginal;
}

/* ---------- Balão de fala interativo ---------- */
const fala = document.getElementById('balao');
const personagem = document.getElementById('personagem');

const frases = [
  "Todo mundo pode e deve se mexer.",
  "Sempre em movimento!",
  "De volta à rotina de treino!",
  "Por que não se divertir enquanto queima calorias?",
  "Atividade física e saúde mental andam de mãos dadas.",
  "Treinar não precisa ser chato!",
  "Cuidar do corpo é cuidar da mente!",
  "Saúde é o que interessa, o resto não tem pressa!"
];

const gifs = [
  './image/obesidade3.gif',
  './image/poucoacima2.gif'
];

fala.addEventListener('click', () => {
  const mostrarTexto = Math.random() < 0.5; // 50% chance de mostrar texto ou gif

  if (mostrarTexto) {
    const index = Math.floor(Math.random() * frases.length);
    fala.textContent = frases[index];
  } else {
    const gifIndex = Math.floor(Math.random() * gifs.length);
    fala.innerHTML = `<img src="${gifs[gifIndex]}" alt="Gif" style="max-width: 150px;" />`;
  }
});
