import { Component, OnInit, ViewChild } from '@angular/core';
import { CommandeService } from 'src/app/pages/services/commandes/commande.service';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';
@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})
export class ListCommandeComponent implements OnInit {

  Commandes;


  show = false;

  operation: string;
  commandeForm: FormGroup;
  idedite: any;
  constructor(private commandesService: CommandeService,
     private route: ActivatedRoute, private router: Router, 
     private nzMessageService: NzMessageService,
     private notification: NzNotificationService,
     private formBuilder: FormBuilder) { }
  ngOnInit(): void {
   this.getCommandes();
   this.initForm();
  }

  getCommandes() {
    this.commandesService.getAllCommands().subscribe(data => {
      this.Commandes = data;
     // this.dataSource = new MatTableDataSource(this.Commandes._embedded.commandes);

    }, (error) => {
     console.log(error);
   });
 }
onNewCommandes(){
    this.router.navigate(['advanced/materiels/materiels-list']);
  }

onDelete(id){
    this.commandesService.deleteCommande(id).subscribe(data => {
      this.getCommandes();
      this.nzMessageService.info('Commande supprimé avec success')
     }, (error) => {
      console.log(error);
     });
 }
onShowCommandes(id){
    this.router.navigate(['advanced/commandes', 'show-commande', id]);
  }


onEditeEtat(id){
 this.show = true;
 this.idedite=id;
}


  initForm() {
    this.commandeForm = this.formBuilder.group({
      etate: ['', Validators.required]
    });

}

editeEtatCommande(){
  this.commandesService.editeCommandes(this.idedite,this.commandeForm.value.etate).subscribe(data => {
    this.getCommandes();
    this.show=false;
   }, (error) => {
    console.log(error);
   });
}
onBack(){
  this.show=false;
}
}
