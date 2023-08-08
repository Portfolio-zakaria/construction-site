import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service'
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private host = 'http://localhost:8080/materiels';
 
  headers= new HttpHeaders({'authorization':'Bearer '+this.logService.jwt})
  constructor(private http: HttpClient,private logService: AuthService) { }


  getArticles() {
    return this.http.get(this.host,{headers:this.headers})
  }

  
  getArticlesCat() {
    return this.http.get(this.host+'/all',{headers:this.headers})
  }
  deleteArticles(id){
    return this.http.delete(this.host + '/' + id,{headers:this.headers})
  }
  saveArticles(formData: FormData){
    return this.http.post(this.host + '/add'  , formData,{headers:this.headers})
  }
updateArticles(formData: FormData){
    return this.http.put(this.host + '/edite' , formData,{headers:this.headers})
}
UpdateArticle(id,article){
    return this.http.put(this.host+ '/' +id, article,{headers:this.headers})
  }

showArticles(id){
    return this.http.get(this.host + '/' + id,{headers:this.headers})
  }
getCategorie(id){
    return this.http.get(this.host + '/' + id + '/category',{headers:this.headers})
  }
}
