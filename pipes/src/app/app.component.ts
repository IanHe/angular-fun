import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount?: number;
  height?: number;
  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  }
  miles?: number;

  onNameChange(event: Event): void {
    this.name = event.target ? (event.target as HTMLInputElement).value : '';
  }

  onDateChange(event: Event): void {
    this.date = event.target ? (event.target as HTMLInputElement).value : '';
  }

  onAmountChange(event: Event): void {
    this.amount = parseFloat(event.target ? (event.target as HTMLInputElement).value : '');
  }

  onHeightChange(event: Event): void {
    this.height = parseFloat(event.target ? (event.target as HTMLInputElement).value : '');
  }

  onMilesChange(event: Event): void {
    this.miles = parseFloat(event.target ? (event.target as HTMLInputElement).value : '');
  }

}
