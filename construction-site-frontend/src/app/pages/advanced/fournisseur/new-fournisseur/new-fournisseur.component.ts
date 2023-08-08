import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FournisseurService } from 'src/app/pages/services/fournisseur/fournisseur.service';

import { NzMessageService,NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-new-fournisseur',
  templateUrl: './new-fournisseur.component.html',
  styleUrls: ['./new-fournisseur.component.css']
})
export class NewFournisseurComponent implements OnInit {
  FournisseurForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private fourniService: FournisseurService,
    private router: Router,private notification: NzNotificationService,private nzMessageService: NzMessageService
    ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.FournisseurForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adress: ['', Validators.required],
      tel: ['', [Validators.required, Validators.minLength(10)]]

    });
  }


  onSaveFournisseur() {
   this.fourniService.saveFournisseur(this.FournisseurForm.value).subscribe(data => {
     this.router.navigate(['advanced/fournisseur/fournisseur-list']);
     this.createNotification('success');
    }, (error) => {
     console.log(error);
    });
   }
   onBack() {
     this.router.navigate(['advanced/fournisseur/fournisseur-list']);
   }
   createNotification(type: string): void {
    this.notification.create(
      type,
      'Fournisseur ajouté avec success',
      'Vous avez ajouté un nouveau Fournisseur.',
    )
  }
}
