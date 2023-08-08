import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeService } from 'src/app/pages/services/employe/employe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification'
import { NzMessageService } from 'ng-zorro-antd/message'


@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})

export class EmployesListComponent implements OnInit {
  employes;
  employeForm: FormGroup;
  //displayedColumns: string[] = ['ID','Nom', 'Prenom', 'Email', 'Dateengagment' , 'Telephone' , 'Profile' , 'Action'];
  //dataSource: MatTableDataSource<any>;
  //searchKey: string;


  constructor(private employeService: EmployeService, private route: ActivatedRoute, private router: Router, private  formBuilder : FormBuilder,
    private notification: NzNotificationService,private nzMessageService: NzMessageService) {

  }

 ngOnInit(): void {
 this.getEmployes();

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
  this.employeService.saveEmployes(this.employeForm.value).subscribe(data => {
   this.createNotification('success');
   this.getEmployes(); 
   this.employeForm.reset();
   
  }, (error) => {
   console.log(error);
  });

 }
/* applyFilter(filterValue: string){
   this.dataSource.filter = filterValue.trim().toLowerCase();
 }
 /*getEmployes(){
   this.employeService.getEmployes().subscribe(data => {
     this.employes = data;
     console.log( this.employes._embedded.employes);
     this.dataSource = new MatTableDataSource(this.employes._embedded.employes);
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;

   }, (error) => {
     console.log(error);
   });
   
 }*/
 getEmployes(){
  this.employeService.getEmployes().subscribe(data => {
    this.employes = data;

    

  }, (error) => {
    console.log(error);
  });
  
}







 onNewEmploye(){
   this.router.navigate(['advanced/employes', 'new-employe']);
 }
 onDelete(id){ 
   this.employeService.deleteEmploy(id).subscribe(data => {
     this.getEmployes();
     this.nzMessageService.info('Employé supprimé avec success')
    }, (error) => {
     console.log(error);
    });  
 }
 onShowEmploye(id){
   this.router.navigate(['advanced/employes', 'view', id]);
 }
 onEdite(id){ 
  this.router.navigate(['advanced/employes', 'edite-employe', id]);
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
