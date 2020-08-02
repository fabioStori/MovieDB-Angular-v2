import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    },
]

export const appLocaleRoutes: Routes = [
  {
    path: '',
    children: [...routes],
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appLocaleRoutes, {
      scrollPositionRestoration: 'enabled',
      enableTracing: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
