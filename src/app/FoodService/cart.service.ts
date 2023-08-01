import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shoppingCartItem: any = [];
  constructor() { }

  addProduct(product: any) {
    let items = this.getShoppingItem();
    if (items) {
      items.push(product)
      localStorage.setItem('cartItem', JSON.stringify(items))
    } else {
      this.shoppingCartItem.push(product);
      localStorage.setItem('cartItem', JSON.stringify(this.shoppingCartItem))
    }
  }

  getShoppingItem = () => {
    let items: any = localStorage.getItem('cartItem');
    return JSON.parse(items)
  }

  getCartLength() {
    let items = this.getShoppingItem();
    return items ? this.getShoppingItem().length : 0;
  }

  getTotal() {
    let items = this.getShoppingItem();
    return items?.reduce((acc: number, item: any) => parseInt(acc + item.price), 0);
  }

  removeItem = (p: any) => {
    console.log('calling remover ', p)
    let items = this.getShoppingItem();

    const index = items.findIndex((item: any) => item.id == p.id);
    if (index >= 0) {
      console.log('hitting if')
      items.splice(index, 1);
      this.getShoppingItem()
      return localStorage.setItem('cartItem', JSON.stringify(items))
    }

  }
}
