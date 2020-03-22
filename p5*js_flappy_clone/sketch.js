var arkaplan;
var zemin;
var kusImg;
var kutuTers;
var kutuDuz;
var zeminX;
var zeminHiz;
var kus;
var skor;
var kutular=[];
var oyunBitti;

function preload() {
  arkaplan=loadImage('https://i.hizliresim.com/2OjL2O.png');
  zemin=loadImage('https://i.hizliresim.com/kME4g7.png');
  kusImg=loadImage('https://i.hizliresim.com/jqB08m.png');
  kutuDuz=loadImage('https://i.hizliresim.com/BOvEnv.png');
  kutuTers=loadImage('https://i.hizliresim.com/1xST3j.png');

}

function setup() {
  createCanvas(488,584);
  kus= new kus();
  skor=0;
  kutular.push(new kutu);
  zeminX=0;
  zeminHiz=3;
  oyunBitti=false;
  oyunaBasla=false;

}
function restart(){
  skor=0;
  oyunBitti=false;
  kus.x=width/2-40;
  kus.y=height/2-40;
  kus.surat=-10;
  kus.aci=90;
  kutular=[];
  kutular.push(new kutu);

}
function draw(){
  zeminX-=zeminHiz;
  background(arkaplan);
  image(zemin,zeminX,490,836,100);
  for (var i = 0; i <kutular.length; i++) {
    kutular[i].goster();
    kutular[i].update();
    if(kutular[i].carpma(kus)){
      oyunSonu();
    }

  }
  textSize(50);
  fill(255);
  stroke(0);
  strokeWeight(8);
  text(skor,width/2-50,(height/2)-200);

  kus.hareket();
  kus.goster();
  if(frameCount % 100 ==0){
    kutular.push(new kutu);
    if(!oyunBitti){
      skor++;
    }
  }
  if(zeminX<-300){
    zeminX=0;
  }
  if(kus.oldu()){
    oyunSonu();
  }


}
  function mousePressed(){
    if(!oyunBitti){
      kus.zipla();
    }
    if(oyunBitti){
      restart();
    }
  }
  function oyunSonu(){
    kus.surat=10;
    zeminHiz=0;
    for (var i = 0; i <kutular.length; i++) {
      kutular[i].hiz=0;


    }
    oyunBitti=true;

  }
