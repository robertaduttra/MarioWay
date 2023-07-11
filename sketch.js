function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();  
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraViloes();
  movimentaViloes();
  movimentaAtor();
  voltaPosicaoInicialDoVilao()
  verificaColisao();
  incluiPontos();
  marcaPontos();
  pontosMaiorQueZero();
}






