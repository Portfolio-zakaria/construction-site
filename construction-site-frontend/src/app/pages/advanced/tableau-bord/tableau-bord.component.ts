import { Component, OnInit } from '@angular/core';
import { ChantierService } from 'src/app/pages/services/Chantier/chantier.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-tableau-bord',
  templateUrl: './tableau-bord.component.html',
  styleUrls: ['./tableau-bord.component.scss']
})
export class TableauBordComponent implements OnInit {
  articles: any;
  chantiers;
  
  nombreBydate=[];
  ArticlesObject = [];
  ChantierNombreTache=[];
  ChantierVHT=[];
  employeVHT=[];
  tab;
  tab2;
  tabVht;
  tabVhtEmp;




  constructor(private chantierService: ChantierService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   this.getChantier();
   this.getNombreChantierBYear();
   this.getChantierVht();
   
  }
  

  getData(id){
    this.chantierService.getAllArticlChantier(id).subscribe(data => {
      this.articles= data;

      console.log(this.articles);
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

  getChantierVht(){
    this.chantierService.getChantierVHT().subscribe(data=>{
      this.tabVht=data;
     
      this.changeToObject4();
    }, (error) => {
      console.log(error);
    });
  }
  getEmployeVH(id){
    this.chantierService.getEmployeVh(id).subscribe(data=>{
      this.tabVhtEmp=data;
      console.log(this.tabVhtEmp);
      this.changeToObject5();
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
  }

  changeToObject4(){
    this.ChantierVHT=[];
    for (var i = 0; i <this.tabVht.length; i++) {
        var json = {
            "Chantiers" : "",
            "VHT" : 0
        }
        json.Chantiers = this.tabVht[i][0];
        json.VHT = this.tabVht[i][1];
        //this.ArticlesObject.push(json);
        this.ChantierVHT=[json, ...this.ChantierVHT];
    };
  }
  changeToObject5(){
    this.employeVHT=[];
    for (var i = 0; i <this.tabVhtEmp.length; i++) {
        var json = {
            "Employes" : "",
            "VHT" : 0
        }
        let a =this.tabVhtEmp[i][0];
        a+=' '+this.tabVhtEmp[i][1];
        console.log(a);
        json.Employes = a;
        json.VHT = this.tabVhtEmp[i][2];
        //this.ArticlesObject.push(json);
        this.employeVHT=[json, ...this.employeVHT];
    };
  }
}
