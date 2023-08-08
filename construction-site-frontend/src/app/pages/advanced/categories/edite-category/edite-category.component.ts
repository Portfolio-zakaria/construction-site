import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/pages/services/category/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edite-category',
  templateUrl: './edite-category.component.html',
  styleUrls: ['./edite-category.component.css']
})
export class EditeCategoryComponent implements OnInit {
  CategoryForm: FormGroup;
  id:number;
  category;
  constructor(private categoryService: CategoryService ,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.categoryService.showCategory(this.route.snapshot.params.id).subscribe(data => {
      this.category = data;
     }, (error) => {
      console.log(error);
     });
    this.initForm1();
  }
  initForm1() {
    this.CategoryForm = this.formBuilder.group({
      intitule: ['', Validators.required],
      designation: ['', Validators.required]
    });
}
onAnuule(){
  this.router.navigate(['advanced/categories/category-list']);
}
UpdateCategory(){
  this.categoryService.updateCategory(this.id, this.CategoryForm.value).subscribe(data => {
    this.router.navigate(['advanced/categories/category-list']);
   }, (error) => {
    console.log(error);
   });
}

}
