import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class SoustraitantService {

  host = 'http://localhost:8080/sous_Traitants';
  headers= new HttpHeaders({'authorization':'Bearer '+this.logService.jwt})
  constructor(private http: HttpClient,private logService: AuthService) { }

 getSousTraitant() {
    return this.http.get(this.host ,{headers:this.headers});
  }

  saveSousTraitant(SousTraitant) {
    return this.http.post(this.host , SousTraitant ,{headers:this.headers});
  }
  showSousTraitant(id){
    return this.http.get(this.host + '/' + id ,{headers:this.headers});
  }

  deleteSousTraitant(id){
    return this.http.delete(this.host + '/' + id ,{headers:this.headers});
  }
  editeSousTraitant(id,SousTraitant ){
    return this.http.put(this.host + '/' + id, SousTraitant ,{headers:this.headers});
  }
}
