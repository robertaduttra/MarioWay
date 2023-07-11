//imagens e sons do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemKamek;
let imagemBallet;
let imagemBoo;

//sons do jogo.

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/fundomario.jpg");
  imagemDoAtor = loadImage("imagens/ator-mario.png");
  imagemKamek = loadImage("imagens/kamek.png");
  imagemBallet = loadImage("imagens/ballet.png");
  imagemBoo = loadImage("imagens/boo.png");
  
  
  imagemViloes = [imagemKamek, imagemBallet,      imagemBoo,imagemKamek, imagemBallet, imagemBoo];
  
  somDaTrilha = loadSound("sons/mariotheme.mp3");
  somDaColisao = loadSound("sons/mariocolidiu.mp3");
  somDoPonto = loadSound("sons/pontos.mp3"); 
  
}



