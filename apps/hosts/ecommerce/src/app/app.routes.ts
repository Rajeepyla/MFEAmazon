import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', loadChildren: () => import('profile/Component').then((m) => m.ProfilePageModule) },
    { path: 'profile', loadChildren: () => import('profile/Component').then((m) => m.ProfilePageModule) },
    { path: 'products', loadChildren: () => import('products/Component').then((m) => m.ProductpageModule) },
    { path: 'payment', loadChildren: () => import('payment/Component').then((m) => m.PaymentpageModule) },
    { path: 'order', loadChildren: () => import('order/Component').then((m) => m.OrderpageModule) },
    { path: 'home', loadChildren: () => import('home/Component').then((m) => m.HomepageModule) },
];
