import { Component, signal } from '@angular/core';
import { MainSliderComponent } from './main-slider-component/main-slider-component';
import { ProductCardComponent } from './product-card-component/product-card-component';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-root',
  imports: [MainSliderComponent, ProductCardComponent],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ng_sw35_midterm');

  product_list: Product[] = [
    {
      id: 1,
      title: 'Alakazam - Base Set Holo Rare',
      price: 89.99,
      image: 'https://images.pokemontcg.io/base1/1_hires.png',
      description: 'Classic Pokemon trading card.',
    },
    {
      id: 2,
      title: 'Blastoise - Base Set Holo Rare',
      price: 219.5,
      image: 'https://images.pokemontcg.io/base1/2_hires.png',
      description: 'Classic Pokemon trading card.',
    },
    {
      id: 3,
      title: 'Chansey - Base Set Holo Rare',
      price: 54,
      image: 'https://images.pokemontcg.io/base1/3_hires.png',
      description: 'Classic Pokemon trading card.',
    },
    {
      id: 4,
      title: 'Charizard - Base Set Holo Rare',
      price: 399.99,
      image: 'https://images.pokemontcg.io/base1/4_hires.png',
      description: 'Classic Pokemon trading card.',
    },
    {
      id: 5,
      title: 'Clefairy - Base Set Holo Rare',
      price: 39.99,
      image: 'https://images.pokemontcg.io/base1/5_hires.png',
      description: 'Classic Pokemon trading card.',
    },
    {
      id: 6,
      title: 'Gyarados - Base Set Holo Rare',
      price: 74.99,
      image: 'https://images.pokemontcg.io/base1/6_hires.png',
      description: 'Classic Pokemon trading card.',
    },
    {
      id: 7,
      title: 'Hitmonchan - Base Set Holo Rare',
      price: 45,
      image: 'https://images.pokemontcg.io/base1/7_hires.png',
      description: 'Classic Pokemon trading card.',
    },
    {
      id: 8,
      title: 'Machamp - Base Set 1st Edition Holo',
      price: 129,
      image: 'https://images.pokemontcg.io/base1/8_hires.png',
      description: 'Classic Pokemon trading card.',
    },
    {
      id: 9,
      title: 'Magneton - Base Set Holo Rare',
      price: 42.5,
      image: 'https://images.pokemontcg.io/base1/9_hires.png',
      description: 'Classic Pokemon trading card.',
    },
    {
      id: 10,
      title: 'Mewtwo - Base Set Holo Rare',
      price: 149.99,
      image: 'https://images.pokemontcg.io/base1/10_hires.png',
      description: 'Classic Pokemon trading card.',
    },
    {
      id: 11,
      title: 'Nidoking - Base Set Holo Rare',
      price: 47.99,
      image: 'https://images.pokemontcg.io/base1/11_hires.png',
      description: 'Classic Pokemon trading card.',
    },
    {
      id: 12,
      title: 'Ninetales - Base Set Holo Rare',
      price: 49.99,
      image: 'https://images.pokemontcg.io/base1/12_hires.png',
      description: 'Classic Pokemon trading card.',
    },
    {
      id: 13,
      title: 'Poliwrath - Base Set Holo Rare',
      price: 34.99,
      image: 'https://images.pokemontcg.io/base1/13_hires.png',
      description: 'Classic Pokemon trading card.',
    },
    {
      id: 14,
      title: 'Raichu - Base Set Holo Rare',
      price: 59.99,
      image: 'https://images.pokemontcg.io/base1/14_hires.png',
      description: 'Classic Pokemon trading card.',
    },
    {
      id: 15,
      title: 'Venusaur - Base Set Holo Rare',
      price: 189.99,
      image: 'https://images.pokemontcg.io/base1/15_hires.png',
      description: 'Classic Pokemon trading card.',
    },
    {
      id: 16,
      title: 'Zapdos - Base Set Holo Rare',
      price: 64.99,
      image: 'https://images.pokemontcg.io/base1/16_hires.png',
      description: 'Classic Pokemon trading card.',
    },
  ];
}



