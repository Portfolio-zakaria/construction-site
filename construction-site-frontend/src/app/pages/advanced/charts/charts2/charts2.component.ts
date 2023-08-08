import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from 'chart.js';
import * as _ from 'lodash';
@Component({
  selector: 'app-charts2',
  templateUrl: './charts2.component.html',
  styleUrls: ['./charts2.component.css']
})
export class Charts2Component implements OnInit , OnChanges {
  // tslint:disable-next-line: no-input-rename
  @Input('my-id')myid = '';
  @Input('type')type = 'bar';
  @Input('vhtChantier')vhtChantier ='';
  // tslint:disable-next-line: no-input-rename
  @Input('data')data = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.makeCharts();
  }
ngAfterViewInit(){
  this.makeCharts();
}
makeCharts(){

  const dates = _.map(this.data, 'Dates');
  const nombre = _.map(this.data, 'Nomber');
  const myChart = new Chart(this.myid, {
      type: this.type,
      data: {
          // tslint:disable-next-line: object-literal-shorthand
          labels: dates,
          datasets: [{
              label: 'Nombre de Chantier ',
              data: nombre,
              backgroundColor: dates.map(() => `rgba(${this.getRandomNumber(0, 255)}, ${this.getRandomNumber(0, 255)},${this.getRandomNumber(0, 255)} , 1)`),
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
    });

    const Chantiers = _.map(this.data, 'Chantiers');
    const VHT = _.map(this.data, 'VHT');
    const myChart2 = new Chart(this.vhtChantier, {
        type: this.type,
        data: {
            // tslint:disable-next-line: object-literal-shorthand
            labels: Chantiers,
            datasets: [{
                label: 'VHT de Chantier par Heure',
                data: VHT,
                backgroundColor: dates.map(() => `rgba(${this.getRandomNumber(0, 255)}, ${this.getRandomNumber(0, 255)},${this.getRandomNumber(0, 255)} , 1)`),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
      });


}

getRandomNumber(min , max){
return Math.floor(Math.random() * (+max - +min)) + + min;
}
}
