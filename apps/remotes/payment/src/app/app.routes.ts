import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', loadChildren: () => import('./paymentpage/paymentpage.module').then((m) => m.PaymentpageModule) }

];
