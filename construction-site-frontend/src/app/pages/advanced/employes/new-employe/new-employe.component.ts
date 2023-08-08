import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmployeService } from 'src/app/pages/services/employe/employe.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification'
import { NzMessageService } from 'ng-zorro-antd/message'


@Component({
  selector: 'app-new-employe',
  templateUrl: './new-employe.component.html',
  styleUrls: ['./new-employe.component.css']
})
export class NewEmployeComponent implements OnInit {
  
  employeForm: FormGroup;
  userFile: any;
  constructor(
    private formBuilder: FormBuilder,
    public employerService: EmployeService,
    private router: Router,
    private notification: NzNotificationService,private nzMessageService: NzMessageService
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.employeForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      tel: ['', [Validators.required,Validators.minLength(10)]],
      dateengagement: ['', Validators.required],
      profil: ['', Validators.required],
      salaire: ['', Validators.required],
      adress: ['', Validators.required]
    });
  }

  onSaveEmploye() {
    if (this.employeForm.invalid) {
      this.createNotification2('error');
      return;
    }
   
   this.employerService.saveEmployes(this.employeForm.value).subscribe(data => {
    this.router.navigate(['advanced/employes/employes-list']);
    this.createNotification('success');
   }, (error) => {
    console.log(error);
   });
  }

  onBack() {
    this.router.navigate(['advanced/employes/employes-list']);
  }

  createNotification(type: string): void {
    this.notification.create(
      type,
      'Employé ajouté avec success',
      'Vous avez ajouté un nouveau employé.',
    )
  }

  createNotification2(type: string): void {
    this.notification.create(
      type,
      'erreur',
      'Vous devez compléter la formulaire pour enregistrer un nouveau employé.',
    )
  }

  cancel(): void {
    this.nzMessageService.info('Suppression annulée')
  }


}
