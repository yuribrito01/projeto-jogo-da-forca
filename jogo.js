var palavraSecreta = "ornitorrinco";

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

    botao.classList.add("class_letra_certa");

  } else {
    letrasErradas.push(letra);
    atualizarImagem();

    botao.classList.add("class_letra_errada");
  }

  botao.disabled = true;
  verificaFimDeJogo();
}

function verificaFimDeJogo() {
  if (letrasErradas.length == 6) {
    window.location.href = "perdedor.html";
  }

  var h1 = document.getElementById("palavra_secreta");
  if (!h1.innerText.includes("_")) {
    window.location.href = "ganhador.html";
  }
}

function atualizarImagem() {

  var nomeImagem = "";

  switch (letrasErradas.length) {
    case 1:
      nomeImagem = "imagens/erro1.png";
      break;
    case 2:
      nomeImagem = "imagens/erro2.png";
      break;
    case 3:
      nomeImagem = "imagens/erro3.png";
      break;
    case 4:
      nomeImagem = "imagens/erro4.png";
      break;
    case 5:
      nomeImagem = "imagens/erro5.png";
      break;
    case 6:
      nomeImagem = "imagens/erro6.png";
      break;
    default:
      nomeImagem = "imagens/forca_sem_erro.png";
  }

  var img = document.getElementById("bonequinho_caioba");
  img.src = nomeImagem;
}

montarResultado();
