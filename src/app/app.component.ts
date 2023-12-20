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
  funcText: any = 'NoFunction';

  onClickValue(val: string, type: any) {
    console.log(val, type);
  }
}
