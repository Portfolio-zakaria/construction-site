import { Component, OnInit  } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import {ClientServiceService} from 'src/app/pages/services/Client_Service/client-service.service';
import { NzNotificationService } from 'ng-zorro-antd/notification'
import { NzMessageService } from 'ng-zorro-antd/message'


@Component({
  selector: 'app-advanced-form-examples',
  templateUrl: './form-examples.component.html',
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
export class AdvancedFormExamplesComponent implements OnInit {
  //-------Varaiables
  
  listClients;
  ClientForm: FormGroup;
  userFile: any;

  //--------------
  
  constructor(private ClientService: ClientServiceService,private fb: FormBuilder,private router: Router,
              private notification: NzNotificationService,private nzMessageService: NzMessageService) {}

  ngOnInit(): void {
    this.getClients(); 
    this.ClientForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      statuCivilite: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      suiteAdress: ['', [Validators.required]],
      cp: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required]],
      typeTier: ['', [Validators.required]],
      type: ['', [Validators.required]],
    })
     
     // this.initForm1();
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
  //----------------------------ajouter-----------------------
  addClient(){

    if (this.ClientForm.invalid) {
      this.createNotification2('error');
      return;
    }
      this.ClientService.saveClient( this.ClientForm.value).subscribe(data => {
      this.router.navigate(['/advanced/Clients']);
      this.createNotification('success');
      this.getClients(); 
      this.ClientForm.reset();
      }, (error) => {
          console.log(error);
      });
  }

  onDelete(id){ 
    this.ClientService.deleteClient(id).subscribe(data => {
      this.getClients();
      this.nzMessageService.info('Client supprimé avec success')
     }, (error) => {
      console.log(error);
     });  
  }
  onEdite(id){ 
    /*let url ='edite-Client/'+id
    this.router.navigateByUrl('/advanced/Clients/'+btoa(url));*/
    this.router.navigate(['/advanced/Clients/','edite-Client',id]);
   }

   createNotification(type: string): void {
    this.notification.create(
      type,
      'Client ajouté avec success',
      'Vous avez ajouté un nouveau client.',
    )
  }
  createNotification2(type: string): void {
    this.notification.create(
      type,
      'erreur',
      'Vous devez compléter la formulaire pour enregistrer un nouveau client.',
    )
  }

  cancel(): void {
    this.nzMessageService.info('Suppression annulée')
  }

 

}
