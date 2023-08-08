import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ArticleService } from 'src/app/pages/services/article/article.service';
import { CategoryService } from 'src/app/pages/services/category/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles-edite',
  templateUrl: './articles-edite.component.html',
  styleUrls: ['./articles-edite.component.css']
})
export class EditeMaterielComponent implements OnInit {
  ArticleForm: FormGroup;
  userFile: any;
  categories;
  id;
  articles;
  constructor(private formBuilder: FormBuilder,
              private articleSevice: ArticleService,
              private catservice: CategoryService,
              private router: Router,
              private route: ActivatedRoute ,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.articleSevice.showArticles(this.route.snapshot.params.id).subscribe(data =>{
      this.articles = data;
    });
    this.catservice.getCategories().subscribe(data => {
    this.categories = data;
    });
    this.initForm();
  }
  initForm() {
    this.ArticleForm = this.formBuilder.group({
      ref: ['', Validators.required],
      nom: ['', Validators.required],
      designation: ['', [Validators.required , Validators.minLength(10)]],
      prix_unitair: ['',Validators.required],
      taux_tva: ['' ,Validators.required],
      prix_ttc: ['',Validators.required],
      category: ['', Validators.required]
    });
  }


  
  editeArticle() {
    const formData = new FormData();
    // tslint:disable-next-line: max-line-length
    formData.append('article', JSON.stringify({ref:this.ArticleForm.value.ref,
                                                nom:this.ArticleForm.value.nom,
                                                designation:this.ArticleForm.value.designation, 
                                                prix_unitair:this.ArticleForm.value.prix_unitair,
                                                taux_tva: this.ArticleForm.value.taux_tva,
                                                prix_ttc: this.ArticleForm.value.prix_ttc}));
    formData.append('category', JSON.stringify(this.ArticleForm.value.category));

    formData.append('id', this.id);
    this.articleSevice.saveArticles(formData).subscribe(data => {
     this.router.navigate(['/articles']);
    }, (error) => {
     console.log(error);
    });
   }
  
   onBack() {
     this.router.navigate(['/articles']);
   }

}
