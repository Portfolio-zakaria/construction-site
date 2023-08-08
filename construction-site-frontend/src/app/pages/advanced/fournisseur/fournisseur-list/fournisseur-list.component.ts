import { Component, OnInit, ViewChild } from '@angular/core';
import { FournisseurService } from 'src/app/pages/services/fournisseur/fournisseur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit {
  fournisseurs
  displayedColumns: string[] = ['ID','Nom', 'Prenom','Adress', 'Email' , 'Telephone'  , 'Action'];

  constructor(private fournisseurService: FournisseurService,private nzMessageService: NzMessageService, private route: ActivatedRoute, private router: Router) {

  }

 ngOnInit(): void {
 this.getFournisseurs();
 
 }

 getFournisseurs(){
   this.fournisseurService.getFournisseurs().subscribe(data => {
     this.fournisseurs = data
   }, (error) => {
     console.log(error);
   });
   
 }
 onNewFournisseur(){
   this.router.navigate(['advanced/fournisseur', 'new-fournisseur']);
 }
 onDelete(id){ 
   this.fournisseurService.deleteFournisseur(id).subscribe(data => {
     this.getFournisseurs();
     this.nzMessageService.info('Fournisseur supprimé avec success')
    }, (error) => {
     console.log(error);
    });  
 }

 onShow(id){
   this.router.navigate(['advanced/fournisseur', 'single-fournisseur', id]);
 }

 onEdite(id){
  this.router.navigate(['advanced/fournisseur', 'edite-fournisseur', id]);
 }


}
