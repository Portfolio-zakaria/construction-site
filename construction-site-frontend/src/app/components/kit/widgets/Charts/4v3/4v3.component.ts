import { Component, OnInit } from '@angular/core'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
declare var require: any
const data: any = require('./data.json')
import { SoustraitantService } from 'src/app/pages/services/soustraitant/soustraitant.service';
@Component({
  selector: 'kit-chart-4v3',
  templateUrl: './4v3.component.html',
})
export class CuiChart4v3Component implements OnInit {
  chartData = data
  chartOptions = {
    chartPadding: {
      right: 0,
      left: 0,
      top: 5,
      bottom: 5,
    },
    fullWidth: true,
    showPoint: true,
    lineSmooth: true,
    axisY: {
      showGrid: false,
      showLabel: false,
      offset: 0,
    },
    axisX: {
      showGrid: true,
      showLabel: true,
      offset: 20,
    },
    showArea: false,
    plugins: [
      ChartistTooltip({
        anchorToPoint: false,
        appendToBody: true,
        seriesName: false,
      }),
    ],
  }
  SousTraitants
  nombr
  constructor(public soustraitantService: SoustraitantService) {}
  ngOnInit() {
    this.getSoustraitant()
  }

  
  getSoustraitant(){
    this.nombr=0
    this.soustraitantService.getSousTraitant().subscribe(data => {
      this.SousTraitants = data;
      this.SousTraitants = this.SousTraitants._embedded.sous_Traitants
      this.SousTraitants.forEach(element => {
        this.nombr+=1
      });
    }, (error) => {
      console.log(error);
    });
  }
}
