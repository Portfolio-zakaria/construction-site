import { Component, OnInit } from '@angular/core'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
import { CommandeService } from 'src/app/pages/services/commandes/commande.service'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'kit-chart-11v2',
  templateUrl: './11v2.component.html',
  styleUrls: ['./11v2.component.scss'],
})
export class CuiChart11v2Component implements OnInit {
  chartData = data
  chartOptions: any = {}
  Commandes
  total: any
  constructor(private commandesService: CommandeService) {
    this.chartOptions = {
      options: {
        axisX: {
          showLabel: false,
          showGrid: false,
          offset: 0,
        },
        axisY: {
          showLabel: false,
          showGrid: false,
          offset: 0,
        },
        showArea: true,
        high: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        fullWidth: true,
        height: '110px',
        showPoint: true,
        plugins: [
          ChartistTooltip({
            anchorToPoint: false,
            appendToBody: true,
            seriesName: false,
          }),
        ],
      },
      low: 20,
      type: 'Line',
    }
  }
  ngOnInit() {
    this.getCommandes();
  }

  getCommandes() {
    this.total=0;
    this.commandesService.getAllCommands().subscribe(data => {
      this.Commandes = data;
     this.Commandes = this.Commandes._embedded.commandes;
     this.Commandes.forEach(element => {
       this.total+=element.total_payment;
     });
    }, (error) => {
     console.log(error);
   });
}
}
