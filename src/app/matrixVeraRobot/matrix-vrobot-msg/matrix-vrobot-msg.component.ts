import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'matrix-vrobot-msg',
  templateUrl: './matrix-vrobot-msg.component.html',
  styleUrls: ['./matrix-vrobot-msg.component.css'],
})
export class VVeraRobotComponent implements OnInit {
  @Input() message;

  @Output() eventOptionSelected = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sendOption(opcion: string) {
    this.eventOptionSelected.emit(opcion);
    setTimeout(() => {
      this.message.options = [];
    }, 500);
  }

  getClasses() {
    if (this.message.autor == 'bot') {
      return 'd-flex flex-row justify-content-start chat-bot';
    }
    return 'd-flex flex-row justify-content-end chat-user';
  }
}