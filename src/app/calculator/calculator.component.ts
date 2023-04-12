import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  display = '0';
  firstValue: number = 0;
  action: string = '';
  result: boolean = false;

  erase() {
    this.display = '0'
    this.firstValue = 0;
    this.action = '';
  }

  coma() {
    if(this.display.indexOf('.') > -1) return
    this.display = `${this.display}.`
  }

  invertNumber() {
    if (parseInt(this.display) === 0) return
    if (parseInt(this.display) > 0) this.display = `-${this.display}`
    else this.display = this.display.substring(1)
  }

  numberClick(val: number) {

    if (this.display === '0') {
      this.display = val.toString();
    } else if (this.result) {
      this.display = `${val}`
      this.result = false;
    } else {
      this.display = `${this.display}${val}`;
    }
  }

  operator(action: string) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = ' ';
  }

  calculate() {
    let a: number | null = this.firstValue;
    let b: number | null = parseFloat(this.display);

    let result: number = 0;
    if (this.action === 'multiply') result = a * b;
    if (this.action === 'divide') result = a / b;
    if (this.action === 'add') result = a + b;
    if (this.action === 'subtract') result = a - b;
    if (this.action === 'percent') result = a / b * 100;

    this.firstValue = result;
    if (this.action === 'percent') this.display = `${result.toFixed(2).toString()}%`;
    else this.display = result.toString();
    this.result = true;
  }
}
