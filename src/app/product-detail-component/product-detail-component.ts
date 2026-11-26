import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ToKhrPipe } from '../pipes/to-khr-pipe';
import { CartService } from '../services/cart.service';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  condition: string;
  set: string;
}

@Component({
  imports: [RouterLink, ToKhrPipe],
  selector: 'app-product-detail-component',
  styleUrl: './product-detail-component.css',
  templateUrl: './product-detail-component.html',
})
export class ProductDetailComponent {
  product: Product;
  showConfirmDialog = false;

  private readonly products: Product[] = [
    {
      id: 1,
      title: 'Alakazam - Base Set Holo Rare',
      price: 89.99,
      image: 'https://images.pokemontcg.io/base1/1_hires.png',
      description:
        'A classic Psychic-type favorite from the original Base Set, perfect for collectors building a nostalgic first-generation binder.',
      condition: 'Near Mint',
      set: 'Base Set · 1999',
    },
    {
      id: 2,
      title: 'Blastoise - Base Set Holo Rare',
      price: 219.5,
      image: 'https://images.pokemontcg.io/base1/2_hires.png',
      description:
        'The iconic water-type starter in a classic holographic finish from the original Pokemon trading card set.',
      condition: 'Excellent',
      set: 'Base Set · 1999',
    },
    {
      id: 3,
      title: 'Chansey - Base Set Holo Rare',
      price: 54,
      image: 'https://images.pokemontcg.io/base1/3_hires.png',
      description:
        'A gentle Base Set holographic card with timeless artwork and a place in every classic collection.',
      condition: 'Near Mint',
      set: 'Base Set · 1999',
    },
    {
      id: 4,
      title: 'Charizard - Base Set Holo Rare',
      price: 399.99,
      image: 'https://images.pokemontcg.io/base1/4_hires.png',
      description:
        'The legendary fire-type collector favorite and one of the most recognizable cards from the original Base Set.',
      condition: 'Excellent',
      set: 'Base Set · 1999',
    },
  ];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly cartService: CartService,
  ) {
    const productId = Number(this.route.snapshot.paramMap.get('id')) || 1;
    this.product = this.products.find((item) => item.id === productId) ?? this.products[0];
  }

  openAddDialog(): void {
    this.showConfirmDialog = true;
  }

  closeAddDialog(): void {
    this.showConfirmDialog = false;
  }

  confirmAddToCart(): void {
    this.cartService.addItem({
      id: this.product.id,
      title: this.product.title,
      image: this.product.image,
      price: this.product.price,
    });
    this.closeAddDialog();
  }
}
