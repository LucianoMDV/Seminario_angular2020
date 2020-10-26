import { Component, OnInit } from '@angular/core';
import { Producto } from './Producto';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {

  productos: Producto[] = [
    {
      nombre : 'Budin chips',
      tipo : 'chocolate',
      precio : 160.00,
      stock : 10,
      imagen : 'assets/img/01_budin_chocolate.jpg',
      oferta: true,
      cantidad: 0,
    },
    {
      nombre : 'Budin comun',
      tipo : 'vainilla',
      precio : 120.00,
      stock : 5,
      imagen : 'assets/img/02_budin_comun.jpg',
      oferta: false,
      cantidad: 0,
    },
    {
      nombre : 'Budin rosa',
      tipo : 'frutilla',
      precio : 150.00,
      stock : 0,
      imagen : 'assets/img/03_budin_frutilla.jpg',
      oferta: true,
      cantidad: 0,
    }
];
  constructor() { }

  ngOnInit(): void {
  }

  upCantidad(producto: Producto): void {
    if (producto.cantidad < producto.stock) {
      producto.cantidad++;
    }
  }
  downCantidad(producto: Producto): void {
    if(producto.cantidad > 0) {
      producto.cantidad--;
    }
  }

  /*
  *terinar de ver como es controlar que solo escriba numeros
  *quedo a terminar de hacer esto por ahora no hace nada de lo que deberia
  *que es que solo el usuario pueda escribir numeros
  */
  onChangeCantidad(event, producto: Producto): void {
    if (/^\d$/.test(event.key)) {
      console.log(event.key);
      event.preventDefault();
    }
  }

}
