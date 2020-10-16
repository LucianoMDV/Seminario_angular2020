import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {

  producto = {
    "nombre" : "Budin",
    "tipo" : "chocolate",
    "precio" : 100.00,
    "stock" : 10,
    "imagen" : "assets/img/01_budin_chocolate.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
