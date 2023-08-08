import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service'
@Injectable({
  providedIn: 'root'
})
export class TacheService {

  host = 'http://localhost:8080/taches';
  headers= new HttpHeaders({'authorization':'Bearer '+this.logService.jwt})
  constructor(private http: HttpClient,private logService: AuthService) { }

  getTaches() {
    return this.http.get(this.host,{headers:this.headers});
  }
  
  saveTache(formData: FormData ) {
    return this.http.post(this.host, formData,{headers:this.headers});
  }

  saveTacheCh(formData: FormData ) {
    return this.http.post(this.host + '/EnregistrerTache', formData,{headers:this.headers});
  }

  //supprimer
  deleteTache(id){
    return this.http.delete(this.host + '/' + id,{headers:this.headers});
  }
  //update 
  editeTache(id,tache){
    return this.http.put(this.host+ '/' +id, tache,{headers:this.headers});
  }
  //show 
  showTache(id){
    return this.http.get(this.host + '/' + id,{headers:this.headers});
  }
  //
  getPlan(id) {
    return this.http.get(this.host + '/' + id + "/planification",{headers:this.headers});
  }

  getTachePlanifiee(formData: FormData ) {
    return this.http.post(this.host + '/TachesPlanifiee', formData,{headers:this.headers});
  }
  
  getEmpTache(id){
    return this.http.get(this.host + '/' + id + "/employes",{headers:this.headers});
  }
  getPlanTache(id){
    return this.http.get(this.host + '/' + id + "/planification",{headers:this.headers});
  }

}
