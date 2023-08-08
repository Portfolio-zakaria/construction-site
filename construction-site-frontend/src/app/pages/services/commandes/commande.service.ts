import { Injectable } from '@angular/core';
import { ArticleComModule } from 'src/app/pages/advanced/models/article-com/article-com.module';
import { CommandeArtModule } from 'src/app/pages/advanced/models/commande-art/commande-art.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class CommandeService {
commande:CommandeArtModule;
public host = 'http://localhost:8080/order';
public host2 = 'http://localhost:8080/commandes';
public hostemail='http://localhost:8080/sendEmail';
public hostemail2='http://localhost:8080/sendEmailAttachment';
constructor(private http: HttpClient,private logService: AuthService) { }

headers= new HttpHeaders({'authorization':'Bearer '+this.logService.jwt})
  addArticleToCommande(articleTab: Map<number,ArticleComModule>){
    this.commande=new CommandeArtModule();
    this.commande.items=articleTab;

  }
  getArticleCommande(){
    return this.commande.items;
  }

 getTotalPrice(){
    let total = 0;
    let items: IterableIterator<ArticleComModule> =this.commande.items.values();
    for (let i of items) {
      total+=i.prix_unitair*i.qte;
    }

    return total;
  }


  // concerne data base 
  saveCommande(formData:FormData){
    return this.http.post(this.host, formData,{headers:this.headers});
  }

  getAllCommands(){
    return this.http.get(this.host2,{headers:this.headers});
  }

  editeCommandes(id,etat){
    return this.http.put(this.host2 + '/'+id,etat,{headers:this.headers});
  }

  deleteCommande(id){
    return this.http.delete(this.host2+ '/' +id,{headers:this.headers});
  }
  showCommandes(id){
    return this.http.get(this.host2+'/'+id);
  }

  getCommandeFournisseur(id){
    return this.http.get(this.host2+'/'+id+'/fournisseur',{headers:this.headers});
  }

  getCommandeChantier(id){
    return this.http.get(this.host2+'/'+id+'/chantier',{headers:this.headers});
  }



  getArticleBYCommandes(id){
    return this.http.get(this.host+'/'+id,{headers:this.headers});
  }

  sendEmail(email){
    return this.http.post(this.hostemail,email,{headers:this.headers});
  }

  sendEmailAttachment(email){
    return this.http.post(this.hostemail2,email,{headers:this.headers});
  }

}
