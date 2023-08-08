import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/pages/services/fournisseur/fournisseur.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edite-fournisseur',
  templateUrl: './edite-fournisseur.component.html',
  styleUrls: ['./edite-fournisseur.component.css']
})
export class EditeFournisseurComponent implements OnInit {

  fournisseurForm: FormGroup;
  fournisseur;
  id;
  constructor(
    private route: ActivatedRoute ,
    private formBuilder: FormBuilder,
    public fourniService: FournisseurService,
    private router: Router
    ) { }

 
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.fourniService.showFournisseur(this.route.snapshot.params.id).subscribe(data => {
      this.fournisseur = data;
    }, (error) => {
      console.log(error);
    });
    this.initForm();
  }

  initForm() {
    this.fournisseurForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adress: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      tel: ['', [Validators.required,Validators.minLength(10)]]
    });
  }


 onUpdateFournisseur() {
 
  this.fourniService.editeFournisseur(this.id, this.fournisseurForm.value ).subscribe(data => {
    this.router.navigate(['advanced/fournisseur/fournisseur-list']);
   }, (error) => {
    console.log(error);
   });
}

  onBack() {
    this.router.navigate(['advanced/fournisseur/fournisseur-list']);
  }
}
