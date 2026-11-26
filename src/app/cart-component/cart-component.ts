import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToKhrPipe } from '../pipes/to-khr-pipe';
import { CartItem, CartService } from '../services/cart.service';

@Component({
  imports: [RouterLink, ToKhrPipe],
  selector: 'app-cart-component',
  styleUrl: './cart-component.css',
  templateUrl: './cart-component.html',
})
export class CartComponent {
  constructor(private readonly cartService: CartService) {}

  get cartItems(): CartItem[] {
    return this.cartService.cartItems;
  }

  get subtotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  get shipping(): number {
    return this.subtotal >= 250 ? 0 : 4.99;
  }

  get total(): number {
    return this.subtotal + this.shipping;
  }

  decrease(item: CartItem): void {
    this.cartService.decrease(item);
  }

  increase(item: CartItem): void {
    this.cartService.increase(item);
  }

  remove(item: CartItem): void {
    this.cartService.remove(item);
  }
}
