let cor;
let posicaoHorizontal;
let posicaoVertical;

function setup() {
  createCanvas(500, 500);
  background ("#9C27B0(192,106,106)");
  cor = color(random(0, 255), random(0,255), random(0,255) );
  posicaoHorizontal = 250
  posicaoVertical = 250
}

function draw() {
  if(mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255) );
  }
  
 fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 25);
  
  if(mouseX > posicaoHorizontal){
    posicaoHorizontal --;
  }
 if(mouseX < posicaoHorizontal){
  posicaoHorizontal ++;
}
  if(mouseY > posicaoVertical){
    posicaoVertical --;
  }
  if(mouseY < posicaoVertical){
    posicaoVertical ++;
  }
}
