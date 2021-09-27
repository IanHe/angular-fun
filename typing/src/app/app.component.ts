import {Component} from '@angular/core';
import {lorem} from 'faker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText: string = lorem.sentence();
  inputText: string = '';

  onInput(event: Event): void {
    this.inputText = event.target ? (event.target as HTMLInputElement).value : '';
  }

  inputMatch(): boolean {
    return this.randomText.trim() === this.inputText.trim();
  }

  compare(l1: string, l2: string | undefined): string {
    if (!l2) return '';
    if (l1 === l2) return 'green';
    return 'red';
  }
}
