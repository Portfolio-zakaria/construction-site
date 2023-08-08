import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  public host = 'http://localhost:8080/fournisseurs';
  headers= new HttpHeaders({'authorization':'Bearer '+this.logService.jwt})
  constructor(private http: HttpClient,private logService: AuthService) { }

 getFournisseurs() {
    return this.http.get(this.host ,{headers:this.headers});
  }

  saveFournisseur(fournisseur ) {
    return this.http.post(this.host, fournisseur ,{headers:this.headers});
  }
  showFournisseur(id){
    return this.http.get(this.host + '/' + id ,{headers:this.headers});
  }
  deleteFournisseur(id){
    return this.http.delete(this.host + '/' + id ,{headers:this.headers});
  }
  editeFournisseur(id, fournisseur){
    return this.http.put(this.host + '/' + id, fournisseur ,{headers:this.headers});
  }


}
