import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/pages/services/category/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  ListCategories;
  show;
 
  operation: string;
  constructor(private categoryService: CategoryService,private nzMessageService: NzMessageService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.ListCategories = data;
     // this.dataSource = new MatTableDataSource(this.ListCategories._embedded.categories);
     
    }, (error) => {
     console.log(error);
   });
 }
onNewCategory(){
    this.router.navigate(['advanced/categories', 'new-category']);
  }

onDelete(id){
    this.categoryService.deleteCategory(id).subscribe(data => {
      this.getCategories();
      this.nzMessageService.info('Category supprimé avec success')
     }, (error) => {
      console.log(error);
     });
    }
onShowEmploye(id){
    this.router.navigate(['advanced/categories', 'view', id]);
  }
onEdite(id){
  this.router.navigate(['advanced/categories', 'edite-category', id]);
  }
}
