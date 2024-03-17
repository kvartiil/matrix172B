import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'matrix-meeskoer',
  templateUrl: './matrixMeesKoer.component.html',
  styleUrls: ['./matrixMeesKoer.component.css']
})
export class MeesKoerComponent {
  //name = 'Add and show image using angular'
  
  model: any = {};
  image1: any;

  fileChange(event) {
    if (event.target.files) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image1 = reader.result;
      };
    }
  }
}