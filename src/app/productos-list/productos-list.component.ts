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

  maxAlcanzado(m: string): void {
    alert(m);
  }

}
