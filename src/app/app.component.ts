import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isZero = false;
  GameOver = false;
  title1='';
  title2='';
  title3='';
  PN=false;
  V1="";
  V2="";
  V3="";
  V4="";
  V5="";
  V6="";
  V7="";
  V8="";
  V9="";
  constructor() {
    // this.title1="ONE";
  }
  printZeroX(event) {
    console.log(this.GameOver);
    if (event.target.innerHTML === "" && !this.GameOver) {
      if (this.isZero) {
        event.target.innerHTML = "X";
      } else {
        event.target.innerHTML = "0";
      }
    }
    this.isZero = !this.isZero;
    this.PN=!this.PN;
    this.PLAYERPRINT();
    return event.target.innerHTML;

  }
  PLAYERPRINT(){
   if(this.isZero){
     this.title1="ONE";
   }
   else{
  this.title1="TWO";
   }

  }
isNotBlank(button) {

  if (button == "") {
    return false;
  } else {
    return true;
  }
}

isSameValue(one, two, three) {
  if ((one == two && one == three)) {
    return true;
  } else {
    return false;
  }
}
isRow(A, B, C){
  if (this.isNotBlank(A) && this.isNotBlank(B) && this.isNotBlank(C)) {
   
    if (this.isSameValue(A, B, C)) {

      return true;
    }

    return false;
  }
}
isGAMEFINSISH(){
  if(this.GameOver){
    this.title2="GAME OVER";
    this.title3="YOU WIN THIS GAME ! CONGRATS...";
  }
  console.log(this.V1 +"   "+this.V2+"   "+this.V3);
  if (this.isRow(this.V1, this.V2, this.V3)) {
    
    this.GameOver = true;

  }
  if (this.isRow(this.V4, this.V5, this.V6)) {
    this.GameOver = true;

  }
  if (this.isRow(this.V7, this.V8, this.V9)) {
    this.GameOver = true;

  }
  if (this.isRow(this.V1, this.V4, this.V7)) {
    this.GameOver = true;

  }
  if (this.isRow(this.V2, this.V5, this.V8)) {
    this.GameOver = true;

  }
  if (this.isRow(this.V3, this.V6, this.V9)) {
    this.GameOver = true;

  }
  if (this.isRow(this.V1, this.V5, this.V9)) {
    this.GameOver = true;

  }
  if (this.isRow(this.V3, this.V5, this.V7)) {
    this.GameOver = true;

  }
}
C1(event) {
  console.log("c1");
  this.V1 = this.printZeroX(event);
  this.isGAMEFINSISH();
}
C2(event) {
  console.log("c2");
  this.V2 = this.printZeroX(event);
  this.isGAMEFINSISH();
} C3(event) {
  console.log("c3");
  this.V3 = this.printZeroX(event);
  this.isGAMEFINSISH();
} C4(event) {
  console.log("c4");
  this.V4 = this.printZeroX(event);
  this.isGAMEFINSISH();
} C5(event) {
  console.log("c5");
  this.V5 = this.printZeroX(event);
  this.isGAMEFINSISH();
} C6(event) {
  console.log("c6");
  this.V6 = this.printZeroX(event);
  this.isGAMEFINSISH();
} C7(event) {
  console.log("c7");
  this.V7 = this.printZeroX(event);
  this.isGAMEFINSISH();
} C8(event) {
  console.log("c8");
  this.V8 = this.printZeroX(event);
  this.isGAMEFINSISH();
} C9(event) {
  console.log("c9");
  this.V9 = this.printZeroX(event);
  this.isGAMEFINSISH();
}
}
