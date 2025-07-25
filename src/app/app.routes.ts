import { Routes } from '@angular/router';
import { RouteUtils } from './shared/utils/route.utils';
import { AuthGuard } from './core/authentication/auth.guard';

export const routes: Routes = [
  {
    path: RouteUtils.PAGES.LOGIN,
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    canActivateChild: [AuthGuard],
    loadComponent: () =>
      import(
        './core/layout/default-template/default-template.component'
      ).then((m) => m.DefaultTemplateComponent),
    children: [
      {
        path: RouteUtils.PAGES.MARCA,
        loadComponent: () =>
          import('./pages/marca/marca.component').then((m) => m.MarcaComponent),
      },
      {
        path: '**',
        loadComponent: () =>
          import('./pages/page-not-found/page-not-found.component').then(
            (m) => m.PageNotFoundComponent,
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent,
      ),
  },
];
