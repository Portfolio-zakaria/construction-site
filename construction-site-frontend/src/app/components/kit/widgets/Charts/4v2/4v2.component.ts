import { Component, OnInit } from '@angular/core'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
import { CommandeService } from 'src/app/pages/services/commandes/commande.service';
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'kit-chart-4v2',
  templateUrl: './4v2.component.html',
})
export class CuiChart4v2Component implements OnInit {
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
  nombr
  Commandes
  constructor(private commandesService: CommandeService) {}
  ngOnInit() {
    this.getCommandes()
  }
  
  getCommandes() {
    this.nombr=0
    this.commandesService.getAllCommands().subscribe(data => {
      this.Commandes = data;
     // this.dataSource = new MatTableDataSource(this.Commandes._embedded.commandes);
      this.Commandes=this.Commandes._embedded.commandes;
      this.Commandes.forEach(element => {
        this.nombr+=1
      });
    }, (error) => {
     console.log(error);
   });
 }
}
