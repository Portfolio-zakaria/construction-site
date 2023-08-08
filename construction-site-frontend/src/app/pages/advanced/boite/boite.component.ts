import { Component, OnInit } from '@angular/core'
import { FournisseurService } from '../../services/fournisseur/fournisseur.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { CommandeService } from '../../services/commandes/commande.service'
import { EmailModule } from '../models/email/email.module'
import {ClientServiceService} from 'src/app/pages/services/Client_Service/client-service.service'
import { NzNotificationService } from 'ng-zorro-antd/notification'

@Component({
  selector: 'app-boite',
  templateUrl: './boite.component.html',
  styleUrls: ['./boite.component.scss']
})
export class BoiteComponent implements OnInit {
  fournisseurs
  showFournisseurs = false
  showClient = false
  data
  BoiteEmailForm: FormGroup
  listClients

  constructor(
    private fourniservice: FournisseurService,
    private formBuilder: FormBuilder,
    private commandesService: CommandeService,
    private ClientService: ClientServiceService,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
    this.getClients()
    this.getFournisseur()
    this.initForm();
  }
  initForm() {
    this.BoiteEmailForm = this.formBuilder.group({
      to: ['', [Validators.required, Validators.email]],
      messageSubject: ['', Validators.required],
      messageText: ['', Validators.required]
    })
  }
  getFournisseur(){
    this.fourniservice.getFournisseurs().subscribe(data => {
      this.fournisseurs = data
    }, (error) => {
      console.log(error)
    });
  }
  getClients() {
    this.ClientService.getClients()
    .subscribe(data=>{
      this.listClients = data;
    }, (error) => {
      console.log(error)
    }
   );
  }

  showStaff(data){
    if(data === 'Client'){
     
      this.showClient = true
      this.showFournisseurs = false
    }else if(data === 'Fournisseur'){
      
      this.showFournisseurs = true
      this.showClient = false
    }
  }

  showFormEmail(data){
  
   this.data=data

  }

  sendEmail(){
    let email:EmailModule=new EmailModule();
    email.messageSubject=this.BoiteEmailForm.value.messageSubject;
    email.messageText=this.BoiteEmailForm.value.messageText;
    email.to=this.BoiteEmailForm.value.to;
   
    this.commandesService.sendEmailAttachment(email).subscribe(data=>{
      this.createNotification('success');
      this.BoiteEmailForm.reset();
      }, (error) => {
    console.log(error);
  });
  }
  createNotification(type: string): void {
    this.notification.create(
      type,
      'Email envoyé avec success',
      'Vous avez envoyé un email .',
    )
  }

}
