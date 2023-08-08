import { Component, OnInit } from '@angular/core';
import { formatDate, NgForOf } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TacheService } from 'src/app/pages/services/Tache/tache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChantierService } from 'src/app/pages/services/Chantier/chantier.service';
import { id_ID, NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {
  listChantiers;
  listTaches;
  TacheForm : FormGroup;
  currentId;
  chantier;
  listeEmps;
  IdTache;
  isVisible = false;
  Plan;
  etat;
  datD;
  constructor(private fb: FormBuilder,
    private ChantierService: ChantierService,
    private TacheService : TacheService,
    private router: Router,private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
    this.getChantiers();
    this.TacheForm = this.fb.group({
      intitule : ['', [Validators.required]],
      vh: ['', [Validators.required]],
    })
  }
 
  getPlan(id) {
    this.Plan=""
    this.listeEmps=""
    this.TacheService.getPlanTache(id)
    .subscribe(data=>{
      this.Plan = data;
      this.IdTache = id;
      this.datD = formatDate (new Date(), 'yyyy-MM-dd', 'en-US');
      if (this.Plan.date_fin < this.datD) {
        this.etat = "Terminée"
        
      }else{
        this.etat ="En cours"
      }
    
    })
  }

  //-------------
  getChantiers() {
    this.ChantierService.getChantiers()
    .subscribe(data=>{
      this.listChantiers = data;
      this.isVisible
    }, (error) => {
      console.log(error);
    }
   );
  }
  getEmpTache(id) {
    this.TacheService.getEmpTache(id)
    .subscribe(data=>{
      this.listeEmps = data;
      this.IdTache = id;
    }, (error) => {
      console.log(error);
    }
   );

  }
  getChantier() {
    this.ChantierService.showChantier(this.currentId)
    .subscribe(data=>{
      this.chantier = data;
    }, (error) => {
      console.log(error);
    }
   );
  }
  //----------------------------ajouter-----------------------
   /* addTache(){
      this.TacheService.saveTache( this.TacheForm.value).subscribe(data => {
      this.AfficherTaches(this.currentId); 
      }, (error) => {
          console.log(error);
      });
  }*/
  //----------------------------ajouter------------------------
  onSaveTache() {
    const formData = new FormData();
    formData.append('tache', JSON.stringify(this.TacheForm.value));
    formData.append('idChantier', this.currentId);
    this.TacheService.saveTacheCh(formData).subscribe(data => {
    this.AfficherTaches(this.currentId); 
    }, (error) => {
     console.log(error);
    });
   }
   


  //-----------------------------------------------------------
  //delete
  onDelete(id){ 
    this.TacheService.deleteTache(id).subscribe(data => {
      this.nzMessageService.info('Tache supprimé avec success')
      this.AfficherTaches(this.currentId);
     }, (error) => {
      console.log(error);
     });  
  }
  //update
  onUpdate(id){ 
    this.router.navigate(['/advanced/Taches/','edite-Tache',id]);
   }
  //--------------
  AfficherTaches(id){
    this.ChantierService.getTachesByChantier(id)
    .subscribe(data=>{
      this.listTaches = data;
      this.currentId = id;
      this.getChantiers();
    }, (error) => {
      console.log(error);
    }
   );
  }

}
