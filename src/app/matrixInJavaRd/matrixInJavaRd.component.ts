import { Component, OnInit } from '@angular/core';
import { environment, myNewConstant } from '../../environments/environments';

@Component({
  selector: 'matrix-javard',
  templateUrl: './matrixInJavaRd.component.html',
  styleUrls: ['./matrixInJavaRd.component.css']
})
export class JavaRdComponent implements OnInit {

  ngOnInit() {  
   
} 

modelRentJR: any;
modelEfektJR: any;
precio: any;
comision: any;
valorFinal: any;
efektiivsusalg: any;
rentaablusalg: any;
efektiivsusmallu = 'Te pole efektiivsust muutnud.';
rentaablusmallu = 'Te pole rentaablust muutnud.';
//efrejareldusseisukoht = "Te ei ole veel efektiivsuse ja rentaabluse muutmisega tegelenud."

constructor() { //Siin toob sisse
  this.modelRentJR = environment.modelRent;
  this.modelEfektJR = environment.modelEfekt;
  this.precio = this.modelEfektJR * 100;
  this.comision = this.modelRentJR * 100;
  this.valorFinal = (this.precio+this.comision) / 2;
  localStorage.setItem("javaefektiivsusalg", this.precio);
  localStorage.setItem("javarentaablusalg", this.comision);
  this.efektiivsusalg = this.precio;
  this.rentaablusalg = this.comision;
//  this.modelStruct = environment.modelStruktuur;
  //this.lahtemudel = parseFloat(this.modelStruct)*100;

  localStorage.setItem("efektiivsusmallu", this.efektiivsusmallu);
  localStorage.setItem("rentaablusmallu", this.rentaablusmallu);
  
}
//precio = 12;
//comision = 24;
//valorFinal = 36;


  getPrecio(event) {
    this.precio = event.value;
    this.valorFinal = (event.value + this.comision) /2;
    localStorage.setItem("javaefektiivsus", this.precio);
    if (this.precio < this.efektiivsusalg) {
      this.efektiivsusmallu = 'Vähendasite efektiivsust. See võib olla aus, kuid üldiselt mõjutab ettevõtte majandusseisu negatiivselt.';
      //localStorage.setItem("efektiivsusmallu", 'lsfj,,,,');
    }
    else if (this.precio > this.efektiivsusalg) {
      this.efektiivsusmallu = 'Suurendasite efektiivsust. Mingi sisuline plaan peab teil olema, et varad rohkem toodaksid.'
      //localStorage.setItem("efektiivsusmallu", 'lsfjlkjlkj');
    }

    //console.log("Precio", this.precio);
    //console.log("Efektalg", this.efektiivsusalg);

    localStorage.setItem("efektiivsusmallu", this.efektiivsusmallu);

  }

  getComision(event) {
    this.comision = event.value;
    this.valorFinal = (event.value + this.precio) /2;
    localStorage.setItem("javarentaablus", this.comision);

    if (this.comision < this.rentaablusalg) {
      this.rentaablusmallu = 'Vähendasite rentaablust. See tähendab, et turul võivad teil asjad allamäge minna.';
      //localStorage.setItem("efektiivsusmallu", 'lsfj,,,,');
    }
    else if (this.comision > this.rentaablusalg) {
      this.rentaablusmallu = 'Suurendasite rentaablust. Selle eelduseks on see, et on mingi reaalne turuplaan selleks, et sellist käiku teha.'
      //localStorage.setItem("efektiivsusmallu", 'lsfjlkjlkj');
    }

    //console.log("Precio", this.precio);
    //console.log("Efektalg", this.efektiivsusalg);

    localStorage.setItem("rentaablusmallu", this.rentaablusmallu);
  }


}