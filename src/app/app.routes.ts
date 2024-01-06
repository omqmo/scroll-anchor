import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: ``,
    loadComponent: () => import('./home/home.component')
      .then( ( { HomeComponent } ) => HomeComponent )
  },
  {
    path: `products/:id`,
    loadComponent: () => import('./product/product.component')
      .then( ( { ProductComponent } ) => ProductComponent )
  },
];
