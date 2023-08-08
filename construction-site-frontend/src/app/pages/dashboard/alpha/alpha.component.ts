import { Component, OnInit } from '@angular/core'
import { ChantierService } from 'src/app/pages/services/Chantier/chantier.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-dashboard-alpha',
  templateUrl: './alpha.component.html',
})
export class DashboardAlphaComponent implements OnInit {
 
  articles: any;
  chantiers;
  
  nombreBydate=[];
  ArticlesObject = [];
  ChantierNombreTache=[];
  tab;
  tab2;




  constructor(private chantierService: ChantierService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   this.getChantier();
   this.getNombreChantierBYear();
   
  }
  

  getData(id){
    this.chantierService.getAllArticlChantier(id).subscribe(data => {
      this.articles= data;
      this.changeToObject();
   
    }, (error) => {
      console.log(error);
    });
  }

  getNombreChantierBYear(){
    this.chantierService.getNombreChantierBYear().subscribe(data => {
      this.tab= data;
      this.changeToObject2();
   
    }, (error) => {
      console.log(error);
    });
  }

  getNombreEmployeTachChantier(id){
    this.chantierService.getNombreEmployeTacheChantier(id).subscribe(data => {
      this.tab2= data;
      this.changeToObject3();
   
    }, (error) => {
      console.log(error);
    });
  }
  
  getChantier(){
    this.chantierService.getChantiers().subscribe(data => {
      this.chantiers = data;
      this.chantiers = this.chantiers._embedded.chantiers;
    }, (error) => {
      console.log(error);
    });
  }


  changeToObject(){  
    this.ArticlesObject=[];
    for (var i = 0; i <this.articles.length; i++) {
        var json = {
            "Name" : "",
            "Qte" : 0
        }
        json.Name = this.articles[i][0];
        json.Qte = this.articles[i][1];
        //this.ArticlesObject.push(json);
        this.ArticlesObject=[json, ...this.ArticlesObject];
    };
    console.log(this.ArticlesObject);
  
  }
  changeToObject2(){
    this.nombreBydate=[];
    for (var i = 0; i <this.tab.length; i++) {
        var json = {
            "Dates" : 0,
            "Nomber" : 0
        }
        json.Dates = this.tab[i][0];
        json.Nomber = this.tab[i][1];
        //this.ArticlesObject.push(json);
        this.nombreBydate=[json, ...this.nombreBydate];
    };
    console.log(this.nombreBydate);
  }
  changeToObject3(){
    this.ChantierNombreTache=[];
    for (var i = 0; i <this.tab2.length; i++) {
        var json = {
            "Taches" : 0,
            "Employe" : 0
        }
        json.Taches = this.tab2[i][0];
        json.Employe = this.tab2[i][1];
        //this.ArticlesObject.push(json);
        this.ChantierNombreTache=[json, ...this.ChantierNombreTache];
    };
    console.log(this.ChantierNombreTache);
  }
}
