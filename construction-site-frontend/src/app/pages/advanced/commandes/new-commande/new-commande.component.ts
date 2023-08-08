import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseurService } from 'src/app/pages/services/fournisseur/fournisseur.service';
import { ChantierService } from 'src/app/pages/services/Chantier/chantier.service';
import { CommandeService } from 'src/app/pages/services/commandes/commande.service';
import { ArticleComModule } from 'src/app/pages/advanced/models/article-com/article-com.module';
import { NzNotificationService } from 'ng-zorro-antd';
//import { AuthentiService } from 'src/app/pages/services/auth/authenti.service';

@Component({
  selector: 'app-new-commande',
  templateUrl: './new-commande.component.html',
  styleUrls: ['./new-commande.component.css']
})
export class NewCommandeComponent implements OnInit {

  chantiers;
  fournisseurs;
 
  CommandeForm: FormGroup;
  Commandes: any;
 total:number;
 totaltva:number;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute ,
    private chantierservice: ChantierService,
    private fourniservice: FournisseurService,
    private router: Router,
    public commandeService: CommandeService,
    private notification: NzNotificationService
    // private auth:AuthentiService
    ) { }

  ngOnInit(): void {

    this.getTotal();
   
      this.initForm();
      this.getChantier();
      this.getFournisseur();
    
  }
  initForm() {
    this.CommandeForm = this.formBuilder.group({
      chantier: ['', Validators.required],
      fournisseur: ['', Validators.required]
    });
  }
  getFournisseur(){
    this.fourniservice.getFournisseurs().subscribe(data => {
      this.fournisseurs = data;
    }, (error) => {
      console.log(error);
    });
  }
  getChantier(){
    this.chantierservice.getChantiers().subscribe(data => {
      this.chantiers = data;
      
    }, (error) => {
      console.log(error);
    });
  }
  getTotal(){
  this.total =this.commandeService.getTotalPrice();
  this.totaltva=this.total+this.total*0.2;
  }
 


SaveCommadne(chantier,fourni){
  //let user:string=this.auth.userAutheticated.email;
  let user:string="usertest";
  const formData = new FormData();
  let a=[];
  // tslint:disable-next-line: no-unused-expression
  let items: Map < number,ArticleComModule> = new Map();
  items=this.commandeService.getArticleCommande();
  
  items.forEach((value: ArticleComModule, key: number) => {
   //a[key]=value;
    a.push(value);
    });

   
  formData.append('chantier', JSON.stringify(chantier));
  formData.append('fournisseur', JSON.stringify(fourni));
  formData.append('user', JSON.stringify(user));
  formData.append('commande', JSON.stringify(a));
  //this.commandeService.saveCommande(chantier,fourni,this.auth.userAutheticated.email);
  this.commandeService.saveCommande(formData).subscribe(data => {
    this.createNotification('success');
    this.getCommandes();
   
  }, (error) => {
    console.log(error);
  });
  
  this.router.navigate(['advanced/commandes/list-commande']);
}



createNotification(type: string): void {
  this.notification.create(
    type,
    'Commande passé avec success',
    'Vous avez passé un nouveau Commande.',
  )
}

getCommandes() {
  this.commandeService.getAllCommands().subscribe(data => {
    
    
  }, (error) => {
   console.log(error);
 });
}
onAnule(){
  this.router.navigate(['advanced/materiels/materiels-list']);
}

}
