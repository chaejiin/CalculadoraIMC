const fala = document.getElementById('balao');
const personagem = document.getElementById('personagem');

let estado = 0;

fala.addEventListener('click', () => {
  estado++;
  if (estado === 1) {
    fala.textContent = 'Todo mundo pode e deve se mexer.';
    personagem.src = './image/poucoacima.gif'; // balão de fala POUCO ACIMA DO PESO
  } else if (estado === 2) {
    fala.innerHTML = '<img src="./pedropedro.gif" alt="Mensagem" style="max-width: 150px;" />';
    personagem.src = './eu3.png'; // balão de fala ACIMA DO PESO

  } else {
    fala.textContent = 'Hiii! Clique em mim pra ouvir algo bom ^^';
    personagem.src = './image/giphy.gif'; // volta ao normal
    estado = 0;
  }
});

function calcular() {
    // Obtendo o formulário pelo ID
    var formulario = document.getElementById("formulario");
  
    // Obtendo o valor do peso e transformando em número
    var peso = +formulario.peso.value;
    // Obtendo o valor da altura e transformando em número
    var altura = +formulario.altura.value;
    // Obtendo o valor do sexo
    var sexo = formulario.sexo.value;

    // if para validar se o formulário foi preenchido
    if (peso == "" || altura == "") {
      alert("Por favor informe o valor do peso e da altura!")      
    } else {

      // Calculando o IMC com base no sexo
    var imc;
    if (sexo === "masculino") {
      imc = peso / (altura * altura);
    } else if (sexo === "feminino") {
      imc = 1.2 * peso / (altura * altura);
    }
  
    // Função para calcular o IMC e atualizar o resultado na página
    function calcularIMC(imc) {
      // Obtendo o elemento HTML onde será mostrado o resultado numérico
      var resultado = document.getElementById("resultado");
      // Obtendo o elemento HTML onde será mostrado o resultado em texto
      var resultado_texto = document.getElementById("resultado_texto");
  
      // Atualizando o resultado numérico
      resultado.innerHTML = imc.toFixed(2);
      // Atualizando o resultado no campo de input do formulário
      formulario.imc.value = imc.toFixed(2);
  
      // Verificando o valor do IMC e atualizando o resultado em texto com a classificação correspondente
      if (sexo === "masculino") {
        if (imc < 20) {
          resultado_texto.innerHTML = 'Muito abaixo do peso';
          resultado_texto.style.color = "#FFFFFF"; // branco
          resultado_texto.style.backgroundColor = "#8B0000"; // vermelho escuro
        } else if (imc >= 20.7 && imc <= 26.4) {
          resultado_texto.innerHTML = "Peso normal - SAUDÁVEL";
          resultado_texto.style.color = "#FFFFFF"; // branco
          resultado_texto.style.backgroundColor = "#006400"; // verde escuro
        } else if (imc >= 26.5 && imc <= 27.8) {
          resultado_texto.innerHTML = "Acima do peso - Pouco acima do peso";
          resultado_texto.style.color = "#FFFFFF"; // branco
          resultado_texto.style.backgroundColor = "#FFA500"; // laranja
        } else if (imc >= 27.9 && imc <= 31.1) {
          resultado_texto.innerHTML = "Acima do peso - SOBREPESO";
          resultado_texto.style.color = "#FFFFFF"; // branco
          resultado_texto.style.backgroundColor = "#FFA500"; // laranja
        } else if (imc >= 31.2 && imc <= 34.9) {
          resultado_texto.innerHTML = "Obesidade grau I";
          resultado_texto.style.color = "#FFFFFF"; // branco
          resultado_texto.style.backgroundColor = "#FF4500"; // laranja escuro
        } else if (imc >= 35 && imc <= 39.9) {
          resultado_texto.innerHTML = "Obesidade grau II";
          resultado_texto.style.color = "#FFFFFF"; // branco
          resultado_texto.style.backgroundColor = "#FF0000"; // vermelho
        } else if (imc >= 40) {
          resultado_texto.innerHTML = "Obesidade grau III - MÓRBIDA";
          resultado_texto.style.color = "#FFFFFF"; // branco
          resultado_texto.style.backgroundColor = "#8B0000"; // vermelho escuro
        }
      } else if (sexo === "feminino") {
        if (imc < 18.5) {
            resultado_texto.innerHTML = 'Muito abaixo do peso';
            resultado_texto.style.color = "#FFFFFF"; // branco
            resultado_texto.style.backgroundColor = "#8B0000"; // vermelho escuro
          } else if (imc >= 18.6 && imc <= 24.9) {
            resultado_texto.innerHTML = 'Peso normal - SAUDÁVEL';
            resultado_texto.style.color = "#FFFFFF"; // branco
            resultado_texto.style.backgroundColor = "#006400"; // verde escuro
          } else if (imc >= 25 && imc <= 29.9) {
            resultado_texto.innerHTML = 'Pouco acima do peso - Sobrepeso';
            resultado_texto.style.color = "#FFFFFF"; // branco
            resultado_texto.style.backgroundColor = "#FFA500"; // laranja
          } else if (imc >= 30 && imc <= 34.9) {
            resultado_texto.innerHTML = "Obesidade grau I";
            resultado_texto.style.color = "#FFFFFF"; // branco
            resultado_texto.style.backgroundColor = "#FF4500"; // laranja escuro
          } else if (imc >= 35 && imc <= 39.9) {
            resultado_texto.innerHTML = "Obesidade grau II";
            resultado_texto.style.color = "#FFFFFF"; // branco
            resultado_texto.style.backgroundColor = "#FF0000"; // vermelho
          } else if (imc <= 40){
            resultado_texto.innerHTML = "Obesidade grau III - MÓRBIDA";
            resultado_texto.style.color = "#FFFFFF"; // branco
            resultado_texto.style.backgroundColor = "#8B0000"; // vermelho escuro
          }
        }
    }
// Chamando a função para calcular o IMC
calcularIMC(imc);
    }//fim do else
}//fim da função calcular()
    

// Este código adiciona um event listener para o evento "keypress" no documento.
// Quando o usuário pressionar a tecla "Enter", o código verifica se a tecla pressionada é "Enter". 
// Se for, ele chama o método "click()" no botão "Calcular", que aciona a função "calcular()".    
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('calcularbotao').click();
    }
});


  