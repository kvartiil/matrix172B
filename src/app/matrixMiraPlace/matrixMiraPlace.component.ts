import { Component } from '@angular/core';
import { multi } from './miradata';

@Component({
  selector: 'matrix-miraplace',
  templateUrl: './matrixMiraPlace.component.html',
  styleUrls: ['./matrixMiraPlace.component.css']
})
export class MiraPlaceComponent {
  single: any[];
  multi: any[];

  view: any[] = [600, 300];

  // options
  showXAxis = true;
  showYAxis = true; 
  gradient = false;
  showLegend = true;
  showXAxisLabel = true; 
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { multi })
  }

  onSelect(event) {
    console.log(event);
  }

}