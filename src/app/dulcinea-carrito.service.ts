import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './productos-list/Producto';

/**
 * Maneja la logica del carrito
 *
 */
@Injectable({
  providedIn: 'root'
})
export class DulcineaCarritoService {

  private _cartList: Producto[] = [];
  cartList: BehaviorSubject<Producto[]> = new BehaviorSubject([]);

  constructor() { }

  addToCart(producto: Producto): void{
    let item : Producto = this._cartList.find((v1) => v1.nombre == producto.nombre);
    if(!item) {
      this._cartList.push({... producto}); //con ... hago una copia del prodcuto. Un Clone
    } else {
      item.cantidad += producto.cantidad;
    }
    console.log(this._cartList);

    this.cartList.next(this._cartList); //equivalente al emitt de eventos
  }

}
