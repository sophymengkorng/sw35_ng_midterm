import { Component, Input } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

@Component({
  imports: [],
  selector: 'app-product-card-component',
  styleUrl: './product-card-component.css',
  templateUrl: './product-card-component.html',
})
export class ProductCardComponent {
  @Input() product!: Product;
}
