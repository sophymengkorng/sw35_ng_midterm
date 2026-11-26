import { Routes } from '@angular/router';
import { ProductsComponent } from './products-component/products-component';
import { HomeComponent } from './home-component/home-component';
import { ContactComponent } from './contact-component/contact-component';
import { CategoryComponent } from './category-component/category-component';
import { ProductDetailComponent } from './product-detail-component/product-detail-component';
import { CartComponent } from './cart-component/cart-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
];
