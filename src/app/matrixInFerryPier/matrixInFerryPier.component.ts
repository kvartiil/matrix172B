import { Component, OnInit } from '@angular/core';
import { environment, myNewConstant } from '../../environments/environments';

@Component({
  selector: 'matrix-ferrypier',
  templateUrl: './matrixInFerryPier.component.html',
  styleUrls: ['./matrixInFerryPier.component.scss']
})
export class FerryPierComponent implements OnInit {


  

  constructor() { //Siin toob sisse
    
    }

    ngOnInit() {  
      
  } 

  myProperty = true;
  ferry: any;
  
  myProperty2() {
  this.ferry = JSON.stringify(this.myProperty);
  localStorage.setItem("ferrypier", this.ferry);

  if (this.ferry == 'true') {
    localStorage.setItem("ferrypier2", 'Teil on järelmaksuvõimalus. See toob kliente juurde, kasvatab käivet, kuid võib samas luua olukorra, kus osa raha jääb küla peale ja pankrotihaldur võib külla tulla.');
    //console.log("esimene");
  }
  else if (this.ferry == 'false') {
    localStorage.setItem("ferrypier2", 'Teil ei ole järelmaksuvõimalust. See kurvastab kliente, võib vähendada käivet, kuid hoiab maksevõime paremas seisus.');
    //console.log("teine");
  }
  
  //console.log("ferry", this.ferry);

  //localStorage.setItem('test', JSON.stringify(storeMe))
  //let result = JSON.parse(localStorage.getItem('test'))
  

  }


}