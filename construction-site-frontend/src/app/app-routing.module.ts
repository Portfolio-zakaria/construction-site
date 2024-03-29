import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared.module'
import { LayoutsModule } from 'src/app/layouts/layouts.module'
import { AppPreloader } from 'src/app/app-routing-loader'
import { AuthGuard } from 'src/app/components/cleanui/layout/Guard/auth.guard'

// layouts & notfound
import { LayoutAuthComponent } from 'src/app/layouts/Auth/auth.component'
import { LayoutMainComponent } from 'src/app/layouts/Main/main.component'
import { Error404Component } from 'src/app/pages/auth/404/404.component'

const COMPONENTS = [Error404Component]

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('src/app/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'advanced',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('src/app/pages/advanced/advanced.module').then(m => m.AdvancedModule),
      },
      {
        path: 'advanced',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('src/app/pages/advanced/advanced.module').then(m => m.AdvancedModule),
      },
      {
        path: 'apps',
        canActivate: [AuthGuard],
        loadChildren: () => import('src/app/pages/apps/apps.module').then(m => m.AppsModule),
      },
      {
        path: 'icons',
        canActivate: [AuthGuard],
        loadChildren: () => import('src/app/pages/icons/icons.module').then(m => m.IconsModule),
      },
      {
        path: 'charts',
        canActivate: [AuthGuard],
        loadChildren: () => import('src/app/pages/charts/charts.module').then(m => m.ChartsModule),
      },
      {
        path: 'cards',
        canActivate: [AuthGuard],
        loadChildren: () => import('src/app/pages/cards/cards.module').then(m => m.CardsModule),
      },
      {
        path: 'widgets',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('src/app/pages/widgets/widgets.module').then(m => m.WidgetsModule),
      },
      {
        path: 'tables',
        canActivate: [AuthGuard],
        loadChildren: () => import('src/app/pages/tables/tables.module').then(m => m.TablesModule),
      },
      {
        path: 'ui-kits',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('src/app/pages/ui-kits/ui-kits.module').then(m => m.UIKitsModule),
      },
    ],
  },
  {
    path: 'auth',
    component: LayoutAuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/pages/auth/auth.module').then(m => m.AuthModule),
      },
    ],
  },
  {
    path: '**',
    component: LayoutAuthComponent,
    children: [
      {
        path: '',
        component: Error404Component,
        canActivate: [AuthGuard],
        data: { title: 'Not Found' },
      },
    ],
  },
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: AppPreloader,
    }),
    LayoutsModule,
  ],
  providers: [AppPreloader],
  declarations: [...COMPONENTS],
  exports: [RouterModule],
})
export class AppRoutingModule {}
