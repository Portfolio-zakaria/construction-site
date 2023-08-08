import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleService } from 'src/app/pages/services/article/article.service';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleComModule } from 'src/app/pages/advanced/models/article-com/article-com.module';
import { CommandeService } from 'src/app/pages/services/commandes/commande.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class MaterilesListComponent implements OnInit {
  article;
  info;
  qteForm:  FormGroup;
  selection = new SelectionModel<any>(true, []);

  show: boolean=false;

  tabs: Map<number,ArticleComModule> = new Map();
  constructor(private articleService: ArticleService, 
              private route: ActivatedRoute, 
              private router: Router,
              private formBuilder: FormBuilder,
              private nzMessageService: NzMessageService,
            private commandeService: CommandeService) {

  }

  ngOnInit(): void {
      this.getArticles();
      this.initForm();
  }

 
  getArticles(){
    this.articleService.getArticles().subscribe(data => {
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
    this.router.navigate(['advanced/articles/', 'articles-new']);
  }
  onDelete(id){
    this.articleService.deleteArticles(id).subscribe(data => {
      this.nzMessageService.info('Client supprimé avec success')
      this.getArticles();
     }, (error) => {
      console.log(error);
     });
  }

  onEdite(id){
    this.router.navigate(['/articles', 'edite', id]);
  }


  addToTab(qte,id,ref,nom,prix_unitair){
   
    let articleTab:ArticleComModule;
    this.show=true;
    if(this.tabs.has(id)){
      let articleTab:ArticleComModule=this.tabs.get(id);
      articleTab.qte += qte;
    }else{
      articleTab=new ArticleComModule();
      articleTab.id_mat=id;
      articleTab.ref=ref;
      articleTab.nom=nom;
      articleTab.prix_unitair=prix_unitair;
      articleTab.qte=qte;
    }
    this.tabs.set( articleTab.id_mat,articleTab);
    this.qteForm.reset();
  }


  deleteItem(id){
    this.tabs.delete(id);

  }
  onAnule(){
    this.show=false;

    }

  addArticleToCommande(){
      this.commandeService.addArticleToCommande(this.tabs);
      this.router.navigate(['advanced/commandes', 'new-commande']);
  }
}
