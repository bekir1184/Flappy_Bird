function kutu(){
  this.x=width;
  this.ust=random(100,290);
  this.aralik=150;
  this.alt=490-(this.ust+this.aralik);
  this.width=100;
  this.hiz=3;

  this.goster=function(){
    fill(0,255,0);
    image(kutuDuz,this.x,490-this.alt,this.width,this.alt);
    //rect(this.x,490-this.alt,this.width,this.alt);
    //rect(this.x,0,this.width,this.ust);
    image(kutuTers,this.x,0,this.width,this.ust);
  }
  this.update=function() {
    this.x-=this.hiz;
  }
  this.carpma=function(kus){
    if(kus.x > this.x -10 && kus.x -10 < this.x+this.width && kus.y > 0 && kus.y < this.ust){

      return true;
    }
    if(kus.x > this.x-10 && kus.x < this.x+this.width && kus.y >490-this.alt-kus.height && kus.y<490  ){

      return true;
    }
    else{
      return false;
    }


  }

}
