import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', loadChildren: () => import('profile/Component').then((m) => m.ProfilePageModule) },
];
