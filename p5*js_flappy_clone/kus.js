function kus() {
  this.x=width/2-40;
  this.y=height/2-40;
  this.width=45;
  this.height=45;
  this.yerCekimi=0.6;
  this.yukari=-10;
  this.surat=0;
  this.aci=90;

  this.goster=function() {
    translate(this.x,this.y);
    rotate(this.aci);
    image(kusImg,0,0,this.width,this.height);
  }
  this.hareket=function () {
    this.surat+=this.yerCekimi;
    this.aci+=this.surat*0.01;
    this.y+=this.surat;

    if(this.y<0){
      this.y=0;
    }
    if(this.aci<0){
      this.aci=0;
    }
    if(this.aci>0.60){
      this.aci=0.60;
    }

  }
  this.zipla=function () {
    this.surat=this.yukari;


  }
  this.oldu=function () {
    if(this.y>460){
      this.y=460;
      return true;
    }
    else{
      return false;
    }
  }
}
