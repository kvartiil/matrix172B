import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'matrix-version',
  templateUrl: './matrixVersion.component.html',
  styleUrls: [ './matrixVersion.component.css' ]
})
export class VersionComponent  {
  
  version = VERSION.full;
  
}