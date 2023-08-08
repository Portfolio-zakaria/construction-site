import { Component, OnInit } from '@angular/core';
import { SoustraitantService } from 'src/app/pages/services/soustraitant/soustraitant.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-new-sous-traitant',
  templateUrl: './new-sous-traitant.component.html',
  styleUrls: ['./new-sous-traitant.component.css']
})
export class NewSousTraitantComponent implements OnInit {
  SousTraitants;

  soustraitantForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public soustraitantService: SoustraitantService,
    private nzMessageService: NzMessageService,
    private notification: NzNotificationService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.getSoustraitant();
      this.soustraitantForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      tel: ['', [Validators.required,Validators.minLength(10)]],
      specialite: ['', Validators.required],
      adress: ['', Validators.required],
      statut: ['', Validators.required]
    });
  }

  getSoustraitant(){
    this.soustraitantService.getSousTraitant().subscribe(data => {
      this.SousTraitants = data;
    }, (error) => {
      console.log(error);
    });
  }

  onSavesoustraitant() {
   
   this.soustraitantService.saveSousTraitant(this.soustraitantForm.value).subscribe(data => {
    this.router.navigate(['advanced/soustraitant']);
    this.createNotification('success');
    this.getSoustraitant();
   }, (error) => {
    console.log(error);
   });
  }

  onBack() {
    this.router.navigate(['advanced/soustraitant']);
  }

  onDelete(id){ 
    this.soustraitantService.deleteSousTraitant(id).subscribe(data => {
      this.nzMessageService.info('Sous traitant supprimé avec success')
    this.getSoustraitant();
     }, (error) => {
      console.log(error);
     });  
  }
  createNotification(type: string): void {
    this.notification.create(
      type,
      'Sous Traitant ajouté avec success',
      'Vous avez ajouté un nouveau Sous Traitant.',
    )
  }
  onEdite(id){ 
   this.router.navigate(['advanced/soustraitant', 'edite-sous-traitant', id]);
  }

}
