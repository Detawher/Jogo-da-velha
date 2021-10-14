const player1 = "X";
const player2 = "O";
var pontosJogador1 = 0;
var pontosJogador2 = 0;
var playTime = player1;
var gamerOver = false;
var divVen = document.getElementById("vencedorr");
var html1 = "Vencedor: ? ";

divVen.innerHTML = html1;
atualizaMostrador();
inicializarEspacos();

function atualizaMostrador() {
  if (gamerOver) {
    return;
  }

  if (playTime == player1) {
    var player = document.querySelectorAll("div#mostrador img")[0];
    player.setAttribute(
      "src",
      "https://image.flaticon.com/icons/png/512/97/97184.png"
    );
  } else {
    var player = document.querySelectorAll("div#mostrador img")[0];
    player.setAttribute(
      "src",
      "https://media.discordapp.net/attachments/887531303891767356/897127519122259968/33759-removebg-preview-removebg-preview-removebg-preview-removebg-preview.png?width=397&height=397"
    );
  }
}

function inicializarEspacos() {
  var espacos = document.getElementsByClassName("espaco");
  for (var i = 0; i < espacos.length; i++) {
    espacos[i].addEventListener("click", function () {
      if (gamerOver) {
        return;
      }

      if (this.getElementsByTagName("img").length == 0) {
        if (playTime == player1) {
          this.innerHTML =
            "<img src='https://image.flaticon.com/icons/png/512/97/97184.png'>";
          this.setAttribute("jogada", player1);
          playTime = player2;
        } else {
          this.innerHTML =
            "<img src='https://media.discordapp.net/attachments/887531303891767356/897127519122259968/33759-removebg-preview-removebg-preview-removebg-preview-removebg-preview.png?width=397&height=397'>";
          this.setAttribute("jogada", player2);
          playTime = player1;
        }
        atualizaMostrador();
        verificarVencedor();
      }
    });
  }
}

async function verificarVencedor() {
  var a1 = document.getElementById("a1").getAttribute("jogada");
  var a2 = document.getElementById("a2").getAttribute("jogada");
  var a3 = document.getElementById("a3").getAttribute("jogada");

  var b1 = document.getElementById("b1").getAttribute("jogada");
  var b2 = document.getElementById("b2").getAttribute("jogada");
  var b3 = document.getElementById("b3").getAttribute("jogada");

  var c1 = document.getElementById("c1").getAttribute("jogada");
  var c2 = document.getElementById("c2").getAttribute("jogada");
  var c3 = document.getElementById("c3").getAttribute("jogada");

  var vencedor = "";

  if (
    (a1 == b1 && a1 == c1 && a1 != "") ||
    (a1 == b2 && a1 == c3 && a1 != "") ||
    (a1 == a2 && a1 == a3 && a1 != "")
  ) {
    vencedor = a1;
  } else if (
    (b2 == b1 && b2 == b3 && b2 != "") ||
    (b2 == a2 && b2 == c2 && b2 != "") ||
    (b2 == a3 && b2 == c1 && b2 != "")
  ) {
    vencedor = b2;
  } else if (
    (c3 == c2 && c3 == c1 && c3 != "") ||
    (c3 == b3 && c3 == a3 && c3 != "")
  ) {
    vencedor = c3;
  } 
  
  var divVen = document.getElementById("vencedorr");
  var html1 = "Vencedor: ? ";
  var html = "Vencedor: " + vencedor + " ";
  divVen.innerHTML = html1;
  
  if (vencedor != "") {
    gamerOver = true;
    await sleep(55);
    divVen.innerHTML = html;
    document.getElementById("btnProximaRodada").disabled = false;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function proximaRodada() {
  var divCartas = document.getElementById("tabuleiro");
  divCartas.innerHTML = `<div id="a1" class="espaco" jogada=""></div>
    <div id="a2" class="espaco" jogada=""></div>
    <div id="a3" class="espaco" jogada=""></div>

    <div id="b1" class="espaco" jogada=""></div>
    <div id="b2" class="espaco" jogada=""></div>
    <div id="b3" class="espaco" jogada=""></div>

    <div id="c1" class="espaco" jogada=""></div>
    <div id="c2" class="espaco" jogada=""></div>
    <div id="c3" class="espaco" jogada=""></div>`;

  atualizaMostrador();
  inicializarEspacos();
  document.getElementById("btnProximaRodada").disabled = true;
  if (gamerOver == true) {
    gamerOver = false;
  }
}