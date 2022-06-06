let comprimentoTela = 800;
let larguraTela = 600;
let xBolinha = comprimentoTela / 2;
let yBolinha = larguraTela / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let diametroBolinha = 20;
let raioBolinha = diametroBolinha / 2;
let xMinhaRaquete = 5;
let yRaquete = 300;
let larguraRaquete = 10;
let comprimentoRaquete = 80;
let xRaqueteOponente = comprimentoTela - 20;
let yRaqueteOponente = 300;
let colidiu = false;
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(comprimentoTela, larguraTela);
}

function draw() {
  background(0);
  criaBolinha();
  moveBolinha();
  colideBolinha();
  CriaRaquete(xMinhaRaquete, yRaquete);
  moveMinhaRaquete();
  verificaColisaoRaquete(xMinhaRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente,             yRaqueteOponente);
  CriaRaquete(xRaqueteOponente, yRaqueteOponente);
  controlePlacar();
  pontuaçaoJogo();
}

function criaBolinha(){
  circle (xBolinha, yBolinha, diametroBolinha);
}

function moveBolinha(){
  yBolinha += velocidadeYBolinha;
  xBolinha += velocidadeXBolinha;
  yRaqueteOponente = yBolinha - comprimentoRaquete / 2;
}

function colideBolinha(){
 if (xBolinha + raioBolinha > comprimentoTela || xBolinha - raioBolinha < 0){
    velocidadeXBolinha *= -1
  }
  
  if (yBolinha + raioBolinha > larguraTela ||     yBolinha - raioBolinha < 0){
    velocidadeYBolinha *= -1
  }
}

function CriaRaquete(posicaoX, posicaoY){
  rect(posicaoX,posicaoY,larguraRaquete,comprimentoRaquete); 
}

function moveMinhaRaquete (){
   if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
 }
}

function verificaColisaoRaquete(posiçaoX, posiçaoY){
  colidiu = collideRectCircle (posiçaoX, posiçaoY, larguraRaquete, comprimentoRaquete, xBolinha, yBolinha, raioBolinha);
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}

function controlePlacar(){
  fill(255);
  text(meusPontos, 200, 30);
  text(pontosOponente, 600, 30);
}

function pontuaçaoJogo(){
  if (xBolinha > comprimentoTela - 10){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}