//codigo do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
   image(imagemDoAtor,xAtor, yAtor, 35, 35);
 // print(yAtor)
}

function movimentaAtor(){
   if(keyIsDown(UP_ARROW)){
     yAtor-= 3;
   }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
        yAtor += 3;
     } 
   }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i= 0; i < imagemViloes.length; i++){
    colisao = collideRectCircle(xViloes[i], yViloes [i],comprimentoViloes ,alturaViloes , xAtor, yAtor,10 )
    if(colisao){      
      voltaAtorParaPosicaoInicial(); 
      somDaColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos = meusPontos-1;
      }
    }
  }  
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  fill(color(255,240,60));
  textSize(25);
  text("Pontos: " + meusPontos, width / 5, 27)
}

function marcaPontos(){
  if(yAtor< 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
 return yAtor < 366;
}

