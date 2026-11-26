import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToKhrPipe } from '../../pipes/to-khr-pipe';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

@Component({
  imports: [RouterLink, ToKhrPipe],
  selector: 'app-product-card-component',
  styleUrl: './product-card-component.css',
  templateUrl: './product-card-component.html',
})
export class ProductCardComponent {
  @Input() product:any= [];
  public stringToUpper(name: string): string {
    return name.toUpperCase();
  }
}

export class AppComponent {
  Math = Math;
}

