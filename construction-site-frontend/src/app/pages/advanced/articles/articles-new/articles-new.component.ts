import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/pages/services/article/article.service';
import { CategoryService } from 'src/app/pages/services/category/category.service';
import { Router } from '@angular/router';
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-articles-new',
  templateUrl: './articles-new.component.html',
  styleUrls: ['./articles-new.component.css']
})
export class ArticlesNewComponent implements OnInit {

  ArticleForm: FormGroup;
  userFile: any;
  categories;

  
 
  constructor(
    private formBuilder: FormBuilder,
    private articleSevice:ArticleService,
    private catservice: CategoryService,
    private nzMessageService: NzMessageService,
    private notification: NzNotificationService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.catservice.getCategories().subscribe(data => {
    this.categories = data;
    }, (error) => {
      console.log(error);
     });
    this.initForm();
  }
  initForm() {
    this.ArticleForm = this.formBuilder.group({
      ref: ['', Validators.required],
      nom: ['', Validators.required],
      designation: ['', Validators.required ],
      prix_unitair: ['',Validators.required],
      taux_tva: ['' ,Validators.required],
      category: ['', Validators.required]
    });
  }


  onSaveArticle() {
    const formData = new FormData();
    // tslint:disable-next-line: max-line-length
    formData.append('materiels', JSON.stringify({ref:this.ArticleForm.value.ref,
                                                nom:this.ArticleForm.value.nom,
                                                designation:this.ArticleForm.value.designation, 
                                                prix_unitair:this.ArticleForm.value.prix_unitair,
                                                taux_tva: this.ArticleForm.value.taux_tva,
                                                 }));
    formData.append('category', JSON.stringify(this.ArticleForm.value.category));
    
    this.articleSevice.saveArticles(formData).subscribe(data => {
     this.router.navigate(['advanced/articles/articles-list']);
     this.createNotification('success');
    }, (error) => {
     console.log(error);
    });
   }
   createNotification(type: string): void {
    this.notification.create(
      type,
      'Article ajouté avec success',
      'Vous avez ajouté un nouveau Article.',
    )
  }
   onBack() {
     this.router.navigate(['advanced/articles/articles-list']);
   }
}
