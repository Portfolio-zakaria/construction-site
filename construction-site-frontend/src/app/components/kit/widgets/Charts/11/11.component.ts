import { Component, OnInit } from '@angular/core'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
import { ClientServiceService } from 'src/app/pages/services/Client_Service/client-service.service'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'kit-chart-11',
  templateUrl: './11.component.html',
  styleUrls: ['./11.component.scss'],
})
export class CuiChart11Component implements OnInit {
  chartData = data
  chartOptions: any = {}
  listClients
  nombr: any
  constructor(private ClientService: ClientServiceService) {
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
  this.getClient()
  }
  getClient(){
    this.nombr=0;
    this.ClientService.getClients()
    .subscribe(data=>{
      this.listClients = data;
      this.listClients =this.listClients._embedded.clients
      this.listClients.forEach(element => {
        this.nombr+=1;
      });
      
    }, (error) => {
      console.log(error);
    }
   );
  }
}
