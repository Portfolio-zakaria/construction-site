import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { AuthService } from '../auth/auth.service'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  headers= new HttpHeaders({'authorization':'Bearer '+this.logService.jwt})
  private host = 'http://localhost:8080/categories';

  constructor(private http: HttpClient,private logService: AuthService) { }
  public getCategories() {
    return this.http.get(this.host,{headers:this.headers});
  }
  deleteCategory(id){
    return this.http.delete(this.host+ '/' + id,{headers:this.headers});
  }
  addCategory(category){
    return this.http.post(this.host, category,{headers:this.headers});
  }
  updateCategory(id,category){
    return this.http.put(this.host+ '/' +id, category,{headers:this.headers});
  }
  showCategory(id){
    return this.http.get(this.host + '/' + id,{headers:this.headers});
  }
}
