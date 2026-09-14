import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [Child],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  childMessage = 'Це повідомлення передане через @Input()';

  receivedMessage = '';

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}
