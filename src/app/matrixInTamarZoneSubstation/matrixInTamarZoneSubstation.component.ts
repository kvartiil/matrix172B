import { Component } from '@angular/core';

@Component({
  selector: 'matrix-tamarzonesubstation',
  templateUrl: './matrixInTamarZoneSubstation.component.html',
  styleUrls: [ './matrixInTamarZoneSubstation.component.css' ]
})
export class TamarZoneSubstationComponent  {
  name = 'Angular';
  options = [
    {
      id: "Üldiselt ei ole plaanis varasid torkida.",
      value: 'x'
    },
    {
      id: "Müün midagi maha, jama jalust ära.",
      value: 'xx'
    },
    {
      id: "Investeerin, tänapäeval on iga teismeline investor.",
      value: 'xxx'
    }
  ]
  value = this.options[0].id;
  value2 = this.options[0].id;
  
  kirjutayles() {
  localStorage.setItem("varaplaan", this.value);
  }
}