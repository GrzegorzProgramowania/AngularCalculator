import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator_angular';

  calculatorValue: number = 0;
  funcText: any = 'noFunction';

  calculatorNumber: string = 'noValue';

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(val: string, type: any) {
    if (type == 'number') {
      this.onNumbersClick(val);
    } else if (type == 'function') {
      this.onFunctionClick(val);
    }
  }
  onNumbersClick(val: string) {
    if (this.calculatorNumber !== 'noValue') {
      this.calculatorNumber = this.calculatorNumber + val;
    } else {
      this.calculatorNumber = val;
    }

    this.calculatorValue = parseFloat(this.calculatorNumber);
  }

  onFunctionClick(val: string) {
    if (this.funcText == 'noFunction') {
      this.firstNumber = this.calculatorValue;
      this.calculatorValue = 0;
      this.calculatorNumber = 'noValue';
      this.funcText = val;
    } else if (this.funcText !== 'NoFunction') {
      this.secondNumber = this.calculatorValue;
      //the calculator
      this.valueCalculate(val);
    }
  }
  valueCalculate(val: string) {
    if (this.funcText == '+') {
      const Total = this.firstNumber + this.secondNumber;
      this.calculatorValue = Total;
      this.secondNumber = 0;
      this.calculatorNumber = 'noValue';
      this.funcText = val;
    }
    if (this.funcText == '-') {
      const Total = this.firstNumber - this.secondNumber;
      this.calculatorValue = Total;
      this.secondNumber = 0;
      this.calculatorNumber = 'noValue';
      this.funcText = val;
    }
    if (this.funcText == '*') {
      const Total = this.firstNumber * this.secondNumber;
      this.calculatorValue = Total;
      this.secondNumber = 0;
      this.calculatorNumber = 'noValue';
      this.funcText = val;
    }
    if (this.funcText == '/') {
      const Total = this.firstNumber / this.secondNumber;
      this.calculatorValue = Total;
      this.secondNumber = 0;
      this.calculatorNumber = 'noValue';
      this.funcText = val;
    }
  }
}
