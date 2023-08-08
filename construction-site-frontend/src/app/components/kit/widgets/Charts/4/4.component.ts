import { Component, OnInit } from '@angular/core'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
import { FournisseurService } from 'src/app/pages/services/fournisseur/fournisseur.service';
declare var require: any
const data: any = require('./data.json')
@Component({
  selector: 'kit-chart-4',
  templateUrl: './4.component.html',
})
export class CuiChart4Component implements OnInit {
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
  fournisseurs;
  nombr;
  constructor(private fournisseurService: FournisseurService) {}
  ngOnInit() {
    this.getFournisseurs();
  }

  getFournisseurs(){
    this.nombr=0;
    this.fournisseurService.getFournisseurs().subscribe(data => {
      this.fournisseurs = data
      this.fournisseurs=this.fournisseurs._embedded.fournisseurs
      this.fournisseurs.forEach(element => {
        this.nombr+=1;
      });
    }, (error) => {
      console.log(error);
    });
    
  }
}
