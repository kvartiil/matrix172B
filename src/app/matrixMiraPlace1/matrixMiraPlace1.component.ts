import { Component } from '@angular/core';

@Component({
  selector: 'matrix-miraplace1',
  templateUrl: './matrixMiraPlace1.component.html',
  styleUrls: [ './matrixMiraPlace1.component.css' ]
})
export class MiraPlace1Component  {
  list1 = [
    'mudel1',
    'mudel2',
    'mudel3',
  ];

  list2 = [
    'mudel4',
    'mudel5',
    'mudel6',
  ];

  move(item): void {
    console.log('Moving items between lists');
    
    if (this.list1.indexOf(item) !== -1) {
      this.list1.splice(this.list1.indexOf(item), 1);
      this.list2.push(item);
    } else {
      this.list2.splice(this.list2.indexOf(item), 1);
      this.list1.push(item);
    }
  }
}