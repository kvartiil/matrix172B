import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit, OnDestroy {
  @Input() name: string;

  ngOnInit(): void {
    console.log(`Component ${this.name} created`);
  }

  ngOnDestroy(): void {
    console.log(`Component ${this.name} destroyed`);
  }
}