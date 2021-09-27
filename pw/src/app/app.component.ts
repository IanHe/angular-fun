import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeNumbers) validChars += numbers;
    if(this.includeLetters) validChars += letters;
    if(this.includeSymbols) validChars += symbols;

    let pw = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      pw += validChars[index];
    }
    this.password = pw;
  }

  onChangeLength(event: Event) {
    const parseValue = event.target ? parseInt((event.target as HTMLInputElement).value) : undefined;
    if (parseValue) {
      this.length = parseValue;
    }else{
      this.length = 0;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
}
