var palavraSecreta = "c";

var letrasCertas = [];
var letrasErradas = [];

function montarResultado() {
  var resultado = "";

  for (var pos = 0; pos < palavraSecreta.length; pos++) {
    var letraDaVez = palavraSecreta[pos];

    if (letrasCertas.includes(letraDaVez.toUpperCase())) {
      resultado += " " + letraDaVez;
    } else {
      resultado += " _";
    }
  }

  var h1 = document.getElementById("palavra_secreta");
  h1.innerText = resultado;
}

function clickarLetra(botao, letra) {

  if (palavraSecreta.toLowerCase().includes(letra.toLowerCase())) {
    letrasCertas.push(letra);
    montarResultado();

    botao.classList.add("letraCerta");

  } else {
    letrasErradas.push(letra);
    atualizarImagem();

    botao.classList.add("letraErrada");
  }

  botao.disabled = true;
  verificaFimDeJogo();
}

function verificaFimDeJogo() {
  if (letrasErradas.length == 6) {
    window.location.href = "teste_resultado.html";
  }

  var h1 = document.getElementById("palavra_secreta");
  if (!h1.innerText.includes("_")) {
    window.location.href = "teste_resultado.html";
  }
}

function atualizarImagem() {

  switch (letrasErradas.length) {
    case 1:
      var nomeImagem = "imagens/erro1.png";

      var img = document.getElementById("img");
      img.src = nomeImagem;

      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
    case 5:

      break;
    case 6:

      break;
    default:

  }
}

montarResultado();
