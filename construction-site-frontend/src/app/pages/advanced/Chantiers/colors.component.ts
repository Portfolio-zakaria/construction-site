import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ChantierService } from 'src/app/pages/services/Chantier/chantier.service';
import {ClientServiceService} from 'src/app/pages/services/Client_Service/client-service.service';
import { NzNotificationService } from 'ng-zorro-antd/notification'
import { NzMessageService } from 'ng-zorro-antd/message'
@Component({
    selector: 'app-advanced-colors',
    templateUrl: './colors.component.html',
  styles: [
    `
      nz-date-picker ::ng-deep .ant-calendar-picker {
        width: 100%;
      }

      nz-date-picker,
      nz-time-picker {
        width: 100%;
      }
    `,
  ],
})
export class AdvancedColorsComponent implements OnInit {
  //-------Varaiables
  listChantiers;
  listClients;
  ChantierForm: FormGroup;
  idClient;
  infoClt;
  isVisible = false;
  radioValue =0 ;
  clientByChantier;
  showClientInfoChantier:boolean;
   
  constructor(private ChantierService: ChantierService, private ClientService  : ClientServiceService,private fb: FormBuilder,private router: Router,
              private notification: NzNotificationService,private nzMessageService: NzMessageService) {}

  ngOnInit(): void {
    this.getChantiers(0);
  
    this.getClients();
    this.ChantierForm = this.fb.group({
      intitule: ['', [Validators.required]],
      statut: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      adresse1: [''],
      etat: ['', [Validators.required]],
      cp: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      id_Clt: [''],

    })
 
  }

  getClients() {
    this.ClientService.getClients()
    .subscribe(data=>{
      this.listClients = data;
    }, (error) => {
      console.log(error);
    }
   );
  }
  
  getChantiers(id) {
    this.ChantierService.getFliterChantiers(id)
    .subscribe(data=>{
      this.listChantiers = data;
    }, (error) => {
      console.log(error);
    }
   );
  }

    //----------------------------ajouter-----------------------
    addChantier(){
      if (this.ChantierForm.invalid) {
        this.createNotification2('error');
        return;
      }
      const formData = new FormData();
      formData.append('chantier', JSON.stringify({intitule:this.ChantierForm.value.intitule,
                                                  statut:this.ChantierForm.value.statut,
                                                  ville:this.ChantierForm.value.ville})); 
      formData.append('adresse',JSON.stringify(this.ChantierForm.value.adresse));
      formData.append('adresse1',JSON.stringify(this.ChantierForm.value.adresse1));
      formData.append('etat',JSON.stringify(this.ChantierForm.value.etat));
      formData.append('cp',JSON.stringify(this.ChantierForm.value.cp));
      formData.append('idClient',JSON.stringify(this.ChantierForm.value.id_Clt));
      this.ChantierService.saveChantierCl(formData).subscribe(data => {
        this.getChantiers(0);
      }, (error) => {
       console.log(error);
      });
      this.router.navigate(['/advanced/Chantiers']);
      this.createNotification('success');
      this.getChantiers(0);
      this.ChantierForm.reset();

  }

  onDelete(id){ 
      this.ChantierService.deleteChantier(id).subscribe(data => {
      this.nzMessageService.info('Chantier supprimé avec success')
      this.getChantiers(0);
     }, (error) => {
      console.log(error);
     });  
  }

  createNotification2(type: string): void {
    this.notification.create(
      type,
      'erreur',
      'Vous devez compléter la formulaire pour enregistrer un nouveau chantier.',
    )
  }
  AjouterClient(){
    this.router.navigate(['/advanced/Clients']);
  }
  onEdite(id){ 
    this.router.navigate(['/advanced/Chantiers/','edite-Chantier',id]);
   }
  
  getClient(id) {
    this.ChantierService.getClt(id).subscribe(data=>{
      this.infoClt = data;
    }, (error) => {
      console.log(error);
    }
   );
  }
  showModal(): void {
    this.isVisible = true
  }

  handleOk(): void {
    console.log('Button ok clicked!')
    this.isVisible = false
  }

  handleCancel(): void {
    console.log('Button cancel clicked!')
    this.isVisible = false
  }

   createNotification(type: string): void {
    this.notification.create(
      type,
      'Chantier ajouté avec success',
      'Vous avez ajouté un nouveau chantier.',
    )
  }

  cancel(): void {
    this.nzMessageService.info('Suppression annulée')
  }


  getData(data){
    if(data === 0){
     this.getChantiers(0);
    }else if(data === 1){
      this.getChantiers(1);
        }else if(data === 2){
          
      this.getChantiers(2);
      }else if(data === 3){
        
        this.getChantiers(3);
      }else if(data === 4){
        
        this.getChantiers(4);
      }
  }


  onShowClient(id){
    this.ChantierService.getClt(id)
    .subscribe(data=>{
      this.clientByChantier = data;
    }, (error) => {
      console.log(error);
    }
   );
   this.showClientInfoChantier=true;
  }
  onShowClientVisible(){
    this.showClientInfoChantier=false;
  }

}
