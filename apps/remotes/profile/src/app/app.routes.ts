import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', loadChildren: () => import('./profile-page/profile-page.module').then((m) => m.ProfilePageModule) }
];

