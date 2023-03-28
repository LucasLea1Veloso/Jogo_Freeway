//Codigos do carro

//Altura (y) dos carros e partida (x)
let yCarros = [40, 96, 150, 210, 262, 318];
let xCarros = [600, 600, 600, 600, 600, 600];

//Velocidade dos carros
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];

//variaveis do carro
let xCarro = 495
let alturaCarro = 50
let comprimentoCarro = 40


function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i = i + 1 ){
    image(imagemCarros[i], xCarros[i], yCarros[i], alturaCarro, comprimentoCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicial(){
  for (i = 0; i < imagemCarros.length; i = i + 1){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}

