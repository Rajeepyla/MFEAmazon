import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', loadChildren: () => import('./orderpage/orderpage.module').then((m) => m.OrderpageModule) }
];

