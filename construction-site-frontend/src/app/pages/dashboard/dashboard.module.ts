import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { DashboardRouterModule } from './dashboard-routing.module'
import { WidgetsComponentsModule } from 'src/app/components/kit/widgets/widgets-components.module'
import { FormsModule } from '@angular/forms'
import { ChartistModule } from 'ng-chartist'
import { NgApexchartsModule } from 'ng-apexcharts'
import { NgChartjsModule } from 'ng-chartjs'

// dashboard
import { DashboardAlphaComponent } from 'src/app/pages/dashboard/alpha/alpha.component'
/*import { DashboardCryptoComponent } from 'src/app/pages/dashboard/crypto/crypto.component'
import { DashboardGammaComponent } from 'src/app/pages/dashboard/gamma/gamma.component'*/

const COMPONENTS = [
 DashboardAlphaComponent,


   /*DashboardCryptoComponent,
  DashboardGammaComponent,*/
]

@NgModule({
  imports: [
    SharedModule,
    DashboardRouterModule,
    WidgetsComponentsModule,
    FormsModule,
    ChartistModule,
    NgApexchartsModule,
    NgChartjsModule,

  ],
  declarations: [...COMPONENTS],
})
export class DashboardModule {}
