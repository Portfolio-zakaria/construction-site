import { Component, OnInit } from '@angular/core'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
import { EmployeService } from 'src/app/pages/services/employe/employe.service';
declare var require: any
const data: any = require('./data.json')
@Component({
  selector: 'kit-chart-4v1',
  templateUrl: './4v1.component.html',
})
export class CuiChart4v1Component implements OnInit {
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
  employes;
  nombr;
  constructor(private employeService: EmployeService) {}
  ngOnInit() {
    this.getEmployes()
  }


  getEmployes(){
    this.nombr=0;
    this.employeService.getEmployes().subscribe(data => {
      this.employes = data;
      this.employes=this.employes._embedded.employes;
      this.employes.forEach(element => {
        this.nombr+=1;
      });
    }, (error) => {
      console.log(error);
    });
    
  }
}
