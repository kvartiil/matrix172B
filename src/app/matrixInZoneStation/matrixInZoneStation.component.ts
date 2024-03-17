import { Component } from '@angular/core';

@Component({
  selector: 'matrix-zonestation',
  templateUrl: './matrixInZoneStation.component.html',
  styleUrls: [ './matrixInZoneStation.component.scss' ]
})
export class ZoneStationComponent  {
  name = 'Angular';
  options = [
    {
      id: "Stsenaarium 1: isevoolu teed minek",
      value: ''
    },
    {
      id: "Stsenaarium 2: agressiivne kasv",
      value: ''
    },
    {
      id: "Stsenaarium 3: kiire allaandmine",
      value: ''
    },
    {
      id: "Stsenaarium 4: mõõdukas kasv",
      value: ''
    },
    {
      id: "Stsenaarium 5: täielik lõhkilaenamine",
      value: ''
    },

  ]
  value = this.options[0].id;
  
  kirjutayles() {
    localStorage.setItem("stsenaarium", this.value);
    }

}