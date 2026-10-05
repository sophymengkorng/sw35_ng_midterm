# Angular Pokemon Store Project Documentation

This project is an Angular single-page application for displaying Pokemon product cards. It uses local product data from `app.ts`, loops through that data with Angular `@for`, and displays each item with a reusable product card component.

## Project Flow

1. The browser loads `src/index.html`.
2. Angular starts from `src/main.ts`.
3. `main.ts` bootstraps the root `App` component from `src/app/app.ts`.
4. `App` loads its template from `src/app/app.html`.
5. `app.html` displays:
   - Navbar
   - Main image slider
   - Product list section
   - Footer
6. The product list comes from `product_list` in `app.ts`.
7. `app.html` uses `@for` to loop through `product_list`.
8. Each product is passed to `ProductCardComponent`.
9. `ProductCardComponent` displays the product image, title, price, and button.

## File Architecture

```text
ng_sw35_midterm/
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   └── app/
│       ├── app.ts
│       ├── app.html
│       ├── app.css
│       ├── app.config.ts
│       ├── app.routes.ts
│       ├── main-slider-component/
│       │   ├── main-slider-component.ts
│       │   ├── main-slider-component.html
│       │   └── main-slider-component.css
│       └── product-card-component/
│           ├── product-card-component.ts
│           ├── product-card-component.html
│           └── product-card-component.css
├── public/
│   └── favicon.ico
├── dist/
│   └── ng_sw35_midterm/
├── package.json
├── angular.json
└── README.md
```

## Main Files

### `src/main.ts`

This is the Angular entry point. It starts the app:

```ts
bootstrapApplication(App, appConfig)
```

### `src/app/app.config.ts`

This contains the application providers. Currently it provides:

```ts
provideBrowserGlobalErrorListeners()
provideRouter(routes)
```

There is no API provider now because the project uses local data, not `HttpClient`.

### `src/app/app.ts`

This is the main component class. It imports:

```ts
MainSliderComponent
ProductCardComponent
```

It also stores the product data:

```ts
product_list: Product[] = [
  {
    id: 1,
    title: 'Alakazam - Base Set Holo Rare',
    price: 89.99,
    image: 'https://images.pokemontcg.io/base1/1_hires.png',
    description: 'Classic Pokemon trading card.',
  },
];
```

To add a new product, add another object inside `product_list`.

### `src/app/app.html`

This is the main page layout. The product loop is here:

```html
@for (item of product_list; track item.id) {
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
    <app-product-card-component [product]="item"></app-product-card-component>
  </div>
}
```

This means:

- `product_list` is the array of products.
- `item` is one product from the array.
- `track item.id` helps Angular identify each item.
- `[product]="item"` sends the item data into the product card component.

### `src/app/product-card-component/product-card-component.ts`

This component receives one product from the parent component:

```ts
@Input() product!: Product;
```

The `@Input()` allows this component to receive data from `app.html`.

### `src/app/product-card-component/product-card-component.html`

This file displays one product card:

```html
<img [src]="product.image" class="card-img-top p-3" [alt]="product.title">
<h5 class="card-title">{{ product.title }}</h5>
<p class="card-text fw-semibold">${{ product.price }}</p>
```

The image comes from:

```ts
product.image
```

The title comes from:

```ts
product.title
```

The price comes from:

```ts
product.price
```

### `src/app/main-slider-component/`

This component contains the Bootstrap carousel image slider.

The slider HTML is in:

```text
src/app/main-slider-component/main-slider-component.html
```

## Data Flow

```text
app.ts
  product_list
      ↓
app.html
  @for loop
      ↓
product-card-component
  [product]="item"
      ↓
product-card-component.html
  displays image, title, price
```

## How To Add More Products

Open:

```text
src/app/app.ts
```

Add a new object inside `product_list`:

```ts
{
  id: 17,
  title: 'New Pokemon Card',
  price: 99.99,
  image: 'https://example.com/image.png',
  description: 'Classic Pokemon trading card.',
},
```

Rules:

- Every `id` must be unique.
- `image` must be a plain image URL.
- Do not use Markdown link format for images.

Correct:

```ts
image: 'https://images.pokemontcg.io/base1/1_hires.png'
```

Wrong:

```ts
image: '[https://images...](https://images...)'
```

## Bootstrap Usage

Bootstrap is loaded in:

```text
src/index.html
```

It provides:

- Navbar styling
- Grid system
- Cards
- Buttons
- Carousel behavior

The product grid uses Bootstrap columns:

```html
col-12 col-sm-6 col-md-4 col-lg-3
```

This means:

- Mobile: 1 card per row
- Small screen: 2 cards per row
- Medium screen: 3 cards per row
- Large screen: 4 cards per row

## Development Commands

Start local development server:

```bash
npm run start
```

Then open:

```text
http://localhost:4200/
```

Build production files:

```bash
npm run build
```

Production output is created in:

```text
dist/ng_sw35_midterm/browser
```

## Deployment Notes

For GitHub Pages, build with the repository base path:

```bash
ng build --configuration production --base-href=/sw35_ng_midterm/
```

Then deploy the build folder:

```bash
npx angular-cli-ghpages --dir=dist/ng_sw35_midterm/browser
```

## Important Notes

- This project does not use an API now.
- Product data is local inside `app.ts`.
- The card loop is in `app.html`.
- The card UI is in `product-card-component.html`.
- The build files in `dist/` are generated files.
- Edit files in `src/`, not in `dist/`.
