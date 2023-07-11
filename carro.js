//codigo do carro

let xViloes = [600,600,600,600,600,600];
let yViloes = [40,96,150, 210,270,318];
let velocidadeViloes = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoViloes  = 50;
let alturaViloes = 35;

function mostraViloes(){
  for(let i = 0; i < imagemViloes.length; i++ ){  
  image(imagemViloes[i], xViloes[i], yViloes[i], comprimentoViloes,alturaViloes); 
    //print("o valor do i nessa repeticao é " +i);
  }
}

function movimentaViloes(){
  for(let i = 0; i< imagemViloes.length; i++){
     xViloes[i] -= velocidadeViloes[i];
  }
 // xCarros[0] -= velocidadeCarros[0];
 // xCarros[1] -= velocidadeCarros[1];
 // xCarros[2] -= velocidadeCarros[2];
  
}

function voltaPosicaoInicialDoVilao(){
  for(let i=0; i< imagemViloes.length; i++){    
    if(passouTodaATela(xViloes[i])){
    xViloes[i] = 600;
   }  
  
  }
}

function passouTodaATela(xViloes){
  return xViloes < -50;
}

