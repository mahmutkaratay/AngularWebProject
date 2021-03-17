import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Model } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(model: Model) {
    let item = CartItems.find((c) => c.model.Id === model.Id);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.model = model;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  list(): CartItem[] {
    return CartItems;
  }

  removeFromCart(model: Model) {
    let item:CartItem = CartItems.find((c) => c.model.Id === model.Id);
    CartItems.splice(CartItems.indexOf(item), 1);
  }
}
