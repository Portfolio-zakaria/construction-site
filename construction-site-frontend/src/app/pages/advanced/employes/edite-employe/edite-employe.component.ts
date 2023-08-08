import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeService } from 'src/app/pages/services/employe/employe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message'

@Component({
  selector: 'app-edite-employe',
  templateUrl: './edite-employe.component.html',
  styleUrls: ['./edite-employe.component.css']
})
export class EditeEmployeComponent implements OnInit {
  employeForm: FormGroup;
  employe;
  userFile: any;
  id;
  constructor(
    private route: ActivatedRoute ,
    private formBuilder: FormBuilder,
    public employerService: EmployeService,
    private router: Router,
    private nzMessageService: NzMessageService
    ) { }

 
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.employerService.showEmploye(this.route.snapshot.params.id).subscribe(data => {
      this.employe = data;
    }, (error) => {
      console.log(error);
    });
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



 onUpdateEmploye() {
  
  this.employerService.editeEMploye(this.id,this.employeForm.value ).subscribe(data => {
    this.router.navigate(['advanced/employes/employes-list']);
    this.nzMessageService.success("Employé modifié avec success.");
   }, (error) => {
    console.log(error);
   });
}

  onBack() {
    this.router.navigate(['advanced/employes/employes-list']);
  }
}
