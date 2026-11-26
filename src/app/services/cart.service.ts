import { Injectable } from '@angular/core';

export interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: CartItem[] = [];

  get cartItems(): CartItem[] {
    return this.items;
  }

  addItem(item: Omit<CartItem, 'quantity'>): void {
    const existingItem = this.items.find((cartItem) => cartItem.id === item.id);
    if (existingItem) existingItem.quantity++;
    else this.items.push({ ...item, quantity: 1 });
  }

  increase(item: CartItem): void {
    item.quantity++;
  }

  decrease(item: CartItem): void {
    if (item.quantity > 1) item.quantity--;
  }

  remove(item: CartItem): void {
    this.items = this.items.filter((cartItem) => cartItem.id !== item.id);
  }
}
