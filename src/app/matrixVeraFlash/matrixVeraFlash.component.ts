import { Component } from '@angular/core';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'matrix-veraflash',
  templateUrl: './matrixVeraFlash.component.html',
  styleUrls: [ './matrixVeraFlash.component.css' ]  
})
export class VeraFlashComponent  {
  flipped = false;
  
  toggle() {
    this.flipped = !this.flipped;
  }
  //flagln = 2;
  tekstike = "tagumise külje tekst"

  kirjuta() {
    this.tekstike = localStorage.getItem("rentaablus");
    return this.tekstike;
  }

  lap: any;
  lapk: any;
  lapkok() {
    //this.lap = localStorage.getItem("varvrentaablus");
    //this.lapk = parseFloat(this.lap);
    this.lapk = 4;
    return this.lapk;
  }


  ReadMore:boolean = true
  //hiding info box
  visible:boolean = false
  //onclick toggling both
  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }
  



}