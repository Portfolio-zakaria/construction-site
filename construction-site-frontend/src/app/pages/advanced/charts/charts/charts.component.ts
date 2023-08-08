import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from 'chart.js';
import * as _ from 'lodash';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit , OnChanges{
 
 @Input('my-id')myid ='';
 @Input('emp')emp ='';
 @Input('vhEmp')vhEmp ='';
 @Input('type')type ='bar';
 
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
  
  const names= _.map(this.data,'Name');
  const qte= _.map(this.data,'Qte');

  
  let myChart = new Chart(this.myid, {
  type: this.type,
  data: {
      labels: names,
      datasets: [{
          label: 'Nombre des matériels utilisés',
          data: qte,
          backgroundColor: names.map(()=>`rgba(${this.getRandomNumber(0,255)}, ${this.getRandomNumber(0,255)},${this.getRandomNumber(0,255)} , 1)`),
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


  const taches= _.map(this.data,'Taches');
  const employe= _.map(this.data,'Employe');
  let myChart2 = new Chart(this.emp, {
    type: this.type,
    data: {
        // tslint:disable-next-line: object-literal-shorthand
        labels: taches,
        datasets: [{
            label: 'Nombre des employés trvaillés sur une tache',
            data: employe,
            backgroundColor: taches.map(()=>`rgba(${this.getRandomNumber(0,255)}, ${this.getRandomNumber(0,255)},${this.getRandomNumber(0,255)} , 1)`),
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
  const Employes= _.map(this.data,'Employes');
  const VH= _.map(this.data,'VHT');
  let myChart3 = new Chart(this.vhEmp, {
    type: this.type,
    data: {
        // tslint:disable-next-line: object-literal-shorthand
        labels: Employes,
        datasets: [{
            label: 'VHT Employe',
            data: VH,
            backgroundColor: taches.map(()=>`rgba(${this.getRandomNumber(0,255)}, ${this.getRandomNumber(0,255)},${this.getRandomNumber(0,255)} , 1)`),
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
  return Math.floor(Math.random() * (+max - +min))+ + min;
}
}
