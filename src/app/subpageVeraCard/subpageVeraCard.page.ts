import { Component, OnInit } from '@angular/core';
import {CommentNode} from '../matrixTamar/matrixTamar.component'

@Component({
  selector: 'app-subpageveracard',
  templateUrl: './subpageVeraCard.page.html',
  styleUrls: ['./subpageVeraCard.page.scss'],
})
export class SubpageVeraCardPage implements OnInit {

  //constructor() { }

  ngOnInit() {
    //localStorage.setItem("kasutus", 0);
  }

  //comments:Array<CommentNode> = [];
  constructor(){    
    //this.comments =  [new CommentNode("Lahendus juba küpseb konsultandi peas, kuid võid talle midagi meeldetuletuseks/meelemuutuseks kirjutada...")]
  }



}