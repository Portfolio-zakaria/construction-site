import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChantierComponent } from './chantier/chantier.component';

import { SharedModule } from 'src/app/shared.module'

import { WidgetsComponentsModule } from 'src/app/components/kit/widgets/widgets-components.module'
import { FormsModule } from '@angular/forms'
import { ChartistModule } from 'ng-chartist'
import { NgApexchartsModule } from 'ng-apexcharts'
const COMPONENTS = [
  ChantierComponent,
]


@NgModule({
  imports: [
    SharedModule,
    WidgetsComponentsModule,
    FormsModule,
    ChartistModule,
    NgApexchartsModule,
  ],
  
})

export class ChantiersModule { }
