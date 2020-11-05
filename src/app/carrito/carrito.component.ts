import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DulcineaCarritoService } from '../dulcinea-carrito.service';
import { Producto } from '../productos-list/Producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  cartList$: Observable<Producto[]>;
  constructor(private cart: DulcineaCarritoService) { 
    // cart.cartList.subscribe((observable) => this.cartList = observable);
  this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
