import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  @Input()
  cantidad: number;

  @Input()
  max: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxAlcanzado: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upCantidad(): void {
    if (this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    } else {
      this.maxAlcanzado.emit('maximo alcanzado');
    }
  }
  downCantidad(): void {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  /*
  *terinar de ver como es controlar que solo escriba numeros
  *quedo a terminar de hacer esto por ahora no hace nada de lo que deberia
  *que es que solo el usuario pueda escribir numeros
  */
  onChangeCantidad(event): void {
    if (/^\d$/.test(event.key)) {
      console.log(event.key);
      event.preventDefault();
      this.cantidadChange.emit(this.cantidad);
    }
  }
}
