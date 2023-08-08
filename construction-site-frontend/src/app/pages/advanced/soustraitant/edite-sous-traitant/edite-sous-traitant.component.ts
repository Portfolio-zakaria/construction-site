import { Component, OnInit } from '@angular/core';
import { SoustraitantService } from 'src/app/pages/services/soustraitant/soustraitant.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edite-sous-traitant',
  templateUrl: './edite-sous-traitant.component.html',
  styleUrls: ['./edite-sous-traitant.component.css']
})
export class EditeSousTraitantComponent implements OnInit {
  soustraitantForm: FormGroup;
  sousTraitant;
  id;
  constructor(
    private route: ActivatedRoute ,
    private formBuilder: FormBuilder,
    public soustraitantService: SoustraitantService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.soustraitantService.showSousTraitant(this.route.snapshot.params.id).subscribe(data => {
      this.sousTraitant = data;
    }, (error) => {
      console.log(error);
    });
    this.initForm();
  }
  
  initForm() {
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

  onUpdateSousTraitant() {
  
    this.soustraitantService.editeSousTraitant(this.id,this.soustraitantForm.value ).subscribe(data => {
      this.router.navigate(['advanced/soustraitant']);
     }, (error) => {
      console.log(error);
     });
  }
  
    onBack() {
      this.router.navigate(['advanced/soustraitant']);
    }
}
