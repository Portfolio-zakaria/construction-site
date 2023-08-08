import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/pages/services/category/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
  CategoryAddForm: FormGroup;
  constructor(private categoryService: CategoryService ,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private nzMessageService: NzMessageService,
              private notification: NzNotificationService,
              private router: Router) { }
  ngOnInit(): void {
    this.initForm1();
  }
  initForm1() {
    this.CategoryAddForm = this.formBuilder.group({
      intitule: ['', Validators.required],
      designation: ['',Validators.required],
    });
}
addCategory(){
  this.categoryService.addCategory( this.CategoryAddForm.value).subscribe(data => {
    
    this.router.navigate(['advanced/categories/category-list']);
    this.createNotification('success');
   }, (error) => {
    console.log(error);
   });
 }
 createNotification(type: string): void {
  this.notification.create(
    type,
    'Catgeory ajouté avec success',
    'Vous avez ajouté un nouveau Catgeory.',
  )
}
 onAnuule(){
  this.router.navigate(['advanced/categories/category-list']);
}
}
