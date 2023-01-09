import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad-9';
  valor1 = 0;
  valor2 = 0;
  resultado = ''
  operador: any;

  onChange(ev: any) {
    switch (ev.target.value) {
      case '+':
        this.operador = 'SUMA';
        this.resultado = `Resultado: ${this.valor1 + this.valor2}`
        break;
      case '-':
        this.operador = 'RESTA';
        this.resultado = `Resultado: ${this.valor1 - this.valor2}`
        break;
      case '*':
        this.operador = 'MULTIPLICACION';
        this.resultado = `Resultado: ${this.valor1 * this.valor2}`
        break;
      case '/':
        this.operador = 'DIVISION';
        this.resultado = `Resultado: ${this.valor1 / this.valor2}`
        break;

      default:
        this.operador = 'NINGUNO';
        this.resultado = 'Resultado: (No eligió operación)'
        break;
    }
  }

  getColor() {
    switch (this.operador) {
      case 'SUMA':
        return 'green';
      case 'RESTA':
        return 'blue';
      case 'MULTIPLICACION':
        return 'orange';
      case 'DIVISION':
        return 'yellow';
      default:
        return 'red'
        break;
    }
  }
}
