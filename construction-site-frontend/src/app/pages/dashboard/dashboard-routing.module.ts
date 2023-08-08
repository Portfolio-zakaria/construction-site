import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from 'src/app/services/firebase.auth.service'
import { AuthGuard } from 'src/app/components/cleanui/layout/Guard/auth.guard'
import { LayoutsModule } from 'src/app/layouts/layouts.module'

// dashboard
import { DashboardAlphaComponent } from 'src/app/pages/dashboard/alpha/alpha.component'
/*import { DashboardBetaComponent } from 'src/app/pages/dashboard/beta/beta.component'
import { DashboardCryptoComponent } from 'src/app/pages/dashboard/crypto/crypto.component'
import { DashboardGammaComponent } from 'src/app/pages/dashboard/gamma/gamma.component'*/

const routes: Routes = [
  {
    path: 'alpha',
    component: DashboardAlphaComponent,
    data: { title: 'Dashboards' },
  },
  /*{
    path: 'beta',
    component: DashboardBetaComponent,
    data: { title: 'Dashboard Beta' },
  },
  {
    path: 'crypto',
    component: DashboardCryptoComponent,
    data: { title: 'Dashboard Crypto' },
  },
  {
    path: 'gamma',
    component: DashboardGammaComponent,
    data: { title: 'Dashboard Gamma' },
  },*/
]

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  providers: [AuthService],
  exports: [RouterModule],
})
export class DashboardRouterModule {}
