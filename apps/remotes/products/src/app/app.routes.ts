import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    
    { path: '', loadChildren: () => import('./productpage/productpage.module').then((m) => m.ProductpageModule) }
];

