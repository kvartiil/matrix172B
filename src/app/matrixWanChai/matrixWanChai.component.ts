import { Component } from '@angular/core';

@Component({
  selector: 'matrix-wanchai',
  templateUrl: './matrixWanChai.component.html',
  styleUrls: [ './matrixWanChai.component.scss' ]
})
export class WanChaiComponent  {
  name = 'Angular';
  numberValue = 0;
  numberValue2 = 0;
  numberValue3 = 0;
  numberValue4 = 0;
  textValue = '0';
  textNumberValue = '0';

ll() {
  //console.log(this.numberValue);
  //localStorage.setItem('test', JSON.stringify(storeMe))
  localStorage.setItem("klientideArvSuurenemine", JSON.stringify(this.numberValue));
  localStorage.setItem("klientideArvPraegu", JSON.stringify(this.numberValue2));
  localStorage.setItem("kliendiKeskmineTuluKuus", JSON.stringify(this.numberValue3));
  localStorage.setItem("klientideRahuloluOsakaal", JSON.stringify(this.numberValue4));
}

}