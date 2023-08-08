import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleService } from 'src/app/pages/services/article/article.service';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommandeService } from 'src/app/pages/services/commandes/commande.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  article;
  info;
  qteForm:  FormGroup;




  constructor(private articleService: ArticleService, 
              private route: ActivatedRoute, 
              private router: Router,
              private formBuilder: FormBuilder,private nzMessageService: NzMessageService,
            private commandeService: CommandeService) {

  }

  ngOnInit(): void {
      this.getArticlesCat();
      this.initForm();
  }

  getArticlesCat(){
    this.articleService.getArticlesCat().subscribe(data => {
      this.article = data;
      //this.dataSource = new MatTableDataSource(this.article._embedded.materiels);

    }, (error) => {
      console.log(error);
    });
  }

  initForm() {
    this.qteForm = this.formBuilder.group({
      qte: ['', [Validators.required,Validators.min(1)]]
     
    });
  }
  onNewArticle(){
    this.router.navigate(['advanced/articles', 'articles-new']);
  }
  onDelete(id){
    this.articleService.deleteArticles(id).subscribe(data => {
      this.getArticlesCat();
      this.nzMessageService.info('Article supprimé avec success')
     }, (error) => {
      console.log(error);
     });
  }

  onEdite(id){
    this.router.navigate(['advanced/articles', 'articles-edite', id]);
  }






}
